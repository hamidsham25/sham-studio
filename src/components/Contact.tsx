"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-zinc-800/50"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl px-6 md:px-8">
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
          Sie haben ein Projekt im Kopf? Schreiben Sie mir – ich melde mich
          zeitnah.
        </motion.p>
        <motion.form
          className="mt-10 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-300">Name</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="rounded-xl border border-zinc-700 bg-[#111] px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                placeholder="Ihr Name"
                aria-required="true"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-300">E-Mail</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="rounded-xl border border-zinc-700 bg-[#111] px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                placeholder="ihre@email.de"
                aria-required="true"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-zinc-300">Betreff</span>
            <input
              type="text"
              name="subject"
              autoComplete="off"
              className="rounded-xl border border-zinc-700 bg-[#111] px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              placeholder="Worum geht es?"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-zinc-300">Nachricht</span>
            <textarea
              name="message"
              required
              rows={5}
              className="resize-y rounded-xl border border-zinc-700 bg-[#111] px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              placeholder="Beschreiben Sie Ihr Projekt oder Ihre Frage …"
              aria-required="true"
            />
          </label>
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
            >
              Senden
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
