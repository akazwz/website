# akazwz.com

Personal website and blog built with the modern React ecosystem and deployed to the edge.

## Tech Stack

- **Framework**: [React Router v7](https://reactrouter.com/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/)

## Features

- **Static Site Generation (SSG)**: Fully prerendered for maximum performance and SEO.
- **Internationalization (i18n)**: Built-in support for multiple languages (English, Spanish, French, Japanese, Chinese).
- **Markdown Blog**: Content authored in Markdown with frontmatter.
- **Optimized Code Splitting**: Custom Vite plugin extracts frontmatter at build time, ensuring the worker bundle remains minimal while Markdown content is lazy-loaded on demand as separate chunks.
- **Edge Deployment**: Runs globally on Cloudflare's edge network.

## Development

### Prerequisites

- Node.js (v22+)
- pnpm

### Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm run dev
   ```

### Building for Production

To build the application and prerender static routes:

```bash
pnpm run build
```

### Deployment

To deploy to Cloudflare Workers:

```bash
pnpm run deploy
```

## Architecture Notes

### Markdown Code Splitting

To prevent the Cloudflare Worker bundle from exceeding the 1MB size limit, the project uses a custom dual-glob strategy:

1. A custom Vite plugin extracts YAML frontmatter (`?frontmatter`) eagerly to render blog listings instantly.
2. The full Markdown content (`?raw`) is dynamically imported only when a specific blog post is visited, splitting it into separate lazy-loaded chunks.
