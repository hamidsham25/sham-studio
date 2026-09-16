/** Seitenstruktur des Gartenbau-Preview-Templates. */
export type PageKey =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "contact";

type NavItem = {
  key: Exclude<PageKey, "home">;
  label: string;
  segment: string;
};

/** Navbar-Links — ohne Start; Logo führt zur Startseite. */
export const NAV: NavItem[] = [
  { key: "about", label: "Über uns", segment: "about" },
  { key: "services", label: "Leistungen", segment: "services" },
  { key: "projects", label: "Projekte", segment: "projects" },
  { key: "contact", label: "Kontakt", segment: "contact" },
];

const SEGMENTS: Record<PageKey, string> = {
  home: "",
  about: "about",
  services: "services",
  projects: "projects",
  contact: "contact",
};

/** Baut den Pfad einer Preview-Unterseite: /preview/<slug>/<segment>. */
export function previewPath(slug: string, page: PageKey = "home") {
  const segment = SEGMENTS[page];
  return segment ? `/preview/${slug}/${segment}` : `/preview/${slug}`;
}
