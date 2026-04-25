import { data, useLoaderData } from "react-router";

import { BlogPostPage } from "~/components/pages/blog-post-page";
import { type SecondaryLocale } from "~/lib/i18n";
import { getPostBySlug } from "~/lib/blog";
import { renderMarkdown } from "~/lib/blog-renderer";
import { getLocalizedRouteLocale, requireLocalizedRouteLocale } from "~/lib/localized-routes";

const notFoundTitles = {
  zh: "文章未找到 | akazwz",
  ja: "記事が見つかりません | akazwz",
  es: "Artículo no encontrado | akazwz",
  fr: "Article introuvable | akazwz",
} as const satisfies Record<SecondaryLocale, string>;

export function meta({ params }: { params: { locale?: string; slug?: string } }) {
  const locale = getLocalizedRouteLocale(params.locale) ?? "zh";
  const post = getPostBySlug(params.slug ?? "", locale);

  if (!post) {
    return [{ title: notFoundTitles[locale] }];
  }

  return [{ title: post.title }, { name: "description", content: post.excerpt }];
}

export function loader({ params }: { params: { locale?: string; slug?: string } }) {
  const locale = requireLocalizedRouteLocale(params.locale);
  const post = getPostBySlug(params.slug ?? "", locale);

  if (!post) {
    throw data("Not Found", { status: 404 });
  }

  return { locale, post, html: renderMarkdown(post.content) };
}

export default function LocalizedBlogPost() {
  const loaderData = useLoaderData<typeof loader>();
  return <BlogPostPage locale={loaderData.locale} html={loaderData.html} post={loaderData.post} />;
}
