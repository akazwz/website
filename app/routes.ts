import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route(":locale?", "routes/home.tsx"),
  route(":locale?/about", "routes/about.tsx"),
  route(":locale?/projects", "routes/projects.tsx"),
  route(":locale?/blog", "routes/blog.tsx"),
  route(":locale?/blog/:slug", "routes/blog.$slug.tsx"),
] satisfies RouteConfig;
