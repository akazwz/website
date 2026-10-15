import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve } from "node:path";
// The package is CommonJS: Node, loading the Vite config, only takes its default import.
import Markdoc, { type Config, type RenderableTreeNode } from "@markdoc/markdoc";
import type { Plugin } from "vite";
import type { Locale, MarkdownNode, PostBody, PostSummary } from "../src/content/types.ts";

// The posts, from Markdown files with frontmatter:
//
//   content/posts/<slug>.md      English, at /blog/<slug>
//   content/posts/zh/<slug>.md   Chinese, at /zh/blog/<slug>
//
// `virtual:posts` exports every post's summary, newest first, and a loader per post that
// imports its body as a chunk of its own. Markdoc parses the body here, at build time, into
// a plain tree (src/content/types.ts), so no parser ships to the browser and the page draws
// the post with its own components.

const ID = "virtual:posts";
const RESOLVED = `\0${ID}`;
const BODY_QUERY = "?post-body";

// The elements src/ui/Prose.tsx draws. A post that renders to anything else fails the
// build with its name, rather than losing that part on the page.
export const proseElements = new Set([
  "h2",
  "h3",
  "p",
  "ul",
  "ol",
  "li",
  "a",
  "strong",
  "em",
  "s",
  "code",
  "pre",
  "blockquote",
  "hr",
  "br",
]);

const required = ["title", "date", "category", "excerpt", "readingTime"] as const;

export function content(options: { dir?: string } = {}): Plugin {
  let dir = "";

  return {
    name: "content",
    configResolved(config) {
      dir = resolve(config.root, options.dir ?? "content/posts");
    },
    resolveId(id) {
      return id === ID ? RESOLVED : undefined;
    },
    load(id) {
      if (id === RESOLVED) {
        const files = postFiles(dir);
        for (const file of files) this.addWatchFile(file.path);
        const summaries = files
          .map((file) => summarize(file, readFileSync(file.path, "utf8")))
          .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
        const loaders = files
          .map(
            (file) =>
              `${JSON.stringify(`${file.locale}/${file.slug}`)}: () => import(${JSON.stringify(file.path + BODY_QUERY)})`,
          )
          .join(",\n  ");
        return [
          `export const posts = ${JSON.stringify(summaries)};`,
          `export const bodies = {\n  ${loaders}\n};`,
        ].join("\n");
      }
      if (id.endsWith(`.md${BODY_QUERY}`)) {
        const path = id.slice(0, -BODY_QUERY.length);
        this.addWatchFile(path);
        const body = parseBody(readFileSync(path, "utf8"), relative(dir, path));
        return `export default ${JSON.stringify(body)};`;
      }
      return undefined;
    },
    configureServer(server) {
      // A post added or removed changes the list itself: rebuild it and reload the page.
      const refresh = (file: string) => {
        if (!file.startsWith(dir) || !file.endsWith(".md")) return;
        for (const environment of Object.values(server.environments)) {
          const module = environment.moduleGraph.getModuleById(RESOLVED);
          if (module) environment.moduleGraph.invalidateModule(module);
        }
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", refresh);
      server.watcher.on("unlink", refresh);
    },
  };
}

type PostFile = { locale: Locale; slug: string; path: string };

function postFiles(dir: string): PostFile[] {
  // No folder is no posts: the site hides its writing until there is some.
  const list = (folder: string, locale: Locale) =>
    (existsSync(folder) ? readdirSync(folder, { withFileTypes: true }) : [])
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => ({ locale, slug: entry.name.slice(0, -3), path: join(folder, entry.name) }));
  return [...list(dir, "en"), ...list(join(dir, "zh"), "zh")];
}

