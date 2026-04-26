import {
  defaultLocale,
  getLocaleLanguageTag,
  locales,
  localizePath,
  stripLocalePrefix,
  type Locale,
} from "~/lib/i18n";

export type AlternateLink = {
  hrefLang: string;
  href: string;
};

export type RouteSeo = {
  canonicalPath: string;
  alternates: AlternateLink[];
};

export function getRouteSeo(
  pathname: string,
  locale: Locale,
  availableLocales: readonly Locale[] = locales,
): RouteSeo {
  const basePath = stripLocalePrefix(pathname);
  const availableLocaleSet = new Set<Locale>(availableLocales);
  const alternates = locales
    .filter((alternateLocale) => availableLocaleSet.has(alternateLocale))
    .map((alternateLocale) => ({
      hrefLang: getLocaleLanguageTag(alternateLocale),
      href: localizePath(alternateLocale, basePath),
    }));

  if (availableLocaleSet.has(defaultLocale)) {
    alternates.push({ hrefLang: "x-default", href: localizePath(defaultLocale, basePath) });
  }

  return {
    canonicalPath: localizePath(locale, basePath),
    alternates,
  };
}
