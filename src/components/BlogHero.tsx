"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function BlogHero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const line = lineRef.current;
    if (!hero || !title) return;

    const lines = title.querySelectorAll<HTMLElement>(".projekte-line-inner");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.15,
          ease: "power4.out",
          stagger: 0.14,
          delay: 0.2,
        }
      );

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
  }, []);

  return (
    <section
      ref={heroRef}
      id="blog-hero"
      className="relative overflow-x-clip bg-white px-6 pb-6 pt-28 sm:px-8 sm:pt-32 md:px-10"
      aria-label="Blog und Insights"
    >
      <div className="mx-auto max-w-6xl">
        <h1
          ref={titleRef}
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.02em] text-zinc-900"
        >
          <span className="split-line block text-[clamp(1.75rem,4.5vw,2.75rem)]">
            <span className="projekte-line-inner inline-block">Blog</span>
          </span>
          <span className="split-line block text-[clamp(1.75rem,4.5vw,2.75rem)]">
            <span className="projekte-line-inner inline-block">
              &amp; Insights
              <span
                className="ml-[0.1em] inline-block h-[0.2em] w-[0.2em] translate-y-[-0.05em] rounded-full bg-cyan-500 align-middle"
                aria-hidden
              />
            </span>
          </span>
        </h1>

        <div
          ref={lineRef}
          className="mt-8 h-px w-full origin-left bg-zinc-200"
          aria-hidden
        />
      </div>
    </section>
  );
}
