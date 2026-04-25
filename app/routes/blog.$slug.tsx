import { data, useLoaderData } from "react-router";

import { BlogPostPage } from "~/components/pages/blog-post-page";
import { getPostBySlug } from "~/lib/blog";
import { renderMarkdown } from "~/lib/blog-renderer";

export function meta({ params }: { params: { slug?: string } }) {
  const post = getPostBySlug(params.slug ?? "", "en");
  if (!post) return [{ title: "Post Not Found | akazwz" }];
  return [{ title: post.title }, { name: "description", content: post.excerpt }];
}

export function loader({ params }: { params: { slug?: string } }) {
  const post = getPostBySlug(params.slug ?? "", "en");
  if (!post) throw data("Not Found", { status: 404 });
  return { post, html: renderMarkdown(post.content) };
}

export default function BlogPost() {
  const loaderData = useLoaderData<typeof loader>();
  return <BlogPostPage locale="en" {...loaderData} />;
}
