"use client";

import { motion } from "motion/react";

type HeroSliderIndicatorProps = {
  slideCount: number;
  labels: readonly string[];
  activeIndex: number;
  cycleKey: number;
  durationMs: number;
  prefersReducedMotion: boolean | null;
  onSelect: (index: number) => void;
};

function formatSlideNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function HeroSliderIndicator({
  slideCount,
  labels,
  activeIndex,
  cycleKey,
  durationMs,
  prefersReducedMotion,
  onSelect,
}: HeroSliderIndicatorProps) {
  const progressDuration = prefersReducedMotion ? 0 : durationMs / 1000;

  return (
    <nav
      aria-label="Hero-Bildnavigation"
      className="flex items-end gap-6 sm:gap-10"
    >
      {Array.from({ length: slideCount }, (_, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            type="button"
            aria-label={`Slide ${formatSlideNumber(index)}: ${labels[index]}`}
            aria-current={isActive ? "true" : undefined}
            onClick={() => onSelect(index)}
            className="group flex flex-col items-start gap-2 text-left transition-opacity duration-200"
          >
            <span
              className={`font-heading leading-none transition-all duration-300 ${
                isActive
                  ? "text-3xl font-bold text-white sm:text-4xl"
                  : "text-xl font-semibold text-white/35 group-hover:text-white/55 sm:text-2xl"
              }`}
            >
              {formatSlideNumber(index)}
            </span>

            <span
              className={`font-body text-xs tracking-wide transition-colors duration-300 sm:text-sm ${
                isActive ? "text-white/80" : "text-white/30 group-hover:text-white/45"
              }`}
            >
              {labels[index]}
            </span>

            <span className="relative mt-1 block h-px w-16 overflow-hidden bg-white/15 sm:w-20">
              {isActive && (
                <motion.span
                  key={`progress-${activeIndex}-${cycleKey}`}
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-full origin-left bg-white"
                  initial={{ scaleX: prefersReducedMotion ? 1 : 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: progressDuration,
                    ease: "linear",
                  }}
                />
              )}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
