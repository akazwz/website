import { data } from "react-router";

import { getBlogPosts, getPostBySlug } from "~/lib/blog";
import { renderMarkdown } from "~/lib/blog-renderer";
import { type Locale } from "~/lib/i18n";
import { loadMessages } from "~/lib/messages";

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
  const post = getPostBySlug(slug ?? "", locale);

  if (!post) {
    throw data("Not Found", { status: 404 });
  }

  return {
    locale,
    copy: messages.blogPost,
    post,
    html: renderMarkdown(post.content),
  };
}
