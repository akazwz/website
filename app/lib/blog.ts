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
  path: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  readingTime: number;
}

export interface BlogPostSitemapEntry {
  slug: string;
  date: string;
  locales: Locale[];
}

const metaFiles = {
  ...(import.meta.glob("../../content/posts/*.md", {
    query: "?frontmatter",
    import: "default",
    eager: true,
  }) as Record<string, Record<string, string>>),
  ...(import.meta.glob("../../content/posts/*/*.md", {
    query: "?frontmatter",
    import: "default",
    eager: true,
  }) as Record<string, Record<string, string>>),
};

const contentLoaders = {
  ...(import.meta.glob("../../content/posts/*.md", {
    query: "?raw",
    import: "default",
    eager: false,
  }) as Record<string, () => Promise<string>>),
  ...(import.meta.glob("../../content/posts/*/*.md", {
    query: "?raw",
    import: "default",
    eager: false,
  }) as Record<string, () => Promise<string>>),
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

const postVariantsBySlug = Object.entries(metaFiles)
  .map(([path, data]) => {
    const { locale, slug } = parsePostPath(path);

    return {
      locale,
      slug,
      path,
      title: data.title,
      date: data.date?.slice(0, 10) ?? "",
      author: data.author,
      category: data.category,
      excerpt: data.excerpt,
      readingTime: Number(data.readingTime),
    };
  })
  .reduce<Map<string, Partial<Record<Locale, BlogPost>>>>((variants, post) => {
    const currentVariants = variants.get(post.slug) ?? {};
    currentVariants[post.locale] = post;
    variants.set(post.slug, currentVariants);
    return variants;
  }, new Map());

function getPostVariantForListing(
  variants: Partial<Record<Locale, BlogPost>>,
  locale: Locale,
): BlogPost | undefined {
  if (locale === defaultLocale) {
    return variants[defaultLocale];
  }

  return variants[locale];
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  return [...postVariantsBySlug.values()]
    .map((variants) => getPostVariantForListing(variants, locale))
    .filter((post): post is BlogPost => post !== undefined)
    .sort((left, right) => right.date.localeCompare(left.date));
}

export function getPostVariantBySlug(slug: string, locale: Locale): BlogPost | undefined {
  return postVariantsBySlug.get(slug)?.[locale];
}

export async function getBlogPostContent(path: string): Promise<string> {
  const loader = contentLoaders[path];
  if (!loader) {
    return "";
  }

  const raw = await loader();
  // Strip the frontmatter from the raw content before returning
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (match) {
    return raw.slice(match[0].length);
  }
  return raw;
}

export function getPostLocalesBySlug(slug: string): Locale[] {
  const variants = postVariantsBySlug.get(slug);

  if (!variants) {
    return [];
  }

  return locales.filter((locale) => variants[locale] !== undefined);
}

export function getBlogPostSitemapEntries(): BlogPostSitemapEntry[] {
  return [...postVariantsBySlug.entries()]
    .map(([slug, variants]) => {
      const availableLocales = locales.filter((locale) => variants[locale] !== undefined);
      const fallbackLocale = availableLocales[0];
      const referencePost =
        variants[defaultLocale] ?? (fallbackLocale ? variants[fallbackLocale] : undefined);

      if (!referencePost) {
        return undefined;
      }

      return {
        slug,
        date: referencePost.date,
        locales: availableLocales,
      };
    })
    .filter((entry): entry is BlogPostSitemapEntry => entry !== undefined)
    .sort((left, right) => right.date.localeCompare(left.date));
}

export function getBlogPostPath(post: Pick<BlogPost, "locale" | "slug">): string {
  return localizePath(post.locale, `/blog/${post.slug}`);
}

export function formatDate(dateStr: string, locale: Locale = defaultLocale): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return date.toLocaleDateString(getLocaleLanguageTag(locale), {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
