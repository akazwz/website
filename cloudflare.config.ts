import { defineConfig, triggers } from "cf/config";

// How the site is deployed to Cloudflare, read by `cf`. The site is static: every page is
// prerendered at build time (see vite.config.ts), so there is no Worker entrypoint, only
// assets: the client build in dist/client.
export default defineConfig({
  worker: {
    name: "akazwz",
    compatibilityDate: "2026-10-14",
    assets: {
      // /about is about/index.html, served without a trailing slash.
      htmlHandling: "drop-trailing-slash",
      // An address with no file gets the nearest 404.html with a 404 status: zh/404.html
      // under /zh, 404.html elsewhere.
      notFoundHandling: "404-page",
    },
    triggers: [triggers.fetch({ pattern: "akazwz.com/*", zone: "akazwz.com" })],
    // Served on akazwz.com only, not on a workers.dev subdomain as well.
    workersDev: false,
  },
});
