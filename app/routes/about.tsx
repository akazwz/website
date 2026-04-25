import { Link } from "react-router";

import { GithubIcon, TwitterIcon } from "~/components/icons";
import { SiteHeader } from "~/components/site-header";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

const sections = [
  {
    title: "About Me",
    description:
      "I am a full stack developer passionate about creating useful tools and making them open-source. For example: I built smail, hostc, and various AI agent integrations using Cloudflare Workers.",
  },
  {
    title: "Focus Areas",
    description:
      "Currently interested in AI apps, modern Web tooling (React, Tailwind CSS), and edge computing frameworks like Cloudflare Workers. I've also contributed to popular UI libraries like shadcn-ui.",
  },
  {
    title: "Connect",
    description:
      "You can find most of my code on GitHub (@akazwz). If you'd like to reach out, send me a DM on X (@akazwz_).",
  },
];

const structure = [
  "Built and maintain `smail` (temporary email) running on Cloudflare edge.",
  "Creator of `hostc` (Localhost to edge tunnels).",
  "Experimenting with local AI (MLX), Golang, and Tauri cross-platform apps.",
  "Actively involved in React, TypeScript, and open-source contributions (shadcn-ui, etc).",
];

export function meta() {
  return [
    { title: "About | akazwz" },
    { name: "description", content: "About akazwz and the thinking behind this personal website." },
  ];
}

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Badge variant="secondary" className="mb-6">
          About akazwz
        </Badge>
        <h1 className="max-w-4xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl">
          This page is a short introduction to akazwz and the work gathered here.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          It does not try to say everything. It just gives enough context to understand who akazwz
          is, what this site is for, and where to keep reading next.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/blog" className={cn(buttonVariants({ size: "lg" }), "rounded-none")}>
            Read Journal
          </Link>
          <Link
            to="/"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-none")}
          >
            Back Home
          </Link>
          <Separator
            orientation="vertical"
            className="mx-2 hidden h-5 w-px !self-center sm:block"
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
        <div className="grid gap-5 md:grid-cols-3">
          {sections.map((section) => (
            <Card key={section.title} className="border border-border py-0">
              <CardHeader className="py-6">
                <h3 className="font-heading text-2xl tracking-tight">{section.title}</h3>
              </CardHeader>
              <CardContent className="py-6">
                <p className="text-sm leading-7 text-muted-foreground">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Separator className="mb-12" />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge variant="outline" className="mb-5">
              Highlight Works
            </Badge>
            <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
              I am a full stack developer, building something and making it open-source.
            </h2>
          </div>

          <Card className="border border-border py-0">
            <CardContent className="space-y-6 py-6">
              {structure.map((item, index) => (
                <div
                  key={item}
                  className="border-b border-border/70 pb-6 last:border-b-0 last:pb-0"
                >
                  <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    Point {index + 1}
                  </p>
                  <p className="text-base leading-8 text-foreground/80">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
