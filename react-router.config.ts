import { readdirSync } from "node:fs";
import { join } from "node:path";

import type { Config } from "@react-router/dev/config";

import { defaultLocale, locales, secondaryLocales, type Locale } from "./app/lib/i18n";

function getBlogSlugsByLocale() {
  const postsDirectory = join(process.cwd(), "content/posts");
  const entries = readdirSync(postsDirectory, { withFileTypes: true });
  const slugsByLocale = Object.fromEntries(
    locales.map((locale) => [locale, new Set<string>()]),
  ) as Record<Locale, Set<string>>;

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      slugsByLocale[defaultLocale].add(entry.name.replace(/\.md$/, ""));
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
        slugsByLocale[entry.name as Locale].add(localizedEntry.name.replace(/\.md$/, ""));
      }
    }
  }

  return Object.fromEntries(
    locales.map((locale) => [locale, [...slugsByLocale[locale]]]),
  ) as Record<Locale, string[]>;
}

function getLocalizedStaticPaths() {
  return secondaryLocales.flatMap((locale) => [
    `/${locale}`,
    `/${locale}/about`,
    `/${locale}/projects`,
    `/${locale}/blog`,
  ]);
}

function getLocalizedBlogPaths(slugsByLocale: Record<Locale, string[]>) {
  return secondaryLocales.flatMap((locale) =>
    slugsByLocale[locale].map((slug) => `/${locale}/blog/${slug}`),
  );
}

export default {
  ssr: true,

  prerender: (() => {
    const blogSlugsByLocale = getBlogSlugsByLocale();
    const blogSlugs = blogSlugsByLocale[defaultLocale];

    return [
      "/",
      "/about",
      "/projects",
      "/blog",
      ...blogSlugs.map((slug) => `/blog/${slug}`),
      ...getLocalizedStaticPaths(),
      ...getLocalizedBlogPaths(blogSlugsByLocale),
    ];
  })(),

  future: {
    v8_viteEnvironmentApi: true,
  },
} satisfies Config;
