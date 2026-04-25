import { Link } from "react-router";

import { SiteHeader } from "~/components/site-header";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { formatDate, type BlogPost } from "~/lib/blog";
import { localizePath, type Locale } from "~/lib/i18n";

const blogPostCopy = {
  en: {
    backToJournal: "← Back to Journal",
    minuteReadLabel: "min read",
    returnToPosts: "← Return to all posts",
  },
  zh: {
    backToJournal: "← 返回博客列表",
    minuteReadLabel: "分钟阅读",
    returnToPosts: "← 返回全部文章",
  },
  ja: {
    backToJournal: "← ジャーナルに戻る",
    minuteReadLabel: "分で読めます",
    returnToPosts: "← すべての記事に戻る",
  },
  es: {
    backToJournal: "← Volver al blog",
    minuteReadLabel: "min de lectura",
    returnToPosts: "← Volver a todos los artículos",
  },
  fr: {
    backToJournal: "← Retour au journal",
    minuteReadLabel: "min de lecture",
    returnToPosts: "← Retour à tous les articles",
  },
} as const;

export function BlogPostPage({
  html,
  locale,
  post,
}: {
  html: string;
  locale: Locale;
  post: BlogPost;
}) {
  const copy = blogPostCopy[locale];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to={localizePath(locale, "/blog")}
          className="mb-10 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {copy.backToJournal}
        </Link>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-sm text-muted-foreground">{formatDate(post.date, locale)}</span>
          <span className="text-muted-foreground/50">·</span>
          <span className="text-sm text-muted-foreground">
            {post.readingTime} {copy.minuteReadLabel}
          </span>
        </div>

        <h1 className="mb-6 font-heading text-4xl leading-tight tracking-tight md:text-5xl">
          {post.title}
        </h1>

        <p className="mb-8 border-l-2 border-border pl-5 text-lg leading-relaxed text-muted-foreground italic">
          {post.excerpt}
        </p>

        <Separator className="mb-8" />

        <div className="mb-12 flex items-center gap-3">
          <Avatar className="size-9">
            <AvatarFallback className="bg-secondary font-semibold text-secondary-foreground">
              {post.author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{post.author}</span>
        </div>

        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <Separator className="my-16" />

        <div className="text-center">
          <Link
            to={localizePath(locale, "/blog")}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {copy.returnToPosts}
          </Link>
        </div>
      </article>
    </main>
  );
}
