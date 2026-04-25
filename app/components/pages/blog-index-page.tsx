import { Link } from "react-router";

import { SiteHeader } from "~/components/site-header";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { formatDate, getBlogPosts } from "~/lib/blog";
import { localizePath, type Locale } from "~/lib/i18n";

const blogIndexCopy = {
  en: {
    badge: "Journal",
    title: "The Journal",
    description: "Notes on software, design, and building with restraint.",
    latestBadge: "Latest",
    featuredTitle: "Featured post",
    moreBadge: "More",
    previousEntriesTitle: "Previous entries",
    writtenBy: "By",
    minuteReadLabel: "min read",
    minuteShortLabel: "min",
    footer: "Written slowly, with care.",
    emptyTitle: "No posts yet",
    emptyDescription: "Writing is on the way.",
  },
  zh: {
    badge: "博客",
    title: "写作与记录",
    description: "关于软件、设计，以及尽量克制地做东西的一些笔记。",
    latestBadge: "最新",
    featuredTitle: "精选文章",
    moreBadge: "更多",
    previousEntriesTitle: "更多记录",
    writtenBy: "作者",
    minuteReadLabel: "分钟阅读",
    minuteShortLabel: "分钟",
    footer: "慢慢写，认真写。",
    emptyTitle: "还没有文章",
    emptyDescription: "写作内容会慢慢补上。",
  },
  ja: {
    badge: "ジャーナル",
    title: "記録と文章",
    description: "ソフトウェア、デザイン、そして節度あるものづくりについてのメモ。",
    latestBadge: "最新",
    featuredTitle: "注目の記事",
    moreBadge: "さらに読む",
    previousEntriesTitle: "これまでの記録",
    writtenBy: "著者",
    minuteReadLabel: "分で読めます",
    minuteShortLabel: "分",
    footer: "時間をかけて、丁寧に書いています。",
    emptyTitle: "まだ記事がありません",
    emptyDescription: "これから少しずつ増やしていきます。",
  },
  es: {
    badge: "Blog",
    title: "Notas y registro",
    description: "Notas sobre software, diseño y la idea de construir con más criterio.",
    latestBadge: "Último",
    featuredTitle: "Artículo destacado",
    moreBadge: "Más",
    previousEntriesTitle: "Entradas anteriores",
    writtenBy: "Por",
    minuteReadLabel: "min de lectura",
    minuteShortLabel: "min",
    footer: "Escrito despacio y con cuidado.",
    emptyTitle: "Todavía no hay artículos",
    emptyDescription: "La escritura llegará poco a poco.",
  },
  fr: {
    badge: "Journal",
    title: "Notes et écrits",
    description: "Des notes sur le logiciel, le design et une manière plus mesurée de construire.",
    latestBadge: "Dernier",
    featuredTitle: "Article mis en avant",
    moreBadge: "Plus",
    previousEntriesTitle: "Entrées précédentes",
    writtenBy: "Par",
    minuteReadLabel: "min de lecture",
    minuteShortLabel: "min",
    footer: "Écrit lentement, avec soin.",
    emptyTitle: "Pas encore d’article",
    emptyDescription: "Les textes viendront progressivement.",
  },
} as const;

export function BlogIndexPage({ locale }: { locale: Locale }) {
  const copy = blogIndexCopy[locale];
  const posts = getBlogPosts(locale);
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

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
          <Link to={localizePath(locale, `/blog/${featured.slug}`)} className="group block">
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
            <Link key={post.slug} to={localizePath(locale, `/blog/${post.slug}`)} className="group">
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
