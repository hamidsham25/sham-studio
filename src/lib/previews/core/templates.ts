import type { ComponentType } from "react";
import { fallbackTemplate } from "@/components/preview/templates/fallback";
import { malerTemplate } from "@/components/preview/templates/maler";
import { shkTemplate } from "@/components/preview/templates/shk";
import type { PreviewConfig, PreviewTrade } from "./types";

/** Welche Unterseiten ein Branchen-Template bereitstellt. */
export type PreviewPageKey =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "contact";

type PreviewPageProps = {
  config: PreviewConfig;
};

export type PreviewTemplate = {
  trade: PreviewTrade;
  pages: Record<PreviewPageKey, ComponentType<PreviewPageProps>>;
};

/** Branchen-Templates – komplett getrennt unter components/preview/templates/<trade>/ */
const TEMPLATES: Record<PreviewTrade, PreviewTemplate> = {
  maler: malerTemplate,
  shk: shkTemplate,
  pv: fallbackTemplate,
  sanierung: fallbackTemplate,
};

export function getPreviewTemplate(trade: PreviewTrade): PreviewTemplate {
  return TEMPLATES[trade];
}
