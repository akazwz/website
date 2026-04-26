import { data } from "react-router";

import { defaultLocale, isLocale, type Locale } from "~/lib/i18n";

export function getRouteLocale(value: string | undefined): Locale {
  return value !== undefined && isLocale(value) ? value : defaultLocale;
}

export function requireRouteLocale(value: string | undefined): Locale {
  if (value !== undefined && !isLocale(value)) {
    throw data("Not Found", { status: 404 });
  }

  return getRouteLocale(value);
}
