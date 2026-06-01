"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesRows from "@/components/ServicesRows";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !introRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 bg-white pt-0 pb-10 md:pb-14"
      aria-labelledby="services-heading"
    >
      <div className="h-px w-full shrink-0 bg-zinc-200" aria-hidden />

      <div className="mx-auto max-w-6xl px-6 pt-16 md:px-8 md:pt-20 lg:px-10">
        <div ref={introRef} className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Leistungen
            </p>
            <h2
              id="services-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
            >
              Alles für Ihre digitale Marke
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Webdesign, Marketing, Branding und laufende Betreuung – strukturiert und ohne
              Karten-Chaos. Ein Klick pro Bereich, dann geht&apos;s in die Details.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-cyan-700"
          >
            Alle Services
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <ServicesRows className="mt-4" />
      </div>
    </section>
  );
}
