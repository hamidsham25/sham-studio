import type { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type HeadingProps = {
  children: ReactNode;
  /** Semantische Ebene (Default: h2). */
  as?: HeadingLevel;
  className?: string;
};

/**
 * Wiederverwendbare Headline (DESIGN.md Abschnitt 3):
 * Familjen Grotesk, GROSSBUCHSTABEN, sehr fett, enge Zeilenhöhe.
 *
 * Für das zweifarbige Headline-Muster kann ein Teil des Textes in ein
 * <span className="text-muted"> gehüllt werden.
 */
export function Heading({ children, as: Tag = "h2", className = "" }: HeadingProps) {
  return (
    <Tag className={`heading text-forest ${className}`}>{children}</Tag>
  );
}
