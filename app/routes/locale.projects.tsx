import { useLoaderData } from "react-router";

import { ProjectsPage } from "~/components/pages/projects-page";
import { type SecondaryLocale } from "~/lib/i18n";
import { getLocalizedRouteLocale, requireLocalizedRouteLocale } from "~/lib/localized-routes";

const metaCopy = {
  zh: {
    title: "项目 | akazwz",
    description: "akazwz 做过的一些产品、工具、实验与开源项目。",
  },
  ja: {
    title: "プロジェクト | akazwz",
    description: "akazwz が作ってきたプロダクト、ツール、実験、オープンソースの一覧。",
  },
  es: {
    title: "Proyectos | akazwz",
    description:
      "Productos, herramientas, experimentos y proyectos open source creados por akazwz.",
  },
  fr: {
    title: "Projets | akazwz",
    description: "Produits, outils, expérimentations et projets open source créés par akazwz.",
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

export default function LocalizedProjects() {
  const { locale } = useLoaderData<typeof loader>();
  return <ProjectsPage locale={locale} />;
}
