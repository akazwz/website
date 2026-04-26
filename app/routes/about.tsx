import type { Route } from "./+types/about";

import { AboutPage } from "~/components/pages/about-page";
import { requireRouteLocale } from "~/lib/route-locale";
import { getAboutRouteData } from "~/lib/route-data";
import { buildSocialMeta } from "~/lib/seo";

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) {
    return [];
  }

  return buildSocialMeta({
    title: loaderData.pageMeta.title,
    description: loaderData.pageMeta.description,
  });
}

export async function loader({ params, request }: Route.LoaderArgs) {
  return getAboutRouteData(requireRouteLocale(params.locale, request));
}

export default function About({ loaderData }: Route.ComponentProps) {
  return <AboutPage copy={loaderData.copy} locale={loaderData.locale} />;
}
