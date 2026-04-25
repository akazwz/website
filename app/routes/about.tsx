import { AboutPage } from "~/components/pages/about-page";

export function meta() {
  return [
    { title: "About | akazwz" },
    {
      name: "description",
      content:
        "About akazwz, the focus areas behind the site, and the kind of work collected here.",
    },
  ];
}

export default function About() {
  return <AboutPage locale="en" />;
}
