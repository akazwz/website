import { site } from "../site.ts";
import type { Locale } from "./locale.ts";

// Every word the interface says, in each language. English defines the shape; Chinese has
// to match it, so a missing translation is a type error. Components show no text of their
// own: they read it from here.

const felinic = { text: "Felinic", href: site.felinic };

const en = {
  nav: {
    label: "Main",
    writing: "Writing",
    projects: "Projects",
    about: "About",
    home: "akazwz, home",
    skip: "Skip to content",
  },
  home: {
    title: "Hi, I'm akazwz.",
    intro: [
      "A full-stack developer. At ",
      felinic,
      " I develop Memoh, a platform for AI agents. I know Cloudflare well and have built a lot on it, like hostc and smail. Lately I wrote a Chinese chess engine, and you can play against it online.",
    ],
    latestTitle: "Writing",
    allPosts: "All posts",
    projectsTitle: "Projects",
  },
  blog: {
    title: "Writing",
    description: "What I have written, newest first.",
  },
  post: {
    back: "Writing",
    minutes: (n: number) => `${n} min read`,
    otherLanguage: "中文版",
    previous: "Previous",
    next: "Next",
  },
  projects: {
    title: "Projects",
    description: "What I am working on: AI agents at work, and products of my own.",
  },
  about: {
    title: "About",
    intro: [
      "I'm a full-stack developer. At ",
      felinic,
      " I develop Memoh, a platform for AI agents. Outside of work I build on Cloudflare, which I know well. Lately I have been working on Chinese chess with XiangqiBench: I wrote Riverpawn, a Xiangqi engine you can play against online, and I am building a benchmark that has LLMs play against it.",
    ],
    usesTitle: "Uses",
    usesIntro: "I mainly write Go and TypeScript, though these days agents write most of the code.",
    uses: [
      { name: "Claude Code", plan: "Claude Max 20x" },
      { name: "Codex", plan: "ChatGPT Pro, $200/month" },
      { name: "Kimi", plan: "Membership, ¥699/month" },
      { name: "OpenCode", plan: "OpenCode Go" },
      { name: "Devin", plan: "Devin Pro" },
    ],
    elsewhereTitle: "Elsewhere",
    telegram: "Telegram group",
  },
  notFound: {
    title: "Page not found",
    body: "There is nothing at this address. It may have moved, or never existed.",
    home: "Go to the home page",
  },
  meta: {
    description:
      "Personal site of akazwz, a full-stack developer. At Felinic I develop Memoh, a platform for AI agents. My own projects are XiangqiBench, hostc, and smail.",
    blog: "Posts by akazwz, newest first.",
    projects: "Projects by akazwz: Memoh, XiangqiBench, hostc, and smail.",
    about:
      "About akazwz: what I work on, the languages and AI coding tools I use, and where to find me.",
  },
};

export type Messages = typeof en;

const zh: Messages = {
  nav: {
    label: "主导航",
    writing: "文章",
    projects: "项目",
    about: "关于",
    home: "akazwz，首页",
    skip: "跳到正文",
  },
  home: {
    title: "你好，我是 akazwz。",
    intro: [
      "全栈开发者，在 ",
      felinic,
      " 开发 AI agent 平台 Memoh。对 Cloudflare 比较熟，在上面做了不少东西，比如 hostc 和 smail。最近写了一个中国象棋引擎，可以在线和它对弈。",
    ],
    latestTitle: "文章",
    allPosts: "全部文章",
    projectsTitle: "项目",
  },
  blog: {
    title: "文章",
    description: "我写的文章，从新到旧。",
  },
  post: {
    back: "文章",
    minutes: (n: number) => `${n} 分钟`,
    otherLanguage: "English",
    previous: "上一篇",
    next: "下一篇",
  },
  projects: {
    title: "项目",
    description: "我在做的东西：工作里的 AI agent，以及我自己的产品。",
  },
  about: {
    title: "关于",
    intro: [
      "我是一名全栈开发者，在 ",
      felinic,
      " 开发 AI agent 平台 Memoh。工作之外常在 Cloudflare 上做东西，对它比较熟。最近在做中国象棋项目 XiangqiBench：写了象棋引擎 Riverpawn，可以在线和它对弈；还在做一个让大模型和它对弈、评测棋力的 benchmark。",
    ],
    usesTitle: "在用",
    usesIntro: "主要写 Go 和 TypeScript，不过现在大部分代码交给 agent 来写。",
    uses: [
      { name: "Claude Code", plan: "Claude Max 20x" },
      { name: "Codex", plan: "ChatGPT Pro，200 美元/月" },
      { name: "Kimi", plan: "会员，699 元/月" },
      { name: "OpenCode", plan: "OpenCode Go" },
      { name: "Devin", plan: "Devin Pro" },
    ],
    elsewhereTitle: "在别处",
    telegram: "Telegram 群",
  },
  notFound: {
    title: "页面不存在",
    body: "这个地址上什么都没有。它可能已经搬走了，也可能从来没有过。",
    home: "回到首页",
  },
  meta: {
    description:
      "akazwz 的个人网站。全栈开发者，在 Felinic 开发 AI agent 平台 Memoh；自己的项目有 XiangqiBench、hostc 和 smail。",
    blog: "akazwz 写的文章，从新到旧。",
    projects: "akazwz 的项目：Memoh、XiangqiBench、hostc 和 smail。",
    about: "关于 akazwz：在做什么，用哪些语言和 AI 编程工具，以及在哪里能找到我。",
  },
};

export const messages: Record<Locale, Messages> = { en, zh };
