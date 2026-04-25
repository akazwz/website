import { useLoaderData } from "react-router";

import { AboutPage } from "~/components/pages/about-page";
import { type SecondaryLocale } from "~/lib/i18n";
import { getLocalizedRouteLocale, requireLocalizedRouteLocale } from "~/lib/localized-routes";

const metaCopy = {
  zh: {
    title: "关于 | akazwz",
    description: "关于 akazwz、本网站的关注方向，以及这里收集的工作。",
  },
  ja: {
    title: "概要 | akazwz",
    description: "akazwz、このサイトの関心領域、そしてここに集めた仕事について。",
  },
  es: {
    title: "Sobre mí | akazwz",
    description: "Sobre akazwz, las áreas de foco de este sitio y el trabajo reunido aquí.",
  },
  fr: {
    title: "À propos | akazwz",
    description: "À propos de akazwz, des axes du site et du travail rassemblé ici.",
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

export default function LocalizedAbout() {
  const { locale } = useLoaderData<typeof loader>();
  return <AboutPage locale={locale} />;
}
