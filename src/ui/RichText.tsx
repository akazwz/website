import { For } from "solid-js";
import { TextLink } from "./TextLink.tsx";

// A run of text in which some words are links, written as data so it can live in the
// messages: `["I work at ", { text: "Felinic", href: "https://…" }, "."]`.
export type Rich = readonly (string | { text: string; href: string })[];

export function RichText(props: { content: Rich }) {
  return (
    <For each={props.content}>
      {(part) =>
        typeof part === "string" ? part : <TextLink href={part.href}>{part.text}</TextLink>
      }
    </For>
  );
}
