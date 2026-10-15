// The shapes the content plugin (tools/content.ts) emits and the pages read. Plain data:
// no functions, so a post serializes into the prerendered page as it is.

export type Locale = "en" | "zh";

// What a list of posts needs, read from a post's frontmatter. Every post's summary ships
// with the app; its body is a chunk of its own (see `virtual:posts`).
export type PostSummary = {
  locale: Locale;
  slug: string;
  title: string;
  // ISO date, `YYYY-MM-DD`.
  date: string;
  category: string;
  excerpt: string;
  readingTime: number;
};

// A post's body: Markdoc's render tree in a form that serializes (the same shape the
// renderer in src/ui/Prose.tsx walks). A node is text, or an element named by its HTML tag.
export type MarkdownNode =
  | string
  | { name: string; attributes: Record<string, string>; children: MarkdownNode[] };

export type PostBody = {
  nodes: MarkdownNode[];
  // The `##` headings, in order: the post's table of contents.
  outline: { id: string; text: string }[];
};
