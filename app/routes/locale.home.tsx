import { useLoaderData } from "react-router";

import { HomePage } from "~/components/pages/home-page";
import { type SecondaryLocale } from "~/lib/i18n";
import { getLocalizedRouteLocale, requireLocalizedRouteLocale } from "~/lib/localized-routes";

const metaCopy = {
  zh: {
    title: "首页 | akazwz",
    description: "akazwz 的个人网站，记录开源项目、技术实验与长期写作。",
  },
  ja: {
    title: "ホーム | akazwz",
    description: "akazwz の個人サイト。オープンソース、技術実験、継続的な文章をまとめています。",
  },
  es: {
    title: "Inicio | akazwz",
    description:
      "Sitio personal de akazwz sobre open source, experimentos técnicos y escritura continua.",
  },
  fr: {
    title: "Accueil | akazwz",
    description:
      "Site personnel de akazwz autour de l’open source, des expérimentations techniques et d’une écriture au long cours.",
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

export default function LocalizedHome() {
  const { locale } = useLoaderData<typeof loader>();
  return <HomePage locale={locale} />;
}
