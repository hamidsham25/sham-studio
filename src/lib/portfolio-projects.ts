/** Shared project list – homepage uses first 4 via Portfolio.tsx */

export type ProjectListItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  /** Hero / hover screenshot for /projekte */
  preview: string;
  href: string;
  tags: string[];
  /** Mark as concept / mockup project (subtle label in UI). */
  isMockup?: boolean;
  /** Project still in progress – diagonal corner ribbon on preview. */
  isInProgress?: boolean;
};

export const PORTFOLIO_PROJECTS: ProjectListItem[] = [
  {
    id: "enerstrom",
    title: "EnerStrom",
    category: "Web Design · Elektrotechnik",
    description:
      "Website für einen Elektromeisterbetrieb in Hannover. Photovoltaik, Elektroinstallation und Gebäudetechnik klar strukturiert und conversion-orientiert.",
    preview: "/images/portfolio/mock-ups/enerstrom-mockup-full.png",
    href: "https://www.enerstrom-hannover.de",
    tags: ["Webdesign", "SEO", "Google Business"],
  },
  {
    id: "physio-saglam",
    title: "Physio Saglam",
    category: "Web Design · Physiotherapie",
    description:
      "Praxiswebsite in Langenhagen. Freundlich, übersichtlich und mit Fokus auf Therapien, Team und Terminanfrage.",
    preview: "/images/portfolio/mock-ups/physio-mockup-full.png",
    href: "https://physio-saglam.vercel.app",
    tags: ["Webdesign", "Branding"],
  },
  {
    id: "rein-gebaeudeservice",
    title: "REIN Gebäudereinigung",
    category: "Web Design · Gebäudereinigung",
    description:
      "Gebäudereinigung in Hannover. Leistungen, Karriere und Angebotsanfrage in 24h klar kommuniziert.",
    preview: "/images/portfolio/mock-ups/rein-gebaeudeservice-mockup-full.png",
    href: "https://www.rein-gebaeudeservice.de",
    tags: ["Webdesign", "Branding", "SEO", "Digital Marketing"],
  },
  {
    id: "noir-ink",
    title: "Noir Ink",
    category: "Web Design · Tattoo Studio",
    description:
      "Tattoo-Studio in Hannover. Dunkle, bildstarke Präsentation mit Galerie, Team und Terminbuchung.",
    preview: "/images/portfolio/mock-ups/noir-ink-mockup-full.png",
    href: "https://tattoo-website-woad.vercel.app",
    tags: ["Webdesign", "Branding"],
    isMockup: true,
  },
  {
    id: "sham-automobile",
    title: "Sham Automobile",
    category: "Web Design · Autohandel",
    description:
      "Gebrauchtwagenhändler in Langenhagen. Fahrzeugbestand, An- und Verkauf sowie vertrauensvolle Kundenstimmen.",
    preview: "/images/portfolio/mock-ups/sham-automobile-mockup-full.png",
    href: "https://www.sham-automobile.de",
    tags: ["Webdesign", "Branding", "SEO", "Digital Marketing"],
  },
  {
    id: "packwerk",
    title: "Packwerk Umzüge",
    category: "Web Design · Umzug",
    description:
      "Umzugsunternehmen in Hannover. Klare Leistungen, Festpreis-Angebot und Express-Anfrage auf der Startseite.",
    preview: "/images/portfolio/mock-ups/packwerk-mockup-full.png",
    href: "/projekte#packwerk",
    tags: ["Webdesign", "SEO", "Digital Marketing"],
  },
  {
    id: "thavam",
    title: "THAVAM Alltagshilfe",
    category: "Web Design · Alltagshilfe",
    description:
      "Alltagshilfe und Seniorenbetreuung in Hannover. Vertrauensvoll, klar und mit Fokus auf Pflegegrad und Anfrage.",
    preview: "/images/portfolio/mock-ups/thavam-mockup-full.png",
    href: "/projekte#thavam",
    tags: ["Webdesign", "Branding", "SEO"],
    isInProgress: true,
  },
  {
    id: "sawitzki-trollmann",
    title: "Sawitzki-Trollmann",
    category: "Web Design · Gartengestaltung",
    description:
      "Gartengestaltung in Langenhagen. Terrasse, Pflaster und Außenanlagen – modern und conversion-stark.",
    preview: "/images/portfolio/mock-ups/sawitzki-trollmann-mockup-full.png",
    href: "/preview/gartenbau-demo",
    tags: ["Webdesign", "Branding"],
    isInProgress: true,
  },
  {
    id: "lena-art",
    title: "Lenas Artgallery",
    category: "Web Design · Kunst",
    description:
      "Künstlerportfolio mit ausgewählten Arbeiten, Atelier-Story und Kontakt für Kooperationen und Aufträge.",
    preview: "/images/portfolio/mock-ups/lena-artgallery-mockup-full.png",
    href: "https://lena-art-portfolio.vercel.app",
    tags: ["Webdesign", "Branding"],
    isInProgress: true,
  },
  {
    id: "handwerker",
    title: "Handwerker Website",
    category: "Web Design · Handwerk",
    description:
      "Handwerksbetrieb. Leistungen von Renovierung bis Hausbau, Projekte und Anfrage klar aufbereitet.",
    preview: "/images/portfolio/mock-ups/handwerker-mockup-full.png",
    href: "https://handwerker-website.vercel.app",
    tags: ["Webdesign", "Branding"],
    isMockup: true,
  },
  {
    id: "beauty-hannover",
    title: "Beauty Hannover",
    category: "Web Design · Beauty",
    description:
      "Beauty-Studio in Hannover. Elegante Markenwelt mit Services, Galerie und Terminbuchung.",
    preview: "/images/portfolio/mock-ups/beauty-mockup-full.png",
    href: "/projekte#beauty-hannover",
    tags: ["Webdesign", "Branding"],
    isMockup: true,
  },
];

export const HOMEPAGE_PROJECT_COUNT = 4;
