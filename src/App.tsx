import * as stylex from "@stylexjs/stylex";
import { createEffect, Loading, type ParentProps } from "solid-js";
import { SiteFooter } from "./components/SiteFooter.tsx";
import { SiteHeader } from "./components/SiteHeader.tsx";
import { localeInfo } from "./i18n/locale.ts";
import { useLocale } from "./i18n/use.ts";
import { Router } from "./router.ts";
import { color, font, text } from "./ui/tokens.stylex.ts";
import "./global.css";

const styles = stylex.create({
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100dvh",
    backgroundColor: color.bg,
    color: color.text,
    fontFamily: font.body,
    fontSize: text.md,
    lineHeight: 1.6,
  },
});

// What stays on screen whatever the address: the page's ground, header and footer.
function Shell(props: ParentProps) {
  const locale = useLocale();
  // The document's language follows the page when the router moves between languages
  // without loading a new document. The first one is in the HTML (src/Document.tsx).
  createEffect(
    () => localeInfo[locale()].tag,
    (tag) => {
      document.documentElement.lang = tag;
    },
  );

  return (
    <div {...stylex.attrs(styles.app)}>
      <SiteHeader />
      {/* Waits for what a page loads before it can draw: a post's body. */}
      <Loading>{props.children}</Loading>
      <SiteFooter />
    </div>
  );
}

export default function App() {
  return <Router>{(props) => <Shell>{props.children}</Shell>}</Router>;
}
