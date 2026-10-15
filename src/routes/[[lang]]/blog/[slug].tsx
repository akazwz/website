import type { RouteProps } from "@solidjs/router";
import { defineFileRoute } from "@solidjs/router/fs";
import * as stylex from "@stylexjs/stylex";
import { createMemo, Show } from "solid-js";
import { posts } from "virtual:posts";
import { Head } from "../../../components/Head.tsx";
import { NotFound } from "../../../components/NotFound.tsx";
import { Page } from "../../../components/Page.tsx";
import { loadBody } from "../../../content/bodies.ts";
import type { Locale, PostSummary } from "../../../content/types.ts";
import { formatDate } from "../../../i18n/format.ts";
import { localeInfo, localized } from "../../../i18n/locale.ts";
import { useLocale, useMessages } from "../../../i18n/use.ts";
import { base } from "../../../ui/base.ts";
import { Prose } from "../../../ui/Prose.tsx";
import { TextLink } from "../../../ui/TextLink.tsx";
import { color, motion, radius, space, text } from "../../../ui/tokens.stylex.ts";

export const route = defineFileRoute("/:lang?/blog/:slug", {
  matchFilters: { lang: ["zh"] },
  // Starts loading the body alongside the page's own code, rather than after it.
  preload: ({ params }) => {
    void loadBody(params.lang === "zh" ? "zh" : "en", params.slug);
  },
});

const styles = stylex.create({
  back: { marginBlockEnd: space.xxl, fontSize: text.sm },
  header: { display: "flex", flexDirection: "column", gap: space.md, marginBlockEnd: space.xxl },
  title: {
    margin: 0,
    fontSize: text.title,
    fontWeight: 600,
    letterSpacing: "-0.025em",
    lineHeight: 1.25,
    textWrap: "balance",
  },
  meta: {
    display: "flex",
    flexWrap: "wrap",
    gap: space.sm,
    margin: 0,
    color: color.muted,
    fontSize: text.sm,
    fontVariantNumeric: "tabular-nums",
  },
  pager: {
    display: "flex",
    justifyContent: "space-between",
    gap: space.xl,
    marginBlockStart: space.section,
    paddingBlockStart: space.xl,
    borderBlockStartWidth: "1px",
    borderBlockStartStyle: "solid",
    borderBlockStartColor: color.line,
  },
  pagerLink: {
    display: "flex",
    flexDirection: "column",
    gap: space.xxs,
    maxWidth: "48%",
    borderRadius: radius.xs,
    color: color.text,
    textDecoration: "none",
  },
  pagerNext: { marginInlineStart: "auto", textAlign: "end" },
  pagerLabel: { color: color.muted, fontSize: text.sm },
  pagerTitle: {
    lineHeight: 1.5,
    textDecorationLine: "underline",
    textDecorationThickness: "1px",
    textUnderlineOffset: "0.25em",
    textDecorationColor: { default: "transparent", ":hover": color.outline },
    transitionDuration: motion.quick,
    transitionProperty: "text-decoration-color",
  },
});

// The other posts in the same language, around this one: older before, newer after.
function neighbours(post: PostSummary) {
  const list = posts.filter((other) => other.locale === post.locale);
  const index = list.findIndex((other) => other.slug === post.slug);
  return { older: list[index + 1], newer: list[index - 1] };
}

function find(locale: Locale, slug: string) {
  return posts.find((post) => post.locale === locale && post.slug === slug);
}

export default function Post(props: RouteProps<typeof route>) {
  const locale = useLocale();
  // A new post is a new page: its body and scroll start over.
  return (
    <Show when={find(locale(), props.params.slug)} keyed fallback={<NotFound />}>
      {(post) => <Article post={post} />}
    </Show>
  );
}

function Article(props: { post: PostSummary }) {
  const t = useMessages();
  // The body is a chunk of its own; <Loading> in src/App.tsx waits for it, and the
  // prerendered page carries it already.
  const body = createMemo(() => {
    const flight = loadBody(props.post.locale, props.post.slug);
    if (!flight) throw new Error(`No body for ${props.post.locale}/${props.post.slug}`);
    return flight;
  });
  const other = (): Locale => (props.post.locale === "en" ? "zh" : "en");
  const translated = () => Boolean(find(other(), props.post.slug));
  const around = createMemo(() => neighbours(props.post));
  const href = (post: PostSummary) => localized(post.locale, `/blog/${post.slug}`);

  return (
    <Page>
      <Head
        title={props.post.title}
        description={props.post.excerpt}
        path={`/blog/${props.post.slug}`}
        languages={translated() ? ["en", "zh"] : [props.post.locale]}
        type="article"
        published={props.post.date}
      />
      <div {...stylex.attrs(styles.back)}>
        <TextLink href={localized(props.post.locale, "/blog")} variant="quiet" arrow="back">
          {t().post.back}
        </TextLink>
      </div>
      <article lang={localeInfo[props.post.locale].tag}>
        <header {...stylex.attrs(styles.header)}>
          <h1 {...stylex.attrs(styles.title)}>{props.post.title}</h1>
          <p {...stylex.attrs(styles.meta)}>
            <time datetime={props.post.date}>{formatDate(props.post.locale, props.post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{t().post.minutes(props.post.readingTime)}</span>
            <Show when={translated()}>
              <span aria-hidden="true">·</span>
              <TextLink
                href={localized(other(), `/blog/${props.post.slug}`)}
                hreflang={localeInfo[other()].tag}
                lang={localeInfo[other()].tag}
                variant="quiet"
              >
                {t().post.otherLanguage}
              </TextLink>
            </Show>
          </p>
        </header>
        <Prose nodes={body().nodes} resolveHref={(path) => resolveHref(props.post.locale, path)} />
      </article>
      <nav aria-label={`${t().post.previous} / ${t().post.next}`} {...stylex.attrs(styles.pager)}>
        <Show when={around().older}>
          {(older) => (
            <a href={href(older())} {...stylex.attrs(styles.pagerLink, base.focusRing)}>
              <span {...stylex.attrs(styles.pagerLabel)}>{t().post.previous}</span>
              <span {...stylex.attrs(styles.pagerTitle)}>{older().title}</span>
            </a>
          )}
        </Show>
        <Show when={around().newer}>
          {(newer) => (
            <a
              href={href(newer())}
              {...stylex.attrs(styles.pagerLink, styles.pagerNext, base.focusRing)}
            >
              <span {...stylex.attrs(styles.pagerLabel)}>{t().post.next}</span>
              <span {...stylex.attrs(styles.pagerTitle)}>{newer().title}</span>
            </a>
          )}
        </Show>
      </nav>
    </Page>
  );
}

// A link in a post to a page of the site is written without a language ("/blog/x"); it
// goes to that page in the post's language. Other links are left as written.
function resolveHref(locale: Locale, href: string) {
  return href.startsWith("/") && !href.startsWith("//") ? localized(locale, href) : href;
}
