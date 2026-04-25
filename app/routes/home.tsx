import { HomePage } from "~/components/pages/home-page";

export function meta() {
  return [
    { title: "akazwz" },
    {
      name: "description",
      content:
        "Personal site of akazwz, covering open-source work, experiments, and long-form writing.",
    },
  ];
}

export default function Home() {
  return <HomePage locale="en" />;
}
