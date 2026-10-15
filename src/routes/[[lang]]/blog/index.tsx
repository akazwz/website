import { defineFileRoute } from "@solidjs/router/fs";
import * as stylex from "@stylexjs/stylex";
import { createMemo, For, Show } from "solid-js";
import { Head } from "../../../components/Head.tsx";
import { NotFound } from "../../../components/NotFound.tsx";
import { Page } from "../../../components/Page.tsx";
import { PageIntro } from "../../../components/PageIntro.tsx";
import { PostList } from "../../../components/PostList.tsx";
import { postsIn } from "../../../content/posts.ts";
import type { PostSummary } from "../../../content/types.ts";
import { useLocale, useMessages } from "../../../i18n/use.ts";
import { SectionHeading } from "../../../ui/SectionHeading.tsx";
import { space } from "../../../ui/tokens.stylex.ts";

export const route = defineFileRoute("/:lang?/blog", { matchFilters: { lang: ["zh"] } });

const styles = stylex.create({
  year: { marginBlockEnd: space.xxl },
});

export default function Blog() {
  const locale = useLocale();
  const t = useMessages();
  const years = createMemo(() => {
    const groups = new Map<string, PostSummary[]>();
    for (const post of postsIn(locale())) {
      const year = post.date.slice(0, 4);
      groups.set(year, [...(groups.get(year) ?? []), post]);
    }
    return [...groups].map(([year, list]) => ({ year, list }));
  });

  // With no posts in this language there is no list: the address answers like any unknown one.
  return (
    <Show when={years().length > 0} fallback={<NotFound />}>
      <Page>
        <Head title={t().blog.title} description={t().meta.blog} path="/blog" />
        <PageIntro title={t().blog.title} description={t().blog.description} />
        <For each={years()}>
          {(group) => (
            <section aria-labelledby={`year-${group.year}`} {...stylex.attrs(styles.year)}>
              <SectionHeading id={`year-${group.year}`} title={group.year} />
              <PostList posts={group.list} withoutYear />
            </section>
          )}
        </For>
      </Page>
    </Show>
  );
}
