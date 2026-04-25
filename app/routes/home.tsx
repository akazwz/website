import { Link } from "react-router";

import { GithubIcon, TwitterIcon } from "~/components/icons";
import { SiteHeader } from "~/components/site-header";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { blogPosts, formatDate } from "~/lib/blog";
import { cn } from "~/lib/utils";

const latestPosts = blogPosts.slice(0, 3);

const sections = [
  {
    title: "Open Source",
    summary:
      "Building and maintaining tools for the community, from temporary email services (smail) to edge tunnels (hostc).",
  },
  {
    title: "Full Stack & Edge",
    summary:
      "Crafting modern web applications using React, TypeScript, and deploying globally via Cloudflare Workers.",
  },
  {
    title: "AI & Systems",
    summary:
      "Experimenting with local AI models (MLX), building scalable backends with Golang, and developing cross-platform apps with Tauri.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Badge variant="secondary" className="mb-6">
          akazwz
        </Badge>
        <h1 className="max-w-4xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl">
          Full stack developer, building something and making it open-source.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          Welcome to the personal site of akazwz. This is my corner of the internet for open-source
          projects like smail and hostc, AI explorations, and ongoing dev journal.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/about" className={cn(buttonVariants({ size: "lg" }), "rounded-none")}>
            About
          </Link>
          <Link
            to="/blog"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-none")}
          >
            Read the Journal
          </Link>
          <div className="mx-2 hidden h-5 w-px bg-border sm:block" />
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
            Core Focus
          </Badge>
          <h2 className="font-heading text-4xl tracking-tight">
            Engineering, open-source, and exploring the edge.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {sections.map((section) => (
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
              Latest writing
            </Badge>
            <h2 className="font-heading text-4xl tracking-tight">
              Writing gives akazwz's site depth.
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            Visit all posts →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
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
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readingTime} min read</span>
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
