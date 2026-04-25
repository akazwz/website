import { Link } from "react-router";
import { SiteHeader } from "~/components/site-header";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { blogPosts, formatDate } from "~/lib/blog";

export function meta() {
  return [
    { title: "Blog" },
    { name: "description", content: "Thoughts on design, writing, and the slow life." },
  ];
}

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Badge variant="secondary" className="mb-6">
          Journal
        </Badge>
        <h1 className="max-w-4xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl">
          The Journal
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          Thoughts on design, writing, and the slow life.
        </p>
      </section>

      {/* Featured Post */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <Separator className="mb-12" />
        <div className="mb-8 max-w-2xl">
          <Badge variant="outline" className="mb-4">
            Latest
          </Badge>
          <h2 className="font-heading text-4xl tracking-tight">Featured post</h2>
        </div>

        <Link to={`/blog/${featured.slug}`} className="group block">
          <Card className="border border-border py-0 transition-colors hover:border-ring">
            <CardHeader className="py-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{featured.category}</Badge>
                <span className="text-xs text-muted-foreground">{formatDate(featured.date)}</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">
                  {featured.readingTime} min read
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
            </CardHeader>
            <CardContent className="space-y-4 py-6 pt-0">
              <p className="text-sm leading-7 text-muted-foreground">{featured.excerpt}</p>
            </CardContent>
            <CardFooter className="py-6 pt-0 border-t border-border/50">
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                By {featured.author}
              </span>
            </CardFooter>
          </Card>
        </Link>
      </section>

      {/* Post Grid */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Separator className="mb-12" />
        <div className="mb-8 max-w-2xl">
          <Badge variant="outline" className="mb-4">
            More
          </Badge>
          <h2 className="font-heading text-4xl tracking-tight">Previous entries</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <Card className="h-full border border-border py-0 transition-colors hover:border-ring">
                <CardHeader className="py-6 pb-2 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                      {post.category}
                    </p>
                  </div>
                  <h3 className="font-heading text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-1 py-6 pt-2">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-4 pb-6 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                  <span className="text-xs text-muted-foreground">{post.readingTime} min</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-6 pb-12 text-center">
        <Separator className="mb-8" />
        <p className="text-xs text-muted-foreground tracking-wide">Written slowly, with care.</p>
      </footer>
    </main>
  );
}
