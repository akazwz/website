import type { Route } from "./+types/projects";

import { ProjectsPage } from "~/components/pages/projects-page";
import { requireRouteLocale } from "~/lib/route-locale";
import { getProjectsRouteData } from "~/lib/route-data";
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
  return getProjectsRouteData(requireRouteLocale(params.locale, request));
}

export default function Projects({ loaderData }: Route.ComponentProps) {
  return <ProjectsPage copy={loaderData.copy} entries={loaderData.entries} />;
}
