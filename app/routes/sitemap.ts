import { getBlogPostPath, getBlogPostSitemapEntries } from "~/lib/blog";
import { locales, localizePath } from "~/lib/i18n";
import { getRouteSeo } from "~/lib/seo";

type SitemapEntry = {
  loc: string;
  alternates: Array<{
    hrefLang: string;
    href: string;
  }>;
  lastmod?: string;
};

const staticBasePaths = ["/", "/about", "/projects", "/blog"] as const;

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function getStaticEntries(): SitemapEntry[] {
  return locales.flatMap((locale) =>
    staticBasePaths.map((basePath) => {
      const pathname = localizePath(locale, basePath);
      const seo = getRouteSeo(pathname, locale);

      return {
        loc: seo.canonicalPath,
        alternates: seo.alternates,
      };
    }),
  );
}

function getBlogEntries(): SitemapEntry[] {
  return getBlogPostSitemapEntries().flatMap(({ slug, date, locales: availableLocales }) =>
    availableLocales.map((locale) => {
      const pathname = getBlogPostPath({ locale, slug });
      const seo = getRouteSeo(pathname, locale, availableLocales);

      return {
        loc: seo.canonicalPath,
        alternates: seo.alternates,
        lastmod: date,
      };
    }),
  );
}

function renderUrlEntry(entry: SitemapEntry) {
  const alternateLinks = entry.alternates.map(
    (alternate) =>
      `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hrefLang)}" href="${escapeXml(alternate.href)}" />`,
  );

  return [
    "  <url>",
    `    <loc>${escapeXml(entry.loc)}</loc>`,
    ...alternateLinks,
    ...(entry.lastmod ? [`    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`] : []),
    "  </url>",
  ].join("\n");
}

export function loader() {
  const entries = [...getStaticEntries(), ...getBlogEntries()];
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries.map(renderUrlEntry),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=86400",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
