import { Link } from "react-router";

import { GithubIcon, TwitterIcon } from "~/components/icons";
import { SiteHeader } from "~/components/site-header";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { formatDate, getBlogPosts } from "~/lib/blog";
import { localizePath, type Locale } from "~/lib/i18n";
import { cn } from "~/lib/utils";

const homeCopy = {
  en: {
    heroTitle: "Full stack developer, building something and making it open-source.",
    heroDescription:
      "Welcome to the personal site of akazwz. This is my corner of the internet for open-source projects like smail and hostc, AI explorations, and an ongoing dev journal.",
    aboutCta: "About",
    journalCta: "Read the Journal",
    focusBadge: "Core Focus",
    focusTitle: "Engineering, open-source, and exploring the edge.",
    latestBadge: "Latest writing",
    latestTitle: "Recent notes on software, design, and careful building.",
    allPostsLabel: "Visit all posts",
    minuteReadLabel: "min read",
    sections: [
      {
        title: "Open Source",
        summary:
          "Building and maintaining tools for the community, from temporary email services like smail to edge tunnels like hostc.",
      },
      {
        title: "Full Stack & Edge",
        summary:
          "Crafting modern web applications with React and TypeScript, then shipping them globally with Cloudflare Workers.",
      },
      {
        title: "AI & Systems",
        summary:
          "Experimenting with local AI models, practical backend systems, and cross-platform desktop applications.",
      },
    ],
  },
  zh: {
    heroTitle: "全栈开发者，持续构建，也持续开源。",
    heroDescription:
      "这里是 akazwz 的个人网站，记录我做过的开源项目，比如 smail、hostc，以及一些 AI 实验和持续更新的开发札记。",
    aboutCta: "关于我",
    journalCta: "阅读博客",
    focusBadge: "关注方向",
    focusTitle: "工程、开源，以及对边缘计算的持续探索。",
    latestBadge: "最近写作",
    latestTitle: "一些关于软件、设计与克制构建的最近记录。",
    allPostsLabel: "查看全部文章",
    minuteReadLabel: "分钟阅读",
    sections: [
      {
        title: "开源",
        summary: "持续为社区维护工具，从临时邮箱 smail 到基于边缘网络的隧道工具 hostc。",
      },
      {
        title: "全栈与边缘",
        summary:
          "使用 React 与 TypeScript 构建现代 Web 应用，并通过 Cloudflare Workers 做全球化部署。",
      },
      {
        title: "AI 与系统",
        summary: "尝试本地 AI 模型、实用后端系统，以及跨平台桌面应用的开发方式。",
      },
    ],
  },
  ja: {
    heroTitle: "フルスタック開発者として、作り続け、良いものはオープンソースにしています。",
    heroDescription:
      "akazwz の個人サイトへようこそ。smail や hostc のようなオープンソースプロジェクト、AI の実験、継続的な開発ジャーナルをまとめています。",
    aboutCta: "概要",
    journalCta: "ジャーナルを読む",
    focusBadge: "注力領域",
    focusTitle: "エンジニアリング、オープンソース、そしてエッジの探究。",
    latestBadge: "最近の文章",
    latestTitle: "ソフトウェア、デザイン、そして丁寧なものづくりについての最近の記録。",
    allPostsLabel: "すべての記事を見る",
    minuteReadLabel: "分で読めます",
    sections: [
      {
        title: "オープンソース",
        summary:
          "smail のような一時メールサービスから hostc のようなエッジトンネルまで、コミュニティ向けの道具を作り続けています。",
      },
      {
        title: "フルスタックとエッジ",
        summary:
          "React と TypeScript でモダンな Web アプリを作り、Cloudflare Workers で世界に届けています。",
      },
      {
        title: "AI とシステム",
        summary:
          "ローカル AI モデル、実用的なバックエンドシステム、クロスプラットフォームのデスクトップアプリを試しています。",
      },
    ],
  },
  es: {
    heroTitle:
      "Desarrollador full-stack: construyo cosas y publico en open source lo que merece quedarse.",
    heroDescription:
      "Este es el sitio personal de akazwz. Aquí reúno proyectos open source como smail y hostc, experimentos con IA y un diario de desarrollo en curso.",
    aboutCta: "Sobre mí",
    journalCta: "Leer el blog",
    focusBadge: "Enfoque",
    focusTitle: "Ingeniería, open source y exploración del edge.",
    latestBadge: "Escritura reciente",
    latestTitle: "Notas recientes sobre software, diseño y construcción con cuidado.",
    allPostsLabel: "Ver todos los artículos",
    minuteReadLabel: "min de lectura",
    sections: [
      {
        title: "Open Source",
        summary:
          "Construyo y mantengo herramientas para la comunidad, desde servicios de correo temporal como smail hasta túneles edge como hostc.",
      },
      {
        title: "Full Stack y Edge",
        summary:
          "Creo aplicaciones web modernas con React y TypeScript, y las despliego globalmente con Cloudflare Workers.",
      },
      {
        title: "IA y Sistemas",
        summary:
          "Experimento con modelos de IA locales, sistemas backend prácticos y aplicaciones de escritorio multiplataforma.",
      },
    ],
  },
  fr: {
    heroTitle:
      "Développeur full-stack, je construis sans cesse et je publie en open source ce qui mérite de durer.",
    heroDescription:
      "Bienvenue sur le site personnel de akazwz. J’y rassemble des projets open source comme smail et hostc, des expérimentations en IA et un journal de développement en continu.",
    aboutCta: "À propos",
    journalCta: "Lire le journal",
    focusBadge: "Axes",
    focusTitle: "Ingénierie, open source et exploration de l’edge.",
    latestBadge: "Derniers écrits",
    latestTitle: "Notes récentes sur le logiciel, le design et une construction plus attentive.",
    allPostsLabel: "Voir tous les articles",
    minuteReadLabel: "min de lecture",
    sections: [
      {
        title: "Open source",
        summary:
          "Je conçois et maintiens des outils pour la communauté, des services d’e-mail temporaire comme smail aux tunnels edge comme hostc.",
      },
      {
        title: "Full-stack et edge",
        summary:
          "Je crée des applications web modernes avec React et TypeScript, puis je les déploie globalement avec Cloudflare Workers.",
      },
      {
        title: "IA et systèmes",
        summary:
          "J’expérimente avec des modèles d’IA locaux, des backends pragmatiques et des applications desktop multiplateformes.",
      },
    ],
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const latestPosts = getBlogPosts(locale).slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

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
