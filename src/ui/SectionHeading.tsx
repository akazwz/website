import type { JSX } from "@solidjs/web";
import * as stylex from "@stylexjs/stylex";
import { Show } from "solid-js";
import { color, space, text } from "./tokens.stylex.ts";

const styles = stylex.create({
  row: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: space.lg,
    marginBlockEnd: space.lg,
  },
  title: { margin: 0, color: color.muted, fontSize: text.md, fontWeight: 400 },
  action: { fontSize: text.sm },
});

type Props = {
  // The heading's text. It is an <h2>: a section of a page.
  title: string;
  // A link beside the title, to everything the section shows a part of.
  action?: JSX.Element;
  // The id the section's `aria-labelledby` points at.
  id?: string;
};

// The top of a section: its title, quietly, and an optional link to more of the same.
export function SectionHeading(props: Props) {
  return (
    <div {...stylex.attrs(styles.row)}>
      <h2 id={props.id} {...stylex.attrs(styles.title)}>
        {props.title}
      </h2>
      {/* A JSX prop is created again on every read: read it once, through <Show>. */}
      <Show when={props.action}>
        {(action) => <div {...stylex.attrs(styles.action)}>{action()}</div>}
      </Show>
    </div>
  );
}
