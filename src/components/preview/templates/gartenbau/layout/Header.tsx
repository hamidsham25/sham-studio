"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { getGartenbauContent } from "../content";
import { NAV, previewPath } from "../navigation";
import { Container } from "./Container";

const SCROLL_THRESHOLD = 32;

function isSamePage(pathname: string, href: string) {
  const normalize = (path: string) => {
    if (path === "/") return "/";
    return path.replace(/\/$/, "");
  };

  return normalize(pathname) === normalize(href);
}

function scrollToTop() {
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
  window.scrollTo({ top: 0, behavior });
}

type HeaderProps = {
  slug: string;
};

export function Header({ slug }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const content = getGartenbauContent(slug);

  const homeHref = previewPath(slug, "home");
  const contactHref = previewPath(slug, "contact");
  const navLinks = NAV.map((item) => ({
    label: item.label,
    href: previewPath(slug, item.key),
  }));

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    setOpen(false);
  }, [pathname]);

  const isSolid = isScrolled || open;

  const handleNavClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      setOpen(false);

      if (isSamePage(pathname, href)) {
        event.preventDefault();
        scrollToTop();
      }
    };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ${
        isSolid
          ? "bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-[5.5rem] items-center justify-between gap-4 lg:h-[6.5rem]">
        <Link
          href={homeHref}
          onClick={handleNavClick(homeHref)}
          className="inline-flex items-center transition-opacity duration-300 hover:opacity-80"
        >
          {content.logoSrc ? (
            <Image
              src={content.logoSrc}
              alt={content.logoAlt ?? content.brandName}
              width={400}
              height={280}
              className={`h-[4.25rem] w-auto object-contain sm:h-[4.75rem] lg:h-[5.25rem] ${
                isSolid ? "" : "brightness-0 invert"
              }`}
              priority
            />
          ) : (
            <span
              className={`heading text-lg sm:text-xl ${
                isSolid ? "text-forest" : "text-white"
              }`}
            >
              {content.brandName}
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className={`font-heading text-base font-semibold uppercase tracking-wide transition-colors duration-300 lg:text-lg ${
                isSolid
                  ? "text-ink hover:text-action"
                  : "text-white/90 hover:text-action"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={contactHref}
          onClick={handleNavClick(contactHref)}
          className="hidden rounded-full bg-action px-8 py-3 font-heading text-base font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-forest lg:inline-flex lg:text-lg"
        >
          Angebot anfragen
        </Link>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className={`inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300 lg:hidden ${
            isSolid
              ? "text-forest hover:bg-forest/10"
              : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div
          className={`lg:hidden ${
            isSolid
              ? "bg-white/95 backdrop-blur-md"
              : "bg-forest/95 backdrop-blur-md"
          }`}
        >
          <Container as="nav" className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className={`rounded-2xl px-4 py-3 font-heading text-lg font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  isSolid
                    ? "text-ink hover:bg-forest/5 hover:text-action"
                    : "text-white/90 hover:bg-white/10 hover:text-action"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={contactHref}
              onClick={handleNavClick(contactHref)}
              className="mt-2 rounded-full bg-action px-8 py-3.5 text-center font-heading text-lg font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-forest"
            >
              Angebot anfragen
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
