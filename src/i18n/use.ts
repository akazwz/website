import { useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";
import { localeOf } from "./locale.ts";
import { messages } from "./messages.ts";

// The language of the page being shown, from its address. Read it in JSX or a memo.
export function useLocale() {
  const location = useLocation();
  return createMemo(() => localeOf(location.pathname));
}

// The interface's words in the page's language: `t().nav.writing`.
export function useMessages() {
  const locale = useLocale();
  return () => messages[locale()];
}
