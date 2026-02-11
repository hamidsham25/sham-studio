"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "Über mich" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800/50 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav
        className="relative flex w-full items-center justify-between px-6 py-4 md:px-8"
        aria-label="Hauptnavigation"
      >
        <Link
          href="#hero"
          className="flex-shrink-0 font-display text-xl font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
        >
          Sham Studio
        </Link>
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className="relative flex h-9 w-[72px] flex-shrink-0 rounded-full bg-zinc-800 p-1 transition-colors hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
            aria-label={isDark ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"}
            aria-pressed={!isDark}
          >
            <motion.span
              className="absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-black"
              animate={{ x: isDark ? 0 : 36 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {isDark ? (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.59-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
              )}
            </motion.span>
          </button>
          <Link
            href="#contact"
            className="hidden items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 md:inline-flex"
          >
            Projekt starten
          </Link>
          <motion.button
            type="button"
            className="flex flex-col gap-1.5 rounded-lg p-2 text-zinc-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menü öffnen oder schließen"
          >
            <span className={`h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </motion.button>
        </div>
      </nav>
      {open && (
        <motion.div
          className="border-t border-zinc-800/50 bg-[#0a0a0a] px-6 py-4 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-zinc-400 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-flex rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black"
                onClick={() => setOpen(false)}
              >
                Projekt starten
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
