import type { Messages } from "./schema";

const messages = {
  header: {
    about: "关于",
    projects: "项目",
    journal: "博客",
    language: "语言",
    tagline: "全栈开发者与开源创作者。",
  },
  home: {
    heroTitle: "全栈开发者，持续构建，也持续开源。",
    heroDescription:
      "这里是 akazwz 的个人网站，记录我做过的开源项目，比如 smail、hostc，以及一些 AI 实验和持续更新的开发札记。",
    aboutCta: "关于我",
    journalCta: "阅读博客",
    focusBadge: "关注方向",
    focusTitle: "工程、开源，以及对边缘计算的持续探索。",
    latestBadge: "最近写作",
    latestTitle: "一些关于软件、设计与克制构建的最近记录。",
    allPostsLabel: "查看博客",
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
  about: {
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
  projects: {
    badge: "代表项目",
    title: "这些年里，我做过、写过、或者认真尝试过的一些东西。",
    description:
      "这里收集了开源工具、个人项目和一些实验。有的已经稳定，有的仍在继续，也有一些只是为了学清楚一件事。",
    archiveBadge: "项目",
    archiveTitle: "我做过的一些东西。",
    entries: [
      {
        name: "smail",
        description: "临时邮箱服务，为隐私保护、测试和临时流程提供一次性邮箱地址。",
        link: "https://github.com/akazwz/smail",
        year: "2024",
        tags: ["TypeScript", "Fullstack", "900+ Stars"],
      },
      {
        name: "hostc",
        description:
          "把 localhost 带到边缘网络。基于 Cloudflare Workers 的安全、快速、零配置隧道工具。",
        link: "https://github.com/akazwz/hostc",
        year: "2024",
        tags: ["TypeScript", "Cloudflare Workers", "CLI"],
      },
      {
        name: "openchat-monorepo",
        description:
          "一个现代化的全栈 AI Chatbot 应用，结合 React、Cloudflare Workers、Connect RPC 和 Tauri。",
        link: "https://github.com/akazwz/openchat-monorepo",
        year: "2023",
        tags: ["React", "Tauri", "RPC", "Cloudflare"],
      },
      {
        name: "workersai",
        description:
          "基于 Cloudflare 构建的全栈 AI 聊天平台，使用 Workers、Durable Objects、KV 和 AI Gateway。",
        link: "https://github.com/akazwz/workersai",
        year: "2023",
        tags: ["TypeScript", "AI", "Cloudflare Workers"],
      },
      {
        name: "openchat-go",
        description: "一个简单易用的后端学习示例，帮助快速用 Golang 开发并集成 AI 能力。",
        link: "https://github.com/akazwz/openchat-go",
        year: "2023",
        tags: ["Go", "AI", "Backend"],
      },
      {
        name: "mlx-live",
        description: "一个基于 MLX 的本地实时语音助手示例，用来探索 Apple Silicon 上的端侧 AI。",
        link: "https://github.com/akazwz/mlx-live",
        year: "2024",
        tags: ["MLX", "AI", "Voice"],
      },
    ],
  },
  blogIndex: {
    badge: "博客",
    title: "写作与记录",
    description: "关于软件、设计，以及尽量克制地做东西的一些笔记。",
    latestBadge: "最新",
    featuredTitle: "精选文章",
    moreBadge: "更多",
    previousEntriesTitle: "更多记录",
    writtenBy: "作者",
    minuteReadLabel: "分钟阅读",
    minuteShortLabel: "分钟",
    footer: "慢慢写，认真写。",
    emptyTitle: "还没有文章",
    emptyDescription: "写作内容会慢慢补上。",
  },
  blogPost: {
    backToJournal: "← 返回博客列表",
    minuteReadLabel: "分钟阅读",
  },
  error: {
    message: "出了点问题",
    unexpected: "发生了一个未预期的错误。",
    errorLabel: "错误",
    notFoundDetails: "你访问的页面不存在。",
  },
  meta: {
    home: {
      title: "首页 | akazwz",
      description: "akazwz 的个人网站，记录开源项目、技术实验与长期写作。",
    },
    about: {
      title: "关于 | akazwz",
      description: "关于 akazwz、本网站的关注方向，以及这里收集的工作。",
    },
    projects: {
      title: "项目 | akazwz",
      description: "akazwz 做过的一些产品、工具、实验与开源项目。",
    },
    blog: {
      title: "博客 | akazwz",
      description: "关于软件、设计，以及尽量克制地做东西的一些笔记。",
    },
    blogPostNotFoundTitle: "文章未找到 | akazwz",
  },
} as const satisfies Messages;

export default messages;
