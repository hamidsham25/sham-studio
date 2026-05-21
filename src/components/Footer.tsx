"use client";

import Link from "next/link";
import { motion } from "motion/react";

const INSTAGRAM_URL = "https://www.instagram.com/shamstudiohq/";
const EMAIL = "info@sham-studio.de";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <motion.footer
      className="rounded-t-[2rem] sm:rounded-t-[3rem] bg-white pt-14 pb-8 md:pt-20 md:pb-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Top: CTA + Socials */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14 md:mb-20">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-3 font-sans">
              Projekt im Kopf?
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 leading-[1.1]">
              Let&apos;s talk.
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-2"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-200 text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-2"
              aria-label="E-Mail"
            >
              <EmailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-zinc-200 mb-8" aria-hidden />

        {/* Bottom: Copyright left, Legal right */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Sham Studio
          </p>

          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-1"
            aria-label="Rechtliches"
          >
            <Link
              href="/impressum"
              className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/agb"
              className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              AGB
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
}
