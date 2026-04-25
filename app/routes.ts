import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("projects", "routes/projects.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route(":locale", "routes/locale.home.tsx"),
  route(":locale/about", "routes/locale.about.tsx"),
  route(":locale/projects", "routes/locale.projects.tsx"),
  route(":locale/blog", "routes/locale.blog.tsx"),
  route(":locale/blog/:slug", "routes/locale.blog.$slug.tsx"),
] satisfies RouteConfig;
