import { data, redirect } from "react-router";

import { defaultLocale, isSecondaryLocale, stripLocalePrefix, type Locale } from "~/lib/i18n";

export function requireRouteLocale(value: string | undefined, request: Request): Locale {
  if (value === undefined) {
    return defaultLocale;
  }

  if (value === defaultLocale) {
    const url = new URL(request.url);
    throw redirect(`${stripLocalePrefix(url.pathname)}${url.search}`, { status: 308 });
  }

  if (!isSecondaryLocale(value)) {
    throw data("Not Found", { status: 404 });
  }

  return value;
}
