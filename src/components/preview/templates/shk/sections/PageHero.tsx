import Link from "next/link";
import { previewPath } from "@/components/preview/templates/shk/navigation";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";
import PreviewEyebrow from "@/components/preview/core/ui/PreviewEyebrow";

type ShkPageHeroProps = {
  config: PreviewConfig;
  breadcrumb: string;
  title: string;
  text?: string;
  eyebrow?: string;
  /** Dunkler Kopfbereich statt Pastell (SHK-Stil). */
  dark?: boolean;
};

/** SHK-Unterseiten-Kopf: optional dunkler Hintergrund. */
export default function ShkPageHero({
  config,
  breadcrumb,
  title,
  text,
  eyebrow,
  dark = false,
}: ShkPageHeroProps) {
  return (
    <section
      className={
        dark
          ? "bg-[var(--preview-foreground)] text-[var(--preview-background)]"
          : "bg-[var(--preview-surface)]"
      }
    >
      <PreviewContainer>
        <div className="max-w-3xl py-14 md:py-20">
          <nav
            aria-label="Brotkrumen"
            className={`flex items-center gap-2 text-sm ${
              dark ? "text-[var(--preview-background)]/70" : "text-[var(--preview-muted)]"
            }`}
          >
            <Link
              href={previewPath(config.slug)}
              className={`transition-colors ${
                dark
                  ? "hover:text-[var(--preview-background)]"
                  : "hover:text-[var(--preview-primary)]"
              }`}
            >
              Start
            </Link>
            <span aria-hidden>/</span>
            <span className="font-semibold">{breadcrumb}</span>
          </nav>

          {eyebrow ? (
            <PreviewEyebrow
              className={`mt-6 ${dark ? "bg-[var(--preview-primary)] text-[var(--preview-on-primary)]" : ""}`}
            >
              {eyebrow}
            </PreviewEyebrow>
          ) : null}

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>

          {text ? (
            <p
              className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
                dark ? "text-[var(--preview-background)]/80" : "text-[var(--preview-muted)]"
              }`}
            >
              {text}
            </p>
          ) : null}
        </div>
      </PreviewContainer>
    </section>
  );
}
