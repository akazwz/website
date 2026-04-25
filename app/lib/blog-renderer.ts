import { marked } from "marked";

marked.use({
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const sizes: Record<number, string> = {
        2: "font-heading text-2xl font-semibold mt-10 mb-4 tracking-tight",
        3: "font-heading text-xl font-semibold mt-8 mb-3 tracking-tight",
      };
      const cls = sizes[depth] ?? "font-heading text-lg font-semibold mt-6 mb-2";
      return `<h${depth} class="${cls}">${text}</h${depth}>\n`;
    },
    paragraph({ tokens }) {
      const text = this.parser.parseInline(tokens);
      return `<p class="text-foreground/80 leading-[1.9] text-[1.05rem] mb-5">${text}</p>\n`;
    },
    list({ ordered, start, items }) {
      const tag = ordered ? "ol" : "ul";
      const cls = ordered ? "list-decimal ml-6 mb-5 space-y-1" : "list-disc ml-6 mb-5 space-y-1";
      const startAttr = ordered && start !== 1 ? ` start="${start}"` : "";
      const body = items.map((item) => this.listitem(item)).join("");
      return `<${tag}${startAttr} class="${cls}">${body}</${tag}>\n`;
    },
    listitem(item) {
      const text = this.parser.parse(item.tokens);
      return `<li class="text-foreground/80 leading-relaxed">${text}</li>\n`;
    },
    blockquote({ tokens }) {
      const text = this.parser.parse(tokens);
      return `<blockquote class="border-l-2 border-border pl-5 italic text-muted-foreground mb-5">${text}</blockquote>\n`;
    },
    code({ text, lang }) {
      const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const langClass = lang ? ` class="language-${lang}"` : "";
      return `<pre class="bg-secondary rounded p-4 overflow-x-auto mb-5 text-sm"><code${langClass}>${escaped}</code></pre>\n`;
    },
    strong({ tokens }) {
      const text = this.parser.parseInline(tokens);
      return `<strong class="font-semibold text-foreground">${text}</strong>`;
    },
  },
});

export function renderMarkdown(markdown: string): string {
  return marked(markdown) as string;
}
