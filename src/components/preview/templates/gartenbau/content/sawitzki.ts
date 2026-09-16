import type { GartenbauContent } from "./types";

/** Standard-Inhalte: Gartengestaltung Sawitzki-Trollmann (Demo). */
export const sawitzkiContent: GartenbauContent = {
  brandName: "Sawitzki-Trollmann",
  footerBlurb:
    "Gartengestaltung mit handwerklicher Qualität, persönlicher Beratung und langlebigen Außenanlagen in Langenhagen und Umgebung.",
  copyrightName: "Gartengestaltung Sawitzki-Trollmann",

  hero: {
    headingLines: ["Gestalten wir", "Ihren Garten", "neu"],
    headingAccentIndex: 2,
    subline:
      "Wir gestalten hochwertige, langlebige Außenanlagen — individuell für Ihren Garten in Langenhagen und Umgebung.",
    primaryCta: "Angebot anfragen",
    secondaryCta: "Leistungen entdecken",
  },

  heroSlides: [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
      alt: "Moderne Garten-Terrasse mit hochwertiger Gestaltung",
      label: "Terrasse",
    },
    {
      src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1920&h=1080&fit=crop",
      alt: "Landscaping mit gepflastertem Patio und Bepflanzung",
      label: "Pflaster",
    },
    {
      src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1920&h=1080&fit=crop",
      alt: "Outdoor-Gartendesign mit natürlichen Materialien",
      label: "Gartengestaltung",
    },
  ],

  heroTrust: {
    ownerName: "Jerome Weiß",
    ownerRole: "Geschäftsführer",
    ownerImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    clientCount: 120,
    clientsLabel: "zufriedene Kunden",
  },

  aboutTeaser: {
    heading: {
      primary: "Partner für",
      accent: "Ihren",
      secondary: "Garten",
    },
    body: [
      "Gartengestaltung Sawitzki-Trollmann steht für handwerkliche Qualität, persönliche Beratung und langlebige Außenanlagen.",
      "Ob Terrasse, Pflasterarbeiten oder komplette Gartengestaltung — wir begleiten Sie von der ersten Idee bis zur fertigen Umsetzung in Langenhagen und Umgebung.",
    ],
    ctaLabel: "Mehr über uns",
    images: [
      {
        src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&h=900&fit=crop",
        alt: "Gärtner bei der Arbeit in einem gepflegten Garten",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=800&fit=crop",
        alt: "Hochwertige Terrasse und Außenanlage",
      },
    ],
  },

  whyUs: {
    headingBrand: "Sawitzki-Trollmann",
    subline:
      "Verlässlichkeit, Qualität und persönlicher Service — das macht den Unterschied für Ihren Garten.",
    items: [
      {
        icon: "layers",
        title: "Alles aus einer Hand",
        description:
          "Von der Planung bis zur Umsetzung — ein Ansprechpartner für Ihr gesamtes Projekt.",
        anchor: "1 Ansprechpartner",
        featured: true,
      },
      {
        icon: "map-pin",
        title: "Regional verwurzelt",
        description:
          "Für Langenhagen, Hannover und Umgebung — kurze Wege, schnelle Reaktionszeiten.",
        anchor: "Vor Ort",
        featured: false,
      },
      {
        icon: "shield-check",
        title: "Qualität & Langlebigkeit",
        description:
          "Hochwertige Materialien und saubere Ausführung für Ergebnisse, die Jahrzehnte halten.",
        anchor: "Langfristig",
        featured: false,
      },
      {
        icon: "users",
        title: "Persönliche Beratung",
        description:
          "Individuell auf Ihren Garten, Ihre Wünsche und Ihr Budget abgestimmt.",
        anchor: "Individuell",
        featured: false,
      },
    ],
  },

  servicesIntro:
    "Von der Terrasse bis zum Teich — wir realisieren Ihre Wünsche mit Erfahrung und handwerklichem Anspruch.",
  services: [
    {
      slug: "pflasterarbeiten",
      title: "Pflasterarbeiten",
      description: "Einfahrten, Wege und Hofeinfahrten in präziser Verlegung.",
      image: {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop",
        alt: "Pflasterarbeiten mit Natursteinen",
      },
    },
    {
      slug: "naturstein",
      title: "Naturstein",
      description: "Mauern, Stufen und Einfassungen aus edlem Naturstein.",
      image: {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop",
        alt: "Naturstein im Garten",
      },
    },
    {
      slug: "terrassen",
      title: "Terrassen",
      description: "Holz- und Stein-Terrassen für entspannte Stunden im Freien.",
      image: {
        src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=800&fit=crop",
        alt: "Moderne Garten-Terrasse",
      },
    },
    {
      slug: "zaeune",
      title: "Zäune",
      description: "Sichtschutz und Einfassungen — funktional und formschön.",
      image: {
        src: "https://images.unsplash.com/photo-1654613724034-b57617048852?w=600&h=800&fit=crop",
        alt: "Gartenzaun mit Bepflanzung",
      },
    },
    {
      slug: "teichbau",
      title: "Teichbau",
      description: "Naturnahe Teiche und Wasserspiele für lebendige Gärten.",
      image: {
        src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&h=800&fit=crop",
        alt: "Gartenteich mit Bepflanzung",
      },
    },
    {
      slug: "baumfaellung",
      title: "Baumfällung",
      description: "Fachgerechte Baumarbeiten — sicher und professionell.",
      image: {
        src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=800&fit=crop",
        alt: "Baumarbeiten im Garten",
      },
    },
  ],

  process: {
    intro:
      "Transparent, strukturiert und mit klarem Ablauf — von der ersten Idee bis zur fertigen Außenanlage. Wir begleiten Sie persönlich durch jeden Schritt, halten Sie über Fortschritt und Entscheidungen auf dem Laufenden und sorgen dafür, dass Ihr Projekt termingerecht und in höchster Qualität umgesetzt wird.",
    ctaLabel: "Kontakt aufnehmen",
    steps: [
      {
        number: "01",
        title: "Beratung & Vor-Ort-Termin",
        description:
          "Wir besichtigen Ihren Garten, besprechen Ihre Wünsche und klären den Rahmen.",
      },
      {
        number: "02",
        title: "Planung & Angebot",
        description:
          "Sie erhalten ein transparentes Angebot mit klarer Planung und Materialauswahl.",
      },
      {
        number: "03",
        title: "Umsetzung",
        description:
          "Unser Team setzt Ihr Projekt termingerecht und sauber um — Schritt für Schritt.",
      },
      {
        number: "04",
        title: "Übergabe & Abnahme",
        description:
          "Gemeinsame Abnahme, Pflegehinweise und ein Garten, der begeistert.",
      },
    ],
  },

  projects: {
    headingPrimary: "Ausgewählte",
    headingAccent: "Projekte",
    subline:
      "Ein Einblick in unsere Arbeit — echte Projekte, hochwertige Umsetzung, zufriedene Kunden.",
    items: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop",
        alt: "Moderne Terrasse mit Gartenbeleuchtung",
        featured: true,
      },
      {
        src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop",
        alt: "Patio mit Lounge-Bereich",
        featured: false,
      },
      {
        src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&h=600&fit=crop",
        alt: "Gartenweg mit Bepflanzung",
        featured: false,
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        alt: "Pflasterarbeiten im Vorgarten",
        featured: false,
      },
      {
        src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        alt: "Gartengestaltung mit Staudenbeet",
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
    body: "Ob Neugestaltung, Erweiterung oder einzelne Leistungen — wir beraten Sie unverbindlich und erstellen ein individuelles Angebot für Ihr Projekt.",
    ctaLabel: "Angebot anfragen",
    callLabel: "Anrufen",
    phoneHref: "tel:+490000000000",
  },
};
