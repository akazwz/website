import { useLoaderData } from "react-router";

import { BlogIndexPage } from "~/components/pages/blog-index-page";
import { type SecondaryLocale } from "~/lib/i18n";
import { getLocalizedRouteLocale, requireLocalizedRouteLocale } from "~/lib/localized-routes";

const metaCopy = {
  zh: {
    title: "博客 | akazwz",
    description: "关于软件、设计，以及尽量克制地做东西的一些笔记。",
  },
  ja: {
    title: "ブログ | akazwz",
    description: "ソフトウェア、デザイン、そして節度あるものづくりについてのメモ。",
  },
  es: {
    title: "Blog | akazwz",
    description: "Notas sobre software, diseño y una manera más contenida de construir cosas.",
  },
  fr: {
    title: "Journal | akazwz",
    description: "Des notes sur le logiciel, le design et une manière plus retenue de construire.",
  },
} as const satisfies Record<SecondaryLocale, { title: string; description: string }>;

export function meta({ params }: { params: { locale?: string } }) {
  const locale = getLocalizedRouteLocale(params.locale) ?? "zh";
  const copy = metaCopy[locale];

  return [{ title: copy.title }, { name: "description", content: copy.description }];
}

export function loader({ params }: { params: { locale?: string } }) {
  return { locale: requireLocalizedRouteLocale(params.locale) };
}

export default function LocalizedBlog() {
  const { locale } = useLoaderData<typeof loader>();
  return <BlogIndexPage locale={locale} />;
}
