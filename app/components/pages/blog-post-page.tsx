import { Link } from "react-router";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { formatDate, type BlogPost } from "~/lib/blog";
import { localizePath, type Locale } from "~/lib/i18n";
import type { BlogPostMessages } from "~/lib/messages";

export function BlogPostPage({
  copy,
  html,
  locale,
  post,
}: {
  copy: BlogPostMessages;
  html: string;
  locale: Locale;
  post: BlogPost;
}) {
  return (
    <main>
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
