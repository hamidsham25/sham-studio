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
  segment: string;
};

/** SHK-Template: Notdienst-orientierte Navigation, andere Labels. */
export const NAV: NavItem[] = [
  { key: "home", label: "Start", segment: "" },
  { key: "services", label: "Leistungen", segment: "services" },
  { key: "projects", label: "Referenzen", segment: "projects" },
  { key: "about", label: "Über uns", segment: "about" },
  { key: "contact", label: "Notdienst", segment: "contact" },
];

export function previewPath(slug: string, page: PageKey = "home") {
  const segment = NAV.find((item) => item.key === page)?.segment ?? "";
  return segment ? `/preview/${slug}/${segment}` : `/preview/${slug}`;
}
