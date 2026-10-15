import * as stylex from "@stylexjs/stylex";
import { For } from "solid-js";
import type { PostSummary } from "../content/types.ts";
import { formatDate, formatDay } from "../i18n/format.ts";
import { localized } from "../i18n/locale.ts";
import { useLocale } from "../i18n/use.ts";
import { base } from "../ui/base.ts";
import { color, media, motion, radius, space, text } from "../ui/tokens.stylex.ts";

const styles = stylex.create({
  list: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    marginInline: `calc(-1 * ${space.md})`,
    padding: 0,
    listStyle: "none",
  },
  // On a phone the date goes under the title, which keeps the full width.
  link: {
    display: "flex",
    flexDirection: { default: "row", [media.narrow]: "column" },
    alignItems: "baseline",
    justifyContent: "space-between",
    columnGap: space.xl,
    rowGap: space.xxs,
    paddingBlock: space.md,
    paddingInline: space.md,
    borderRadius: radius.sm,
    backgroundColor: { default: "transparent", ":hover": color.hover },
    color: color.text,
    textDecoration: "none",
    transitionDuration: motion.quick,
    transitionProperty: "background-color",
  },
  title: { minWidth: 0, lineHeight: 1.5 },
  date: {
    flexShrink: 0,
    color: color.muted,
    fontSize: text.sm,
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
  },
});

type Props = {
  posts: readonly PostSummary[];
  // Dates without their year, when the list sits under a year already.
  withoutYear?: boolean;
};

// Posts as a plain index: the title, and its date to the right. Each row is one link.
export function PostList(props: Props) {
  const locale = useLocale();
  return (
    <ul {...stylex.attrs(styles.list)}>
      <For each={props.posts}>
        {(post) => (
          <li>
            <a
              href={localized(post.locale, `/blog/${post.slug}`)}
              {...stylex.attrs(styles.link, base.focusRing)}
            >
              <span {...stylex.attrs(styles.title)}>{post.title}</span>
              <time datetime={post.date} {...stylex.attrs(styles.date)}>
                {props.withoutYear
                  ? formatDay(locale(), post.date)
                  : formatDate(locale(), post.date)}
              </time>
            </a>
          </li>
        )}
      </For>
    </ul>
  );
}
