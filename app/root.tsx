import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useMatches,
  useRouteLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import notoSansLatinWoff2 from "@fontsource-variable/noto-sans/files/noto-sans-latin-wght-normal.woff2";
import playfairLatinWoff2 from "@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2";
import { SiteHeader } from "./components/site-header";
import { getLocaleFromPathname } from "./lib/i18n";
import type { ErrorMessages } from "./lib/messages";
import { getRootRouteData } from "./lib/route-data";
import { getOpenGraphLocale, getRouteSeo, twitterHandle, type RouteSeo } from "./lib/seo";

const defaultErrorCopy: ErrorMessages = {
  message: "Oops!",
  unexpected: "An unexpected error occurred.",
  errorLabel: "Error",
  notFoundDetails: "The requested page could not be found.",
};

export function links() {
  return [
    {
      rel: "preload",
      href: notoSansLatinWoff2,
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: playfairLatinWoff2,
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  return getRootRouteData(getLocaleFromPathname(new URL(request.url).pathname));
}

function getCurrentRouteSeo(matches: ReturnType<typeof useMatches>): RouteSeo | undefined {
  for (const match of [...matches].reverse()) {
    const data = match.data as { seo?: RouteSeo } | undefined;

    if (data?.seo) {
      return data.seo;
    }
  }

  return undefined;
}

export function Layout({ children }: { children: React.ReactNode }) {
  const rootData = useRouteLoaderData<typeof loader>("root");
  const { pathname } = useLocation();
  const matches = useMatches();
  const locale = rootData?.locale ?? getLocaleFromPathname(pathname);
  const seo = getCurrentRouteSeo(matches) ?? getRouteSeo(pathname, locale);
  const openGraphLocale = getOpenGraphLocale(locale);
  const alternateOpenGraphLocales = seo.alternates
    .filter((alternate) => alternate.hrefLang !== "x-default")
    .map((alternate) => alternate.hrefLang.replace(/-/g, "_"))
    .filter((alternate) => alternate !== openGraphLocale);

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={seo.canonicalPath} />
        {seo.alternates.map((alternate) => (
          <link
            key={`${alternate.hrefLang}:${alternate.href}`}
            rel="alternate"
            hrefLang={alternate.hrefLang}
            href={alternate.href}
          />
        ))}
        <meta property="og:url" content={seo.canonicalPath} />
        <meta property="og:locale" content={openGraphLocale} />
        {alternateOpenGraphLocales.map((alternate) => (
          <meta key={alternate} property="og:locale:alternate" content={alternate} />
        ))}
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader copy={loaderData.header} locale={loaderData.locale} />
      <Outlet />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const rootData = useRouteLoaderData<typeof loader>("root");
  const copy = rootData?.error ?? defaultErrorCopy;

  let message: string = copy.message;
  let details: string = copy.unexpected;
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : copy.errorLabel;
    details = error.status === 404 ? copy.notFoundDetails : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-heading text-5xl leading-tight tracking-tight sm:text-6xl mb-6">
          {message}
        </h1>
        <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg mb-10">
          {details}
        </p>
        {stack && (
          <pre className="w-full rounded-lg border border-border bg-secondary p-4 overflow-x-auto text-sm text-secondary-foreground">
            <code>{stack}</code>
          </pre>
        )}
      </section>
    </main>
  );
}
