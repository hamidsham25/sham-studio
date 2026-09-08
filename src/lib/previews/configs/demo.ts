import type { PreviewConfig } from "../core/types";

/** Beispiel-Config zum Testen des Config- und Theming-Systems. */
export const demo: PreviewConfig = {
  slug: "demo",
  trade: "maler",
  businessName: "Demo Handwerk GmbH",
  tagline: "Platzhalter-Slogan für den Entwurf",
  colors: {
    primary: "#2563eb",
    primaryHover: "#1d4ed8",
    background: "#ffffff",
    foreground: "#18181b",
    muted: "#71717a",
  },
  contact: {
    phone: "+49 511 000000",
    email: "info@demo-handwerk.de",
    whatsapp: "+49 511 000000",
    address: "Musterstraße 1, 30159 Hannover",
  },
  services: [
    {
      title: "Leistung eins",
      description: "Platzhalter-Beschreibung für die erste Leistung.",
    },
    {
      title: "Leistung zwei",
      description: "Platzhalter-Beschreibung für die zweite Leistung.",
    },
    {
      title: "Leistung drei",
      description: "Platzhalter-Beschreibung für die dritte Leistung.",
    },
  ],
};
