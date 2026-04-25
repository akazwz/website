import { data, Link } from "react-router";
import { marked } from "marked";
import { SiteHeader } from "~/components/site-header";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { formatDate, getPostBySlug } from "~/lib/blog";
import type { Route } from "./+types/blog.$slug";

// Apply Tailwind classes via marked renderer extension
marked.use({
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const sizes: Record<number, string> = {
        2: "font-heading text-2xl font-semibold mt-10 mb-4 tracking-tight",
        3: "font-heading text-xl font-semibold mt-8 mb-3 tracking-tight",
      };
      const cls = sizes[depth] ?? "font-heading text-lg font-semibold mt-6 mb-2";
      return `<h${depth} class="${cls}">${text}</h${depth}>\n`;
    },
    paragraph({ tokens }) {
      const text = this.parser.parseInline(tokens);
      return `<p class="text-foreground/80 leading-[1.9] text-[1.05rem] mb-5">${text}</p>\n`;
    },
    list({ ordered, start, items }) {
      const tag = ordered ? "ol" : "ul";
      const cls = ordered ? "list-decimal ml-6 mb-5 space-y-1" : "list-disc ml-6 mb-5 space-y-1";
      const startAttr = ordered && start !== 1 ? ` start="${start}"` : "";
      const body = items.map((item) => this.listitem(item)).join("");
      return `<${tag}${startAttr} class="${cls}">${body}</${tag}>\n`;
    },
    listitem(item) {
      const text = this.parser.parse(item.tokens);
      return `<li class="text-foreground/80 leading-relaxed">${text}</li>\n`;
    },
    blockquote({ tokens }) {
      const text = this.parser.parse(tokens);
      return `<blockquote class="border-l-2 border-border pl-5 italic text-muted-foreground mb-5">${text}</blockquote>\n`;
    },
    code({ text, lang }) {
      const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const langClass = lang ? ` class="language-${lang}"` : "";
      return `<pre class="bg-secondary rounded p-4 overflow-x-auto mb-5 text-sm"><code${langClass}>${escaped}</code></pre>\n`;
    },
    strong({ tokens }) {
      const text = this.parser.parseInline(tokens);
      return `<strong class="font-semibold text-foreground">${text}</strong>`;
    },
  },
});

export function meta({ params }: Route.MetaArgs) {
  const post = getPostBySlug(params.slug);
  if (!post) return [{ title: "Post Not Found" }];
  return [{ title: post.title }, { name: "description", content: post.excerpt }];
}

export function loader({ params }: Route.LoaderArgs) {
  const post = getPostBySlug(params.slug);
  if (!post) throw data("Not Found", { status: 404 });
  return { post, html: marked(post.content) as string };
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post, html } = loaderData;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Article */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/blog"
          className="inline-block mb-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Journal
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
          <span className="text-muted-foreground/50">·</span>
          <span className="text-sm text-muted-foreground">{post.readingTime} min read</span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 italic border-l-2 border-border pl-5">
          {post.excerpt}
        </p>

        <Separator className="mb-8" />

        {/* Author */}
        <div className="flex items-center gap-3 mb-12">
          <Avatar className="size-9">
            <AvatarFallback className="bg-secondary font-semibold text-secondary-foreground">
              {post.author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{post.author}</span>
        </div>

        {/* Body — rendered markdown */}
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <Separator className="my-16" />

        {/* Footer */}
        <div className="text-center">
          <Link
            to="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Return to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}
