"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  getGartenbauContent,
  HERO_FADE_DURATION_S,
  HERO_SLIDE_DURATION_MS,
} from "../content";
import { previewPath } from "../navigation";
import { Container } from "../layout/Container";
import { HeroSliderIndicator } from "./HeroSliderIndicator";
import { HeroTrustCard } from "./HeroTrustCard";

type HeroProps = {
  slug: string;
};

export function Hero({ slug }: HeroProps) {
  const content = getGartenbauContent(slug);
  const slides = content.heroSlides;
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
    setCycleKey((current) => current + 1);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
      setCycleKey((current) => current + 1);
    }, HERO_SLIDE_DURATION_MS);

    return () => window.clearInterval(interval);
  }, [cycleKey, slides.length]);

  const slideDuration = prefersReducedMotion ? 0 : HERO_SLIDE_DURATION_MS / 1000;
  const fadeDuration = prefersReducedMotion ? 0 : HERO_FADE_DURATION_S;
  const slideLabels = slides.map((slide) => slide.label);
  const { headingLines, headingAccentIndex, subline, primaryCta, secondaryCta } =
    content.hero;

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[90vh] overflow-hidden lg:min-h-screen"
    >
      <div className="absolute inset-0 bg-black">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activeIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration, ease: "easeInOut" }}
          >
            <motion.div
              key={`zoom-${cycleKey}`}
              className="relative h-full w-full"
              initial={{ scale: 1 }}
              animate={{
                scale: hasMounted && !prefersReducedMotion ? 1.1 : 1,
              }}
              transition={{ duration: slideDuration, ease: "linear" }}
            >
              <Image
                src={slides[activeIndex].src}
                alt={slides[activeIndex].alt}
                fill
                priority={activeIndex === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-black/85 via-black/45 to-black/10"
      />

      <Container className="relative z-10 flex min-h-[90vh] flex-col justify-between py-28 lg:min-h-screen lg:py-32">
        <div className="flex flex-1 items-center">
          <div className="max-w-2xl">
            <h1 className="heading text-4xl text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {headingLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {index === headingAccentIndex ? (
                    <span className="text-white/60">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-white/80 sm:text-lg">
              {subline}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={previewPath(slug, "contact")}
                className="inline-flex items-center justify-center rounded-full bg-action px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-forest"
              >
                {primaryCta}
              </Link>
              <Link
                href={previewPath(slug, "services")}
                className="inline-flex items-center justify-center rounded-full border border-white/80 px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
              >
                {secondaryCta}
              </Link>
            </div>

            <HeroTrustCard
              slug={slug}
              className="mt-10 max-w-xs sm:max-w-sm lg:hidden"
            />
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0">
          <HeroSliderIndicator
            slideCount={slides.length}
            labels={slideLabels}
            activeIndex={activeIndex}
            cycleKey={cycleKey}
            durationMs={HERO_SLIDE_DURATION_MS}
            prefersReducedMotion={prefersReducedMotion}
            onSelect={goToSlide}
          />

          <HeroTrustCard
            slug={slug}
            className="absolute right-0 bottom-0 hidden w-64 lg:block xl:w-72"
          />
        </div>
      </Container>
    </section>
  );
}
