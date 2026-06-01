"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect } from "react";
import Logo from "@/components/Logo";
import { handleNavLinkClick, scrollToPageTop } from "@/lib/nav-scroll";
import { shouldSkipLoadingScreen } from "@/lib/loading-screen";

const navLinks = [
  { href: "/projekte", id: "projekte", label: "Projekte" },
  { href: "/services", id: "services", label: "Services" },
  { href: "/ueber-uns", id: "ueber-uns", label: "Über uns" },
  { href: "/kontakt", id: "kontakt", label: "Kontakt" },
];

function navHref(link: { href: string }, isHome: boolean) {
  if (link.href.startsWith("/")) return link.href;
  return isHome ? link.href : `/${link.href}`;
}

const NAV_BOTTOM_OFFSET = 100;

const HOME_SECTIONS = [
  "hero",
  "portfolio",
  "services",
  "pricing",
  "about",
  "contact",
] as const;
const PROJEKTE_SECTIONS = ["projekte-hero", "projekte-list"] as const;
const SERVICES_PAGE_SECTIONS = ["services-hero", "services-list"] as const;

const NAV_PILL_CLASS =
  "rounded-full border border-zinc-800/70 bg-zinc-900/95 text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md";

const NAV_ITEM_SIZE_CLASS =
  "inline-flex items-center px-5 py-2.5 text-sm font-semibold md:px-6 md:py-3";

function useActiveSection(pathname: string) {
  const isHome = pathname === "/";
  const isProjekte = pathname === "/projekte";
  const isServicesPage = pathname === "/services";
  const defaultSection = isProjekte
    ? "projekte-hero"
    : isServicesPage
      ? "services-hero"
      : "hero";

  const [activeId, setActiveId] = useState<string>(defaultSection);
  const [navOverSection, setNavOverSection] = useState<string>(defaultSection);

  useEffect(() => {
    setActiveId(defaultSection);
    setNavOverSection(defaultSection);
  }, [defaultSection]);

  useEffect(() => {
    const sections = isProjekte
      ? [...PROJEKTE_SECTIONS]
      : isServicesPage
        ? [...SERVICES_PAGE_SECTIONS]
        : isHome
          ? [...HOME_SECTIONS]
          : [];

    const resolveSectionAtNav = (): string | null => {
      const x = window.innerWidth / 2;
      const y = NAV_BOTTOM_OFFSET;
      const stack = document.elementsFromPoint(x, y);

      for (const el of stack) {
        if (!(el instanceof Element)) continue;
        if (el.closest("header")) continue;
        const sectionEl = el.closest("section[id]");
        const id = sectionEl?.id;
        if (id && sections.includes(id)) return id;
      }

      let lastMatch: string | null = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= NAV_BOTTOM_OFFSET && rect.bottom > NAV_BOTTOM_OFFSET) {
          lastMatch = id;
        }
      }
      return lastMatch;
    };

    const handleScroll = () => {
      if (sections.length === 0) return;

      if (window.scrollY < 50) {
        setActiveId(sections[0]);
        setNavOverSection(sections[0]);
        return;
      }

      const sectionId = resolveSectionAtNav();
      if (sectionId) {
        setActiveId(sectionId);
        setNavOverSection(sectionId);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome, isProjekte, isServicesPage]);

  return { activeId, setActiveId, navOverSection };
}

