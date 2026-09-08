/** Seitenstruktur – jede Branche kann eigene Navigation definieren. */
export type PageKey =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "contact";

type NavItem = {
  key: PageKey;
  label: string;
  /** Leerer Segment-Wert = Startseite. */
  segment: string;
};

/** Maler-Template: helle Colorix-Navigation mit TopBar. */
export const NAV: NavItem[] = [
  { key: "home", label: "Start", segment: "" },
  { key: "about", label: "Über uns", segment: "about" },
  { key: "services", label: "Leistungen", segment: "services" },
  { key: "projects", label: "Projekte", segment: "projects" },
  { key: "contact", label: "Kontakt", segment: "contact" },
];

/** Baut den Pfad einer Preview-Unterseite: /preview/<slug>/<segment>. */
export function previewPath(slug: string, page: PageKey = "home") {
  const segment = NAV.find((item) => item.key === page)?.segment ?? "";
  return segment ? `/preview/${slug}/${segment}` : `/preview/${slug}`;
}
