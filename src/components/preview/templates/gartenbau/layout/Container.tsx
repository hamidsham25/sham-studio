import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** HTML-Element, das gerendert wird (z. B. "section", "header", "footer"). */
  as?: ElementType;
};

/**
 * Zentrierter Content-Container mit maximaler Breite (~1280px) und
 * responsivem seitlichem Padding (DESIGN.md Abschnitt 5). Wiederverwendbar
 * für alle Sektionen, Header und Footer.
 */
export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}
