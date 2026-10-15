import { useLocation } from "@solidjs/router";
import * as stylex from "@stylexjs/stylex";
import { For, createMemo } from "solid-js";
import { bodies } from "virtual:posts";
import { postsIn } from "../content/posts.ts";
import { localeInfo, localized, unlocalized, type Locale } from "../i18n/locale.ts";
import { useLocale, useMessages } from "../i18n/use.ts";
import { base } from "../ui/base.ts";
import { color, frame, media, motion, radius, space, text } from "../ui/tokens.stylex.ts";

const styles = stylex.create({
  bar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: space.lg,
    maxWidth: `calc(${frame.width} + 2 * ${frame.gutter})`,
    marginInline: "auto",
    paddingBlockStart: { default: space.xxl, [media.narrow]: space.xl },
    paddingInline: frame.gutter,
  },
  // Shown only while focused: the first stop of the keyboard, past the header to the page.
  skip: {
    position: "absolute",
    insetInlineStart: space.lg,
    top: space.sm,
    zIndex: 1,
    paddingBlock: space.xs,
    paddingInline: space.md,
    borderRadius: radius.sm,
    backgroundColor: color.text,
    color: color.bg,
    fontSize: text.sm,
    translate: { default: "0 -200%", ":focus-visible": "0 0" },
  },
  brand: {
    borderRadius: radius.xs,
    color: color.text,
    fontWeight: 600,
    letterSpacing: "-0.01em",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: { default: space.xl, [media.narrow]: space.lg },
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  item: {
    borderRadius: radius.xs,
    color: { default: color.muted, ":hover": color.text, "[data-active]": color.text },
    fontSize: text.sm,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transitionDuration: motion.quick,
    transitionProperty: "color",
  },
});

// Where the same page is in another language. A post that has not been translated sends
// the reader to the list of posts, or home when that language has no posts at all, instead
// of to an address that does not exist.
function counterpart(pathname: string, to: Locale) {
  const path = unlocalized(pathname);
  if (path === "/blog" || path.startsWith("/blog/")) {
    if (postsIn(to).length === 0) return localized(to, "/");
    const post = /^\/blog\/([^/]+)$/.exec(path);
    if (post && !bodies[`${to}/${post[1]}`]) return localized(to, "/blog");
  }
  return localized(to, path);
}

// The top of every page: the site's name, its sections, and the other language.
export function SiteHeader() {
  const location = useLocation();
  const locale = useLocale();
  const t = useMessages();
  const other = (): Locale => (locale() === "en" ? "zh" : "en");
  // Same order as the home page. Writing is listed once there is a post in this language.
  const sections = createMemo(() => [
    { path: "/projects", label: t().nav.projects },
    ...(postsIn(locale()).length > 0 ? [{ path: "/blog", label: t().nav.writing }] : []),
    { path: "/about", label: t().nav.about },
  ]);

  return (
    <header>
      {/* `target` keeps the router out of it: the browser moves focus to the page itself. */}
      <a href="#main" target="_self" {...stylex.attrs(styles.skip, base.focusRing)}>
        {t().nav.skip}
      </a>
      <div {...stylex.attrs(styles.bar)}>
        <a
          href={localized(locale(), "/")}
          aria-label={t().nav.home}
          {...stylex.attrs(styles.brand, base.focusRing)}
        >
          akazwz
        </a>
        <nav aria-label={t().nav.label}>
          <ul {...stylex.attrs(styles.nav)}>
            <For each={sections()}>
              {(section) => (
                <li>
                  <a
                    href={localized(locale(), section.path)}
                    {...stylex.attrs(styles.item, base.focusRing)}
                  >
                    {section.label}
                  </a>
                </li>
              )}
            </For>
            <li>
              <a
                href={counterpart(location.pathname, other())}
                hreflang={localeInfo[other()].tag}
                lang={localeInfo[other()].tag}
                {...stylex.attrs(styles.item, base.focusRing)}
              >
                {localeInfo[other()].name}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
