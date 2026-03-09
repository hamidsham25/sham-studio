"use client";

import { motion } from "motion/react";
import { useContactModal } from "@/components/ContactModalContext";

const packages = [
  {
    badge: null,
    title: "Digitaler Grundstein",
    subtitle:
      "Für Selbstständige & Einzelunternehmer, die endlich seriös online starten wollen.",
    monthly: "49",
    setup: "490",
    features: [
      "Landingpage oder Website mit 2–3 Seiten",
      "Individuelles Design – kein Template",
      "Responsive für alle Geräte",
      "Grundlegendes SEO",
      "Kontaktformular integriert",
      "SSL, Hosting & zuverlässiger Betrieb",
      "Monatliche Wartung & Updates",
    ],
    cta: "Smarter Start anfragen",
  },
  {
    badge: "Beliebt",
    title: "Business-Präsenz",
    subtitle:
      "Für Praxen, Berater & kleine Betriebe – gefunden werden und wachsen.",
    monthly: "89",
    setup: "1.290",
    features: [
      "Vollständige Website mit 5–8 Seiten",
      "Optional: CMS für Aktuelles/News (selbst pflegen)",
      "Erweiterte SEO & Google Maps",
      "Kontaktformular & klare Call-to-Actions",
      "Hosting, Wartung & quartalsweise Updates",
      "Einweisung in die Verwaltung inklusive",
    ],
    cta: "Business-Präsenz anfragen",
  },
  {
    badge: null,
    title: "Maßgeschneidert",
    subtitle:
      "Komplexe Projekte, Branding, individuelle Anforderungen – alles aus einer Hand.",
    monthly: null,
    setup: null,
    customPrice: "Auf Anfrage",
    features: [
      "Individuelle Konzeption & Strategie",
      "Branding: Logo, Farben, Styleguide",
      "Komplexe Webprojekte & Sonderfunktionen",
      "CMS-Anbindung (Sanity o. Ä.)",
      "Dedizierter Support & technische Beratung",
      "Von der Idee bis zum Launch begleitet",
    ],
    cta: "Projekt besprechen",
  },
];

const services = [
  {
    title: "Webdesign",
    description:
      "Klare Strukturen, starke Typografie und ein Look, der zu Ihrer Marke passt – von der ersten Skizze bis zur pixelgenauen Umsetzung.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "UI/UX",
    description:
      "Nutzer im Fokus: intuitive Oberflächen, durchdachte Abläufe und Interfaces, die begeistern statt überfordern.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Branding",
    description:
      "Von Logo bis Styleguide: ein stimmiges Erscheinungsbild, das Sie sofort wiedererkennbar und vertrauenswürdig macht.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "Entwicklung",
    description:
      "Sauberer Code, schnelle Ladezeiten und technisch auf der Höhe – damit Ihre Website zuverlässig läuft und gut wartbar bleibt.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function Services() {
  const { openModal } = useContactModal();
  return (
    <section
      id="services"
      className="relative z-10 flex min-h-[28rem] min-h-viewport flex-col bg-white pt-0 pb-16 rounded-b-[2rem] sm:rounded-b-[3rem] md:pb-24"
      aria-labelledby="services-heading"
    >
      <div className="h-px w-full shrink-0 bg-zinc-200" aria-hidden />
      {/* Gleiche Struktur wie Über mich: mx-auto max-w-6xl px-6 md:px-8, section-padding für einheitliche Header-Position */}
      <div className="mx-auto flex max-w-6xl flex-1 flex-col justify-center px-6 pt-16 pb-4 md:px-8 md:pt-24">
        <motion.header
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="services-heading"
            className="font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
          >
            Services
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 md:text-lg">
            Von Konzept bis Launch – alles aus einer Hand.
          </p>
        </motion.header>

        <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((item, i) => (
            <motion.li
              key={item.title}
              className="group relative flex flex-col rounded-2xl border border-zinc-300 bg-zinc-100 p-6 shadow-md shadow-zinc-300/40 sm:p-7 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
                delay: i * 0.08,
              }}
              whileHover="hover"
              variants={{
                hover: {
                  y: -10,
                  scale: 1.03,
                  boxShadow:
                    "0 24px 48px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(34,211,238,0.35)",
                  transition: { type: "spring", stiffness: 400, damping: 26 },
                },
              }}
            >
              {/* Dezenter Hover-Glow im Hintergrund */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 pointer-events-none"
                variants={{ hover: { opacity: 1 } }}
                transition={{ duration: 0.3 }}
                aria-hidden
              />
              <motion.span
                className="relative inline-flex origin-left text-cyan-500"
                variants={{ hover: { scale: 1.15 } }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                aria-hidden
              >
                {item.icon}
              </motion.span>
              <h3 className="relative mt-5 font-display text-[1.25rem] font-semibold text-zinc-900 sm:text-2xl">
                {item.title}
              </h3>
              <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
              {/* Unterer Akzent-Linie bei Hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-cyan-400 to-cyan-600"
                initial={{ scaleX: 0 }}
                variants={{ hover: { scaleX: 1 } }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                aria-hidden
              />
            </motion.li>
          ))}
        </ul>

        {/* Starter-Pakete */}
        <motion.header
          className="mt-20 mb-10 md:mt-24 md:mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Starter-Pakete
          </h3>
          <p className="mt-2 max-w-2xl text-zinc-600 md:text-base">
            Konkrete Angebote – transparente Preise. So startest du online.
          </p>
        </motion.header>

        <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg, i) => (
            <motion.li
              key={pkg.title}
              className="group relative flex flex-col rounded-2xl border border-zinc-300 bg-white p-6 shadow-lg shadow-zinc-300/50 sm:p-8 overflow-hidden"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
                delay: i * 0.1,
              }}
              whileHover="hover"
              variants={{
                hover: {
                  y: -6,
                  boxShadow:
                    "0 24px 48px -12px rgba(0,0,0,0.2), 0 0 0 1px rgba(34,211,238,0.4)",
                  transition: { type: "spring", stiffness: 400, damping: 26 },
                },
              }}
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
                          Einmaliges Setup: ab {pkg.setup} €
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
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

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-cyan-400 to-cyan-600"
                initial={{ scaleX: 0 }}
                variants={{ hover: { scaleX: 1 } }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                aria-hidden
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
