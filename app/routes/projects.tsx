import { ProjectsPage } from "~/components/pages/projects-page";

export function meta() {
  return [
    { title: "Projects | akazwz" },
    {
      name: "description",
      content:
        "A collection of products, tools, experiments, and open-source work built by akazwz.",
    },
  ];
}

export default function Projects() {
  return <ProjectsPage locale="en" />;
}
