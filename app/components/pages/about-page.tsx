import { Link } from "react-router";

import { GithubIcon, TwitterIcon } from "~/components/icons";
import { SiteHeader } from "~/components/site-header";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { localizePath, type Locale } from "~/lib/i18n";
import { cn } from "~/lib/utils";

const aboutCopy = {
  en: {
    badge: "About akazwz",
    title:
      "I build developer tools, edge-native products, and practical software that stays useful.",
    description:
      "Most of my work sits between open-source tooling, modern web infrastructure, and small products that solve real workflow problems. This site collects the projects, writing, and ideas behind that work.",
    journalCta: "Read Journal",
    homeCta: "Back Home",
    highlightBadge: "Working Context",
    highlightTitle:
      "The thread through all of it is simple: build useful things, keep the stack understandable, and share what is worth reusing.",
    pointLabel: "Point",
    sections: [
      {
        title: "What I Build",
        description:
          "I tend to work on infrastructure-leaning products, developer tools, and full-stack apps that can ship quickly without becoming fragile.",
      },
      {
        title: "Current Focus",
        description:
          "Right now I spend most of my time on Cloudflare Workers, Go services, React and TypeScript apps, AI-enabled workflows, and research around DNS, CDN behaviour, and edge delivery.",
      },
      {
        title: "How I Share",
        description:
          "Most code goes to GitHub. Longer thoughts go into the journal. If you want to talk about product direction, tooling, or edge systems, X is usually the fastest route.",
      },
    ],
    points: [
      "Built and maintain smail, a temporary email product designed to feel fast, disposable, and easy to trust.",
      "Created hostc to make localhost tunnels simpler and more edge-native for day-to-day development.",
      "Still writing Go services, and spending time on DNS, CDN, and edge-delivery research alongside local AI and Tauri-based desktop experiments.",
      "Use this site as a place to publish projects, technical notes, and the thinking behind how those products are shaped.",
    ],
  },
  zh: {
    badge: "关于 akazwz",
    title: "我主要做开发者工具、边缘原生产品，以及真正能长期派上用场的软件。",
    description:
      "我的工作大多落在开源工具、现代 Web 基础设施，以及能解决真实工作流问题的小产品之间。这个网站用来整理这些项目、写作和背后的思考。",
    journalCta: "阅读博客",
    homeCta: "返回首页",
    highlightBadge: "工作脉络",
    highlightTitle:
      "贯穿这些工作的思路其实很简单：做有用的东西，让技术栈保持可理解，并把值得复用的部分公开出来。",
    pointLabel: "要点",
    sections: [
      {
        title: "我在做什么",
        description:
          "我更偏向基础设施感比较强的产品、开发者工具，以及能够快速上线但不容易失控的全栈应用。",
      },
      {
        title: "关注方向",
        description:
          "现在主要把时间放在 Cloudflare Workers、Go 服务、React 和 TypeScript 应用、AI 驱动的工作流，以及对 DNS、CDN 和边缘分发机制的研究上。",
      },
      {
        title: "我如何表达这些工作",
        description:
          "大部分代码会放到 GitHub，更完整的思考会写进博客。如果你想聊产品方向、工具链或者边缘系统，X 通常是最快的入口。",
      },
    ],
    points: [
      "构建并维护 smail，一个强调速度、一次性使用体验和可信感的临时邮箱产品。",
      "开发 hostc，让 localhost 隧道在日常开发里更简单，也更符合边缘网络的使用方式。",
      "持续写 Go 服务，也一直在研究 DNS、CDN 与边缘分发机制；同时继续尝试本地 AI 和更强调性能与控制力的 Tauri 桌面产品。",
      "把这个网站当作项目、技术笔记和产品思考的统一出口，而不只是一个展示页。",
    ],
  },
  ja: {
    badge: "akazwz について",
    title:
      "開発者向けツール、エッジネイティブなプロダクト、そして長く役に立つ実用的なソフトウェアを作っています。",
    description:
      "仕事の多くは、オープンソースのツール、モダンな Web インフラ、そして実際のワークフローの問題を解く小さなプロダクトの間にあります。このサイトは、そのプロジェクトや文章、考え方をまとめる場所です。",
    journalCta: "ジャーナルを読む",
    homeCta: "ホームに戻る",
    highlightBadge: "仕事の文脈",
    highlightTitle:
      "軸はシンプルです。役に立つものを作り、スタックを理解しやすく保ち、再利用する価値のあるものは共有すること。",
    pointLabel: "ポイント",
    sections: [
      {
        title: "作っているもの",
        description:
          "インフラ寄りのプロダクト、開発者ツール、そして素早く出せても壊れにくいフルスタックアプリに取り組むことが多いです。",
      },
      {
        title: "関心領域",
        description:
          "最近は Cloudflare Workers、Go サービス、React と TypeScript のアプリ、AI を組み込んだワークフロー、そして DNS・CDN・エッジ配信まわりの調査に多くの時間を使っています。",
      },
      {
        title: "発信のしかた",
        description:
          "コードの大半は GitHub に置き、少し長い考えはジャーナルに書いています。プロダクト、ツール、エッジシステムの話なら X がいちばん早いです。",
      },
    ],
    points: [
      "smail を作り、速度と一時利用のしやすさ、信頼感のある体験を意識して改善し続けています。",
      "hostc を通じて、localhost トンネルをもっとシンプルでエッジネイティブなものにしようとしています。",
      "引き続き Go サービスを書きつつ、DNS・CDN・エッジ配信の仕組みも調べています。その上で、ローカル AI や Tauri 製デスクトップ製品も試しています。",
      "このサイトを、プロジェクト、技術メモ、プロダクト設計の考え方をまとめる場所として使っています。",
    ],
  },
  es: {
    badge: "Sobre akazwz",
    title:
      "Construyo herramientas para desarrolladores, productos edge-native y software práctico que sigue siendo útil con el tiempo.",
    description:
      "La mayor parte de mi trabajo se mueve entre tooling open source, infraestructura web moderna y pequeños productos que resuelven problemas reales de workflow. Este sitio reúne esos proyectos, textos e ideas.",
    journalCta: "Leer el blog",
    homeCta: "Volver al inicio",
    highlightBadge: "Contexto de trabajo",
    highlightTitle:
      "El hilo conductor es simple: construir cosas útiles, mantener la pila entendible y compartir lo que realmente vale la pena reutilizar.",
    pointLabel: "Punto",
    sections: [
      {
        title: "Qué construyo",
        description:
          "Suelo trabajar en productos con sabor a infraestructura, herramientas para desarrolladores y aplicaciones full-stack que puedan salir rápido sin volverse frágiles.",
      },
      {
        title: "Foco actual",
        description:
          "Ahora mismo dedico la mayor parte de mi tiempo a Cloudflare Workers, servicios en Go, aplicaciones con React y TypeScript, workflows asistidos por IA e investigación sobre DNS, CDN y edge delivery.",
      },
      {
        title: "Cómo comparto",
        description:
          "La mayor parte del código va a GitHub. Las ideas más largas van al blog. Si quieres hablar de producto, tooling o sistemas edge, X suele ser la vía más rápida.",
      },
    ],
    points: [
      "Construyo y mantengo smail, un producto de correo temporal pensado para sentirse rápido, desechable y confiable.",
      "Creé hostc para hacer que los túneles de localhost sean más simples y más naturales dentro de un flujo edge-native.",
      "Sigo escribiendo servicios en Go y dedicando tiempo a investigar DNS, CDN y edge delivery, junto con IA local y productos de escritorio con Tauri.",
      "Uso este sitio como lugar para publicar proyectos, notas técnicas y la forma de pensar detrás de esos productos.",
    ],
  },
  fr: {
    badge: "À propos de akazwz",
    title:
      "Je construis des outils pour développeurs, des produits edge-native et des logiciels pratiques qui restent utiles dans la durée.",
    description:
      "Mon travail se situe surtout entre le tooling open source, l’infrastructure web moderne et de petits produits conçus pour résoudre de vrais problèmes de workflow. Ce site rassemble ces projets, ces textes et les idées qui les relient.",
    journalCta: "Lire le journal",
    homeCta: "Retour à l’accueil",
    highlightBadge: "Contexte de travail",
    highlightTitle:
      "Le fil conducteur est simple : construire des choses utiles, garder une stack compréhensible et partager ce qui mérite vraiment d’être réutilisé.",
    pointLabel: "Point",
    sections: [
      {
        title: "Ce que je construis",
        description:
          "Je travaille le plus souvent sur des produits proches de l’infrastructure, des outils pour développeurs et des applications full-stack capables de sortir vite sans devenir fragiles.",
      },
      {
        title: "Focales actuelles",
        description:
          "En ce moment, je passe surtout du temps sur Cloudflare Workers, des services en Go, des applications React et TypeScript, des workflows assistés par l’IA et des recherches autour du DNS, des CDN et de la distribution edge.",
      },
      {
        title: "Comment je partage",
        description:
          "La majorité du code va sur GitHub. Les réflexions plus longues vont dans le journal. Si vous voulez parler produit, tooling ou systèmes edge, X reste le moyen le plus rapide.",
      },
    ],
    points: [
      "Je construis et maintiens smail, un produit d’e-mail temporaire pensé pour être rapide, jetable et digne de confiance.",
      "J’ai créé hostc pour rendre les tunnels localhost plus simples et plus naturels dans un workflow edge-native.",
      "Je continue d’écrire des services en Go et de consacrer du temps à la recherche sur le DNS, les CDN et la distribution edge, tout en explorant l’IA locale et les produits desktop avec Tauri.",
      "J’utilise ce site comme espace pour publier des projets, des notes techniques et la manière dont ces produits prennent forme.",
    ],
  },
} as const;

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = aboutCopy[locale];

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
