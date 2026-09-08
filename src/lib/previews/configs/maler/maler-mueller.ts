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
    eyebrow: "Maler- und Lackiererbetrieb aus Hannover",
    headline: "Professionelle Malerarbeiten in Hannover",
    subline:
      "Innenanstrich, Fassade und Wandgestaltung für Privat- und Gewerbekunden – saubere Ausführung, feste Termine und ein Festpreis, der hält.",
    primaryCta: { label: "Kostenloses Angebot" },
    secondaryCta: { label: "Leistungen ansehen" },
    trust: {
      text: "4,9 von 5 – über 180 Bewertungen",
      rating: 4.9,
    },
  },

  about: {
    eyebrow: "Über uns",
    heading: "Seit 1998 der Malerbetrieb für Hannover und Umgebung",
    text: "Was als Ein-Mann-Betrieb begann, ist heute ein Team aus zwölf Malern und Lackierern. Wir arbeiten für Hausbesitzer, Hausverwaltungen und Gewerbekunden in der ganzen Region – vom einzelnen Wohnzimmer bis zur kompletten Fassadensanierung. Dabei gilt bei uns immer dasselbe Versprechen: fester Preis, fester Termin, saubere Baustelle.",
    points: [
      "Meisterbetrieb mit eigener Ausbildungswerkstatt",
      "Feste Ansprechpartner vom Angebot bis zur Abnahme",
      "Möbel abdecken, Böden schützen, Endreinigung inklusive",
      "Vollversichert – Haftpflicht bis 5 Mio. €",
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
      title: "Innenanstrich",
      description:
        "Wände, Decken und Treppenhäuser in Wunschfarbe – deckend, gleichmäßig und mit scharfen Kanten.",
      icon: "roller",
      bullets: ["Wohnräume & Büros", "Treppenhäuser", "Schimmelsanierung"],
    },
    {
      title: "Fassadenanstrich",
      description:
        "Wetterschutz und neuer Auftritt für Ihr Haus, inklusive Reinigung und Rissesanierung.",
      icon: "home",
      bullets: ["Silikonharz & Silikat", "Rissesanierung", "Gerüst über Partner"],
    },
    {
      title: "Tapezieren & Wandgestaltung",
      description:
        "Vliestapete, Raufaser oder Designtapete – dazu Spachteltechniken und Akzentwände.",
      icon: "brush",
      bullets: ["Vlies & Raufaser", "Designtapeten", "Spachteltechnik"],
    },
    {
      title: "Lack- & Holzschutzarbeiten",
      description:
        "Türen, Fenster, Zargen und Holzverkleidungen sauber lackiert und dauerhaft geschützt.",
      icon: "droplet",
      bullets: ["Türen & Zargen", "Fenster", "Holzfassaden"],
    },
    {
      title: "Wärmedämmung (WDVS)",
      description:
        "Fachgerecht angebrachte Dämmung, die Heizkosten senkt – auf Wunsch mit Förderberatung.",
      icon: "leaf",
      bullets: ["WDVS-Systeme", "Förderberatung", "Energieausweis über Partner"],
    },
    {
      title: "Boden- & Spachtelarbeiten",
      description:
        "Untergründe vorbereiten, ausgleichen und neue Beläge fachgerecht verlegen.",
      icon: "ruler",
      bullets: ["Vinyl & Designboden", "Ausgleichsmasse", "Sockelleisten"],
    },
  ],

  projects: [
    {
      title: "Altbauwohnung Oststadt",
      category: "Innenanstrich",
      location: "Hannover",
      description:
        "120 m² Wohnfläche komplett neu gestrichen, Stuckdecken vorsichtig aufgearbeitet.",
    },
    {
      title: "Einfamilienhaus mit neuer Fassade",
      category: "Fassade",
      location: "Laatzen",
      description:
        "Fassadenreinigung, Rissesanierung und zweifacher Silikonharz-Anstrich.",
    },
    {
      title: "Praxisräume Zahnarzt",
      category: "Gewerbe",
      location: "Hannover-Linden",
      description:
        "Anstrich in Etappen über zwei Wochenenden – ohne Ausfall im Praxisbetrieb.",
    },
    {
      title: "Treppenhaus Mehrfamilienhaus",
      category: "Innenanstrich",
      location: "Garbsen",
      description:
        "Sechs Etagen inklusive Geländer-Lackierung und Ausbesserung der Wandsockel.",
    },
    {
      title: "Wärmedämmung Doppelhaus",
      category: "WDVS",
      location: "Ronnenberg",
      description: "14 cm WDVS mit anschließendem Struktur-Oberputz.",
    },
    {
      title: "Ladenlokal Innenstadt",
      category: "Gewerbe",
      location: "Hannover",
      description:
        "Farbkonzept nach Corporate Design, Umsetzung in fünf Nachtschichten.",
    },
  ],

  process: [
    {
      title: "Beratung & Aufmaß",
      description:
        "Wir kommen kostenlos vorbei, hören zu, messen auf und beraten zu Farbe und Material.",
    },
    {
      title: "Festpreis-Angebot",
      description:
        "Innerhalb von 48 Stunden erhalten Sie ein transparentes Angebot – ohne Kleingedrucktes.",
    },
    {
      title: "Termin & Vorbereitung",
      description:
        "Fester Starttermin, Möbel werden abgedeckt, Böden geschützt, Nachbarn informiert.",
    },
    {
      title: "Ausführung & Abnahme",
      description:
        "Wir arbeiten zügig, räumen täglich auf und gehen am Ende gemeinsam durch alle Räume.",
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
    },
    services: {
      title: "Unsere Leistungen im Detail",
      text: "Innen, außen, Holz und Boden – alles aus einer Hand und mit festem Preis.",
    },
    projects: {
      title: "Projekte aus Hannover und Region",
      text: "Ein Einblick in Aufträge, die wir in den letzten Monaten abgeschlossen haben.",
    },
    contact: {
      title: "Kontakt & kostenloses Angebot",
      text: "Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie das Formular – wir antworten innerhalb eines Werktages.",
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
