# akazwz.com

The personal site of akazwz: writing, projects, and a little about me, in English and Chinese.

Built with [Solid 2](https://github.com/solidjs/solid) and [StyleX](https://stylexjs.com), prerendered to static HTML at build time, and served from Cloudflare.

## Requirements

Node.js 26 and pnpm 12. The exact versions are in `mise.toml`; with [mise](https://mise.jdx.dev), `mise trust && mise install` sets them up.

## Commands

```sh
pnpm install
pnpm dev
```

| Command        | What it does                                                     |
| -------------- | ---------------------------------------------------------------- |
| `pnpm dev`     | Dev server with hot reload                                       |
| `pnpm build`   | `cf build`: prerenders every page into `.cloudflare/output/`     |
| `pnpm preview` | Serves the build in workerd, the way Cloudflare will             |
| `pnpm deploy`  | `cf deploy`: builds and deploys (sign in first: `cf auth login`) |
| `pnpm check`   | Format check (oxfmt), type check (tsc), and lint (oxlint)        |
| `pnpm format`  | Formats the sources                                              |

## Writing a post

Add `content/posts/<slug>.md` (English, at `/blog/<slug>`) and, for a Chinese version, `content/posts/zh/<slug>.md` (at `/zh/blog/<slug>`):

```md
---
title: The title
date: 2026-10-14
category: Product
excerpt: One or two sentences for the list and the link preview.
readingTime: 5
---

The body, in Markdown. Sections start with `##`.
```

The build parses posts with Markdoc and fails on anything the page has no style for, naming the file.

## Layout

```text
cloudflare.config.ts   Deployment: assets only, routes, 404 handling
vite.config.ts         StyleX, content, Solid (SSR start mode), file routes, prerender, Cloudflare
tools/content.ts       Turns content/posts into `virtual:posts`
content/posts/         The posts, English at the top level, Chinese under zh/
public/                Files served as they are (favicon, robots.txt, _headers)
src/
  Document.tsx         The document shell
  App.tsx              Header, page, footer
  routes/[[lang]]/     The pages, each answering /path and /zh/path
  components/          Site-specific pieces: header, footer, lists, head tags
  ui/                  The site's own component library and design tokens
  i18n/                Languages, interface text, date formatting
  content/             Post types, the projects list, post body loading
docs/                  Notes on Solid 2 + StyleX and on the web platform
```

How the code is written and checked is in [AGENTS.md](AGENTS.md).
