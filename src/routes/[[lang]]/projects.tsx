import { defineFileRoute } from "@solidjs/router/fs";
import { Head } from "../../components/Head.tsx";
import { Page } from "../../components/Page.tsx";
import { PageIntro } from "../../components/PageIntro.tsx";
import { ProjectList } from "../../components/ProjectList.tsx";
import { projects } from "../../content/projects.ts";
import { useMessages } from "../../i18n/use.ts";

export const route = defineFileRoute("/:lang?/projects", { matchFilters: { lang: ["zh"] } });

export default function Projects() {
  const t = useMessages();
  return (
    <Page>
      <Head title={t().projects.title} description={t().meta.projects} path="/projects" />
      <PageIntro title={t().projects.title} description={t().projects.description} />
      <ProjectList projects={projects} withStack />
    </Page>
  );
}
