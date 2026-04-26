import { Link } from "react-router";

import { GithubIcon, TwitterIcon } from "~/components/icons";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { formatDate, type BlogPost } from "~/lib/blog";
import { localizePath, type Locale } from "~/lib/i18n";
import type { HomeMessages } from "~/lib/messages";
import { cn } from "~/lib/utils";

export function HomePage({
  latestPosts,
  locale,
  copy,
}: {
  latestPosts: BlogPost[];
  locale: Locale;
  copy: HomeMessages;
}) {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Badge variant="secondary" className="mb-6">
          akazwz
        </Badge>
        <h1 className="max-w-4xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl">
          {copy.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {copy.heroDescription}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to={localizePath(locale, "/about")}
            className={cn(buttonVariants({ size: "lg" }), "rounded-none")}
          >
            {copy.aboutCta}
          </Link>
          <Link
            to={localizePath(locale, "/blog")}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-none")}
          >
            {copy.journalCta}
          </Link>
          <Separator
            orientation="vertical"
            className="mx-2 hidden h-5 w-px self-center! sm:block"
          />
          <a
            href="https://github.com/akazwz"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-none")}
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://x.com/akazwz_"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-none")}
          >
            <TwitterIcon className="h-5 w-5" />
            <span className="sr-only">X (Twitter)</span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <Separator className="mb-12" />
        <div className="mb-8 max-w-2xl">
          <Badge variant="outline" className="mb-4">
            {copy.focusBadge}
          </Badge>
          <h2 className="font-heading text-4xl tracking-tight">{copy.focusTitle}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {copy.sections.map((section) => (
            <Card key={section.title} className="border border-border py-0">
              <CardHeader className="py-6">
                <h3 className="font-heading text-2xl tracking-tight">{section.title}</h3>
              </CardHeader>
              <CardContent className="py-6">
                <p className="text-sm leading-7 text-muted-foreground">{section.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Separator className="mb-12" />
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <Badge variant="outline" className="mb-4">
              {copy.latestBadge}
            </Badge>
            <h2 className="font-heading text-4xl tracking-tight">{copy.latestTitle}</h2>
          </div>
          <Link
            to={localizePath(locale, "/blog")}
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            {copy.allPostsLabel} →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              to={localizePath(locale, `/blog/${post.slug}`)}
              className="group block"
            >
              <Card className="h-full border border-border py-0 transition-colors hover:border-ring">
                <CardHeader className="py-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {post.category}
                  </p>
                  <h3 className="font-heading text-2xl tracking-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4 py-6">
                  <p className="text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs tracking-wide text-muted-foreground">
                    <span>{formatDate(post.date, locale)}</span>
                    <span>·</span>
                    <span>
                      {post.readingTime} {copy.minuteReadLabel}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
