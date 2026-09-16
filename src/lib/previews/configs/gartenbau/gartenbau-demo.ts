import type { PreviewConfig } from "../../core/types";

/**
 * Minimal-Config für das Gartenbau-Preview-Template.
 * Inhalte (Texte, Bilder) liegen im Template selbst unter
 * components/preview/templates/gartenbau/content/.
 */
export const gartenbauDemo: PreviewConfig = {
  slug: "gartenbau-demo",
  trade: "gartenbau",
  businessName: "Gartengestaltung Sawitzki-Trollmann",
  tagline:
    "Gartenbau, Pflasterarbeiten, Naturstein, Terrassen und mehr in Langenhagen.",
  colors: {
    /** action — CTA-Grün */
    primary: "#4caf50",
    /** forest — Hover / dunkle Flächen */
    primaryHover: "#0c3221",
    /** surface */
    background: "#f4f6f2",
    /** ink */
    foreground: "#1a1a1a",
    muted: "#5a6b5a",
    onPrimary: "#ffffff",
  },
  contact: {
    phone: "+49 000 000000",
    email: "info@example.de",
    address: "Langenhagen",
  },
  services: [
    {
      title: "Pflasterarbeiten",
      description: "Einfahrten, Wege und Hofeinfahrten in präziser Verlegung.",
    },
    {
      title: "Naturstein",
      description: "Mauern, Stufen und Einfassungen aus edlem Naturstein.",
    },
    {
      title: "Terrassen",
      description: "Holz- und Stein-Terrassen für entspannte Stunden im Freien.",
    },
  ],
};
