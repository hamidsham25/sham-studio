"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { getGartenbauContent } from "../content";
import { previewPath } from "../navigation";

type HeroTrustCardProps = {
  slug: string;
  className?: string;
};

const COUNT_DURATION_MS = 2200;

export function HeroTrustCard({ slug, className = "" }: HeroTrustCardProps) {
  const trust = getGartenbauContent(slug).heroTrust;
  const prefersReducedMotion = useReducedMotion();
  const countRef = useRef<HTMLParagraphElement>(null);
  const [displayCount, setDisplayCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = countRef.current;
    if (!element || hasAnimated) return;

    const target = trust.clientCount;

    if (prefersReducedMotion) {
      setDisplayCount(target);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
          const eased = 1 - (1 - progress) ** 3;
          setDisplayCount(Math.round(eased * target));

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setHasAnimated(true);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated, prefersReducedMotion, trust.clientCount]);

  return (
    <aside
      aria-label="Ansprechpartner und Kundenkennzahl"
      className={`rounded-2xl bg-white px-5 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] sm:px-6 sm:py-6 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-surface sm:h-14 sm:w-14">
            <Image
              src={trust.ownerImage}
              alt={trust.ownerName}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-heading text-base leading-tight text-forest sm:text-lg">
              {trust.ownerName}
            </p>
            <p className="mt-0.5 font-body text-xs text-muted sm:text-sm">
              {trust.ownerRole}
            </p>
          </div>
        </div>

        <Link
          href={previewPath(slug, "contact")}
          aria-label="Kontakt aufnehmen — Aufträge verfügbar"
          className="group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-visible rounded-full bg-action text-white transition-colors duration-200 hover:bg-forest"
        >
          {!prefersReducedMotion && (
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full bg-action"
              animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                repeatDelay: 0.4,
              }}
            />
          )}
          <ArrowUpRight
            size={20}
            strokeWidth={2.5}
            className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      <div className="mt-5 border-t border-surface pt-4">
        <p
          ref={countRef}
          className="font-heading text-3xl font-bold leading-none text-forest sm:text-4xl"
          aria-live="polite"
        >
          {displayCount}+
        </p>
        <p className="mt-1.5 font-body text-sm text-muted">
          {trust.clientsLabel}
        </p>
      </div>
    </aside>
  );
}
