import { attribution } from "solid-js/attribution";
import { bodies } from "virtual:posts";
import type { Locale, PostBody } from "./types.ts";

const flights = new Map<string, Promise<PostBody>>();

// A post's body, loaded once. The route's preload starts it alongside the page's own code
// and the page reads the same promise, so the two load in parallel. `markFlight` tells
// Solid's dev diagnostics when the load really began, so they do not count it as a wait
// that only started after the page's code arrived. Undefined when there is no such post.
export function loadBody(locale: Locale, slug: string): Promise<PostBody> | undefined {
  const key = `${locale}/${slug}`;
  let flight = flights.get(key);
  if (!flight) {
    const load = bodies[key];
    if (!load) return undefined;
    flight = load().then((module) => module.default);
    attribution.markFlight(flight);
    flights.set(key, flight);
  }
  return flight;
}
