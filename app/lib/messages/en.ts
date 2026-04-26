import type { Messages } from "./schema";

const messages = {
  header: {
    about: "About",
    projects: "Projects",
    journal: "Journal",
    language: "Language",
    tagline: "Full-stack developer & open-source creator.",
  },
  home: {
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
  about: {
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
  projects: {
    badge: "Selected Work",
    title: "Things I've built, written, or experimented with over the years.",
    description:
      "A collection of open-source tools, side projects, and experiments. Some are shipping, some are evolving, and some were built to learn something new.",
    archiveBadge: "Projects",
    archiveTitle: "An archive of my creations.",
    entries: [
      {
        name: "smail",
        description:
          "Temporary email service that provides disposable inboxes for privacy, testing, and quick workflows.",
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
          "A modern full-stack AI chatbot application built with React, Cloudflare Workers, Connect RPC, and Tauri.",
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
        description:
          "A small, approachable backend example for learning Golang while integrating AI capabilities.",
        link: "https://github.com/akazwz/openchat-go",
        year: "2023",
        tags: ["Go", "AI", "Backend"],
      },
      {
        name: "mlx-live",
        description:
          "A local real-time voice assistant example built on MLX to explore on-device AI on Apple Silicon.",
        link: "https://github.com/akazwz/mlx-live",
        year: "2024",
        tags: ["MLX", "AI", "Voice"],
      },
    ],
  },
  blogIndex: {
    badge: "Journal",
    title: "The Journal",
    description: "Notes on software, design, and building with restraint.",
    latestBadge: "Latest",
    featuredTitle: "Featured post",
    moreBadge: "More",
    previousEntriesTitle: "Previous entries",
    writtenBy: "By",
    minuteReadLabel: "min read",
    minuteShortLabel: "min",
    footer: "Written slowly, with care.",
    emptyTitle: "No posts yet",
    emptyDescription: "Writing is on the way.",
  },
  blogPost: {
    backToJournal: "← Back to Journal",
    minuteReadLabel: "min read",
    returnToPosts: "← Return to all posts",
  },
  error: {
    message: "Oops!",
    unexpected: "An unexpected error occurred.",
    errorLabel: "Error",
    notFoundDetails: "The requested page could not be found.",
  },
  meta: {
    home: {
      title: "akazwz",
      description:
        "Personal site of akazwz, covering open-source work, experiments, and long-form writing.",
    },
    about: {
      title: "About | akazwz",
      description:
        "About akazwz, the focus areas behind the site, and the kind of work collected here.",
    },
    projects: {
      title: "Projects | akazwz",
      description:
        "A collection of products, tools, experiments, and open-source work built by akazwz.",
    },
    blog: {
      title: "Journal | akazwz",
      description: "Notes on software, design, and building with restraint.",
    },
    blogPostNotFoundTitle: "Post Not Found | akazwz",
  },
} as const satisfies Messages;

export default messages;
