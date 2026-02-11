"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      className="section-padding"
      aria-label="Call to Action"
    >
      <motion.div
        className="mx-auto max-w-4xl px-6 text-center md:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Bereit für Ihr Projekt?
        </h2>
        <p className="mt-4 text-lg text-zinc-400 md:text-xl">
          Lassen Sie uns gemeinsam Ihre Idee umsetzen.
        </p>
        <div className="mt-10">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-10 py-5 text-lg font-semibold text-black transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
          >
            Projekt starten
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
