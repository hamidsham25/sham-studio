import type { PreviewConfig } from "../../core/types";

/**
 * HaffnerBau — Kunden-Preview auf dem Gartenbau-Template.
 * Texte/Bilder liegen unter components/preview/templates/gartenbau/content/haffnerbau.ts.
 */
export const haffnerbau: PreviewConfig = {
  slug: "haffnerbau",
  trade: "gartenbau",
  businessName: "HaffnerBau",
  tagline: "Dienstleistungen rund ums Haus — Dach, Pflaster, Garten und Handwerk.",
  colors: {
    primary: "#4caf50",
    primaryHover: "#0c3221",
    background: "#f4f6f2",
    foreground: "#1a1a1a",
    muted: "#5a6b5a",
    onPrimary: "#ffffff",
  },
  contact: {
    phone: "+49 179 4689476",
    email: "info@haffnerbau.de",
    whatsapp: "+491794689476",
    address: "Region auf Anfrage",
  },
  services: [
    {
      title: "Dachreinigung & Versiegelung",
      description:
        "Wir reinigen und versiegeln Ihr Dach — für Schutz, weniger Wartung und ein gepflegtes Erscheinungsbild.",
    },
    {
      title: "Pflasterarbeiten & -reinigung",
      description:
        "Pflaster aller Art verlegen und reinigen — Wege, Einfahrten und Terrassen.",
    },
    {
      title: "Bau rund ums Haus",
      description:
        "Von der Planung bis zur Oberflächenwiederherstellung — inkl. Rohrleitungen und Tiefbau.",
    },
    {
      title: "Gartenarbeit",
      description:
        "Rasen- und Beetpflege, Bewässerung, Pflanzung, Schnitt, Mulchen, Laub und Wege.",
    },
    {
      title: "Zaunmontage",
      description:
        "Vermessung, Planung und Aufbau — funktionaler Sichtschutz und klare Grundstücksgrenzen.",
    },
    {
      title: "Handwerk rund ums Haus",
      description:
        "Weitere Dienstleistungen rund um Ihr Haus — pragmatisch, zuverlässig und aus einer Hand.",
    },
  ],
};
