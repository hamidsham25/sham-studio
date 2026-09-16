import type { GartenbauContent } from "./types";

/**
 * HaffnerBau — Inhalte aus Analyse (siezen, korrigierte Rechtschreibung).
 * Bilder: Unsplash-Platzhalter.
 */
export const haffnerbauContent: GartenbauContent = {
  brandName: "HaffnerBau",
  logoSrc: "/images/preview/haffnerbau/haffnerbau-logo-transparent.png",
  logoAlt: "HaffnerBau — Dienstleistungen rund ums Haus",
  footerBlurb:
    "Dienstleistungen rund ums Haus — Dach, Pflaster, Garten und Handwerk aus einer Hand. Persönlich, zuverlässig und klar kommuniziert.",
  copyrightName: "HaffnerBau",

  hero: {
    headingLines: ["Handwerk", "rund um", "Ihr Haus"],
    headingAccentIndex: 2,
    subline:
      "HaffnerBau — Handwerk und Service rund um Haus und Garten. Von der Dachreinigung über Pflasterarbeiten bis zur Gartenpflege: ein Ansprechpartner, klare Angebote, zuverlässige Umsetzung.",
    primaryCta: "Angebot anfragen",
    secondaryCta: "Leistungen entdecken",
  },

  heroSlides: [
    {
      src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1920&h=1080&fit=crop",
      alt: "Hausdach und Dachpflege",
      label: "Dach",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop",
      alt: "Frisch verlegte Pflasterfläche",
      label: "Pflaster",
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=1080&fit=crop",
      alt: "Gepflegter Garten mit Beeten und Rasen",
      label: "Garten",
    },
  ],

  heroTrust: {
    ownerName: "Samuel Haffner",
    ownerRole: "Inhaber",
    ownerImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    clientCount: 80,
    clientsLabel: "zufriedene Kunden",
  },

  aboutTeaser: {
    heading: {
      primary: "Partner für",
      accent: "Haus",
      secondary: "& Garten",
    },
    body: [
      "HaffnerBau steht für praktische Dienstleistungen rund ums Haus — von der Dachpflege über Pflaster und Tiefbau bis zur Gartenarbeit und Zaunmontage.",
      "Sie erhalten klare Beratung, transparente Angebote und eine zuverlässige Umsetzung. Ein Ansprechpartner für die Arbeiten, die Ihr Grundstück braucht.",
    ],
    ctaLabel: "Mehr über uns",
    images: [
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=900&fit=crop",
        alt: "Handwerker bei der Arbeit am Haus",
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=800&fit=crop",
        alt: "Pflasterarbeiten an einer Einfahrt",
      },
    ],
  },

  whyUs: {
    headingBrand: "HaffnerBau",
    subline:
      "Verlässlichkeit, Qualität und persönlicher Service — das macht den Unterschied für Ihr Haus und Ihren Garten.",
    items: [
      {
        icon: "layers",
        title: "Alles aus einer Hand",
        description:
          "Dach, Pflaster, Garten und mehr — ein Ansprechpartner für Ihr gesamtes Vorhaben.",
        anchor: "1 Ansprechpartner",
        featured: true,
      },
      {
        icon: "map-pin",
        title: "Schnell erreichbar",
        description:
          "Persönlich und unkompliziert — per Telefon oder WhatsApp. Kurze Wege, schnelle Rückmeldung.",
        anchor: "Direkt",
        featured: false,
      },
      {
        icon: "shield-check",
        title: "Saubere Ausführung",
        description:
          "Sorgfältige Arbeit mit Blick auf Werterhalt, Ästhetik und Widerstandsfähigkeit.",
        anchor: "Qualität",
        featured: false,
      },
      {
        icon: "users",
        title: "Persönliche Beratung",
        description:
          "Individuell auf Ihr Grundstück, Ihre Wünsche und Ihr Budget abgestimmt.",
        anchor: "Individuell",
        featured: false,
      },
    ],
  },

  servicesIntro:
    "Sechs klare Leistungen rund um Haus und Garten — übersichtlich, ohne Endlos-Scroll und doppelte Texte.",
  services: [
    {
      slug: "dachreinigung",
      title: "Dachreinigung & Versiegelung",
      description:
        "Wir reinigen und versiegeln Ihr Dach — für Schutz, weniger Wartung und ein gepflegtes Erscheinungsbild.",
      image: {
        src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&h=800&fit=crop",
        alt: "Dachreinigung und Pflege",
      },
    },
    {
      slug: "pflasterarbeiten",
      title: "Pflasterarbeiten & -reinigung",
      description:
        "Pflaster aller Art verlegen und reinigen — Wege, Einfahrten und Terrassen.",
      image: {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
        alt: "Pflasterarbeiten an einer Einfahrt",
      },
    },
    {
      slug: "bau-rund-ums-haus",
      title: "Bau rund ums Haus",
      description:
        "Von der Planung bis zur Oberflächenwiederherstellung — inkl. Rohrleitungen und Tiefbau.",
      image: {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=800&fit=crop",
        alt: "Bauarbeiten rund ums Haus",
      },
    },
    {
      slug: "gartenarbeit",
      title: "Gartenarbeit",
      description:
        "Rasen- und Beetpflege, Bewässerung, Pflanzung, Schnitt, Mulchen, Laub und Wege.",
      image: {
        src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=800&fit=crop",
        alt: "Gartenpflege und Beete",
      },
    },
    {
      slug: "zaunmontage",
      title: "Zaunmontage",
      description:
        "Vermessung, Planung und Aufbau — funktionaler Sichtschutz und klare Grundstücksgrenzen.",
      image: {
        src: "https://images.unsplash.com/photo-1654613724034-b57617048852?w=600&h=800&fit=crop",
        alt: "Zaunmontage am Grundstück",
      },
    },
    {
      slug: "handwerk-haus",
      title: "Handwerk rund ums Haus",
      description:
        "Weitere Dienstleistungen rund um Ihr Haus — pragmatisch, zuverlässig und aus einer Hand.",
      image: {
        src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=800&fit=crop",
        alt: "Allgemeine Handwerksarbeiten am Haus",
      },
    },
  ],

  process: {
    intro:
      "Transparent, strukturiert und mit klarem Ablauf — von der ersten Anfrage bis zur fertigen Arbeit. Wir beraten Sie persönlich, halten Sie über den Fortschritt auf dem Laufenden und setzen Ihr Vorhaben zuverlässig um.",
    ctaLabel: "Kontakt aufnehmen",
    steps: [
      {
        number: "01",
        title: "Anfrage & Beratung",
        description:
          "Sie schildern Ihr Vorhaben — wir klären den Bedarf und die nächsten Schritte, gerne auch vor Ort.",
      },
      {
        number: "02",
        title: "Angebot",
        description:
          "Sie erhalten ein transparentes Angebot mit klarem Leistungsumfang und nachvollziehbaren Kosten.",
      },
      {
        number: "03",
        title: "Umsetzung",
        description:
          "Wir setzen die vereinbarten Arbeiten sauber und termingerecht um — Schritt für Schritt.",
      },
      {
        number: "04",
        title: "Abnahme",
        description:
          "Gemeinsame Abnahme und kurze Hinweise zur Pflege — damit Sie langfristig Freude an dem Ergebnis haben.",
      },
    ],
  },

  projects: {
    headingPrimary: "Ausgewählte",
    headingAccent: "Arbeiten",
    subline:
      "Ein Einblick in typische Projekte — Dach, Pflaster, Garten und mehr. Fotos hier noch als Entwurf-Platzhalter.",
    items: [
      {
        src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&h=900&fit=crop",
        alt: "Dachpflege und Reinigung",
        featured: true,
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        alt: "Pflasterfläche Einfahrt",
        featured: false,
      },
      {
        src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        alt: "Gartenpflege",
        featured: false,
      },
      {
        src: "https://images.unsplash.com/photo-1654613724034-b57617048852?w=800&h=600&fit=crop",
        alt: "Zaunmontage",
        featured: false,
      },
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
        alt: "Bauarbeiten am Haus",
        featured: false,
      },
    ],
  },

  contactCta: {
    heading: {
      line1: "Lassen Sie uns",
      line2: "in Verbindung",
      accent: "treten.",
    },
    body: "Ob Dachreinigung, Pflaster, Gartenarbeit oder Zaunmontage — wir beraten Sie unverbindlich und erstellen ein individuelles Angebot für Ihr Vorhaben.",
    ctaLabel: "Angebot anfragen",
    callLabel: "Anrufen",
    phoneHref: "tel:+491794689476",
  },
};
