"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "E-Commerce Relaunch",
    description: "Shop mit Fokus auf Conversion und Performance.",
    placeholder: "bg-gradient-to-br from-zinc-700 to-zinc-900",
  },
  {
    title: "SaaS Dashboard",
    description: "Übersichtliches Interface für komplexe Daten.",
    placeholder: "bg-gradient-to-br from-cyan-900/40 to-zinc-900",
  },
  {
    title: "Agentur-Website",
    description: "Klare Positionierung, starke Typografie.",
    placeholder: "bg-gradient-to-br from-zinc-800 to-zinc-950",
  },
  {
    title: "Portfolio & CV",
    description: "Minimalistisch, persönlich, einprägsam.",
    placeholder: "bg-gradient-to-br from-zinc-700 to-zinc-800",
  },
  {
    title: "Landing Page",
    description: "One-Pager mit klarem CTA und Formular.",
    placeholder: "bg-gradient-to-br from-cyan-950/50 to-zinc-900",
  },
  {
    title: "Brand & Web",
    description: "Markenauftritt inkl. Website und Styleguide.",
    placeholder: "bg-gradient-to-br from-zinc-800 to-zinc-900",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding border-t border-zinc-800/50"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.h2
          id="portfolio-heading"
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-zinc-400 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ausgewählte Projekte – von Konzept bis Umsetzung.
        </motion.p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.li
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <article className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#111] transition-colors hover:border-zinc-700">
                <div
                  className={`aspect-[4/3] ${project.placeholder} transition-transform duration-300 group-hover:scale-[1.02]`}
                />
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
