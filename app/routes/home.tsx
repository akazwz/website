import type { Route } from "./+types/home";

import { HomePage } from "~/components/pages/home-page";
import { requireRouteLocale } from "~/lib/route-locale";
import { getHomeRouteData } from "~/lib/route-data";
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
  return getHomeRouteData(requireRouteLocale(params.locale, request));
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <HomePage
      copy={loaderData.copy}
      latestPosts={loaderData.latestPosts}
      locale={loaderData.locale}
    />
  );
}
