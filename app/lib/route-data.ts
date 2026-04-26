import { data, redirect } from "react-router";

import {
  getBlogPostPath,
  getBlogPosts,
  getPostLocalesBySlug,
  getPostVariantBySlug,
} from "~/lib/blog";
import { renderMarkdown } from "~/lib/blog-renderer";
import { defaultLocale, type Locale } from "~/lib/i18n";
import { loadMessages } from "~/lib/messages";
import { getRouteSeo } from "~/lib/seo";

export async function getRootRouteData(locale: Locale) {
  const messages = await loadMessages(locale);

  return {
    locale,
    header: messages.header,
    error: messages.error,
  };
}

export async function getHomeRouteData(locale: Locale) {
  const messages = await loadMessages(locale);

  return {
    locale,
    copy: messages.home,
    pageMeta: messages.meta.home,
    latestPosts: getBlogPosts(locale).slice(0, 3),
  };
}

export async function getAboutRouteData(locale: Locale) {
  const messages = await loadMessages(locale);

  return {
    locale,
    copy: messages.about,
    pageMeta: messages.meta.about,
  };
}

export async function getProjectsRouteData(locale: Locale) {
  const messages = await loadMessages(locale);

  return {
    locale,
    copy: messages.projects,
    entries: messages.projects.entries,
    pageMeta: messages.meta.projects,
  };
}

export async function getBlogIndexRouteData(locale: Locale) {
  const messages = await loadMessages(locale);

  return {
    locale,
    copy: messages.blogIndex,
    pageMeta: messages.meta.blog,
    posts: getBlogPosts(locale),
  };
}

export async function getBlogPostRouteData(locale: Locale, slug: string | undefined) {
  const messages = await loadMessages(locale);
  const postSlug = slug ?? "";
  const post = getPostVariantBySlug(postSlug, locale);

  if (!post) {
    const defaultPost = getPostVariantBySlug(postSlug, defaultLocale);

    if (locale !== defaultLocale && defaultPost) {
      throw redirect(getBlogPostPath(defaultPost));
    }

    throw data("Not Found", { status: 404 });
  }

  return {
    locale,
    copy: messages.blogPost,
    post,
    html: renderMarkdown(post.content),
    seo: getRouteSeo(getBlogPostPath(post), locale, getPostLocalesBySlug(post.slug)),
  };
}
