import type { JSX } from "@solidjs/web";
import * as stylex from "@stylexjs/stylex";
import { omit } from "solid-js";
import { base } from "./base.ts";
import { Icon } from "./Icon.tsx";
import { color, motion, radius, space } from "./tokens.stylex.ts";

const styles = stylex.create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: space.xs,
    borderRadius: radius.xs,
    textDecorationLine: "underline",
    textDecorationThickness: "1px",
    textUnderlineOffset: "0.25em",
    transitionDuration: motion.quick,
    transitionProperty: "color, text-decoration-color",
  },
  // Underlined in a faint grey that darkens under the pointer.
  default: {
    color: color.text,
    textDecorationColor: { default: color.line, ":hover": color.text },
  },
  // Secondary: muted text, no underline until pointed at.
  quiet: {
    color: { default: color.muted, ":hover": color.text },
    textDecorationColor: { default: "transparent", ":hover": color.line },
  },
});

type Props = Omit<JSX.AnchorHTMLAttributes<HTMLAnchorElement>, "class" | "style"> & {
  href: string;
  // `quiet` for a link that is secondary to what is around it.
  variant?: "default" | "quiet";
  // An arrow: `back` before the text for "go back to", `external` after it for a link that
  // leaves the site.
  arrow?: "back" | "external";
  // Extra StyleX styles from the call site, for layout only.
  xstyle?: stylex.StyleXStyles;
};

// A text link: every `<a>` that is not a row of a list or a navigation item. Links to a page
// of the site are handled by the router; others leave the site as usual.
export function TextLink(props: Props) {
  const rest = omit(props, "variant", "arrow", "xstyle", "children");
  return (
    <a
      {...rest}
      {...stylex.attrs(
        styles.base,
        styles[props.variant ?? "default"],
        base.focusRing,
        props.xstyle,
      )}
    >
      {props.arrow === "back" && <Icon name="arrowLeft" />}
      {props.children}
      {props.arrow === "external" && <Icon name="arrowUpRight" />}
    </a>
  );
}
