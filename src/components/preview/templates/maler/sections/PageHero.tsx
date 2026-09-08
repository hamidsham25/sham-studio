import Link from "next/link";
import { previewPath } from "@/components/preview/templates/maler/navigation";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";
import PreviewEyebrow from "@/components/preview/core/ui/PreviewEyebrow";
import PreviewPaintBackdrop from "@/components/preview/core/ui/PreviewPaintBackdrop";

type PreviewPageHeroProps = {
  config: PreviewConfig;
  /** Label im Brotkrumen-Pfad, z. B. "Leistungen". */
  breadcrumb: string;
  title: string;
  text?: string;
  eyebrow?: string;
};

/** Kopfbereich aller Unterseiten. */
export default function PreviewPageHero({
  config,
  breadcrumb,
  title,
  text,
  eyebrow,
}: PreviewPageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--preview-tint)]">
      <PreviewPaintBackdrop />

      <PreviewContainer className="relative">
        <div className="max-w-3xl py-14 md:py-20">
          <nav
            aria-label="Brotkrumen"
            className="flex items-center gap-2 text-sm text-[var(--preview-muted)]"
          >
            <Link
              href={previewPath(config.slug)}
              className="transition-colors hover:text-[var(--preview-primary)]"
            >
              Start
            </Link>
            <span aria-hidden>/</span>
            <span className="font-semibold text-[var(--preview-foreground)]">
              {breadcrumb}
            </span>
          </nav>

          {eyebrow ? (
            <PreviewEyebrow className="mt-6">{eyebrow}</PreviewEyebrow>
          ) : null}

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>

          {text ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--preview-muted)] sm:text-lg">
              {text}
            </p>
          ) : null}
        </div>
      </PreviewContainer>
    </section>
  );
}
