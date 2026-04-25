import { SiteHeader } from "~/components/site-header";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { type Locale } from "~/lib/i18n";

const projectCopy = {
  en: {
    badge: "Selected Work",
    title: "Things I've built, written, or experimented with over the years.",
    description:
      "A collection of open-source tools, side projects, and experiments. Some are shipping, some are evolving, and some were built to learn something new.",
    archiveBadge: "Projects",
    archiveTitle: "An archive of my creations.",
  },
  zh: {
    badge: "代表项目",
    title: "这些年里，我做过、写过、或者认真尝试过的一些东西。",
    description:
      "这里收集了开源工具、个人项目和一些实验。有的已经稳定，有的仍在继续，也有一些只是为了学清楚一件事。",
    archiveBadge: "项目",
    archiveTitle: "我做过的一些东西。",
  },
  ja: {
    badge: "代表的な仕事",
    title: "これまでに作ったもの、書いたもの、そして本気で試してきたもの。",
    description:
      "ここにはオープンソースの道具、個人プロジェクト、実験的な取り組みをまとめています。すでに動いているものも、進行中のものも、学ぶために作ったものもあります。",
    archiveBadge: "プロジェクト",
    archiveTitle: "これまでの制作一覧。",
  },
  es: {
    badge: "Trabajo seleccionado",
    title: "Cosas que he construido, escrito o explorado a lo largo de los años.",
    description:
      "Una colección de herramientas open source, proyectos paralelos y experimentos. Algunos ya están en marcha, otros siguen evolucionando y otros nacieron para aprender algo nuevo.",
    archiveBadge: "Proyectos",
    archiveTitle: "Un archivo de lo que he creado.",
  },
  fr: {
    badge: "Travaux choisis",
    title: "Des choses que j’ai construites, écrites ou explorées au fil des années.",
    description:
      "Une collection d’outils open source, de projets parallèles et d’expérimentations. Certains sont déjà en production, d’autres continuent d’évoluer, d’autres encore ont été faits pour apprendre.",
    archiveBadge: "Projets",
    archiveTitle: "Une archive de ce que j’ai créé.",
  },
} as const;

