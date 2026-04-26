import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import { defineConfig } from "vite-plus";

import { cloudflare } from "@cloudflare/vite-plugin";

function markdownFrontmatterPlugin() {
  return {
    name: "vite-plugin-markdown-frontmatter",
    async load(id: string) {
      if (id.endsWith(".md?frontmatter")) {
        const filePath = id.replace(/\?frontmatter$/, "");
        const raw = await fs.promises.readFile(filePath, "utf-8");
        const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
        let data = {};
        if (match) {
          data = Object.fromEntries(
            match[1]
              .split(/\r?\n/)
              .filter(Boolean)
              .map((line) => {
                const separatorIndex = line.indexOf(":");
                const key = line.slice(0, separatorIndex).trim();
                const value = line
                  .slice(separatorIndex + 1)
                  .trim()
                  .replace(/^(["'])(.*)\1$/, "$2");
                return [key, value];
              }),
          );
        }
        return `export default ${JSON.stringify(data)};`;
      }
    },
  };
}

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [
    tailwindcss(),
    reactRouter(),
    markdownFrontmatterPlugin(),
    cloudflare({
      viteEnvironment: {
        name: "ssr",
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
