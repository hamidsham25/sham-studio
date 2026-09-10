import Link from "next/link";
import { previewPath } from "@/components/preview/templates/maler/navigation";
import type { PreviewConfig, PreviewImage } from "@/lib/previews/core/types";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";

type MalerPageHeroProps = {
  config: PreviewConfig;
  breadcrumb: string;
  title: string;
  text?: string;
  eyebrow?: string;
  image?: PreviewImage;
};

/** Unterseiten-Kopf – mit optionalem Hintergrundbild. */
export default function MalerPageHero({
  config,
  breadcrumb,
  title,
  text,
  eyebrow,
  image,
}: MalerPageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--preview-border)]">
      {image ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(105deg,rgba(17,17,17,0.78)_0%,rgba(17,17,17,0.55)_55%,rgba(17,17,17,0.4)_100%)]"
            aria-hidden
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-[var(--preview-surface)]" aria-hidden />
      )}

      <PreviewContainer className="relative">
        <div className="max-w-3xl py-12 md:py-16">
          <nav
            aria-label="Brotkrumen"
            className={`flex items-center gap-2 text-sm ${
              image ? "text-white/70" : "text-[var(--preview-muted)]"
            }`}
          >
            <Link
              href={previewPath(config.slug)}
              className={`transition-colors ${
                image
                  ? "hover:text-white"
                  : "hover:text-[var(--preview-primary)]"
              }`}
            >
              Start
            </Link>
            <span aria-hidden>/</span>
            <span
              className={`font-semibold ${
                image ? "text-white" : "text-[var(--preview-foreground)]"
              }`}
            >
              {breadcrumb}
            </span>
          </nav>

          {eyebrow ? (
            <p
              className={`mt-6 text-sm font-semibold uppercase tracking-[0.14em] ${
                image ? "text-white/80" : "text-[var(--preview-primary)]"
              }`}
            >
              {eyebrow}
            </p>
          ) : null}

          <h1
            className={`mt-3 text-4xl font-bold tracking-tight text-balance sm:text-5xl ${
              image ? "text-white" : ""
            }`}
          >
            {title}
          </h1>

          {text ? (
            <p
              className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
                image ? "text-white/85" : "text-[var(--preview-muted)]"
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