// The frontmatter is flat `key: value` lines; Markdoc hands it over as it was written.
function frontmatter(source: string): Record<string, string> {
  const raw = Markdoc.parse(source).attributes["frontmatter"];
  const data: Record<string, string> = {};
  if (typeof raw !== "string") return data;
  for (const line of raw.split(/\r?\n/)) {
    const colon = line.indexOf(":");
    if (colon < 0) continue;
    data[line.slice(0, colon).trim()] = line
      .slice(colon + 1)
      .trim()
      .replace(/^(["'])(.*)\1$/, "$2");
  }
  return data;
}

function summarize(file: PostFile, source: string): PostSummary {
  const data = frontmatter(source);
  const name = `${file.locale}/${file.slug}.md`;
  for (const key of required) {
    if (!data[key]) throw new Error(`${name}: the frontmatter has no "${key}"`);
  }
  const date = data.date ?? "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`${name}: "date" is not YYYY-MM-DD`);
  const readingTime = Number(data.readingTime);
  if (!Number.isInteger(readingTime) || readingTime < 1) {
    throw new Error(`${name}: "readingTime" is not a whole number of minutes`);
  }
  return {
    locale: file.locale,
    slug: file.slug,
    title: data.title ?? "",
    date,
    category: data.category ?? "",
    excerpt: data.excerpt ?? "",
    readingTime,
  };
}

function textOf(nodes: MarkdownNode[]): string {
  return nodes.map((node) => (typeof node === "string" ? node : textOf(node.children))).join("");
}

function parseBody(source: string, name: string): PostBody {
  const outline: PostBody["outline"] = [];
  const ids = new Map<string, number>();

  // Headings carry an id, so a section can be linked to and listed in the outline.
  const config: Config = {
    nodes: {
      heading: {
        ...Markdoc.nodes.heading,
        transform(node, config) {
          const level = node.attributes["level"] as number;
          if (level !== 2 && level !== 3) {
            throw new Error(
              `${name}: only ## and ### headings are supported (line ${node.lines[0]})`,
            );
          }
          const children = node.transformChildren(config);
          const text = textOf(toNodes(children));
          const base =
            text
              .toLowerCase()
              .replace(/[^\p{L}\p{N}\s-]/gu, "")
              .trim()
              .replace(/\s+/g, "-") || "section";
          const seen = ids.get(base) ?? 0;
          ids.set(base, seen + 1);
          const id = seen ? `${base}-${seen + 1}` : base;
          if (level === 2) outline.push({ id, text });
          return new Markdoc.Tag(`h${level}`, { id }, children);
        },
      },
    },
  };

  const ast = Markdoc.parse(source);
  const errors = Markdoc.validate(ast, config).filter(
    (error) => error.error.level === "error" || error.error.level === "critical",
  );
  if (errors.length) {
    const lines = errors.map((error) => `  line ${error.lines[0]}: ${error.error.message}`);
    throw new Error(`${name}:\n${lines.join("\n")}`);
  }

  // The root is an <article>; the page draws its own, so only its content is kept.
  const nodes = toNodes(Markdoc.transform(ast, config)).flatMap((node) =>
    typeof node !== "string" && node.name === "article" ? node.children : [node],
  );
  const check = (node: MarkdownNode) => {
    if (typeof node === "string") return;
    if (!proseElements.has(node.name)) {
      throw new Error(`${name}: Markdown that renders as <${node.name}> is not supported`);
    }
    node.children.forEach(check);
  };
  nodes.forEach(check);
  return { nodes, outline };
}

function toNodes(node: RenderableTreeNode | RenderableTreeNode[]): MarkdownNode[] {
  if (Array.isArray(node)) return node.flatMap(toNodes);
  if (node === null || node === undefined || typeof node === "boolean") return [];
  if (Markdoc.Tag.isTag(node)) {
    const attributes: Record<string, string> = {};
    for (const [key, value] of Object.entries(node.attributes)) {
      if (typeof value === "string") attributes[key] = value;
    }
    return [{ name: node.name, attributes, children: toNodes(node.children) }];
  }
  if (typeof node === "string" || typeof node === "number") return [String(node)];
  // Markdoc renders only tags and text for Markdown; anything else is not content.
  throw new Error(`Unexpected node in a Markdoc render tree: ${JSON.stringify(node)}`);
}
