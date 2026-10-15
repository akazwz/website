import { defineFileRoute } from "@solidjs/router/fs";
import * as stylex from "@stylexjs/stylex";
import { createMemo, Show } from "solid-js";
import { Head } from "../../components/Head.tsx";
import { Page } from "../../components/Page.tsx";
import { PageIntro } from "../../components/PageIntro.tsx";
import { PostList } from "../../components/PostList.tsx";
import { ProjectList } from "../../components/ProjectList.tsx";
import { postsIn } from "../../content/posts.ts";
import { projects } from "../../content/projects.ts";
import { localized } from "../../i18n/locale.ts";
import { useLocale, useMessages } from "../../i18n/use.ts";
import { SectionHeading } from "../../ui/SectionHeading.tsx";
import { TextLink } from "../../ui/TextLink.tsx";
import { space } from "../../ui/tokens.stylex.ts";

// `/` and `/zh`: one page, its language from the address.
export const route = defineFileRoute("/:lang?", { matchFilters: { lang: ["zh"] } });

const styles = stylex.create({
  section: { marginBlockStart: space.section },
});

export default function Home() {
  const locale = useLocale();
  const t = useMessages();
  const latest = createMemo(() => postsIn(locale()).slice(0, 5));

  return (
    <Page>
      <Head description={t().meta.description} path="/" />
      <PageIntro title={t().home.title} description={t().home.intro} />

      <section aria-labelledby="projects">
        <SectionHeading id="projects" title={t().home.projectsTitle} />
        <ProjectList projects={projects} />
      </section>

      {/* Only once there is something to read in this language. */}
      <Show when={latest().length > 0}>
        <section aria-labelledby="writing" {...stylex.attrs(styles.section)}>
          <SectionHeading
            id="writing"
            title={t().home.latestTitle}
            action={
              <TextLink href={localized(locale(), "/blog")} variant="quiet">
                {t().home.allPosts}
              </TextLink>
            }
          />
          <PostList posts={latest()} />
        </section>
      </Show>
    </Page>
  );
}
