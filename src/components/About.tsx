"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr,280px] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="about-heading"
              className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Über mich
            </h2>
            <p className="mt-4 text-zinc-400 md:text-lg">
              Ich gestalte und entwickle Websites, die nicht nur gut aussehen,
              sondern auch funktionieren – schnell, zugänglich und auf den Punkt.
            </p>
            <p className="mt-4 text-zinc-400 md:text-lg">
              Mit Fokus auf klare Strukturen, starke Typografie und durchdachte
              Nutzerführung entstehen digitale Erlebnisse, die zu Ihrer Marke
              passen und Ihre Ziele unterstützen. Ob Start-up, Agentur oder
              Einzelunternehmer: Ich begleite Sie von der ersten Idee bis zum
              Launch.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div
              className="aspect-square w-48 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900 md:w-56 lg:w-64"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
