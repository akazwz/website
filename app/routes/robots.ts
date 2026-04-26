import { toAbsoluteUrl } from "~/lib/seo";

export function loader() {
  const body = ["User-agent: *", "Allow: /", `Sitemap: ${toAbsoluteUrl("/sitemap.xml")}`, ""].join(
    "\n",
  );

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
