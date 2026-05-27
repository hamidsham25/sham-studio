"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "100%", label: "Individuell" },
  { value: "24/7", label: "Erreichbar" },
  { value: "∞", label: "Leidenschaft" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        accentRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power3.inOut" }
      )
        .fromTo(
          headingRef.current?.children
            ? Array.from(headingRef.current.children)
            : [],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          textRef.current?.children ? Array.from(textRef.current.children) : [],
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          statsRef.current?.children ? Array.from(statsRef.current.children) : [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.08 },
          "-=0.3"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 overflow-hidden rounded-t-[2rem] bg-[#0a0a0a] py-24 sm:rounded-t-[3rem] md:py-32 lg:py-40"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 md:px-8">
        <div
          ref={accentRef}
          className="mb-6 h-[3px] w-16 origin-left bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"
          aria-hidden
        />

        <div ref={headingRef}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500">
            Über uns
          </p>
          <h2
            id="about-heading"
            className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Sham Studio
          </h2>
          <p className="mt-5 text-xl text-zinc-300 md:text-2xl md:leading-snug">
            Wir gestalten und entwickeln Websites, die zu Ihrem Unternehmen
            passen. Klar, modern und ohne Baukastenlösungen.
          </p>
        </div>

        <div
          ref={textRef}
          className="mt-8 space-y-5 text-zinc-400 leading-relaxed md:text-lg lg:mt-10"
        >
          <p>
            Sham Studio ist aus Langenhagen bei Hannover für Unternehmen in der
            Region und deutschlandweit im Einsatz. Wir begleiten Sie vom Konzept
            über Design und Entwicklung bis zum Launch, durchgängig und aus
            einer Hand.
          </p>
          <p>
            Im Mittelpunkt steht die Frage, was Ihre Website leisten soll:
            Kunden gewinnen, Vertrauen schaffen oder Ihren Alltag entlasten.
            Darauf bauen wir Design, Inhalte und Technik auf.
          </p>
          <p>
            Sham Studio setzt auf übersichtliche Seiten, schnelle Ladezeiten und
            eine Kommunikation auf Augenhöhe. Transparent, verständlich und mit
            Blick auf messbare Ergebnisse.
          </p>
        </div>

        <div ref={statsRef} className="mt-10 flex gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-2xl font-bold text-cyan-400 sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-zinc-500 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
