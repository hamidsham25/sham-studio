"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 pb-16 md:px-8 md:pt-32"
      aria-label="Willkommen"
    >
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Webdesign & Entwicklung
        </motion.p>
        <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Sham Studio
        </h1>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 md:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          Websites, die wirken. Von der Idee bis zum Launch – klar, schnell und
          auf den Punkt.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
          >
            Projekt starten
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-8 py-4 text-base font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
          >
            Arbeiten ansehen
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
