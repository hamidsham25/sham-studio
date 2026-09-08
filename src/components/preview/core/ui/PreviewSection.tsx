import type { ReactNode } from "react";
import PreviewContainer from "./PreviewContainer";

/** Hintergrundvariante einer Sektion – immer aus den --preview-* Tönen. */
type PreviewSectionTone = "default" | "surface" | "tint";

const TONE_CLASS: Record<PreviewSectionTone, string> = {
  default: "bg-[var(--preview-background)]",
  surface: "bg-[var(--preview-surface)]",
  tint: "bg-[var(--preview-tint)]",
};

type PreviewSectionProps = {
  children: ReactNode;
  id?: string;
  tone?: PreviewSectionTone;
  className?: string;
};

export default function PreviewSection({
  children,
  id,
  tone = "default",
  className = "",
}: PreviewSectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${TONE_CLASS[tone]} ${className}`}
    >
      <PreviewContainer>{children}</PreviewContainer>
    </section>
  );
}
