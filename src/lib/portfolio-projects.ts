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
};

export const PORTFOLIO_PROJECTS: ProjectListItem[] = [
  {
    id: "enerstrom",
    title: "EnerStrom",
    category: "Web Design · Elektrotechnik",
    description:
      "Website für einen Elektromeisterbetrieb in Hannover. Photovoltaik, Elektroinstallation und Gebäudetechnik klar strukturiert und conversion-orientiert.",
    preview: "/images/portfolio/enerstrom-hover.png",
    href: "https://www.enerstrom-hannover.de",
    tags: ["Elektrotechnik", "Meisterbetrieb", "Photovoltaik"],
  },
  {
    id: "physio-saglam",
    title: "Physio Saglam",
    category: "Web Design · Physiotherapie",
    description:
      "Praxiswebsite in Langenhagen. Freundlich, übersichtlich und mit Fokus auf Therapien, Team und Terminanfrage.",
    preview: "/images/portfolio/physio-hover.png",
    href: "https://physio-saglam.vercel.app",
    tags: ["Physiotherapie", "Praxis", "Langenhagen"],
  },
  {
    id: "rein-gebaeudeservice",
    title: "REIN Gebäudereinigung",
    category: "Web Design · Gebäudereinigung",
    description:
      "Gebäudereinigung in Hannover. Leistungen, Karriere und Angebotsanfrage in 24h klar kommuniziert.",
    preview: "/images/portfolio/cleaning-hover.png",
    href: "https://www.rein-gebaeudeservice.de",
    tags: ["Gebäudereinigung", "B2B", "Hannover"],
  },
  {
    id: "noir-ink",
    title: "Noir Ink",
    category: "Web Design · Tattoo Studio",
    description:
      "Tattoo-Studio in Hannover. Dunkle, bildstarke Präsentation mit Galerie, Team und Terminbuchung.",
    preview: "/images/portfolio/tattoo-hover.png",
    href: "https://tattoo-website-woad.vercel.app",
    tags: ["Tattoo Studio", "Galerie", "Terminbuchung"],
    isMockup: true,
  },
  {
    id: "sham-automobile",
    title: "Sham Automobile",
    category: "Web Design · Autohandel",
    description:
      "Gebrauchtwagenhändler in Langenhagen. Fahrzeugbestand, An- und Verkauf sowie vertrauensvolle Kundenstimmen.",
    preview: "/images/portfolio/cardealer-hover.png",
    href: "https://www.sham-automobile.de",
    tags: ["Autohandel", "CMS", "Langenhagen"],
  },
  {
    id: "lena-art",
    title: "Künstlerin Portfolio",
    category: "Web Design · Kunst",
    description:
      "Künstlerportfolio mit ausgewählten Arbeiten, Atelier-Story und Kontakt für Kooperationen und Aufträge.",
    preview: "/images/portfolio/artgallery-hover.png",
    href: "https://lena-art-portfolio.vercel.app",
    tags: ["Portfolio", "Kunst", "Galerie"],
  },
  {
    id: "handwerker",
    title: "Handwerker Website",
    category: "Web Design · Handwerk",
    description:
      "Handwerksbetrieb. Leistungen von Renovierung bis Hausbau, Projekte und Anfrage klar aufbereitet.",
    preview: "/images/portfolio/handwerker-hover.png",
    href: "https://handwerker-website.vercel.app",
    tags: ["Handwerk", "Leistungen", "Projekte"],
    isMockup: true,
  },
];

export const HOMEPAGE_PROJECT_COUNT = 4;
