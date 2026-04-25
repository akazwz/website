import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { getLocaleFromPathname, type Locale } from "./lib/i18n";

const errorCopy = {
  en: {
    message: "Oops!",
    unexpected: "An unexpected error occurred.",
    errorLabel: "Error",
    notFoundDetails: "The requested page could not be found.",
  },
  zh: {
    message: "出了点问题",
    unexpected: "发生了一个未预期的错误。",
    errorLabel: "错误",
    notFoundDetails: "你访问的页面不存在。",
  },
  ja: {
    message: "問題が発生しました",
    unexpected: "予期しないエラーが発生しました。",
    errorLabel: "エラー",
    notFoundDetails: "お探しのページは見つかりませんでした。",
  },
  es: {
    message: "Vaya",
    unexpected: "Se produjo un error inesperado.",
    errorLabel: "Error",
    notFoundDetails: "No se pudo encontrar la página solicitada.",
  },
  fr: {
    message: "Oups",
    unexpected: "Une erreur inattendue s'est produite.",
    errorLabel: "Erreur",
    notFoundDetails: "La page demandée est introuvable.",
  },
} as const satisfies Record<
  Locale,
  {
    message: string;
    unexpected: string;
    errorLabel: string;
    notFoundDetails: string;
  }
>;

export function Layout({ children }: { children: React.ReactNode }) {
  const locale = getLocaleFromPathname(useLocation().pathname);

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const locale = getLocaleFromPathname(useLocation().pathname);
  const copy = errorCopy[locale];

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
