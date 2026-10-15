import type { JSX } from "@solidjs/web";
import * as stylex from "@stylexjs/stylex";
import { Show, type ParentProps } from "solid-js";
import { color, space, text } from "../ui/tokens.stylex.ts";

const styles = stylex.create({
  intro: {
    display: "flex",
    flexDirection: "column",
    gap: space.md,
    marginBlockEnd: space.section,
  },
  title: {
    margin: 0,
    fontSize: text.title,
    fontWeight: 600,
    letterSpacing: "-0.025em",
    lineHeight: 1.2,
    textWrap: "balance",
  },
  description: {
    margin: 0,
    color: color.muted,
    fontSize: text.md,
    lineHeight: 1.7,
    textWrap: "pretty",
  },
});

type Props = ParentProps<{
  // The page's <h1>.
  title: string;
  // Text, or text with links in it (src/ui/RichText.tsx).
  description?: JSX.Element;
}>;

// The opening of a page: its title, a line about it, and anything that belongs right under
// them.
export function PageIntro(props: Props) {
  return (
    <header {...stylex.attrs(styles.intro)}>
      <h1 {...stylex.attrs(styles.title)}>{props.title}</h1>
      <Show when={props.description}>
        {(description) => <p {...stylex.attrs(styles.description)}>{description()}</p>}
      </Show>
      {props.children}
    </header>
  );
}
