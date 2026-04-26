import type { Locale } from "~/lib/i18n";

import type { Messages } from "./schema";

export type { Messages } from "./schema";

export type HeaderMessages = Messages["header"];
export type HomeMessages = Messages["home"];
export type AboutMessages = Messages["about"];
export type ProjectsMessages = Messages["projects"];
export type ProjectEntry = Messages["projects"]["entries"][number];
export type BlogIndexMessages = Messages["blogIndex"];
export type BlogPostMessages = Messages["blogPost"];
export type ErrorMessages = Messages["error"];
export type PageMeta = Messages["meta"]["home"];

const messageLoaders = {
  en: () => import("./en"),
  zh: () => import("./zh"),
  ja: () => import("./ja"),
  es: () => import("./es"),
  fr: () => import("./fr"),
} satisfies Record<Locale, () => Promise<{ default: Messages }>>;

export async function loadMessages(locale: Locale): Promise<Messages> {
  const module = await messageLoaders[locale]();
  return module.default;
}
