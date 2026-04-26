import { Link } from "react-router";

import { GithubIcon, TwitterIcon } from "~/components/icons";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { localizePath, type Locale } from "~/lib/i18n";
import type { AboutMessages } from "~/lib/messages";
import { cn } from "~/lib/utils";

export function AboutPage({ copy, locale }: { copy: AboutMessages; locale: Locale }) {
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

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to={localizePath(locale, "/blog")}
            className={cn(buttonVariants({ size: "lg" }), "rounded-none")}
          >
            {copy.journalCta}
          </Link>
          <Link
            to={localizePath(locale, "/")}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-none")}
          >
            {copy.homeCta}
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
        <div className="grid gap-5 md:grid-cols-3">
          {copy.sections.map((section) => (
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
              {copy.highlightBadge}
            </Badge>
            <h2 className="font-heading text-4xl tracking-tight sm:text-5xl">
              {copy.highlightTitle}
            </h2>
          </div>

          <Card className="border border-border py-0">
            <CardContent className="space-y-6 py-6">
              {copy.points.map((point, index) => (
                <div
                  key={point}
                  className="border-b border-border/70 pb-6 last:border-b-0 last:pb-0"
                >
                  <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {copy.pointLabel} {index + 1}
                  </p>
                  <p className="text-base leading-8 text-foreground/80">{point}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
