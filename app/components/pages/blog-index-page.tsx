import { Link } from "react-router";

import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { formatDate, getBlogPostPath, type BlogPost } from "~/lib/blog";
import type { Locale } from "~/lib/i18n";
import type { BlogIndexMessages } from "~/lib/messages";

export function BlogIndexPage({
  copy,
  locale,
  posts,
}: {
  copy: BlogIndexMessages;
  locale: Locale;
  posts: BlogPost[];
}) {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Badge variant="secondary" className="mb-6">
          {copy.badge}
        </Badge>
        <h1 className="max-w-4xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl">
          {copy.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {copy.description}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <Separator className="mb-12" />
        <div className="mb-8 max-w-2xl">
          <Badge variant="outline" className="mb-4">
            {copy.latestBadge}
          </Badge>
          <h2 className="font-heading text-4xl tracking-tight">{copy.featuredTitle}</h2>
        </div>

        {featured ? (
          <Link to={getBlogPostPath(featured)} className="group block">
            <Card className="border border-border py-0 transition-colors hover:border-ring">
              <CardHeader className="py-6">
                <div className="mb-4 flex items-center gap-3">
                  <Badge variant="secondary">{featured.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(featured.date, locale)}
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">
                    {featured.readingTime} {copy.minuteReadLabel}
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-4xl">
                  {featured.title}
                </h2>
              </CardHeader>
              <CardContent className="space-y-4 py-6 pt-0">
                <p className="text-sm leading-7 text-muted-foreground">{featured.excerpt}</p>
              </CardContent>
              <CardFooter className="border-t border-border/50 py-6 pt-0">
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  {copy.writtenBy} {featured.author}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ) : (
          <Card className="border border-border py-0">
            <CardContent className="space-y-2 py-6">
              <h3 className="font-heading text-2xl tracking-tight">{copy.emptyTitle}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{copy.emptyDescription}</p>
            </CardContent>
          </Card>
        )}
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Separator className="mb-12" />
        <div className="mb-8 max-w-2xl">
          <Badge variant="outline" className="mb-4">
            {copy.moreBadge}
          </Badge>
          <h2 className="font-heading text-4xl tracking-tight">{copy.previousEntriesTitle}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.slug} to={getBlogPostPath(post)} className="group">
              <Card className="h-full border border-border py-0 transition-colors hover:border-ring">
                <CardHeader className="flex-1 py-6 pb-2">
                  <div className="mb-3 flex items-center gap-2">
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                      {post.category}
                    </p>
                  </div>
                  <h3 className="font-heading text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-1 py-6 pt-2">
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-border/50 pb-6 pt-4">
                  <span className="text-xs text-muted-foreground">
                    {formatDate(post.date, locale)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readingTime} {copy.minuteShortLabel}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-6 pb-12 text-center">
        <Separator className="mb-8" />
        <p className="text-xs tracking-wide text-muted-foreground">{copy.footer}</p>
      </footer>
    </main>
  );
}
