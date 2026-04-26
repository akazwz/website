import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import type { ProjectEntry, ProjectsMessages } from "~/lib/messages";

export function ProjectsPage({
  copy,
  entries,
}: {
  copy: ProjectsMessages;
  entries: readonly ProjectEntry[];
}) {
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

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Separator className="mb-12" />
        <div className="mb-8 max-w-2xl">
          <Badge variant="outline" className="mb-4">
            {copy.archiveBadge}
          </Badge>
          <h2 className="font-heading text-4xl tracking-tight">{copy.archiveTitle}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Card className="h-full border border-border py-0 transition-colors hover:border-ring">
                <CardHeader className="pb-4 pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-2xl tracking-tight transition-colors group-hover:text-primary">
                      {project.name}
                    </h3>
                    <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pb-6">
                  <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-sm px-2 py-0.5 text-[10px] font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
