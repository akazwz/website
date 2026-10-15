import { getRequestEvent, HydrationScript, isServer } from "@solidjs/web";
import type { ParentProps } from "solid-js";
import { localeInfo, localeOf } from "./i18n/locale.ts";
import { site } from "./site.ts";

// The address being rendered: the request's at build time, the window's in the browser.
// Both sides must write the same document, or hydration falls out of step.
function pathname() {
  return isServer
    ? new URL(getRequestEvent()?.request.url ?? "http://localhost/").pathname
    : location.pathname;
}

// The document shell. It is rendered with every page at build time and hydrated with it in
// the browser. The title here is the fallback; each page sets its own head tags through
// src/components/Head.tsx.
export default function Document(props: ParentProps) {
  return (
    <html lang={localeInfo[localeOf(pathname())].tag}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <title>{site.name}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <HydrationScript />
        {/* Without index.html, the StyleX plugin cannot inject its dev stylesheet and HMR runtime. */}
        {import.meta.env.DEV && (
          <>
            <link rel="stylesheet" href="/virtual:stylex.css" />
            <script type="module" src="/@id/virtual:stylex:runtime" />
          </>
        )}
      </head>
      <body>{props.children}</body>
    </html>
  );
}
