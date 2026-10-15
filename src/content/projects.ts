import type { Locale } from "./types.ts";

export type Project = {
  name: string;
  // The year it started.
  year: string;
  // Where the project lives: its own site when it has one, otherwise its source.
  href: string;
  // What it is made of or with, shown under the description on the projects page.
  tags: string[];
  description: Record<Locale, string>;
};

// The projects: work first, then my own, newest first. The home page and the projects page
// show them all.
// Facts are from each project's repository and site (checked 2026-10-15).
export const projects: Project[] = [
  {
    name: "Memoh",
    year: "2026",
    href: "https://memoh.ai",
    tags: ["Go", "AI agents"],
    description: {
      en: "A platform for AI agents, available open source and as a hosted service. I develop it at Felinic.",
      zh: "AI agent 平台，有开源版，也有 SaaS 版。我在 Felinic 开发它。",
    },
  },
  {
    name: "XiangqiBench",
    year: "2026",
    href: "https://xiangqibench.com",
    tags: ["Game", "Engine", "LLM benchmark"],
    description: {
      en: "Chinese chess AI: Riverpawn, an engine I wrote; a 3D game for playing against it in the browser or on macOS; and a benchmark of how well LLMs play against it, still being built.",
      zh: "中国象棋 AI：我写的引擎 Riverpawn；可以在浏览器或 macOS 上和它对弈的 3D 象棋游戏；以及评测大模型和它对弈棋力的 benchmark（还在做）。",
    },
  },
  {
    name: "hostc",
    year: "2026",
    href: "https://hostc.dev",
    tags: ["TypeScript", "Cloudflare Workers", "CLI"],
    description: {
      en: "Localhost, anywhere: one command gives your dev server a public HTTPS URL, with WebSockets and hot reload. Free, no account.",
      zh: "一条命令给本地开发服务一个公网 HTTPS 地址，支持 WebSocket 和热更新。免费，不用注册。",
    },
  },
  {
    name: "smail",
    year: "2024",
    href: "https://smail.pw",
    tags: ["Cloudflare Workers", "Durable Objects", "Solid"],
    description: {
      en: "Temporary email on Cloudflare Workers, with a real-time inbox.",
      zh: "跑在 Cloudflare Workers 上的临时邮箱，收件箱实时更新。",
    },
  },
];
