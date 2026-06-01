"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { handleNavLinkClick } from "@/lib/nav-scroll";

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

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden
    >
      <path
        d="M2 12h40M34 5l8 7-8 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FOOTER_HEADLINE_CLASS =
  "font-normal leading-[1.02] tracking-[-0.03em] text-[clamp(1.35rem,5.2vw,4.75rem)]";

const footerNavLinks = [
  { href: "/projekte", label: "Projekte" },
  { href: "/services", label: "Services" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/blog", label: "Blog" },
] as const;

function isFooterNavActive(pathname: string, href: string) {
  if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
  return pathname === href;
}

function FooterNavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = isFooterNavActive(pathname, href);

  return (
    <li>
      <Link
        href={href}
        onClick={(e) => handleNavLinkClick(e, pathname, href, false)}
        className={`group relative block w-fit py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-4 ${
          active ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-900"
        }`}
      >
        <span className="inline-flex items-center gap-2 font-display text-xl font-medium tracking-[-0.02em] md:text-2xl">
          <span
            className={`inline-block overflow-hidden transition-all duration-300 ease-out ${
              active
                ? "w-6 opacity-100"
                : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
            }`}
            aria-hidden
          >
            →
          </span>
          {label}
        </span>
        <span
          className={`mt-1 block h-px bg-zinc-900 transition-all duration-300 ease-out ${
            active ? "w-full" : "w-0 group-hover:w-full"
          }`}
          aria-hidden
        />
      </Link>
    </li>
  );
}

export default function Footer() {
  const pathname = usePathname();

  return (
    <motion.footer
      className="rounded-t-[2rem] bg-white pb-8 pt-14 sm:rounded-t-[3rem] md:pb-10 md:pt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-14 flex flex-col gap-10 md:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <p className="mb-4 text-sm text-zinc-500 md:mb-6">
              Bereit für das nächste Projekt?
            </p>
            <Link
              href="/kontakt"
              onClick={(e) => handleNavLinkClick(e, pathname, "/kontakt", false)}
              className="group inline-block max-w-full text-zinc-900 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-4"
            >
              <h2
                className={`font-display ${FOOTER_HEADLINE_CLASS} flex max-w-full items-center gap-3 whitespace-nowrap md:gap-4`}
              >
                Lass uns zusammenarbeiten
                <ArrowIcon className="h-[0.38em] w-[0.95em] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </h2>
            </Link>

            <nav className="mt-10 md:mt-12" aria-label="Seitennavigation">
              <ul className="flex flex-col gap-0.5">
                {footerNavLinks.map((link) => (
                  <FooterNavItem key={link.href} href={link.href} label={link.label} />
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-4 lg:self-end">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-all hover:border-zinc-900 hover:bg-zinc-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-2"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-all hover:border-zinc-900 hover:bg-zinc-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-2"
              aria-label="E-Mail"
            >
              <EmailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mb-8 h-px w-full bg-zinc-200" aria-hidden />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Sham Studio
          </p>

          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-1"
            aria-label="Rechtliches"
          >
            <Link
              href="/impressum"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
            >
              Impressum
            </Link>
            <Link
              href="/agb"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
            >
              AGB
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
}
