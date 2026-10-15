// The module tools/content.ts serves.
declare module "virtual:posts" {
  import type { PostBody, PostSummary } from "./types.ts";

  // Every post in both languages, newest first.
  export const posts: PostSummary[];
  // The body of each post, keyed "<locale>/<slug>", as a chunk of its own.
  export const bodies: Record<string, () => Promise<{ default: PostBody }>>;
}
