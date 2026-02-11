"use client";

import Link from "next/link";
import { motion } from "motion/react";

const EMAIL = "info@sham-studio.de";

export default function Footer() {
  return (
    <motion.footer
      className="rounded-t-3xl bg-white py-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-1">
          <p className="text-center text-sm text-zinc-600 order-2 sm:order-1 sm:mr-auto">
            © {new Date().getFullYear()} Sham Studio. Alle Rechte vorbehalten.
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 order-1 sm:order-2"
            aria-label="Footer-Navigation"
          >
            <Link
              href="/impressum"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-2 rounded"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-2 rounded"
            >
              Datenschutz
            </Link>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-2 rounded"
            >
              {EMAIL}
            </a>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
}
