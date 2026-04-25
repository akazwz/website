import { BlogIndexPage } from "~/components/pages/blog-index-page";

export function meta() {
  return [
    { title: "Journal | akazwz" },
    {
      name: "description",
      content: "Notes on software, design, and building with restraint.",
    },
  ];
}

export default function Blog() {
  return <BlogIndexPage locale="en" />;
}
