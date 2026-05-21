"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect } from "react";
import Logo from "@/components/Logo";
import { shouldSkipLoadingScreen } from "@/lib/loading-screen";

const navLinks = [
  { href: "#portfolio", id: "portfolio", label: "Portfolio" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#about", id: "about", label: "Über mich" },
  { href: "#contact", id: "contact", label: "Kontakt" },
];

const NAV_BOTTOM_OFFSET = 100;

const HOME_SECTIONS = ["hero", "services", "portfolio", "about", "contact"] as const;
const PROJEKTE_SECTIONS = ["projekte-hero", "projekte-list"] as const;

function useActiveSection(pathname: string) {
  const isHome = pathname === "/";
  const isProjekte = pathname === "/projekte";
  const defaultSection = isProjekte ? "projekte-hero" : "hero";

  const [activeId, setActiveId] = useState<string>(defaultSection);
  const [navOverSection, setNavOverSection] = useState<string>(defaultSection);

  useEffect(() => {
    setActiveId(defaultSection);
    setNavOverSection(defaultSection);
  }, [defaultSection]);

  useEffect(() => {
    const sections = isProjekte
      ? [...PROJEKTE_SECTIONS]
      : isHome
        ? [...HOME_SECTIONS]
        : [];

    const handleScroll = () => {
      if (sections.length === 0) return;

      if (window.scrollY < 50) {
        setActiveId(sections[0]);
        setNavOverSection(sections[0]);
        return;
      }
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= NAV_BOTTOM_OFFSET && rect.bottom > NAV_BOTTOM_OFFSET) {
            setActiveId(id);
            setNavOverSection(id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome, isProjekte]);

  return { activeId, setActiveId, navOverSection };
}

function NavLink({
  href,
  label,
  isActive,
  onDarkPill,
  isHome,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onDarkPill: boolean;
  isHome: boolean;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return;
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Link
      href={isHome ? href : `/${href}`}
      onClick={handleClick}
      className={`whitespace-nowrap rounded-full px-1 py-1 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 ${
        isActive
          ? onDarkPill
            ? "text-cyan-400"
            : "text-cyan-600"
          : onDarkPill
            ? "text-zinc-400 hover:text-white"
            : "text-zinc-600 hover:text-zinc-900"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProjekte = pathname === "/projekte";
  const [open, setOpen] = useState(false);
  const [navExpanded, setNavExpanded] = useState(!isHome);
  const [isLandscape, setIsLandscape] = useState(false);
  const { activeId: activeSection, setActiveId, navOverSection } = useActiveSection(pathname);

  useLayoutEffect(() => {
    if (!isHome) {
      setNavExpanded(true);
      return;
    }
    if (shouldSkipLoadingScreen()) {
      setNavExpanded(true);
      return;
    }

    setNavExpanded(false);
    let expandTimer: ReturnType<typeof setTimeout>;
    const handleLoadingComplete = () => {
      expandTimer = setTimeout(() => setNavExpanded(true), 80);
    };
    window.addEventListener("loadingComplete", handleLoadingComplete);
    return () => {
      window.removeEventListener("loadingComplete", handleLoadingComplete);
      clearTimeout(expandTimer);
    };
  }, [isHome]);

  useEffect(() => {
    const checkLandscape = () => {
      setIsLandscape(
        typeof window !== "undefined" &&
          window.matchMedia("(orientation: landscape) and (max-height: 500px)").matches
      );
    };
    checkLandscape();
    const mq = window.matchMedia("(orientation: landscape) and (max-height: 500px)");
    mq.addEventListener("change", checkLandscape);
    return () => mq.removeEventListener("change", checkLandscape);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const scrollToHero = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return;
    e.preventDefault();
    setActiveId("hero");
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return;
    e.preventDefault();
    setOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const lightSections = ["portfolio", "services", "projekte-list"];
  const onDarkPill = isProjekte ? false : lightSections.includes(navOverSection);

  const pillClass = onDarkPill
    ? "border border-zinc-800/60 bg-zinc-900/90 text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] max-md:border-zinc-200/80 max-md:bg-zinc-50/95 max-md:text-zinc-900 max-md:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
    : "border border-zinc-200/80 bg-zinc-50/95 text-zinc-900 shadow-[0_8px_32px_rgba(0,0,0,0.12)]";

  const ctaClass = onDarkPill
    ? "bg-cyan-400 text-zinc-900 hover:bg-cyan-300"
    : "bg-zinc-900 text-white hover:bg-zinc-800";

  const mobileMenuBtnClass = "bg-zinc-900 text-white hover:bg-zinc-800";

  const expandTransition = {
    layout: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
    maxWidth: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
    opacity: { duration: 0.3, ease: "easeOut" as const },
  };

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-[9999] isolate px-4 pt-4 md:px-6 md:pt-6">
      <div className="pointer-events-auto flex w-full flex-col items-center px-0 md:w-auto">
        <motion.nav
          layout
          transition={expandTransition}
          className={`flex w-full max-w-[calc(100vw-2rem)] items-center justify-between rounded-full px-5 py-3.5 backdrop-blur-md transition-[background-color,border-color,box-shadow,color] duration-300 md:inline-flex md:w-auto md:max-w-[calc(100vw-2rem)] md:px-6 md:py-3.5 ${pillClass} ${
            navExpanded ? "md:gap-8" : "md:gap-4"
          }`}
          aria-label="Hauptnavigation"
        >
          <Link
            href={isHome ? "#hero" : "/"}
            onClick={scrollToHero}
            className="flex-shrink-0 rounded-full transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
          >
            <Logo onDarkBackground={onDarkPill} />
          </Link>

          <motion.div
            className="hidden min-w-0 overflow-hidden md:block"
            initial={false}
            animate={{
              maxWidth: navExpanded ? 520 : 0,
              opacity: navExpanded ? 1 : 0,
            }}
            transition={expandTransition}
          >
            <ul className="flex items-center gap-5 whitespace-nowrap px-1 lg:gap-7">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={false}
                  animate={{
                    opacity: navExpanded ? 1 : 0,
                    x: navExpanded ? 0 : -6,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.25,
                      delay: navExpanded ? 0.12 + i * 0.05 : 0,
                    },
                    x: {
                      duration: 0.35,
                      delay: navExpanded ? 0.1 + i * 0.05 : 0,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                >
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={activeSection === link.id}
                    onDarkPill={onDarkPill}
                    isHome={isHome}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <Link
            href={isHome ? "#contact" : "/#contact"}
            onClick={scrollToContact}
            className={`hidden shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 md:inline-flex md:px-6 md:py-3 ${ctaClass}`}
          >
            Projekt starten
          </Link>

          <motion.button
            type="button"
            className={`relative flex h-11 min-w-[3.75rem] shrink-0 items-center justify-center rounded-full px-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 md:hidden ${mobileMenuBtnClass}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menü öffnen oder schließen"
          >
            <span className="flex w-5 flex-col items-center justify-center gap-[5px]" aria-hidden>
              <motion.span
                className="h-[2px] w-full shrink-0 origin-center rounded-full bg-current"
                animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
              <motion.span
                className="h-[2px] w-full shrink-0 origin-center rounded-full bg-current"
                animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
                transition={{ duration: 0.12 }}
              />
              <motion.span
                className="h-[2px] w-full shrink-0 origin-center rounded-full bg-current"
                animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </span>
          </motion.button>
        </motion.nav>

        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key="mobile-menu"
              layout
              className={`header-mobile-menu w-full max-w-[calc(100vw-2rem)] overflow-y-auto overflow-x-hidden rounded-3xl border px-5 py-4 md:hidden ${
                onDarkPill
                  ? "border-zinc-800/60 bg-zinc-900/95 text-white"
                  : "border-zinc-200/80 bg-zinc-50/95 text-zinc-900"
              }`}
              style={isLandscape ? { maxHeight: "75vh" } : undefined}
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
              exit={{
                opacity: 0,
                y: -6,
                scale: 0.98,
                transition: { duration: 0.16 },
              }}
            >
              <ul className="flex flex-col gap-0.5">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.02 + i * 0.02, duration: 0.22 },
                      }}
                      exit={{ opacity: 0, x: -6, transition: { duration: 0.15 } }}
                    >
                      <Link
                        href={isHome ? link.href : `/${link.href}`}
                        className={`block rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? onDarkPill
                              ? "text-cyan-400"
                              : "text-cyan-600"
                            : onDarkPill
                              ? "text-zinc-400 hover:text-white"
                              : "text-zinc-600 hover:text-zinc-900"
                        }`}
                        onClick={(e) => {
                          if (!isHome) {
                            setOpen(false);
                            return;
                          }
                          e.preventDefault();
                          setOpen(false);
                          document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
                <motion.li
                  initial={{ opacity: 0, x: -8 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.02 + navLinks.length * 0.02, duration: 0.22 },
                  }}
                  exit={{ opacity: 0, x: -6, transition: { duration: 0.15 } }}
                  className="mt-2 px-3 pb-1"
                >
                  <Link
                    href={isHome ? "#contact" : "/#contact"}
                    className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-base font-semibold ${ctaClass}`}
                    onClick={scrollToContact}
                  >
                    Projekt starten
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
