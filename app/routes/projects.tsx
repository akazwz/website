import type { Route } from "./+types/projects";

import { ProjectsPage } from "~/components/pages/projects-page";
import { requireRouteLocale } from "~/lib/route-locale";
import { getProjectsRouteData } from "~/lib/route-data";

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
  return getProjectsRouteData(requireRouteLocale(params.locale));
}

export default function Projects({ loaderData }: Route.ComponentProps) {
  return <ProjectsPage copy={loaderData.copy} entries={loaderData.entries} />;
}
