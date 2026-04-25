import { data } from "react-router";

import { isSecondaryLocale, type SecondaryLocale } from "~/lib/i18n";

export function getLocalizedRouteLocale(value: string | undefined): SecondaryLocale | null {
  return isSecondaryLocale(value) ? value : null;
}

export function requireLocalizedRouteLocale(value: string | undefined): SecondaryLocale {
  const locale = getLocalizedRouteLocale(value);

  if (!locale) {
    throw data("Not Found", { status: 404 });
  }

  return locale;
}
