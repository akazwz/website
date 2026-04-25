import { Link } from "react-router";
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto max-w-4xl px-6 py-8 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Home
          </Link>
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Journal</span>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-4">
          The Journal
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Thoughts on design, writing, and the slow life.
        </p>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Featured Post */}
      <section className="container mx-auto max-w-4xl px-6 py-12">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">Latest</p>
        <Link to={`/blog/${featured.slug}`} className="group block">
          <Card className="border-0 shadow-none bg-secondary/30 hover:bg-secondary/60 transition-colors rounded-2xl p-2">
            <CardHeader className="pb-3">
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
            <CardContent>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
            </CardContent>
            <CardFooter>
              <span className="text-sm font-medium text-foreground/70">By {featured.author}</span>
            </CardFooter>
          </Card>
        </Link>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Post Grid */}
      <section className="container mx-auto max-w-4xl px-6 py-12">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-8">More</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <Card className="h-full border border-border hover:border-ring transition-colors rounded-xl flex flex-col">
                <CardHeader className="flex-1 pb-2">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                  <span className="text-xs text-muted-foreground">{post.readingTime} min</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto max-w-4xl px-6 py-12 text-center">
        <Separator className="mb-8" />
        <p className="text-xs text-muted-foreground tracking-wide">Written slowly, with care.</p>
      </footer>
    </div>
  );
}
