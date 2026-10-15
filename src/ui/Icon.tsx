import * as stylex from "@stylexjs/stylex";

// The icons the site uses, on a 24 grid, drawn with a 2px round stroke in the text color.
// Add one here when a page needs it; there is no icon library.
const paths = {
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowLeft: "M19 12H5M11 6l-6 6 6 6",
  arrowUpRight: "M7 17 17 7M8 7h9v9",
  arrowUp: "M12 19V5M6 11l6-6 6 6",
};

export type IconName = keyof typeof paths;

const styles = stylex.create({
  icon: {
    flexShrink: 0,
    width: "1em",
    height: "1em",
    // Sits on the text's baseline like a letter would.
    verticalAlign: "-0.125em",
  },
});

// An icon. Always decoration: the control or text around it says what it means.
export function Icon(props: { name: IconName; xstyle?: stylex.StyleXStyles }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      {...stylex.attrs(styles.icon, props.xstyle)}
    >
      <path d={paths[props.name]} />
    </svg>
  );
}
