"use client";

import { motion } from "motion/react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-[28rem] min-h-viewport flex-col section-padding rounded-b-3xl"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex max-w-2xl flex-1 flex-col justify-center px-6 md:px-8">
        <motion.h2
          id="contact-heading"
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Kontakt
        </motion.h2>
        <motion.p
          className="mt-4 text-zinc-400 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Bereit für Ihr Projekt? Lassen Sie uns Ihre Idee gemeinsam umsetzen –
          schreiben Sie mir, ich melde mich zeitnah.
        </motion.p>
        <motion.div
          className="mt-10 rounded-2xl border border-zinc-700 bg-[#1a1a1a] px-6 py-8 sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm source="Kontaktformular" />
        </motion.div>
      </div>
    </section>
  );
}
