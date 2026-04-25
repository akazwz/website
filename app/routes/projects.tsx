import { SiteHeader } from "~/components/site-header";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

// Placeholder data - replace with your actual projects
const projects = [
  {
    name: "smail",
    description:
      "Temporary email service (临时邮箱). Providing disposable email addresses for privacy and testing.",
    link: "https://github.com/akazwz/smail",
    year: "2024",
    tags: ["TypeScript", "Fullstack", "900+ Stars"],
  },
  {
    name: "hostc",
    description:
      "Localhost to the edge. Secure, fast, and zero-config edge tunnels powered by Cloudflare Workers.",
    link: "https://github.com/akazwz/hostc",
    year: "2024",
    tags: ["TypeScript", "Cloudflare Workers", "CLI"],
  },
  {
    name: "openchat-monorepo",
    description:
      "一个现代化的全栈 AI Chatbot 应用，使用 React 和 Cloudflare Workers 结合 Connect RPC 构建，通过 Tauri 支持跨端。",
    link: "https://github.com/akazwz/openchat-monorepo",
    year: "2023",
    tags: ["React", "Tauri", "RPC", "Cloudflare"],
  },
  {
    name: "workersai",
    description:
      "Full-stack AI chat platform built on Cloudflare using Workers, Durable Objects, KV, and AI Gateway.",
    link: "https://github.com/akazwz/workersai",
    year: "2023",
    tags: ["TypeScript", "AI", "Cloudflare Workers"],
  },
  {
    name: "openchat-go",
    description: "一个简单易用的后端学习示例，帮助快速使用 Golang 开发并集成 AI 功能。",
    link: "https://github.com/akazwz/openchat-go",
    year: "2023",
    tags: ["Go", "AI", "Backend"],
  },
  {
    name: "mlx-live",
    description:
      "一个基于 MLX 的本地实时语音助手示例，展示如何用 Apple Silicon 跑本地端侧 AI 模型。",
    link: "https://github.com/akazwz/mlx-live",
    year: "2024",
    tags: ["MLX", "AI", "Voice"],
  },
];

export function meta() {
  return [
    { title: "Projects | akazwz" },
    {
      name: "description",
      content: "A collection of projects, tools, and experiments built by akazwz.",
    },
  ];
}

export default function Projects() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Badge variant="secondary" className="mb-6">
          Selected Work
        </Badge>
        <h1 className="max-w-4xl font-heading text-5xl leading-tight tracking-tight sm:text-6xl">
          Things I've built, written, or experimented with over the years.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          A collection of open-source tools, side projects, and random experiments. Some are
          finished, some are ongoing, and some were just built to learn something new.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Separator className="mb-12" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
                    <h2 className="font-heading text-2xl tracking-tight transition-colors group-hover:text-primary">
                      {project.name}
                    </h2>
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
