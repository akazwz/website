import type { Locale } from "../content/types.ts";

export type { Locale };

// English is the default and lives at the root (/about); Chinese lives under /zh (/zh/about).
export const locales = ["en", "zh"] as const satisfies readonly Locale[];
export const defaultLocale: Locale = "en";

// What each language is called, in itself, and its tag for `lang` and `hreflang`.
export const localeInfo = {
  en: { name: "English", short: "EN", tag: "en" },
  zh: { name: "中文", short: "中", tag: "zh-CN" },
} as const satisfies Record<Locale, { name: string; short: string; tag: string }>;

// The language an address is in: its first segment, when that is a language other than the
// default.
export function localeOf(pathname: string): Locale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

// The address without its language segment: "/zh/blog" and "/blog" are both "/blog".
export function unlocalized(pathname: string): string {
  return localeOf(pathname) === "zh" ? pathname.slice(3) || "/" : pathname;
}

// The address of `path` (written without a language segment, "/blog") in `locale`.
export function localized(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
