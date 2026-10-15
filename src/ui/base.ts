import * as stylex from "@stylexjs/stylex";
import { color } from "./tokens.stylex.ts";

// Styles shared by several components and call sites. Apply them next to a component's own
// styles: `stylex.attrs(styles.link, base.focusRing)`.
export const base = stylex.create({
  // The keyboard focus ring of every interactive element, links included.
  focusRing: {
    outlineColor: color.text,
    outlineOffset: "2px",
    outlineStyle: { default: "none", ":focus-visible": "solid" },
    outlineWidth: "2px",
  },
  // Read by a screen reader, not drawn.
  visuallyHidden: {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: 0,
    overflow: "hidden",
    clipPath: "inset(50%)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  },
});
