import { readdirSync } from "node:fs";
import { join } from "node:path";

import type { Config } from "@react-router/dev/config";

import { locales, secondaryLocales } from "./app/lib/i18n";

function getBlogSlugs() {
  const postsDirectory = join(process.cwd(), "content/posts");
  const entries = readdirSync(postsDirectory, { withFileTypes: true });
  const slugs = new Set<string>();

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      slugs.add(entry.name.replace(/\.md$/, ""));
      continue;
    }

    if (!entry.isDirectory() || !locales.includes(entry.name as (typeof locales)[number])) {
      continue;
    }

    const localizedEntries = readdirSync(join(postsDirectory, entry.name), {
      withFileTypes: true,
    });

    for (const localizedEntry of localizedEntries) {
      if (localizedEntry.isFile() && localizedEntry.name.endsWith(".md")) {
        slugs.add(localizedEntry.name.replace(/\.md$/, ""));
      }
    }
  }

  return [...slugs];
}

function getLocalizedStaticPaths() {
  return secondaryLocales.flatMap((locale) => [
    `/${locale}`,
    `/${locale}/about`,
    `/${locale}/projects`,
    `/${locale}/blog`,
  ]);
}

function getLocalizedBlogPaths(slugs: string[]) {
  return secondaryLocales.flatMap((locale) => slugs.map((slug) => `/${locale}/blog/${slug}`));
}

export default {
  ssr: true,
  prerender: (() => {
    const blogSlugs = getBlogSlugs();

    return [
      "/",
      "/about",
      "/projects",
      "/blog",
      ...blogSlugs.map((slug) => `/blog/${slug}`),
      ...getLocalizedStaticPaths(),
      ...getLocalizedBlogPaths(blogSlugs),
    ];
  })(),
} satisfies Config;
