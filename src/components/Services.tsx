"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContactModal } from "@/components/ContactModalContext";

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    badge: null,
    title: "Digitaler Grundstein",
    subtitle: "Für Selbstständige, die seriös online starten wollen.",
    monthly: "49",
    setup: "490",
    features: [
      "Landingpage oder 2–3 Seiten",
      "Individuelles Design",
      "Responsive für alle Geräte",
      "Grundlegendes SEO",
      "Kontaktformular",
      "SSL, Hosting & Betrieb",
      "Monatliche Wartung",
    ],
    cta: "Jetzt starten",
  },
  {
    badge: "Beliebt",
    title: "Business-Präsenz",
    subtitle: "Für Praxen, Berater & kleine Betriebe – gefunden werden.",
    monthly: "89",
    setup: "1.290",
    features: [
      "Website mit 5–8 Seiten",
      "Optional: CMS (selbst pflegen)",
      "Erweiterte SEO & Google Maps",
      "Kontaktformular & CTAs",
      "Hosting & quartalsweise Updates",
      "Einweisung inklusive",
    ],
    cta: "Jetzt anfragen",
  },
  {
    badge: null,
    title: "Maßgeschneidert",
    subtitle: "Komplexe Projekte, Branding, individuelle Lösungen.",
    monthly: null,
    setup: null,
    customPrice: "Auf Anfrage",
    features: [
      "Individuelle Konzeption",
      "Branding: Logo, Farben, Styleguide",
      "Komplexe Webprojekte",
      "CMS-Anbindung",
      "Dedizierter Support",
      "Von Idee bis Launch",
    ],
    cta: "Projekt besprechen",
  },
];

const services = [
  {
    title: "Webdesign",
    description: "Klare Strukturen, starke Typografie und ein Look, der zu Ihrer Marke passt.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "UI/UX",
    description: "Intuitive Oberflächen und durchdachte Abläufe, die begeistern.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Branding",
    description: "Stimmiges Erscheinungsbild – sofort wiedererkennbar und vertrauenswürdig.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "Entwicklung",
    description: "Sauberer Code, schnelle Ladezeiten – technisch auf der Höhe.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function Services() {
  const { openModal } = useContactModal();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);
  const packagesHeadingRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Services heading
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Service cards stagger
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Packages heading
      if (packagesHeadingRef.current) {
        gsap.fromTo(
          packagesHeadingRef.current,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: packagesHeadingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Package cards stagger
      if (packagesRef.current) {
        gsap.fromTo(
          packagesRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: packagesRef.current,
              start: "top 85%",
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
      className="relative z-10 flex min-h-[28rem] min-h-viewport flex-col bg-white pt-0 pb-16 rounded-b-[2rem] sm:rounded-b-[3rem] md:pb-24"
      aria-labelledby="services-heading"
    >
      <div className="h-px w-full shrink-0 bg-zinc-200" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-1 flex-col justify-center px-6 pt-16 pb-4 md:px-8 md:pt-24">
        <div ref={headingRef}>
          <h2
            id="services-heading"
            className="font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
          >
            Services
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 md:text-lg">
            Von Konzept bis Launch – alles aus einer Hand.
          </p>
        </div>

        <ul ref={cardsRef} className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:mt-16">
          {services.map((item) => (
            <li
              key={item.title}
              className="group relative flex flex-col rounded-2xl border border-zinc-300 bg-zinc-100 p-6 shadow-md shadow-zinc-300/40 sm:p-7 cursor-default overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-zinc-300/60"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <span className="relative inline-flex origin-left text-cyan-500 transition-transform duration-300 group-hover:scale-110" aria-hidden>
                {item.icon}
              </span>
              <h3 className="relative mt-5 font-display text-[1.25rem] font-semibold text-zinc-900 sm:text-2xl">
                {item.title}
              </h3>
              <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden
              />
            </li>
          ))}
        </ul>

        {/* Packages */}
        <div ref={packagesHeadingRef} className="mt-20 md:mt-24">
          <h3 className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Starter-Pakete
          </h3>
          <p className="mt-2 max-w-2xl text-zinc-600 md:text-base">
            Transparente Preise. So starten Sie online.
          </p>
        </div>

        <ul ref={packagesRef} className="mt-10 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:mt-12">
          {packages.map((pkg) => (
            <li
              key={pkg.title}
              className="group relative flex flex-col rounded-2xl border border-zinc-300 bg-white p-6 shadow-lg shadow-zinc-300/50 sm:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {pkg.badge && (
                <span className="absolute right-5 top-5 rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                  {pkg.badge}
                </span>
              )}

              <div className="relative flex flex-1 flex-col">
                <h4
                  className={`font-display text-[1.25rem] font-semibold text-zinc-900 sm:text-2xl whitespace-nowrap ${pkg.badge ? "pr-16" : ""}`}
                >
                  {pkg.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {pkg.subtitle}
                </p>

                <div className="mt-6">
                  {pkg.monthly ? (
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                        Monatlich
                      </span>
                      <p className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                        ab {pkg.monthly} €
                      </p>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-sm text-zinc-500">
                          Setup: ab {pkg.setup} €
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-2xl font-bold text-zinc-900">
                      {pkg.customPrice}
                    </p>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-zinc-700"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => openModal(pkg.title)}
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
