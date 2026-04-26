import type { Route } from "./+types/blog";

import { BlogIndexPage } from "~/components/pages/blog-index-page";
import { requireRouteLocale } from "~/lib/route-locale";
import { getBlogIndexRouteData } from "~/lib/route-data";
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
  return getBlogIndexRouteData(requireRouteLocale(params.locale, request));
}

export default function Blog({ loaderData }: Route.ComponentProps) {
  return (
    <BlogIndexPage copy={loaderData.copy} locale={loaderData.locale} posts={loaderData.posts} />
  );
}
