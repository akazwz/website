import * as stylex from "@stylexjs/stylex";
import type { ParentProps } from "solid-js";
import { frame, media, space } from "../ui/tokens.stylex.ts";

const styles = stylex.create({
  page: {
    flexGrow: 1,
    width: "100%",
    maxWidth: `calc(${frame.width} + 2 * ${frame.gutter})`,
    marginInline: "auto",
    paddingBlockStart: { default: "5rem", [media.narrow]: space.xxl },
    paddingBlockEnd: space.section,
    paddingInline: frame.gutter,
    // The skip link lands here; the page itself shows no focus ring for it.
    outline: "none",
  },
});

// The frame of a page: its content, no wider than `frame.width`, between the header and the
// footer. Every route renders one. It is the page's `<main>`, so a page has one.
export function Page(props: ParentProps) {
  return (
    <main id="main" tabindex="-1" {...stylex.attrs(styles.page)}>
      {props.children}
    </main>
  );
}
