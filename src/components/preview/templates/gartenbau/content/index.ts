import { haffnerbauContent } from "./haffnerbau";
import { sawitzkiContent } from "./sawitzki";
import type { GartenbauContent } from "./types";

export type { GartenbauContent, WhyUsIcon } from "./types";
export { HERO_FADE_DURATION_S, HERO_SLIDE_DURATION_MS } from "./types";

const CONTENT_BY_SLUG: Record<string, GartenbauContent> = {
  "gartenbau-demo": sawitzkiContent,
  haffnerbau: haffnerbauContent,
};

/** Liefert das Inhalts-Pack für einen Preview-Slug (Fallback: Sawitzki-Demo). */
export function getGartenbauContent(slug: string): GartenbauContent {
  return CONTENT_BY_SLUG[slug] ?? sawitzkiContent;
}
