import * as stylex from "@stylexjs/stylex";
import { For } from "solid-js";
import type { Project } from "../content/projects.ts";
import { useLocale } from "../i18n/use.ts";
import { base } from "../ui/base.ts";
import { Icon } from "../ui/Icon.tsx";
import { color, motion, radius, space, text } from "../ui/tokens.stylex.ts";

const styles = stylex.create({
  list: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    marginInline: `calc(-1 * ${space.md})`,
    padding: 0,
    listStyle: "none",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    gap: space.xxs,
    paddingBlock: space.md,
    paddingInline: space.md,
    borderRadius: radius.sm,
    backgroundColor: { default: "transparent", ":hover": color.hover },
    color: color.text,
    textDecoration: "none",
    transitionDuration: motion.quick,
    transitionProperty: "background-color",
  },
  head: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: space.xl,
  },
  name: { display: "inline-flex", alignItems: "center", gap: space.xs, fontWeight: 500 },
  arrow: { color: color.muted, fontSize: text.sm },
  year: {
    color: color.muted,
    fontSize: text.sm,
    fontVariantNumeric: "tabular-nums",
  },
  description: { color: color.muted, fontSize: text.sm, lineHeight: 1.6 },
  stack: { color: color.muted, fontSize: text.sm },
});

type Props = {
  projects: readonly Project[];
  // What each is built with, under its description.
  withStack?: boolean;
};

// Projects as a plain list: name and year, a line about it. Each row links to its source.
export function ProjectList(props: Props) {
  const locale = useLocale();
  return (
    <ul {...stylex.attrs(styles.list)}>
      <For each={props.projects}>
        {(project) => (
          <li>
            <a href={project.href} {...stylex.attrs(styles.link, base.focusRing)}>
              <span {...stylex.attrs(styles.head)}>
                <span {...stylex.attrs(styles.name)}>
                  {project.name}
                  <Icon name="arrowUpRight" xstyle={styles.arrow} />
                </span>
                <span {...stylex.attrs(styles.year)}>{project.year}</span>
              </span>
              <span {...stylex.attrs(styles.description)}>{project.description[locale()]}</span>
              {props.withStack && (
                <span {...stylex.attrs(styles.stack)}>{project.tags.join(" · ")}</span>
              )}
            </a>
          </li>
        )}
      </For>
    </ul>
  );
}
