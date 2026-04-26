import type { Route } from "./+types/blog.$slug";

import { BlogPostPage } from "~/components/pages/blog-post-page";
import { requireRouteLocale } from "~/lib/route-locale";
import { getBlogPostRouteData } from "~/lib/route-data";
import { buildSocialMeta } from "~/lib/seo";

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) {
    return [];
  }

  return [
    ...buildSocialMeta({
      title: loaderData.post.title,
      description: loaderData.post.excerpt,
      type: "article",
    }),
    { name: "author", content: loaderData.post.author },
    { property: "article:author", content: loaderData.post.author },
    { property: "article:section", content: loaderData.post.category },
    { property: "article:published_time", content: `${loaderData.post.date}T00:00:00Z` },
  ];
}

export async function loader({ params, request }: Route.LoaderArgs) {
  return getBlogPostRouteData(requireRouteLocale(params.locale, request), params.slug);
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  return <BlogPostPage {...loaderData} />;
}
