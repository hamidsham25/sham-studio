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
  const headingRef = useRef<HTMLHeadingElement>(null);
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
          headingRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
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
      className="relative z-10 overflow-hidden py-24 md:py-32 lg:py-40"
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

        <h2
          ref={headingRef}
          id="about-heading"
          className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Wer steckt
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            dahinter?
          </span>
        </h2>

        <div ref={textRef} className="mt-8 space-y-5 text-zinc-400 leading-relaxed md:text-lg lg:mt-10">
          <p className="text-xl font-medium text-zinc-200 md:text-2xl">
                Hamid Sham, Kreativkopf, Entwickler &amp; Ihr Ansprechpartner für alles Digitale.
          </p>
          <p>
            Ich verbinde strategisches Denken mit kreativem Handwerk. Jedes Projekt beginnt mit einer
            Frage: <span className="text-zinc-200 font-medium">Was braucht Ihr Business wirklich, um online zu wachsen?</span>{" "}
            Die Antwort wird dann zu einer Website, einer Marke oder einer ganzen digitalen Strategie.
          </p>
          <p>
                Keine Templates, keine Kompromisse. Ich arbeite eng mit Ihnen zusammen, von der ersten Idee
            bis zum finalen Launch und darüber hinaus. Transparent, persönlich und immer mit dem Ziel,
            messbare Ergebnisse zu liefern.
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
