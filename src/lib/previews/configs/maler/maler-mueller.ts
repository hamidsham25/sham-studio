import type { PreviewConfig } from "../../core/types";

/**
 * Voll ausgebauter Maler-Entwurf – dient als Vorlage für neue Maler-Kunden.
 * Zum Anlegen eines neuen Kunden: Datei kopieren, slug ändern, Inhalte
 * austauschen und in index.ts eintragen.
 */
export const malerMueller: PreviewConfig = {
  slug: "maler-mueller",
  trade: "maler",
  businessName: "Maler Müller",
  tagline: "Malerarbeiten mit Meisterqualität in Hannover",

  colors: {
    primary: "#f2681c",
    primaryHover: "#d4530d",
    background: "#ffffff",
    foreground: "#15202b",
    muted: "#5d6b78",
    onPrimary: "#ffffff",
  },

  contact: {
    phone: "+49 511 123456",
    email: "info@maler-mueller.de",
    whatsapp: "+49 511 123456",
    address: "Vahrenwalder Straße 120, 30165 Hannover",
  },

  topBarMessage:
    "Kostenloses Aufmaß vor Ort – Festpreis-Angebot innerhalb von 48 Stunden",

  hero: {
    eyebrow: "Meisterbetrieb aus Hannover",
    headline: "Malerarbeiten, die halten – fest im Preis und im Termin",
    subline:
      "Innenanstrich, Fassade und Wandgestaltung für Privat- und Gewerbekunden. Saubere Baustelle, feste Ansprechpartner, Angebot innerhalb von 48 Stunden.",
    primaryCta: { label: "Kostenloses Angebot" },
    secondaryCta: { label: "Leistungen ansehen" },
    backgroundImages: [
      {
        src: "/images/preview/maler-mueller/hero-pinsel-regenbogen.jpg",
        alt: "Bunte Malerpinsel mit Farbspritzern",
      },
      {
        src: "/images/preview/maler-mueller/hero-farbwalzen-wand.jpg",
        alt: "Farbwalzen streichen eine Wand in Grün, Rot, Orange und Blau",
      },
    ],
    trust: {
      text: "4,9 von 5 – über 180 Bewertungen",
      rating: 4.9,
    },
  },

  about: {
    eyebrow: "Über uns",
    heading: "Farben, die bleiben – Handwerk, dem man vertraut",
    text: "Was als Ein-Mann-Betrieb begann, ist heute ein Team aus zwölf Malern und Lackierern. Wir arbeiten für Hausbesitzer, Hausverwaltungen und Gewerbekunden in der ganzen Region – vom einzelnen Wohnzimmer bis zur kompletten Fassadensanierung. Dabei gilt bei uns immer dasselbe Versprechen: fester Preis, fester Termin, saubere Baustelle.",
    points: [
      "Meisterbetrieb mit eigener Ausbildungswerkstatt",
      "Feste Ansprechpartner vom Angebot bis zur Abnahme",
      "Möbel abdecken, Böden schützen, Endreinigung inklusive",
      "Vollversichert – Haftpflicht bis 5 Mio. €",
    ],
    sinceYear: "1998",
    sinceLabel: "Seit",
    images: [
      {
        src: "/images/preview/maler-mueller/about-arbeiter.jpg",
        alt: "Maler taucht Farbwalze in weiße Farbe",
      },
      {
        src: "/images/preview/maler-mueller/about-wand.jpg",
        alt: "Maler streicht eine Wand",
      },
    ],
    signature: {
      name: "Thomas Müller",
      role: "Malermeister & Inhaber",
    },
  },

  stats: [
    { value: "25+", label: "Jahre Erfahrung" },
    { value: "1.200", label: "Projekte umgesetzt" },
    { value: "12", label: "Mitarbeiter im Team" },
    { value: "4,9", label: "Kundenbewertung" },
  ],

  sectionTitles: {
    services: {
      eyebrow: "Leistungen",
      title: "Alles rund um Farbe, Wand und Fassade",
      text: "Von der einzelnen Wand bis zum kompletten Objekt – wir übernehmen die Ausführung komplett aus einer Hand.",
    },
    projects: {
      eyebrow: "Projekte",
      title: "Zuletzt umgesetzte Arbeiten",
      text: "Ein Auszug aus unseren Aufträgen in Hannover und der Region.",
    },
    process: {
      eyebrow: "Ablauf",
      title: "So läuft Ihr Auftrag ab",
      text: "Vier klare Schritte – Sie wissen jederzeit, was als Nächstes passiert.",
    },
    benefits: {
      eyebrow: "Warum wir",
      title: "Was Sie von uns erwarten können",
    },
  },

  services: [
    {
      title: "Maler & Tapezierarbeiten",
      description:
        "Innenanstrich, Tapezieren und Lackierarbeiten – deckend, gleichmäßig und mit scharfen Kanten.",
      icon: "roller",
      linkLabel: "Malerarbeiten",
      image: {
        src: "/images/preview/maler-mueller/service-innenanstrich.jpg",
        alt: "Handwerker streicht Innenwände mit der Farbwalze",
      },
      bullets: ["Innenanstrich", "Tapezieren", "Lackierarbeiten"],
    },
    {
      title: "Fassaden & Aussenarbeiten",
      description:
        "Wetterschutz und neuer Auftritt für Ihr Haus, inklusive Reinigung und Rissesanierung.",
      icon: "home",
      linkLabel: "Fassadenarbeiten",
      image: {
        src: "/images/preview/maler-mueller/service-fassade-arbeit.jpg",
        alt: "Fassadenarbeiten an einem Haus mit Leiter",
      },
      bullets: ["Fassadenanstrich", "Rissesanierung", "Gerüst über Partner"],
    },
    {
      title: "Boden-Beschichtungen",
      description:
        "Untergründe vorbereiten, ausgleichen und Böden fachgerecht beschichten.",
      icon: "ruler",
      linkLabel: "Bodenbeschichtungen",
      image: {
        src: "/images/preview/maler-mueller/service-boden.jpg",
        alt: "Hochwertig beschichteter Boden in modernen Räumen",
      },
      bullets: ["Beschichtungen", "Ausgleichsmasse", "Sockelleisten"],
    },
    {
      title: "Schimmel & Wasserschaden",
      description:
        "Ursachen finden, befallene Stellen sanieren und Flächen dauerhaft schützen.",
      icon: "droplet",
      linkLabel: "Schimmelsanierung",
      image: {
        src: "/images/preview/maler-mueller/service-schimmel-sanierung.jpg",
        alt: "Hausfassade mit Sanierungsbedarf",
      },
      bullets: ["Ursachenanalyse", "Sanierung", "Schutzanstrich"],
    },
    {
      title: "Neugestaltung Gewerbe",
      description:
        "Büros, Praxen und Ladenlokale neu gestalten – auch in Etappen und außerhalb der Öffnungszeiten.",
      icon: "brush",
      linkLabel: "Gewerbegestaltung",
      image: {
        src: "/images/preview/maler-mueller/service-gewerbe.jpg",
        alt: "Frisch gestaltete Gewerberäume",
      },
      bullets: ["Büros & Praxen", "Ladenlokale", "Nacht- & Wochenendarbeiten"],
    },
    {
      title: "Innenputz",
      description:
        "Unterputz, Feinputz und Spachtelarbeiten für glatte, streichefertige Wände.",
      icon: "wall",
      linkLabel: "Innenputz",
      image: {
        src: "/images/preview/maler-mueller/service-putz.jpg",
        alt: "Wandvorbereitung und Putzarbeiten",
      },
      bullets: ["Unterputz", "Feinputz", "Spachteltechnik"],
    },
    {
      title: "Fliesenanstrich",
      description:
        "Fliesen in Bad und Küche neu beschichten – ohne teuren Abriss der alten Beläge.",
      icon: "roller",
      linkLabel: "Fliesenanstrich",
      image: {
        src: "/images/preview/maler-mueller/service-fliesen.jpg",
        alt: "Frisch renoviertes Bad mit Fliesen",
      },
      bullets: ["Bad & Küche", "Haftgrund", "Strapazierfähige Systeme"],
    },
    {
      title: "Betonsanierung",
      description:
        "Betonflächen reinigen, ausbessern und schützen – für Fassade, Keller und Gewerbe.",
      icon: "shield",
      linkLabel: "Betonsanierung",
      image: {
        src: "/images/preview/maler-mueller/service-beton.jpg",
        alt: "Betonarbeiten auf der Baustelle",
      },
      bullets: ["Ausbesserung", "Schutzbeschichtung", "Fassade & Keller"],
    },
  ],

  projects: [
    {
      title: "Altbauwohnung Oststadt",
      category: "Innenanstrich",
      location: "Hannover",
      description:
        "120 m² Wohnfläche komplett neu gestrichen, Stuckdecken vorsichtig aufgearbeitet.",
      image: {
        src: "/images/preview/maler-mueller/project-altbau.jpg",
        alt: "Renoviertes Wohnzimmer in Altbauwohnung",
      },
    },
    {
      title: "Einfamilienhaus mit neuer Fassade",
      category: "Fassade",
      location: "Laatzen",
      description:
        "Fassadenreinigung, Rissesanierung und zweifacher Silikonharz-Anstrich.",
      image: {
        src: "/images/preview/maler-mueller/project-efh.jpg",
        alt: "Einfamilienhaus nach Fassadenerneuerung",
      },
    },
    {
      title: "Praxisräume Zahnarzt",
      category: "Gewerbe",
      location: "Hannover-Linden",
      description:
        "Anstrich in Etappen über zwei Wochenenden – ohne Ausfall im Praxisbetrieb.",
      image: {
        src: "/images/preview/maler-mueller/project-praxis.jpg",
        alt: "Frisch gestrichene Praxisräume",
      },
    },
    {
      title: "Treppenhaus Mehrfamilienhaus",
      category: "Innenanstrich",
      location: "Garbsen",
      description:
        "Sechs Etagen inklusive Geländer-Lackierung und Ausbesserung der Wandsockel.",
      image: {
        src: "/images/preview/maler-mueller/project-treppe.jpg",
        alt: "Innenräume nach Treppenhaus-Anstrich",
      },
    },
    {
      title: "Wärmedämmung Doppelhaus",
      category: "WDVS",
      location: "Ronnenberg",
      description: "14 cm WDVS mit anschließendem Struktur-Oberputz.",
      image: {
        src: "/images/preview/maler-mueller/project-daemmung.jpg",
        alt: "Fassadendämmung und Außenarbeiten",
      },
    },
    {
      title: "Ladenlokal Innenstadt",
      category: "Gewerbe",
      location: "Hannover",
      description:
        "Farbkonzept nach Corporate Design, Umsetzung in fünf Nachtschichten.",
      image: {
        src: "/images/preview/maler-mueller/project-laden.jpg",
        alt: "Gestaltetes Ladenlokal nach dem Anstrich",
      },
    },
  ],

  process: [
    {
      title: "Beratung & Aufmaß",
      description:
        "Wir kommen kostenlos vorbei, hören zu, messen auf und beraten zu Farbe und Material.",
      icon: "phone",
    },
    {
      title: "Festpreis-Angebot",
      description:
        "Innerhalb von 48 Stunden erhalten Sie ein transparentes Angebot – ohne Kleingedrucktes.",
      icon: "euro",
    },
    {
      title: "Termin & Vorbereitung",
      description:
        "Fester Starttermin, Möbel werden abgedeckt, Böden geschützt, Nachbarn informiert.",
      icon: "clock",
    },
    {
      title: "Ausführung & Abnahme",
      description:
        "Wir arbeiten zügig, räumen täglich auf und gehen am Ende gemeinsam durch alle Räume.",
      icon: "check",
    },
  ],

  benefits: [
    {
      title: "Festpreisgarantie",
      description:
        "Der Preis im Angebot ist der Preis auf der Rechnung. Nachträge nur nach Ihrer Freigabe.",
      icon: "euro",
    },
    {
      title: "Termintreue",
      description:
        "Wir starten am zugesagten Tag und halten den vereinbarten Fertigstellungstermin ein.",
      icon: "clock",
    },
    {
      title: "Meisterbetrieb",
      description:
        "Jede Baustelle wird von einem Malermeister geplant und abgenommen.",
      icon: "award",
    },
    {
      title: "Saubere Baustelle",
      description:
        "Abdecken, Schutzfolie, tägliches Aufräumen und Endreinigung sind bei uns inklusive.",
      icon: "sparkles",
    },
    {
      title: "Vollversichert",
      description:
        "Betriebshaftpflicht bis 5 Mio. € – falls doch einmal etwas passiert.",
      icon: "shield",
    },
    {
      title: "Festes Team",
      description:
        "Keine wechselnden Subunternehmer: Bei Ihnen arbeiten unsere eigenen Leute.",
      icon: "users",
    },
  ],

  cta: {
    heading: "Bereit für frische Farbe?",
    text: "Schicken Sie uns kurz Ihr Vorhaben – wir melden uns innerhalb eines Werktages und vereinbaren einen Termin zum Aufmaß.",
    primaryCta: { label: "Angebot anfordern" },
    secondaryCta: { label: "Direkt anrufen" },
  },

  pageIntros: {
    about: {
      title: "Der Betrieb hinter der Farbrolle",
      text: "Zwölf Kolleginnen und Kollegen, ein Malermeister und über 25 Jahre Erfahrung in Hannover.",
      image: {
        src: "/images/preview/maler-mueller/page-about.jpg",
        alt: "Maler bei der Arbeit an der Wand",
      },
    },
    services: {
      title: "Unsere Leistungen im Detail",
      text: "Innen, außen, Holz und Boden – alles aus einer Hand und mit festem Preis.",
      image: {
        src: "/images/preview/maler-mueller/page-services.jpg",
        alt: "Fassadenarbeiten am Haus",
      },
    },
    projects: {
      title: "Projekte aus Hannover und Region",
      text: "Ein Einblick in Aufträge, die wir in den letzten Monaten abgeschlossen haben.",
      image: {
        src: "/images/preview/maler-mueller/page-projects.jpg",
        alt: "Haus mit Gerüst bei der Fassadensanierung",
      },
    },
    contact: {
      title: "Kontakt & Angebot",
      text: "Schreiben Sie uns kurz Ihr Vorhaben – wir melden uns innerhalb eines Werktages.",
      image: {
        src: "/images/preview/maler-mueller/page-contact.jpg",
        alt: "Modern eingerichteter Innenraum",
      },
    },
  },

  openingHours: [
    { days: "Montag – Freitag", hours: "07:00 – 17:00 Uhr" },
    { days: "Samstag", hours: "Nach Absprache" },
    { days: "Sonntag", hours: "Geschlossen" },
  ],

  serviceArea: [
    "Hannover",
    "Laatzen",
    "Garbsen",
    "Langenhagen",
    "Ronnenberg",
    "Seelze",
    "Hemmingen",
    "Wunstorf",
  ],

  footer: {
    about:
      "Maler Müller ist Ihr Meisterbetrieb für Innenanstrich, Fassade und Wandgestaltung in Hannover und Umgebung.",
    socials: [
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "facebook", href: "https://facebook.com" },
      { platform: "linkedin", href: "https://linkedin.com" },
    ],
    legalLinks: [{ label: "Impressum" }, { label: "Datenschutz" }],
  },
};
