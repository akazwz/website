import { defineFileRoute } from "@solidjs/router/fs";
import * as stylex from "@stylexjs/stylex";
import { For } from "solid-js";
import { Head } from "../../components/Head.tsx";
import { Page } from "../../components/Page.tsx";
import { PageIntro } from "../../components/PageIntro.tsx";
import { useMessages } from "../../i18n/use.ts";
import { site } from "../../site.ts";
import { SectionHeading } from "../../ui/SectionHeading.tsx";
import { TextLink } from "../../ui/TextLink.tsx";
import { color, space, text } from "../../ui/tokens.stylex.ts";

export const route = defineFileRoute("/:lang?/about", { matchFilters: { lang: ["zh"] } });

const styles = stylex.create({
  section: { marginBlockEnd: space.section },
  usesIntro: { margin: 0, marginBlockEnd: space.lg, lineHeight: 1.75, textWrap: "pretty" },
  uses: { display: "flex", flexDirection: "column", gap: space.sm, margin: 0 },
  // A tool and, to its right, the plan it is used on.
  use: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: space.lg,
  },
  useName: { fontWeight: 600 },
  usePlan: { margin: 0, color: color.muted, fontSize: text.sm, textAlign: "end" },
  links: {
    display: "flex",
    flexWrap: "wrap",
    columnGap: space.xl,
    rowGap: space.sm,
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
});

export default function About() {
  const t = useMessages();
  return (
    <Page>
      <Head title={t().about.title} description={t().meta.about} path="/about" />
      <PageIntro title={t().about.title} description={t().about.intro} />

      <section aria-labelledby="uses" {...stylex.attrs(styles.section)}>
        <SectionHeading id="uses" title={t().about.usesTitle} />
        <p {...stylex.attrs(styles.usesIntro)}>{t().about.usesIntro}</p>
        <dl {...stylex.attrs(styles.uses)}>
          <For each={t().about.uses}>
            {(use) => (
              <div {...stylex.attrs(styles.use)}>
                <dt {...stylex.attrs(styles.useName)}>{use.name}</dt>
                <dd {...stylex.attrs(styles.usePlan)}>{use.plan}</dd>
              </div>
            )}
          </For>
        </dl>
      </section>

      <section aria-labelledby="elsewhere">
        <SectionHeading id="elsewhere" title={t().about.elsewhereTitle} />
        <ul {...stylex.attrs(styles.links)}>
          <li>
            <TextLink href={site.github} arrow="external">
              GitHub
            </TextLink>
          </li>
          <li>
            <TextLink href={site.x} arrow="external">
              X {site.xHandle}
            </TextLink>
          </li>
          <li>
            <TextLink href={site.telegram} arrow="external">
              {t().about.telegram}
            </TextLink>
          </li>
        </ul>
      </section>
    </Page>
  );
}
