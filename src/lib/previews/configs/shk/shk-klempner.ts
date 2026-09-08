import type { PreviewConfig } from "../../core/types";

/**
 * Demo-Bilder aus Unsplash – funktionieren sofort ohne lokale Dateien.
 * Für echte Kundenfotos: Bilder nach public/images/preview/shk-klempner/ legen
 * und die src-Pfade unten anpassen (z. B. "/images/preview/shk-klempner/hero.jpg").
 */
const STOCK = {
  hero: "https://images.unsplash.com/photo-1581578731541-0469e4000f73?w=1600&q=80",
  about: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
  serviceHeizung:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  serviceBad:
    "https://images.unsplash.com/photo-1552320316-388371770588?w=800&q=80",
  serviceSanitaer:
    "https://images.unsplash.com/photo-1607472586893-eb6b99348f72?w=800&q=80",
  serviceKlima:
    "https://images.unsplash.com/photo-1631545914402-001593948792?w=800&q=80",
  serviceWartung:
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d0?w=800&q=80",
  serviceNotdienst:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  projektBad:
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
  projektWaermepumpe:
    "https://images.unsplash.com/photo-1617469767053-d3b5239490a5?w=800&q=80",
  projektGewerbe:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  projektFussbodenheizung:
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
  projektKlima:
    "https://images.unsplash.com/photo-1631567098786-4a19b1173f32?w=800&q=80",
  projektNotdienst:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
} as const;

/**
 * SHK-Entwurf (Sanitär, Heizung, Klima) – angelehnt an HandGrid-Referenz.
 * Zum Anlegen eines neuen SHK-Kunden: Datei kopieren, slug ändern, Inhalte
 * austauschen und in index.ts eintragen.
 */