const projects = [
  {
    name: "smail",
    description: {
      en: "Temporary email service that provides disposable inboxes for privacy, testing, and quick workflows.",
      zh: "临时邮箱服务，为隐私保护、测试和临时流程提供一次性邮箱地址。",
      ja: "プライバシー保護やテスト、ちょっとした作業に使える使い捨て受信箱を提供する一時メールサービス。",
      es: "Servicio de correo temporal que ofrece bandejas desechables para privacidad, pruebas y flujos rápidos.",
      fr: "Service d’e-mail temporaire qui fournit des boîtes jetables pour la confidentialité, les tests et les workflows rapides.",
    },
    link: "https://github.com/akazwz/smail",
    year: "2024",
    tags: ["TypeScript", "Fullstack", "900+ Stars"],
  },
  {
    name: "hostc",
    description: {
      en: "Localhost to the edge. Secure, fast, and zero-config edge tunnels powered by Cloudflare Workers.",
      zh: "把 localhost 带到边缘网络。基于 Cloudflare Workers 的安全、快速、零配置隧道工具。",
      ja: "localhost をエッジへ。Cloudflare Workers を基盤にした、安全で高速、ゼロ設定のエッジトンネル。",
      es: "De localhost al edge. Túneles edge seguros, rápidos y sin configuración, impulsados por Cloudflare Workers.",
      fr: "Du localhost vers l’edge. Des tunnels edge sécurisés, rapides et sans configuration, propulsés par Cloudflare Workers.",
    },
    link: "https://github.com/akazwz/hostc",
    year: "2024",
    tags: ["TypeScript", "Cloudflare Workers", "CLI"],
  },
  {
    name: "openchat-monorepo",
    description: {
      en: "A modern full-stack AI chatbot application built with React, Cloudflare Workers, Connect RPC, and Tauri.",
      zh: "一个现代化的全栈 AI Chatbot 应用，结合 React、Cloudflare Workers、Connect RPC 和 Tauri。",
      ja: "React、Cloudflare Workers、Connect RPC、Tauri で構成したモダンなフルスタック AI チャットアプリ。",
      es: "Una aplicación moderna de chatbot con IA full-stack construida con React, Cloudflare Workers, Connect RPC y Tauri.",
      fr: "Une application moderne de chatbot IA full-stack construite avec React, Cloudflare Workers, Connect RPC et Tauri.",
    },
    link: "https://github.com/akazwz/openchat-monorepo",
    year: "2023",
    tags: ["React", "Tauri", "RPC", "Cloudflare"],
  },
  {
    name: "workersai",
    description: {
      en: "Full-stack AI chat platform built on Cloudflare using Workers, Durable Objects, KV, and AI Gateway.",
      zh: "基于 Cloudflare 构建的全栈 AI 聊天平台，使用 Workers、Durable Objects、KV 和 AI Gateway。",
      ja: "Workers、Durable Objects、KV、AI Gateway を使って Cloudflare 上に構築したフルスタック AI チャット基盤。",
      es: "Plataforma full-stack de chat con IA construida sobre Cloudflare con Workers, Durable Objects, KV y AI Gateway.",
      fr: "Plateforme de chat IA full-stack construite sur Cloudflare avec Workers, Durable Objects, KV et AI Gateway.",
    },
    link: "https://github.com/akazwz/workersai",
    year: "2023",
    tags: ["TypeScript", "AI", "Cloudflare Workers"],
  },
  {
    name: "openchat-go",
    description: {
      en: "A small, approachable backend example for learning Golang while integrating AI capabilities.",
      zh: "一个简单易用的后端学习示例，帮助快速用 Golang 开发并集成 AI 能力。",
      ja: "AI 機能を組み込みながら Golang を学べる、小さく扱いやすいバックエンド例。",
      es: "Un ejemplo pequeño y accesible de backend para aprender Golang mientras integras capacidades de IA.",
      fr: "Un exemple backend simple et accessible pour apprendre Golang tout en intégrant des capacités d’IA.",
    },
    link: "https://github.com/akazwz/openchat-go",
    year: "2023",
    tags: ["Go", "AI", "Backend"],
  },
  {
    name: "mlx-live",
    description: {
      en: "A local real-time voice assistant example built on MLX to explore on-device AI on Apple Silicon.",
      zh: "一个基于 MLX 的本地实时语音助手示例，用来探索 Apple Silicon 上的端侧 AI。",
      ja: "Apple Silicon 上のオンデバイス AI を試すために MLX で作った、ローカルのリアルタイム音声アシスタント例。",
      es: "Un ejemplo de asistente de voz local en tiempo real construido con MLX para explorar IA en el dispositivo sobre Apple Silicon.",
      fr: "Un exemple d’assistant vocal local en temps réel construit avec MLX pour explorer l’IA embarquée sur Apple Silicon.",
    },
    link: "https://github.com/akazwz/mlx-live",
    year: "2024",
    tags: ["MLX", "AI", "Voice"],
  },
] as const;

export function ProjectsPage({ locale }: { locale: Locale }) {
  const copy = projectCopy[locale];

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

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Separator className="mb-12" />
        <div className="mb-8 max-w-2xl">
          <Badge variant="outline" className="mb-4">
            {copy.archiveBadge}
          </Badge>
          <h2 className="font-heading text-4xl tracking-tight">{copy.archiveTitle}</h2>
        </div>
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
                    <h3 className="font-heading text-2xl tracking-tight transition-colors group-hover:text-primary">
                      {project.name}
                    </h3>
                    <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pb-6">
                  <p className="text-sm leading-7 text-muted-foreground">
                    {project.description[locale]}
                  </p>
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
