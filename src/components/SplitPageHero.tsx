"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export type SplitHeroLine = {
  text: string;
  showDot?: boolean;
};

type SplitPageHeroProps = {
  id: string;
  ariaLabel: string;
  lines: SplitHeroLine[];
  label?: string;
  lead?: string;
  showLine?: boolean;
  className?: string;
  titleClassName?: string;
};

export default function SplitPageHero({
  id,
  ariaLabel,
  lines,
  label,
  lead,
  showLine = true,
  className = "",
  titleClassName = "text-[clamp(1.75rem,4.5vw,2.75rem)]",
}: SplitPageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    if (!hero || !title) return;

    const lineEls = title.querySelectorAll<HTMLElement>(".projekte-line-inner");
    const labelEl = labelRef.current;
    const leadEl = leadRef.current;
    const line = lineRef.current;

    const ctx = gsap.context(() => {
      if (labelEl) {
        gsap.fromTo(
          labelEl,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      }

      gsap.fromTo(
        lineEls,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.15,
          ease: "power4.out",
          stagger: 0.14,
          delay: 0.2,
        }
      );

      if (leadEl) {
        gsap.fromTo(
          leadEl,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            delay: 0.35,
          }
        );
      }

      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.inOut",
            delay: 0.45,
            transformOrigin: "left center",
          }
        );
      }
    }, hero);

    return () => ctx.revert();
  }, [lines, label, lead, showLine]);

  return (
    <section
      ref={heroRef}
      id={id}
      className={`relative overflow-x-clip bg-white px-6 pb-6 pt-28 sm:px-8 sm:pt-32 md:px-10 ${className}`}
      aria-label={ariaLabel}
    >
      <div className="mx-auto max-w-6xl">
        {label ? (
          <p
            ref={labelRef}
            className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 opacity-0"
          >
            {label}
          </p>
        ) : null}

        <h1
          ref={titleRef}
          className={`font-display font-bold uppercase leading-[0.95] tracking-[-0.02em] text-zinc-900 ${
            label ? "mt-4" : ""
          }`}
        >
          {lines.map((line) => (
            <span key={line.text} className={`split-line block ${titleClassName}`}>
              <span className="projekte-line-inner inline-block">
                {line.text}
                {line.showDot ? (
                  <span
                    className="ml-[0.1em] inline-block h-[0.2em] w-[0.2em] translate-y-[-0.05em] rounded-full bg-cyan-500 align-middle"
                    aria-hidden
                  />
                ) : null}
              </span>
            </span>
          ))}
        </h1>

        {lead ? (
          <p
            ref={leadRef}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 opacity-0 normal-case sm:text-xl"
          >
            {lead}
          </p>
        ) : null}

        {showLine ? (
          <div
            ref={lineRef}
            className="mt-8 h-px w-full origin-left bg-zinc-200"
            aria-hidden
          />
        ) : null}
      </div>
    </section>
  );
}
