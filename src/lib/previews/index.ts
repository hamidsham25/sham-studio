import type { PreviewConfig } from "./core/types";
import { demo } from "./configs/demo";
import { malerMueller } from "./configs/maler/maler-mueller";
import { shkKlempner } from "./configs/shk/shk-klempner";

/**
 * Registry aller Kunden-Configs.
 * Neuen Kunden anlegen: Datei unter configs/<trade>/ erstellen und hier eintragen.
 */
const PREVIEW_CONFIGS: PreviewConfig[] = [demo, malerMueller, shkKlempner];

const configsBySlug = new Map(
  PREVIEW_CONFIGS.map((config) => [config.slug, config]),
);

export function getPreviewConfig(slug: string): PreviewConfig | null {
  return configsBySlug.get(slug) ?? null;
}

export function getPreviewSlugs(): string[] {
  return PREVIEW_CONFIGS.map((config) => config.slug);
}

export { getPreviewTemplate } from "./core/templates";
export type { PreviewConfig } from "./core/types";
export type { PreviewPageKey, PreviewTemplate } from "./core/templates";
