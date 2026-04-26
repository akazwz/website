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

type SocialMetaOptions = {
  title: string;
  description: string;
  type?: "website" | "article";
};

export const siteUrl = "https://akazwz.com";
export const ogImageUrl = `${siteUrl}/og.png`;
export const twitterHandle = "@akazwz_";

export function toAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function getOpenGraphLocale(locale: Locale) {
  return getLocaleLanguageTag(locale).replace(/-/g, "_");
}

export function buildSocialMeta({ title, description, type = "website" }: SocialMetaOptions) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:site_name", content: "akazwz" },
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImageUrl },
    { property: "og:image:width", content: "2400" },
    { property: "og:image:height", content: "1260" },
    { property: "og:image:alt", content: "akazwz site preview" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image:alt", content: "akazwz site preview" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImageUrl },
  ];
}

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
      href: toAbsoluteUrl(localizePath(alternateLocale, basePath)),
    }));

  if (availableLocaleSet.has(defaultLocale)) {
    alternates.push({
      hrefLang: "x-default",
      href: toAbsoluteUrl(localizePath(defaultLocale, basePath)),
    });
  }

  return {
    canonicalPath: toAbsoluteUrl(localizePath(locale, basePath)),
    alternates,
  };
}
