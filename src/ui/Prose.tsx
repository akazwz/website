import type { JSX } from "@solidjs/web";
import * as stylex from "@stylexjs/stylex";
import type { MarkdownNode } from "../content/types.ts";
import { base } from "./base.ts";
import { color, font, radius, space, text } from "./tokens.stylex.ts";

const styles = stylex.create({
  root: {
    color: color.text,
    fontSize: text.prose,
    lineHeight: 1.75,
    overflowWrap: "break-word",
  },
  h2: {
    marginBlockStart: { default: space.xxl, ":first-child": 0 },
    marginBlockEnd: space.md,
    fontSize: text.lg,
    fontWeight: 600,
    letterSpacing: "-0.01em",
    lineHeight: 1.4,
    textWrap: "balance",
    // Clear of the top of the window when the outline jumps to it.
    scrollMarginTop: space.xl,
  },
  h3: {
    marginBlockStart: space.xl,
    marginBlockEnd: space.sm,
    fontSize: text.md,
    fontWeight: 600,
    lineHeight: 1.5,
    scrollMarginTop: space.xl,
  },
  p: {
    marginBlock: 0,
    marginBlockEnd: space.lg,
    textWrap: "pretty",
  },
  list: {
    marginBlock: 0,
    marginBlockEnd: space.lg,
    paddingInlineStart: space.xl,
  },
  li: {
    marginBlockEnd: space.xs,
    paddingInlineStart: space.xs,
    "::marker": { color: color.muted },
  },
  a: {
    borderRadius: radius.xs,
    color: color.text,
    textDecorationLine: "underline",
    textDecorationThickness: "1px",
    textUnderlineOffset: "0.25em",
    textDecorationColor: { default: color.outline, ":hover": color.text },
  },
  strong: { fontWeight: 600 },
  code: {
    paddingBlock: "0.1em",
    paddingInline: "0.35em",
    borderRadius: radius.xs,
    backgroundColor: color.hover,
    fontFamily: font.mono,
    fontSize: "0.88em",
  },
  pre: {
    marginBlock: 0,
    marginBlockEnd: space.lg,
    paddingBlock: space.lg,
    paddingInline: space.lg,
    overflowX: "auto",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: color.line,
    borderRadius: radius.sm,
    backgroundColor: color.hover,
    fontFamily: font.mono,
    fontSize: "0.875rem",
    lineHeight: 1.65,
  },
  blockquote: {
    marginBlock: 0,
    marginBlockEnd: space.lg,
    marginInline: 0,
    paddingInlineStart: space.lg,
    borderInlineStartWidth: "2px",
    borderInlineStartStyle: "solid",
    borderInlineStartColor: color.line,
    color: color.muted,
  },
  hr: {
    marginBlock: space.xxl,
    borderWidth: 0,
    borderBlockStartWidth: "1px",
    borderBlockStartStyle: "solid",
    borderBlockStartColor: color.line,
  },
});

type Props = {
  // The body, as tools/content.ts parsed it.
  nodes: MarkdownNode[];
  // Where a link in the body goes. Defaults to the address as written.
  resolveHref?: (href: string) => string;
  xstyle?: stylex.StyleXStyles;
};

// Running text from Markdown: a post's body. Each element the parser can produce has its
// own style here; the build refuses a post that produces any other (see tools/content.ts).
export function Prose(props: Props) {
  const nodes = (list: MarkdownNode[]): JSX.Element => list.map(node);

  const node = (item: MarkdownNode): JSX.Element => {
    if (typeof item === "string") return item;
    const children = nodes(item.children);
    const id = item.attributes["id"];
    switch (item.name) {
      case "h2":
        return (
          <h2 id={id} {...stylex.attrs(styles.h2)}>
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3 id={id} {...stylex.attrs(styles.h3)}>
            {children}
          </h3>
        );
      case "p":
        return <p {...stylex.attrs(styles.p)}>{children}</p>;
      case "ul":
        return <ul {...stylex.attrs(styles.list)}>{children}</ul>;
      case "ol":
        return <ol {...stylex.attrs(styles.list)}>{children}</ol>;
      case "li":
        return <li {...stylex.attrs(styles.li)}>{children}</li>;
      case "a": {
        const href = item.attributes["href"] ?? "";
        return (
          <a
            href={props.resolveHref ? props.resolveHref(href) : href}
            {...stylex.attrs(styles.a, base.focusRing)}
          >
            {children}
          </a>
        );
      }
      case "strong":
        return <strong {...stylex.attrs(styles.strong)}>{children}</strong>;
      case "em":
        return <em>{children}</em>;
      case "s":
        return <s>{children}</s>;
      case "code":
        return <code {...stylex.attrs(styles.code)}>{children}</code>;
      case "pre":
        return (
          // Scrolls sideways on its own, so it takes keyboard focus to be scrolled with keys.
          <pre tabindex="0" {...stylex.attrs(styles.pre, base.focusRing)}>
            <code>{children}</code>
          </pre>
        );
      case "blockquote":
        return <blockquote {...stylex.attrs(styles.blockquote)}>{children}</blockquote>;
      case "hr":
        return <hr {...stylex.attrs(styles.hr)} />;
      case "br":
        return <br />;
      default:
        return children;
    }
  };

  return <div {...stylex.attrs(styles.root, props.xstyle)}>{nodes(props.nodes)}</div>;
}
