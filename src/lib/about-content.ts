export const MANIFEST_LABEL = "Manifest";

export const MANIFEST_HEADLINE =
  "Wir schaffen digitale Markenauftritte, die Klarheit in Vertrauen übersetzen – und Vertrauen in echte Anfragen verwandeln.";

export type AboutStatCard = {
  id: string;
  title: string;
  tags: string[];
  value: number;
  suffix?: string;
  description: string;
};

export const ABOUT_STAT_CARDS: AboutStatCard[] = [
  {
    id: "experience",
    title: "Erfahrung",
    tags: ["Webdesign", "Entwicklung", "SEO"],
    value: 7,
    suffix: "+",
    description:
      "Jahre Erfahrung in Webdesign, Umsetzung und Optimierung – von der ersten Idee bis zum Launch.",
  },
  {
    id: "skills",
    title: "Können",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "SEO", "& mehr"],
    value: 20,
    suffix: "+",
    description:
      "Technologien im Fokus – und bei Bedarf weitere Tools, APIs oder Systeme, passend zu Ihrem Projekt.",
  },
  {
    id: "references",
    title: "Live-Referenzen",
    tags: ["Handwerk", "Gesundheit", "Automobil", "Kunst"],
    value: 7,
    suffix: "+",
    description:
      "Veröffentlichte Websites mit echten Live-Links – zum Ansehen, nicht nur als Mockup.",
  },
];

export const WHY_SHAM_STUDIO = [
  {
    title: "Alles aus einer Hand",
    text: "Strategie, Design, Entwicklung und Sichtbarkeit greifen ineinander – ohne Reibung zwischen Agenturen.",
  },
  {
    title: "Individuell statt Template",
    text: "Jede Website wird für Ihre Marke und Zielgruppe gebaut – klar strukturiert und conversion-orientiert.",
  },
  {
    title: "Technik, die trägt",
    text: "Schnelle Ladezeiten, sauberer Code und SEO von Anfang an – nicht als nachträgliches Add-on.",
  },
  {
    title: "Direkt & persönlich",
    text: "Ein Ansprechpartner, kurze Wege und ehrliche Einschätzung – Sie wissen immer, wo Ihr Projekt steht.",
  },
] as const;
