import * as stylex from "@stylexjs/stylex";

// Design tokens. Components read these variables and never hard-code a color, a size or a
// radius. Light and dark are both in each variable and follow the system's setting.
//
// The look is quiet on purpose: one centered column, neutral greys, system fonts, two
// weights, and space doing the work that rules and boxes would otherwise do.

// The media queries styles are written under: `[media.narrow]: value`. `narrow` is the one
// breakpoint between the phone layout and the desktop one; `dark` is the system's dark
// appearance.
export const media = stylex.defineConsts({
  narrow: "@media (max-width: 767px)",
  dark: "@media (prefers-color-scheme: dark)",
});

// Contrast ratios are measured against `bg` in the same scheme.
export const color = stylex.defineVars({
  bg: { default: "#ffffff", [media.dark]: "#0a0a0a" },
  // Under the pointer, and the ground of inline code.
  hover: { default: "#f4f4f4", [media.dark]: "#171717" },
  // Hairlines. Decoration only: nothing depends on seeing them.
  line: { default: "#ebebeb", [media.dark]: "#222222" },
  // The line around a control, and the focus ring's companion. 3.2:1 light, 4.0:1 dark.
  outline: { default: "#8f8f8f", [media.dark]: "#707070" },
  // Body text. 17.9:1 light, 16.9:1 dark.
  text: { default: "#171717", [media.dark]: "#ededed" },
  // Secondary text: dates, descriptions. 5.0:1 light, 7.6:1 dark.
  muted: { default: "#6f6f6f", [media.dark]: "#a0a0a0" },
});

export const space = stylex.defineVars({
  xxs: "0.125rem",
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  xxl: "2.5rem",
  // Between the sections of a page.
  section: { default: "4.5rem", [media.narrow]: "3.5rem" },
});

export const radius = stylex.defineVars({
  xs: "0.25rem",
  sm: "0.5rem",
});

export const text = stylex.defineVars({
  sm: "0.875rem",
  md: "1rem",
  // Reading text of a post.
  prose: "1.0625rem",
  lg: "1.25rem",
  // The title of a page.
  title: { default: "2rem", [media.narrow]: "1.75rem" },
});

export const font = stylex.defineVars({
  body: 'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif',
  // Code only.
  mono: 'ui-monospace, "SF Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace',
});

// The page's frame: one column, as wide as comfortable reading, and the space beside it.
// Header, main and footer all line up with it.
export const frame = stylex.defineVars({
  width: "42rem",
  gutter: { default: "1.5rem", [media.narrow]: "1.25rem" },
});

export const motion = stylex.defineVars({
  // Hover and focus changes.
  quick: "150ms",
});
