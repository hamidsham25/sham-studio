"use client";

import { motion } from "motion/react";

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
  return (
    <section
      id="services"
      className="flex min-h-[28rem] min-h-[100dvh] max-h-[100dvh] flex-col overflow-y-auto bg-white pt-0 pb-16 rounded-b-[2rem] sm:rounded-b-[3rem] md:pb-24"
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
            className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl"
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
              <h3 className="relative mt-5 font-display text-xl font-semibold text-zinc-900 sm:text-[1.25rem]">
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
      </div>
    </section>
  );
}
