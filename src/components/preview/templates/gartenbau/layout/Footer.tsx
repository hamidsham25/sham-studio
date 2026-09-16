import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { getGartenbauContent } from "../content";
import { previewPath } from "../navigation";
import { Container } from "./Container";

function FacebookIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9.101 23.691v-9.192H6.127v-3.63h2.974v-2.183c0-4.165 2.549-6.431 6.259-6.431 1.778 0 3.307.132 3.751.191v4.342l-2.574.001c-2.018 0-2.409.959-2.409 2.366v1.714h4.816l-.625 3.63h-4.191v9.192H9.101z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.065 2.065 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const otherLinks = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
  { label: "FAQ", href: "#" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
];

const linkClassName =
  "font-heading text-base font-semibold uppercase tracking-wide text-surface/80 transition-colors duration-200 hover:text-action";

const columnTitleClassName =
  "font-heading text-lg font-semibold uppercase tracking-wide text-white lg:text-xl";

type FooterProps = {
  slug: string;
};

export function Footer({ slug }: FooterProps) {
  const content = getGartenbauContent(slug);

  const quickLinks = [
    { label: "Über uns", href: previewPath(slug, "about") },
    { label: "Leistungen", href: previewPath(slug, "services") },
    { label: "Projekte", href: previewPath(slug, "projects") },
    { label: "Kontakt", href: previewPath(slug, "contact") },
  ];

  const serviceLinks = content.services.slice(0, 5).map((service) => ({
    label: service.title,
    href: previewPath(slug, "services"),
  }));

  return (
    <footer className="bg-forest text-surface">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 xl:gap-28">
          <div className="max-w-sm shrink-0">
            <Link
              href={previewPath(slug, "home")}
              className="heading inline-flex items-center gap-2 text-xl text-white transition-opacity duration-200 hover:opacity-80"
            >
              {content.logoSrc ? (
                <Image
                  src={content.logoSrc}
                  alt={content.logoAlt ?? content.brandName}
                  width={320}
                  height={220}
                  className="h-20 w-auto object-contain brightness-0 invert sm:h-24"
                />
              ) : (
                <>
                  <Leaf className="size-6 text-action" aria-hidden />
                  {content.brandName}
                </>
              )}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-surface/70">
              {content.footerBlurb}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-action text-white transition-colors duration-200 hover:bg-white hover:text-action"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
            <div>
              <p className={columnTitleClassName}>Navigation</p>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={columnTitleClassName}>Leistungen</p>
              <ul className="mt-4 space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={columnTitleClassName}>Weitere Links</p>
              <ul className="mt-4 space-y-3">
                {otherLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-surface/15 pt-8 text-center">
          <p className="text-sm text-surface/60">
            © {new Date().getFullYear()} {content.copyrightName}. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </Container>
    </footer>
  );
}
