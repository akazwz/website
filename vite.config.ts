import { cloudflare } from "@cloudflare/vite-plugin";
import solid from "@solidjs/vite-plugin";
import stylex from "@stylexjs/unplugin";
import { fileRoutes } from "filesystem-routing/vite";
import { sitemap } from "prerender-crawler";
import { prerender } from "prerender-crawler/vite";
import { rmSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import { content } from "./tools/content.ts";
import { site } from "./src/site.ts";

// The client build's manifest (.vite/manifest.json) is read by the server build and the
// prerender, and by nothing after them. It is removed so it does not deploy with the site.
function dropManifest(): Plugin {
  return {
    name: "drop-manifest",
    apply: "build",
    buildApp: {
      order: "post",
      async handler(builder) {
        const client = builder.environments["client"];
        if (!client) return;
        rmSync(resolve(builder.config.root, client.config.build.outDir, ".vite"), {
          recursive: true,
          force: true,
        });
      },
    },
  };
}

export default defineConfig({
  plugins: [
    // StyleX must compile before Solid transforms JSX.
    stylex.vite({
      useCSSLayers: true,
      // The plugin appends its rules to the built CSS after Vite has minified it, and
      // leaves them pretty-printed unless told to minify them itself.
      lightningcssOptions: { minify: true },
    }),
    // `virtual:posts`: the Markdown under content/posts, parsed at build time.
    content(),
    // SSR start mode, so every page can be rendered to HTML; `prerender` below does that at
    // build time and nothing runs on a server in production. `async` waits for every
    // <Loading> to settle, so a page's HTML carries its content, not a fallback.
    // `extensions` also compiles the `?pick=` route modules that fileRoutes emits.
    solid({
      start: { renderMode: "async" },
      ssr: true,
      extensions: [".jsx", ".tsx"],
      diagnostics: true,
    }),
    // Scans src/routes and writes file-routes.d.ts, which types `paths` in src/router.ts.
    // The pages are thin, so they ship as one bundle: changing page waits for nothing but a
    // post's body, which stays a chunk of its own (see tools/content.ts).
    fileRoutes({ types: true, codeSplitting: false }),
    // Renders every page reachable by a link from the seeds into dist/client, and lists
    // them in sitemap.xml (pages marked `noindex`, like the 404 pages, are left out).
    // One page at a time: concurrent renders have mixed pages up on earlier Solid releases.
    prerender({
      mode: "static",
      // The host answers an address it has no file for with the nearest 404.html.
      pages: [
        "/",
        "/zh",
        { path: "/404", filename: "404.html" },
        { path: "/zh/404", filename: "zh/404.html" },
      ],
      concurrency: 1,
      integrations: [sitemap({ hostname: site.origin })],
    }),
    dropManifest(),
    // Deployment to Cloudflare, configured in cloudflare.config.ts. With no Worker
    // entrypoint there, it builds no Worker: it describes dist/client as the site's assets
    // for `cf deploy`.
    cloudflare(),
  ],
  builder: {
    // One set of plugin instances for every environment. Solid's plugin records where the
    // client build was written and reads its manifest from there when building the server;
    // with a set per environment the server side never sees it, falls back to dist/client,
    // and the Cloudflare plugin has moved the client build elsewhere: pages would render
    // with no stylesheet and no script.
    sharedPlugins: true,
  },
  server: {
    // Print the browser's console warnings and errors, Solid's diagnostics among them, in
    // the dev server's log. Vite only does this by itself when it detects a coding agent.
    forwardConsole: true,
  },
});
