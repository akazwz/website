import { posts } from "virtual:posts";
import type { Locale, PostSummary } from "./types.ts";

// The posts in one language, newest first. Empty when there are none yet: the writing
// section, its link in the header and its pages appear only when this is not.
export function postsIn(locale: Locale): PostSummary[] {
  return posts.filter((post) => post.locale === locale);
}
