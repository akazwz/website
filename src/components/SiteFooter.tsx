import * as stylex from "@stylexjs/stylex";
import { site } from "../site.ts";
import { TextLink } from "../ui/TextLink.tsx";
import { color, frame, space, text } from "../ui/tokens.stylex.ts";

const styles = stylex.create({
  bar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: space.xl,
    rowGap: space.sm,
    // A flex item of the page's column: without a width it would shrink to its content.
    width: "100%",
    maxWidth: `calc(${frame.width} + 2 * ${frame.gutter})`,
    marginInline: "auto",
    paddingBlock: space.xxl,
    paddingInline: frame.gutter,
    color: color.muted,
    fontSize: text.sm,
  },
  name: { margin: 0 },
  links: { display: "flex", gap: space.lg, margin: 0, padding: 0, listStyle: "none" },
});

// The bottom of every page: whose site it is, and where else to find them.
export function SiteFooter() {
  return (
    <footer {...stylex.attrs(styles.bar)}>
      <p {...stylex.attrs(styles.name)}>© {site.name}</p>
      <ul {...stylex.attrs(styles.links)}>
        <li>
          <TextLink href={site.github} variant="quiet" arrow="external">
            GitHub
          </TextLink>
        </li>
        <li>
          <TextLink href={site.x} variant="quiet" arrow="external">
            X
          </TextLink>
        </li>
        <li>
          <TextLink href={site.telegram} variant="quiet" arrow="external">
            Telegram
          </TextLink>
        </li>
      </ul>
    </footer>
  );
}
