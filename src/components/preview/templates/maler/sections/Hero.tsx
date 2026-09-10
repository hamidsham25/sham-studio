"use client";

import { useEffect, useState } from "react";
import { previewPath } from "@/components/preview/templates/maler/navigation";
import type { PreviewConfig, PreviewImage } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";
import PreviewStars from "@/components/preview/core/ui/PreviewStars";

type MalerHeroProps = {
  config: PreviewConfig;
};

const ROTATE_MS = 6000;

/** Vollbild-Hero mit wechselnden Hintergrundbildern – schlichter Handwerks-Look. */
export default function MalerHero({ config }: MalerHeroProps) {
  const { hero } = config;
  const headline = hero?.headline ?? config.tagline;

  const slides: PreviewImage[] =
    hero?.backgroundImages?.length
      ? hero.backgroundImages
      : hero?.image
        ? [hero.image]
        : [];

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative isolate -mt-20 min-h-[34rem] overflow-hidden md:-mt-24 md:min-h-[40rem] lg:min-h-[46rem]">
      {/* Hintergrundbilder */}
      <div className="absolute inset-0">
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))
        ) : (
          <div className="absolute inset-0 bg-[var(--preview-tint-strong)]" />
        )}

        {/* Dunkle Überlagerung für Lesbarkeit – schlicht, kein Farbklecks. */}
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(17,17,17,0.82)_0%,rgba(17,17,17,0.55)_48%,rgba(17,17,17,0.35)_100%)]"
          aria-hidden
        />
      </div>

      <PreviewContainer className="relative flex min-h-[inherit] items-center py-28 md:py-32">
        <div className="max-w-2xl text-white">
          {hero?.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
              {hero.eyebrow}
            </p>
          ) : null}

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            {headline}
          </h1>

          {hero?.subline ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {hero.subline}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PreviewButton
              href={
                hero?.primaryCta?.href ?? previewPath(config.slug, "contact")
              }
              size="lg"
              className="rounded-md"
            >
              {hero?.primaryCta?.label ?? "Kostenloses Angebot"}
            </PreviewButton>
            <PreviewButton
              href={
                hero?.secondaryCta?.href ??
                previewPath(config.slug, "services")
              }
              variant="ghostLight"
              size="lg"
              className="rounded-md"
            >
              {hero?.secondaryCta?.label ?? "Leistungen ansehen"}
            </PreviewButton>
          </div>

          {hero?.trust ? (
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {hero.trust.rating ? (
                <PreviewStars rating={hero.trust.rating} />
              ) : null}
              <p className="text-sm font-semibold text-white/90">
                {hero.trust.text}
              </p>
            </div>
          ) : null}
        </div>
      </PreviewContainer>

      {slides.length > 1 ? (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Bild ${index + 1} anzeigen`}
              aria-current={index === active}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
