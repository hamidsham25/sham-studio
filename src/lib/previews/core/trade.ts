import type { PreviewIconName, PreviewTrade } from "./types";

/** Fallback-Icon je Gewerk – genutzt für Logo-Marke und Leistungskarten. */
export const TRADE_ICON: Record<PreviewTrade, PreviewIconName> = {
  maler: "brush",
  shk: "droplet",
  pv: "sparkles",
  sanierung: "home",
};

export const TRADE_LABEL: Record<PreviewTrade, string> = {
  maler: "Maler & Lackierer",
  shk: "Sanitär, Heizung, Klima",
  pv: "Photovoltaik",
  sanierung: "Sanierung",
};