function NavLink({
  href,
  label,
  isActive,
  isHome,
  pathname,
}: {
  href: string;
  label: string;
  isActive: boolean;
  isHome: boolean;
  pathname: string;
}) {
  return (
    <Link
      href={navHref({ href }, isHome)}
      onClick={(e) => handleNavLinkClick(e, pathname, href, isHome)}
      className={`${NAV_ITEM_SIZE_CLASS} whitespace-nowrap rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 ${
        isActive
          ? "bg-white text-zinc-900"
          : "text-zinc-300 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

function StatusDot() {
  return (
    <span
      className="nav-status-dot"
      aria-hidden
    />
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProjekte = pathname === "/projekte";
  const isServicesPage = pathname === "/services";
  const isKontakt = pathname === "/kontakt";
  const isAnfragen = pathname === "/anfragen";
  const isUeberUns = pathname === "/ueber-uns";
  const [open, setOpen] = useState(false);
  const [navExpanded, setNavExpanded] = useState(!isHome);
  const [animateNav, setAnimateNav] = useState(isHome);
  const [isLandscape, setIsLandscape] = useState(false);
  const { activeId: activeSection, setActiveId, navOverSection } = useActiveSection(pathname);

  useLayoutEffect(() => {
    if (!isHome) {
      setNavExpanded(true);
      setAnimateNav(false);
      return;
    }

    setNavExpanded(false);
    setAnimateNav(true);

    let expandTimer: ReturnType<typeof setTimeout>;
    let raf1 = 0;
    let raf2 = 0;

    const scheduleExpand = (delayMs: number) => {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          expandTimer = setTimeout(() => setNavExpanded(true), delayMs);
        });
      });
    };

    const skipLoading = shouldSkipLoadingScreen();

    if (skipLoading) {
      scheduleExpand(400);
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
        clearTimeout(expandTimer);
      };
    }

    const handleLoadingComplete = () => {
      scheduleExpand(750);
    };

    window.addEventListener("loadingComplete", handleLoadingComplete);
    return () => {
      window.removeEventListener("loadingComplete", handleLoadingComplete);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
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


  const lightSections = ["portfolio", "services", "pricing", "projekte-list"];
  const logoOnDarkBg = isHome && !lightSections.includes(navOverSection);

  const expandTransition = animateNav
    ? {
        layout: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
        maxWidth: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
        opacity: { duration: 0.3, ease: "easeOut" as const },
      }
    : {
        layout: { duration: 0 },
        maxWidth: { duration: 0 },
        opacity: { duration: 0 },
      };

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-[9999] isolate px-4 pt-4 md:pl-6 md:pr-10 md:pt-6 lg:pl-8 lg:pr-14">
      <div className="pointer-events-auto relative mx-auto w-full max-w-[1600px]">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={isHome ? "#hero" : "/"}
            onClick={scrollToHero}
            className="relative z-10 flex-shrink-0 rounded-full transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
          >
            <Logo onDarkBackground={logoOnDarkBg} />
          </Link>

          <motion.nav
            layout
            transition={expandTransition}
            className={`absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex md:items-center ${NAV_PILL_CLASS}`}
            aria-label="Hauptnavigation"
            initial={false}
            animate={{
              opacity: navExpanded ? 1 : 0,
              scale: navExpanded ? 1 : 0.92,
            }}
            style={{ pointerEvents: navExpanded ? "auto" : "none" }}
          >
            <motion.ul
              className="flex items-center gap-0.5 overflow-hidden px-1 py-1"
              initial={false}
              animate={{
                maxWidth: navExpanded ? 520 : 0,
              }}
              transition={expandTransition}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={false}
                  animate={{
                    opacity: navExpanded ? 1 : 0,
                    x: navExpanded ? 0 : -6,
                  }}
                  transition={
                    animateNav
                      ? {
                          opacity: {
                            duration: 0.25,
                            delay: navExpanded ? 0.12 + i * 0.05 : 0,
                          },
                          x: {
                            duration: 0.35,
                            delay: navExpanded ? 0.1 + i * 0.05 : 0,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          },
                        }
                      : { duration: 0 }
                  }
                >
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={
                      link.id === "projekte"
                        ? isProjekte
                        : link.id === "services"
                          ? isServicesPage
                          : link.id === "kontakt"
                            ? isKontakt
                            : link.id === "ueber-uns"
                              ? isUeberUns
                              : activeSection === link.id
                    }
                    isHome={isHome}
                    pathname={pathname}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>

          <Link
            href="/anfragen"
            onClick={(e) => {
              if (pathname !== "/anfragen") return;
              e.preventDefault();
              scrollToPageTop();
            }}
            className={`relative z-10 hidden shrink-0 items-center gap-3 rounded-full text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 md:inline-flex ${NAV_PILL_CLASS} ${NAV_ITEM_SIZE_CLASS} ${
              isAnfragen ? "ring-2 ring-white/30" : ""
            }`}
          >
            <StatusDot />
            Anfragen
          </Link>

          <motion.button
            type="button"
            className={`relative z-10 flex h-11 min-w-[3.75rem] shrink-0 items-center justify-center rounded-full px-5 text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 md:hidden ${NAV_PILL_CLASS}`}
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
        </div>

        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key="mobile-menu"
              layout
              className="header-mobile-menu absolute left-0 right-0 top-full z-20 mt-3 w-full overflow-y-auto overflow-x-hidden rounded-3xl border border-zinc-800/70 bg-zinc-900/95 px-5 py-4 text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md md:hidden"
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
                  const isActive =
                    link.id === "projekte"
                      ? isProjekte
                      : link.id === "services"
                        ? isServicesPage
                        : link.id === "kontakt"
                          ? isKontakt
                          : link.id === "ueber-uns"
                            ? isUeberUns
                            : activeSection === link.id;
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
                        href={navHref(link, isHome)}
                        className={`block rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-white text-zinc-900"
                            : "text-zinc-300 hover:text-white"
                        }`}
                        onClick={(e) => {
                          handleNavLinkClick(e, pathname, link.href, isHome);
                          setOpen(false);
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
                    href="/anfragen"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-zinc-700/80 bg-zinc-800 px-5 py-3 text-base font-semibold text-white"
                    onClick={(e) => {
                      if (pathname === "/anfragen") {
                        e.preventDefault();
                        scrollToPageTop();
                      }
                      setOpen(false);
                    }}
                  >
                    <StatusDot />
                    Anfragen
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
