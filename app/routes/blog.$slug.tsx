import type { Route } from "./+types/blog.$slug";

import { BlogPostPage } from "~/components/pages/blog-post-page";
import { requireRouteLocale } from "~/lib/route-locale";
import { getBlogPostRouteData } from "~/lib/route-data";

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) {
    return [];
  }

  return [
    { title: loaderData.post.title },
    { name: "description", content: loaderData.post.excerpt },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  return getBlogPostRouteData(requireRouteLocale(params.locale), params.slug);
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  return <BlogPostPage {...loaderData} />;
}
