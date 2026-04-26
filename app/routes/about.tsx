import type { Route } from "./+types/about";

import { AboutPage } from "~/components/pages/about-page";
import { requireRouteLocale } from "~/lib/route-locale";
import { getAboutRouteData } from "~/lib/route-data";

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) {
    return [];
  }

  return [
    { title: loaderData.pageMeta.title },
    {
      name: "description",
      content: loaderData.pageMeta.description,
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  return getAboutRouteData(requireRouteLocale(params.locale));
}

export default function About({ loaderData }: Route.ComponentProps) {
  return <AboutPage copy={loaderData.copy} locale={loaderData.locale} />;
}
