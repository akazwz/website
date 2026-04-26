import {
  defaultLocale,
  getLocaleLanguageTag,
  isLocale,
  locales,
  localizePath,
  type Locale,
} from "~/lib/i18n";

export interface BlogPost {
  locale: Locale;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  readingTime: number;
}

const rawFiles = {
  ...(import.meta.glob("../../content/posts/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>),
  ...(import.meta.glob("../../content/posts/*/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>),
};

function parsePostPath(path: string): { locale: Locale; slug: string } {
  const segments = path.split("/").filter(Boolean);
  const fileName = segments.at(-1) ?? "";
  const parentDirectory = segments.at(-2);

  return {
    locale: isLocale(parentDirectory) ? parentDirectory : defaultLocale,
    slug: fileName.replace(/\.md$/, ""),
  };
}

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

  if (!match) {
    return { data: {}, content: raw };
  }

  const data = Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf(":");
        const key = line.slice(0, separatorIndex).trim();
        const value = line
          .slice(separatorIndex + 1)
          .trim()
          .replace(/^(["'])(.*)\1$/, "$2");
        return [key, value];
      }),
  );

  return {
    data,
    content: raw.slice(match[0].length),
  };
}

const postVariantsBySlug = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const { locale, slug } = parsePostPath(path);

    return {
      locale,
      slug,
      title: data.title,
      date: data.date.slice(0, 10),
      author: data.author,
      category: data.category,
      excerpt: data.excerpt,
      readingTime: Number(data.readingTime),
      content,
    };
  })
  .reduce<Map<string, Partial<Record<Locale, BlogPost>>>>((variants, post) => {
    const currentVariants = variants.get(post.slug) ?? {};
    currentVariants[post.locale] = post;
    variants.set(post.slug, currentVariants);
    return variants;
  }, new Map());

export function getBlogPosts(locale: Locale): BlogPost[] {
  return [...postVariantsBySlug.values()]
    .map((variants) => variants[locale] ?? variants[defaultLocale])
    .filter((post): post is BlogPost => post !== undefined)
    .sort((left, right) => right.date.localeCompare(left.date));
}

export function getPostVariantBySlug(slug: string, locale: Locale): BlogPost | undefined {
  return postVariantsBySlug.get(slug)?.[locale];
}

export function getPostLocalesBySlug(slug: string): Locale[] {
  const variants = postVariantsBySlug.get(slug);

  if (!variants) {
    return [];
  }

  return locales.filter((locale) => variants[locale] !== undefined);
}

export function getBlogPostPath(post: Pick<BlogPost, "locale" | "slug">): string {
  return localizePath(post.locale, `/blog/${post.slug}`);
}

export function formatDate(dateStr: string, locale: Locale = defaultLocale): string {
  return new Date(dateStr).toLocaleDateString(getLocaleLanguageTag(locale), {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
