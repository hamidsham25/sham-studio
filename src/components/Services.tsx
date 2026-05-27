"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContactModal } from "@/components/ContactModalContext";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Webdesign & Entwicklung",
    description:
      "Individuelle Websites, die Ihre Marke perfekt repräsentieren: schnell, modern und auf Conversion optimiert. Von der Landingpage bis zum komplexen Webprojekt.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "SEO & AEO",
    description:
      "Sichtbarkeit in Google und KI-Suchmaschinen. Technisches SEO, Content-Optimierung und Answer Engine Optimization, damit Sie heute und morgen gefunden werden.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Branding & Identität",
    description:
      "Logo, Farbpalette, Typografie und ein kohärentes Erscheinungsbild, das Vertrauen schafft und Ihre Marke unverwechselbar macht.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "Wartung & Support",
    description:
      "Laufende Pflege, Sicherheitsupdates und technischer Support, damit Ihre Website immer performant, sicher und aktuell bleibt.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Google Business Profil",
    description:
      "Optimierung Ihres Google-Unternehmensprofils für maximale lokale Sichtbarkeit: mehr Anrufe, mehr Besucher, mehr Kunden.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Content & Strategie",
    description:
      "Texte, Bilder und eine klare Kommunikationsstrategie, die Ihre Zielgruppe anspricht und zum Handeln bewegt.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

function ServiceCard({
  item,
  index,
  inView,
}: {
  item: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: 12, scale: 0.92, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 60, rotateX: 12, scale: 0.92, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: 0.5, delay: index * 0.1 },
      }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-7 will-change-transform transition-[border-color,background-color,box-shadow] duration-300 hover:border-zinc-300 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/60 sm:p-8"
    >
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/[0.06] to-purple-500/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        aria-hidden
      />

      <motion.span
        className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100"
        whileHover={{ scale: 1.15, rotate: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {item.icon}
      </motion.span>

      <h3 className="relative mt-5 font-display text-lg font-semibold text-zinc-900 sm:text-xl">
        {item.title}
      </h3>

      <p className="relative mt-3 flex-1 text-[0.938rem] leading-relaxed text-zinc-600">
        {item.description}
      </p>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl bg-gradient-to-r from-cyan-400 to-cyan-600"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        aria-hidden
      />
    </motion.div>
  );
}

export default function Services() {
  const { openModal } = useContactModal();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [cardsInView, setCardsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const headingElements = headingRef.current.children;
        gsap.fromTo(
          headingElements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (gridRef.current) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: "top 85%",
          onEnter: () => setCardsInView(true),
        });
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 bg-white pt-0 pb-20 rounded-b-[2rem] sm:rounded-b-[3rem] md:pb-28"
      aria-labelledby="services-heading"
    >
      <div className="h-px w-full shrink-0 bg-zinc-200" aria-hidden />

      <div className="mx-auto max-w-6xl px-6 pt-20 md:px-8 md:pt-28">
        <div ref={headingRef} className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Leistungen
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
          >
            Alles für Ihre
            <br className="hidden sm:block" />{" "}
            Online-Präsenz.
          </h2>
          <p className="mt-5 text-lg text-zinc-600 md:text-xl">
            Nicht nur eine Website, sondern ein komplettes digitales Fundament.
            Von der Strategie über Design bis zur laufenden Betreuung.
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-18"
          style={{ perspective: 1000 }}
        >
          {services.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} inView={cardsInView} />
          ))}
        </div>

        <div ref={ctaRef} className="mt-16 flex flex-col items-center text-center md:mt-20">
          <p className="text-lg text-zinc-600 md:text-xl">
            Bereit, Ihre Online-Präsenz auf das nächste Level zu bringen?
          </p>
          <button
            type="button"
            onClick={() => openModal("Service-Anfrage")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-zinc-800 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Projekt besprechen
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
