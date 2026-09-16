import type { ElementType, ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
};

/** Sektions-Wrapper mit großzügigem vertikalem Padding. */
export function Section({
  children,
  className = "",
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component id={id} className={`py-20 lg:py-28 ${className}`}>
      <Container>{children}</Container>
    </Component>
  );
}
