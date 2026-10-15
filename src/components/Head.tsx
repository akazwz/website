import { Link, Meta, Title } from "@solidjs/meta";
import { For, Show } from "solid-js";
import { localeInfo, locales, localized, type Locale } from "../i18n/locale.ts";
import { useLocale } from "../i18n/use.ts";
import { site } from "../site.ts";

type Props = {
  // The page's own title; the site's name is added after it. Leave it out on the home page.
  title?: string;
  description: string;
  // The page's address without a language segment ("/blog"), for the canonical address and
  // the other languages.
  path: string;
  // The languages the page exists in. Defaults to all of them.
  languages?: readonly Locale[];
  // A post is an `article` to the sites that build link previews.
  type?: "website" | "article";
  published?: string;
  // Kept out of search engines and the sitemap (the 404 page).
  noindex?: boolean;
};

// What the page says about itself in the document's <head>: the tab title, the description,
// its canonical address and its other languages, and the link preview other sites draw.
export function Head(props: Props) {
  const locale = useLocale();
  const title = () => (props.title ? `${props.title} — ${site.name}` : site.name);
  const url = (to: Locale) => `${site.origin}${localized(to, props.path)}`;
  const image = `${site.origin}/og.png`;

  return (
    <>
      <Title>{title()}</Title>
      <Meta name="description" content={props.description} />
      <Show when={!props.noindex} fallback={<Meta name="robots" content="noindex" />}>
        <Link rel="canonical" href={url(locale())} />
        {/* Keyed by language: tags dedupe by `rel` and `href`, and x-default has the same
            address as English. */}
        <For each={props.languages ?? locales}>
          {(to) => (
            <Link
              key={`alternate-${to}`}
              rel="alternate"
              hreflang={localeInfo[to].tag}
              href={url(to)}
            />
          )}
        </For>
        <Link key="alternate-default" rel="alternate" hreflang="x-default" href={url("en")} />
      </Show>
      <Meta property="og:site_name" content={site.name} />
      <Meta property="og:type" content={props.type ?? "website"} />
      <Meta property="og:title" content={title()} />
      <Meta property="og:description" content={props.description} />
      <Meta property="og:url" content={url(locale())} />
      <Meta property="og:locale" content={localeInfo[locale()].tag.replace("-", "_")} />
      <Meta property="og:image" content={image} />
      {/* public/og.png, made from tools/og.html. */}
      <Meta property="og:image:width" content="2400" />
      <Meta property="og:image:height" content="1260" />
      <Meta property="og:image:alt" content={site.name} />
      <Show when={props.published}>
        {(published) => <Meta property="article:published_time" content={published()} />}
      </Show>
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content={site.xHandle} />
      <Meta name="twitter:title" content={title()} />
      <Meta name="twitter:description" content={props.description} />
      <Meta name="twitter:image" content={image} />
      <Meta name="twitter:image:alt" content={site.name} />
    </>
  );
}