export const shkKlempner: PreviewConfig = {
  slug: "shk-klempner",
  trade: "shk",
  businessName: "SHK Becker",
  tagline: "Sanitär, Heizung & Klima in Hannover und Region",

  colors: {
    primary: "#e32519",
    primaryHover: "#c41f14",
    background: "#ffffff",
    foreground: "#111827",
    muted: "#6b7280",
    onPrimary: "#ffffff",
  },

  contact: {
    phone: "+49 511 987654",
    email: "info@shk-becker.de",
    whatsapp: "+49 511 987654",
    address: "Podbielskistraße 45, 30159 Hannover",
  },

  topBarMessage: "24h Notdienst – auch an Wochenenden und Feiertagen erreichbar",

  hero: {
    eyebrow: "Meisterbetrieb für Sanitär, Heizung & Klima",
    headline: "Schneller SHK-Service in Hannover und Umgebung",
    subline:
      "Vom tropfenden Wasserhahn bis zur kompletten Heizungsmodernisierung – wir lösen Ihr Problem fachgerecht, termintreu und mit Festpreisgarantie.",
    primaryCta: { label: "Jetzt anrufen" },
    secondaryCta: { label: "Leistungen ansehen" },
    image: {
      src: STOCK.hero,
      alt: "SHK-Meister bei der Arbeit in einer modernen Heizungsanlage",
    },
    trust: {
      text: "4,8 von 5 – über 320 Bewertungen",
      rating: 4.8,
    },
  },

  about: {
    eyebrow: "Über uns",
    heading: "Ihr SHK-Meisterbetrieb aus Hannover – alles aus einer Hand",
    text: "Seit über 20 Jahren kümmern wir uns um Heizung, Sanitär und Klima in Privathaushalten, Hausverwaltungen und Gewerbeobjekten. Was als Ein-Mann-Betrieb begann, ist heute ein eingespieltes Team aus Installateuren, Heizungsbauern und Klimatechnikern. Bei uns haben Sie immer einen festen Ansprechpartner – vom ersten Anruf bis zur Abnahme.",
    points: [
      "SHK-Meisterbetrieb mit eigener Ausbildungswerkstatt",
      "Festpreis-Angebot vor Beginn der Arbeiten",
      "Saubere Baustelle – Schutzfolien und Endreinigung inklusive",
      "24h Notdienst für Wasser- und Heizungsnotfälle",
    ],
    image: {
      src: STOCK.about,
      alt: "SHK Becker Team vor dem Firmenfahrzeug",
    },
    signature: {
      name: "Markus Becker",
      role: "SHK-Meister & Inhaber",
    },
  },

  stats: [
    { value: "20+", label: "Jahre Erfahrung" },
    { value: "2.400+", label: "Projekte umgesetzt" },
    { value: "98%", label: "Kundenzufriedenheit" },
  ],

  sectionTitles: {
    services: {
      eyebrow: "Leistungen",
      title: "Sanitär, Heizung & Klima im Detail",
      text: "Vom Notfall bis zur Komplettsanierung – wir decken alle SHK-Gewerke ab.",
    },
    projects: {
      eyebrow: "Referenzen",
      title: "Abgeschlossene Projekte",
      text: "Ein Einblick in unsere Arbeit – von der Badrenovierung bis zur Heizungsmodernisierung.",
    },
    process: {
      eyebrow: "Ablauf",
      title: "So funktioniert's bei uns",
      text: "Drei einfache Schritte – von der Anfrage bis zur fertigen Installation.",
    },
    benefits: {
      eyebrow: "Warum SHK Becker",
      title: "Kundenzufriedenheit steht an erster Stelle",
      text: "Vertrauen entsteht durch Zuverlässigkeit, Transparenz und saubere Arbeit.",
    },
    stats: {
      title: "Unsere Erfahrung spricht für sich",
      text: "Über zwei Jahrzehnte SHK-Handwerk in Hannover und der Region.",
    },
  },

  services: [
    {
      title: "Heizungsinstallation",
      description:
        "Gas-, Öl- und Wärmepumpenheizungen fachgerecht geplant, installiert und in Betrieb genommen.",
      icon: "home",
      bullets: [
        "Wärmepumpen & Hybridheizungen",
        "Gas-Brennwerttechnik",
        "Fußbodenheizung",
        "Hydraulischer Abgleich",
      ],
      image: {
        src: STOCK.serviceHeizung,
        alt: "Installation einer modernen Heizungsanlage",
      },
    },
    {
      title: "Badrenovierung",
      description:
        "Komplette Badsanierung aus einer Hand – von der Planung über Fliesen bis zur Endmontage.",
      icon: "droplet",
      bullets: [
        "Barrierefreie Bäder",
        "Fliesen & Estricharbeiten",
        "Sanitärobjekte & Armaturen",
        "3D-Badplanung",
      ],
      image: {
        src: STOCK.serviceBad,
        alt: "Modernes Badezimmer nach Renovierung",
      },
    },
    {
      title: "Sanitärinstallation",
      description:
        "Rohrleitungen, Abwasser, Wasseranschlüsse und Reparaturen – schnell und dauerhaft.",
      icon: "droplet",
      bullets: [
        "Rohrbruch & Leckage",
        "Neuinstallation",
        "Abwasser & Entwässerung",
        "Trinkwasserhygiene",
      ],
      image: {
        src: STOCK.serviceSanitaer,
        alt: "Installateur bei Sanitärarbeiten unter der Spüle",
      },
    },
    {
      title: "Klimaanlagen & Lüftung",
      description:
        "Klimatisierung und Lüftungstechnik für Wohn- und Gewerberäume – effizient und leise.",
      icon: "leaf",
      bullets: [
        "Split-Klimaanlagen",
        "Zentral-Lüftungsanlagen",
        "Wartung & Filterwechsel",
        "Raumklima-Beratung",
      ],
      image: {
        src: STOCK.serviceKlima,
        alt: "Montage einer Klimaanlage",
      },
    },
    {
      title: "Heizungswartung",
      description:
        "Regelmäßige Wartung verlängert die Lebensdauer Ihrer Anlage und senkt die Heizkosten.",
      icon: "shield",
      bullets: [
        "Jährliche Heizungswartung",
        "Brenner- & Kesselcheck",
        "Wartungsvertrag",
        "Schornsteinfeger-Vorbereitung",
      ],
      image: {
        src: STOCK.serviceWartung,
        alt: "Techniker bei der Heizungswartung",
      },
    },
    {
      title: "24h Notdienst",
      description:
        "Bei Wasser- oder Heizungsnotfällen sind wir rund um die Uhr für Sie da – auch am Wochenende.",
      icon: "clock",
      bullets: [
        "Rohrbruch & Wasserschaden",
        "Heizungsausfall im Winter",
        "Verstopfungen",
        "Schnelle Vor-Ort-Hilfe",
      ],
      image: {
        src: STOCK.serviceNotdienst,
        alt: "Notdienst-Techniker bei einem Einsatz",
      },
    },
  ],

  projects: [
    {
      title: "Komplettsanierung Altbau-Bad",
      category: "Badrenovierung",
      location: "Hannover-List",
      description:
        "60er-Jahre-Bad in ein barrierefreies Walk-in-Bad umgewandelt – inklusive Fliesen, Estrich und neuer Leitungen.",
      image: {
        src: STOCK.projektBad,
        alt: "Renoviertes Badezimmer im Altbau",
      },
    },
    {
      title: "Wärmepumpe Einfamilienhaus",
      category: "Heizung",
      location: "Laatzen",
      description:
        "Austausch der Ölheizung gegen eine Luft-Wasser-Wärmepumpe mit Förderberatung und hydraulischem Abgleich.",
      image: {
        src: STOCK.projektWaermepumpe,
        alt: "Neue Wärmepumpe im Heizungskeller",
      },
    },
    {
      title: "Gastronomie-Küche Sanitär",
      category: "Gewerbe",
      location: "Hannover",
      description:
        "Komplette Sanitärinstallation für eine neue Restaurantküche – Abwasser, Frischwasser, Spülbecken.",
      image: {
        src: STOCK.projektGewerbe,
        alt: "Sanitärinstallation in einer Gewerbeküche",
      },
    },
    {
      title: "Fußbodenheizung Neubau",
      category: "Heizung",
      location: "Garbsen",
      description:
        "Flächenheizung über 180 m² Wohnfläche, Anbindung an Gas-Brennwertkessel mit Smart-Home-Steuerung.",
      image: {
        src: STOCK.projektFussbodenheizung,
        alt: "Verlegung einer Fußbodenheizung",
      },
    },
    {
      title: "Klimaanlage Bürogebäude",
      category: "Klima",
      location: "Langenhagen",
      description:
        "Multi-Split-Anlage für 12 Büroräume – leise, energieeffizient und mit zentraler Steuerung.",
      image: {
        src: STOCK.projektKlima,
        alt: "Klimaanlage in einem Bürogebäude",
      },
    },
    {
      title: "Rohrbruch-Sanierung Mehrfamilienhaus",
      category: "Notdienst",
      location: "Hannover-Südstadt",
      description:
        "Nachtlicher Rohrbruch in der Zuleitung – Notdienst-Einsatz, Leitungssanierung und Trocknung koordiniert.",
      image: {
        src: STOCK.projektNotdienst,
        alt: "Sanierung nach einem Rohrbruch",
      },
    },
  ],

  process: [
    {
      title: "Anfrage stellen",
      description:
        "Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie das Kontaktformular – wir melden uns am selben Werktag.",
    },
    {
      title: "Termin vereinbaren",
      description:
        "Wir kommen vor Ort, prüfen den Sachverhalt und erstellen ein transparentes Festpreis-Angebot.",
    },
    {
      title: "Auftrag & Entspannung",
      description:
        "Zum vereinbarten Termin führen wir die Arbeiten sauber aus – Sie können sich zurücklehnen.",
    },
  ],

  benefits: [
    {
      title: "SHK-Meisterbetrieb",
      description:
        "Jeder Auftrag wird von einem Meister geplant und abgenommen – keine halben Sachen.",
      icon: "award",
    },
    {
      title: "24h Notdienst",
      description:
        "Bei Wasser- und Heizungsnotfällen sind wir rund um die Uhr erreichbar.",
      icon: "clock",
    },
    {
      title: "Festpreisgarantie",
      description:
        "Der Preis im Angebot ist der Preis auf der Rechnung – ohne versteckte Kosten.",
      icon: "euro",
    },
    {
      title: "Saubere Baustelle",
      description:
        "Schutzfolien, Abdeckungen und Endreinigung sind bei uns selbstverständlich.",
      icon: "sparkles",
    },
    {
      title: "Förderberatung",
      description:
        "Wir beraten zu BAFA- und KfW-Förderungen für Heizungstausch und energetische Sanierung.",
      icon: "leaf",
    },
    {
      title: "Festes Team",
      description:
        "Bei Ihnen arbeiten unsere eigenen Installateure – keine wechselnden Subunternehmer.",
      icon: "users",
    },
  ],

  cta: {
    heading: "Ihr zuverlässiger SHK-Partner ist nur einen Anruf entfernt",
    text: "Ob Notfall, Wartung oder Komplettsanierung – wir sind für Sie da. Rufen Sie an oder schicken Sie uns eine Anfrage.",
    primaryCta: { label: "Kostenloses Angebot" },
    secondaryCta: { label: "Direkt anrufen" },
  },

  pageIntros: {
    about: {
      title: "Menschen beauftragen Menschen",
      text: "Lernen Sie Markus Becker und das Team hinter SHK Becker kennen – Meisterqualität seit über 20 Jahren in Hannover.",
    },
    services: {
      title: "Unsere Leistungen im Detail",
      text: "Sanitär, Heizung, Klima, Wartung und Notdienst – aufgeschlüsselt nach Gewerk, damit Sie genau finden, was Sie suchen.",
    },
    projects: {
      title: "Referenzen aus Hannover und Region",
      text: "Abgeschlossene Projekte als Beweis unserer Arbeit – von der Badrenovierung bis zur Wärmepumpen-Installation.",
    },
    contact: {
      title: "Kontakt & kostenloses Angebot",
      text: "Telefon, WhatsApp, Formular oder persönlich vor Ort – so erreichen Sie uns. Wir antworten innerhalb eines Werktages.",
    },
  },

  openingHours: [
    { days: "Montag – Freitag", hours: "07:00 – 18:00 Uhr" },
    { days: "Samstag", hours: "08:00 – 12:00 Uhr" },
    { days: "Notdienst", hours: "24 Stunden – 365 Tage" },
  ],

  serviceArea: [
    "Hannover",
    "Laatzen",
    "Garbsen",
    "Langenhagen",
    "Ronnenberg",
    "Seelze",
    "Hemmingen",
    "Isernhagen",
    "Burgdorf",
    "Lehrte",
  ],

  footer: {
    about:
      "SHK Becker ist Ihr Meisterbetrieb für Sanitär, Heizung und Klima in Hannover und Umgebung – mit 24h Notdienst.",
    socials: [
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "facebook", href: "https://facebook.com" },
    ],
    legalLinks: [{ label: "Impressum" }, { label: "Datenschutz" }],
  },
};
