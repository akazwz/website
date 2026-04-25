export const locales = ["en", "zh", "ja", "es", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export type SecondaryLocale = Exclude<Locale, typeof defaultLocale>;

export const localeMetadata = {
  en: {
    label: "EN",
    nativeName: "English",
    languageTag: "en-GB",
  },
  zh: {
    label: "中文",
    nativeName: "简体中文",
    languageTag: "zh-CN",
  },
  ja: {
    label: "日本語",
    nativeName: "日本語",
    languageTag: "ja-JP",
  },
  es: {
    label: "ES",
    nativeName: "Español",
    languageTag: "es-ES",
  },
  fr: {
    label: "FR",
    nativeName: "Français",
    languageTag: "fr-FR",
  },
} as const satisfies Record<Locale, { label: string; nativeName: string; languageTag: string }>;

export const secondaryLocales = locales.filter(
  (locale): locale is SecondaryLocale => locale !== defaultLocale,
);

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

export function isSecondaryLocale(value: string | undefined): value is SecondaryLocale {
  return isLocale(value) && value !== defaultLocale;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "/";
  }

  if (isLocale(segments[0])) {
    segments.shift();
  }

  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
}

export function localizePath(locale: Locale, pathname: string): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const basePath = stripLocalePrefix(normalizedPath);

  if (locale === defaultLocale) {
    return basePath;
  }

  return basePath === "/" ? `/${locale}` : `/${locale}${basePath}`;
}

export function getLocaleLanguageTag(locale: Locale): string {
  return localeMetadata[locale].languageTag;
}
