export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  readingTime: number;
}

// Load all markdown files from content/posts/ at build time
const rawFiles = import.meta.glob("../../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
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

export const blogPosts: BlogPost[] = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: data.title,
      date: data.date.slice(0, 10),
      author: data.author,
      category: data.category,
      excerpt: data.excerpt,
      readingTime: Number(data.readingTime),
      content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
