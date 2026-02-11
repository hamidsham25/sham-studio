"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#portfolio", id: "portfolio", label: "Portfolio" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#about", id: "about", label: "Über mich" },
  { href: "#contact", id: "contact", label: "Kontakt" },
];

function useActiveSection() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [navOverSection, setNavOverSection] = useState<string>("hero");

  useEffect(() => {
    const sections = ["hero", "services", "portfolio", "about", "contact"];

    // For active nav highlight – detects section in middle of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute("id");
          if (id) setActiveId(id);
        }
      },
      { rootMargin: "-15% 0px -50% 0px", threshold: 0 }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    // For navbar color – checks which section the navbar physically touches
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveId("hero");
        setNavOverSection("hero");
        return;
      }
      const navBottom = 64; // approx navbar height in px
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navBottom) {
            setNavOverSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { activeId, setActiveId, navOverSection };
}

function NavLink({
  href,
  label,
  isActive,
  isLight,
}: {
  href: string;
  label: string;
  isActive: boolean;
  isLight: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 25 });
  const springY = useSpring(y, { stiffness: 150, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Link
      ref={ref}
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative py-1.5 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 ${
        isActive
          ? isLight ? "text-zinc-900" : "text-white"
          : isLight ? "text-zinc-500" : "text-zinc-400"
      }`}
    >
      <motion.span
        className="relative inline-flex"
        style={{ x: springX, y: springY }}
      >
        {label.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            animate={
              hovered
                ? {
                    y: [0, -3, 0],
                    color: "#22d3ee",
                    transition: {
                      y: { delay: i * 0.03, duration: 0.3, ease: "easeOut" },
                      color: { delay: i * 0.03, duration: 0.2 },
                    },
                  }
                : {
                    y: 0,
                    color: isActive
                      ? isLight ? "#18181b" : "#ffffff"
                      : isLight ? "#71717a" : "#a1a1aa",
                    transition: { duration: 0.25 },
                  }
            }
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
      {isActive && (
        <motion.span
          className={`absolute bottom-0 left-0 h-px w-full ${isLight ? "bg-zinc-900/50" : "bg-cyan-400/70"}`}
          layoutId="nav-underline"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { activeId: activeSection, setActiveId, navOverSection } = useActiveSection();

  const scrollToHero = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveId("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  };

  const lightSections = ["portfolio"];
  const isLight = lightSections.includes(navOverSection);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        isLight ? "bg-white/80" : "bg-[#0a0a0a]/80"
      }`}
    >
      <nav
        className="relative flex w-full items-center justify-between px-6 py-4 md:px-8"
        aria-label="Hauptnavigation"
      >
        <Link
          href="#hero"
          onClick={scrollToHero}
          className={`flex-shrink-0 font-display text-xl font-bold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 ${
            isLight ? "text-zinc-900" : "text-white"
          }`}
        >
          Sham Studio
        </Link>
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                label={link.label}
                isActive={activeSection === link.id}
                isLight={isLight}
              />
            </li>
          ))}
        </ul>
        <div className="flex flex-shrink-0 items-center gap-3">
          {/* Dark/Light Toggle – auskommentiert für später
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
          */}
          <Link
            href="#contact"
            className={`hidden items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 md:inline-flex ${
              isLight
                ? "bg-zinc-900 text-white hover:bg-zinc-800"
                : "bg-cyan-400 text-black hover:bg-cyan-300"
            }`}
          >
            Projekt starten
          </Link>
          <motion.button
            type="button"
            className={`flex flex-col gap-1.5 rounded-lg p-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 md:hidden ${
              isLight ? "text-zinc-500 hover:text-zinc-900" : "text-zinc-400 hover:text-white"
            }`}
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
          className={`px-6 py-4 md:hidden ${isLight ? "bg-white" : "bg-[#0a0a0a]"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-base font-medium ${
                      isActive
                        ? isLight ? "text-zinc-900" : "text-white"
                        : isLight ? "text-zinc-500 hover:text-zinc-900" : "text-zinc-400 hover:text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="#contact"
                className={`inline-flex rounded-full px-5 py-2.5 text-sm font-semibold ${
                  isLight ? "bg-zinc-900 text-white" : "bg-cyan-400 text-black"
                }`}
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
