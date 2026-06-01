export type ServiceCategory = {
  id: string;
  title: string;
  items: string[];
  /** Visual for the row (portfolio / placeholder) */
  image: string;
  imageAlt: string;
};

/** Reihenfolge: wichtigste Leistungsbereiche und Punkte zuerst */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "webdesign",
    title: "Webdesign",
    items: [
      "Websites & Landingpages",
      "UX- & UI-Design",
      "Online-Shops",
      "Web-Apps & Sonderfunktionen",
      "Schnittstellen & Integrationen",
      "Tracking & Auswertung",
      "Digitale Strategie",
    ],
    image: "/images/portfolio/enerstrom-hover.png",
    imageAlt: "Webdesign und Website-Entwicklung, Beispiel EnerStrom",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    items: [
      "SEO & lokale Sichtbarkeit",
      "Google Business Profil",
      "Google Ads",
      "Marketing-Strategie",
    ],
    image: "/images/portfolio/cardealer-hover.png",
    imageAlt: "Digital Marketing und Online-Sichtbarkeit, Beispiel Sham Automobile",
  },
  {
    id: "branding",
    title: "Branding",
    items: [
      "Logo & Corporate Design",
      "Visuelle Identität",
      "Markensprache & Texte",
      "Markenstrategie",
    ],
    image: "/images/portfolio/physio-cover.png",
    imageAlt: "Branding und visuelle Identität, Beispiel Physio Saglam",
  },
  {
    id: "wartung-support",
    title: "Wartung & Support",
    items: [
      "Website-Pflege",
      "Sicherheitsupdates",
      "Technischer Support",
      "Performance-Optimierung",
      "Kleine Anpassungen",
    ],
    image: "/images/portfolio/cleaning-hover.png",
    imageAlt: "Wartung und Support für Websites, Beispiel REIN Gebäudereinigung",
  },
];
