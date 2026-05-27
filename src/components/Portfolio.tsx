"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectLogo from "@/components/ProjectLogo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PortfolioProject = {
  title: string;
  category: string;
  cover: string;
  href: string;
  layout?: "cover";
  /** Subtle label: concept / mockup project */
  isMockup?: boolean;
  logo?: string;
  /** Optional: wordmark already exported in white (transparent PNG) */
  logoWhite?: string;
  /** Optional: full wordmark white via CSS mask from `logo` */
  logoMaskWhite?: boolean;
  /** Optional: only colored logo parts on transparent – white on hover via CSS mask */
  logoAccent?: string;
  /** White lines under logo (Physiotherapie-style footer) */
  coverTagline?: {
    primary: string;
    secondary?: string;
    /** Black logo + text (bright cover, no gradient) */
    dark?: boolean;
    font?: "physio" | "tattoo";
  };
  /** White logo on black PNG (screen blend) */
  logoBlendScreen?: boolean;
  /** Taller wordmark (e.g. REIN with tagline in PNG) */
  logoLarge?: boolean;
  /** Subtle dark gradient at bottom for readable footer */
  coverBottomGradient?: boolean;
  /** Hero screenshot (16:9) shown on hover */
  hoverPreview?: string;
  /** Always-visible industry label in a corner */
  industryTag?: {
    label: string;
    corner: "top-left" | "top-right";
  };
  image?: string;
};

const PROJECTS: PortfolioProject[] = [
  {
    title: "EnerStrom",
    category: "Web Design · Elektrotechnik",
    cover: "/images/portfolio/enerstrom-cover.png",
    logo: "/images/portfolio/enerstrom-logo.png",
    logoMaskWhite: true,
    hoverPreview: "/images/portfolio/enerstrom-hover.png",
    industryTag: { label: "Elektrotechnik", corner: "top-left" },
    layout: "cover",
    href: "https://www.enerstrom-hannover.de",
  },
  {
    title: "Physio Saglam",
    category: "Web Design · Physiotherapie",
    cover: "/images/portfolio/physio-cover.png",
    logo: "/images/portfolio/physio-logo.png",
    coverTagline: {
      primary: "Physiotherapie",
      secondary: "Hülya Saglam",
    },
    coverBottomGradient: true,
    logoMaskWhite: true,
    hoverPreview: "/images/portfolio/physio-hover.png",
    industryTag: { label: "Physiotherapie", corner: "top-right" },
    layout: "cover",
    href: "https://physio-saglam.vercel.app",
  },
  {
    title: "REIN Gebäudereinigung",
    category: "Web Design · Gebäudereinigung",
    cover: "/images/portfolio/cleaning-cover.jpg",
    logo: "/images/portfolio/cleaning-logo.png",
    logoBlendScreen: true,
    logoLarge: true,
    coverBottomGradient: true,
    hoverPreview: "/images/portfolio/cleaning-hover.png",
    industryTag: { label: "Gebäudereinigung", corner: "top-left" },
    layout: "cover",
    href: "https://www.rein-gebaeudeservice.de",
  },
  {
    title: "Noir Ink",
    category: "Web Design · Tattoo Studio",
    cover: "/images/portfolio/tattoo-cover.jpg",
    coverTagline: {
      primary: "Noir Ink",
      font: "tattoo",
    },
    coverBottomGradient: true,
    hoverPreview: "/images/portfolio/tattoo-hover.png",
    industryTag: { label: "Tattoo Studio", corner: "top-right" },
    layout: "cover",
    href: "https://tattoo-website-woad.vercel.app",
    isMockup: true,
  },
];

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9" />
    </svg>
  );
}

const cornerPosition = (corner: "top-left" | "top-right") =>
  corner === "top-left" ? "left-3 sm:left-3.5" : "right-3 sm:right-3.5";

/** Touch devices: highlight the card closest to viewport center while scrolling */
function useScrollCenteredCardIndex(cardCount: number) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const setCardRef = useCallback((index: number, el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (canHover) return;

    let raf = 0;

    const update = () => {
      const viewportCenter = window.innerHeight / 2;
      let bestIndex = -1;
      let bestDistance = Infinity;

      for (let i = 0; i < cardCount; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      }

      setActiveIndex(bestIndex >= 0 ? bestIndex : null);
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [cardCount]);

  return { activeIndex, setCardRef };
}

const cardHover =
  "hover:scale-[0.98] group-[.is-scroll-active]:scale-[0.98]" as const;

function CoverProjectCard({
  project,
  isScrollActive,
}: {
  project: PortfolioProject;
  isScrollActive?: boolean;
}) {
  const isExternal = project.href.startsWith("http");

  return (
    <div className="project-card-entrance h-full">
      <Link
        href={project.href}
        className={`project-card group relative block h-full overflow-hidden rounded-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${cardHover} ${
          isScrollActive ? "is-scroll-active" : ""
        }`}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <div className="relative aspect-[6/5] overflow-hidden bg-zinc-100">
        {/* Cover – blur on hover (Studio Namma style) */}
        <div className="absolute inset-0 transition-[filter,transform] duration-500 ease-out group-hover:blur-md group-hover:scale-[1.02] group-[.is-scroll-active]:blur-md group-[.is-scroll-active]:scale-[1.02]">
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {project.coverBottomGradient ? (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[42%] bg-gradient-to-t from-black/60 via-black/25 to-transparent sm:h-[38%]"
            aria-hidden
          />
        ) : null}

        {project.industryTag ? (
          <span
            className={`pointer-events-none absolute top-3 z-[25] flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 py-1 pl-2 pr-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm sm:top-3.5 sm:gap-2 sm:py-1.5 sm:pl-2.5 sm:pr-3 sm:text-[0.7rem] ${cornerPosition(
              project.industryTag.corner
            )}`}
          >
            <GlobeIcon className="h-3 w-3 shrink-0 opacity-90 sm:h-3.5 sm:w-3.5" />
            {project.industryTag.label}
          </span>
        ) : null}

        {project.isMockup ? (
          <span
            className={`pointer-events-none absolute top-10 z-[25] rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm sm:top-11 sm:text-[0.66rem] ${cornerPosition(
              project.industryTag?.corner ?? "top-left"
            )}`}
          >
            Mockup
          </span>
        ) : null}

        {/* Screen preview (16:9) on hover */}
        {project.hoverPreview ? (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-6">
            <div
              className="relative aspect-video w-[84%] max-h-[68%] overflow-hidden rounded-sm bg-zinc-950 shadow-2xl ring-1 ring-white/10
                scale-[0.82] opacity-0
                transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-100 group-hover:opacity-100
                group-[.is-scroll-active]:scale-100 group-[.is-scroll-active]:opacity-100"
              aria-hidden
            >
              <Image
                src={project.hoverPreview}
                alt=""
                fill
                sizes="(max-width: 640px) 85vw, 42vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        ) : null}

        {project.logo || project.coverTagline ? (
          <div
            className={`pointer-events-none absolute inset-x-0 z-30 px-4 ${
              project.logoLarge ? "bottom-3 sm:bottom-4" : "bottom-4 sm:bottom-5"
            } ${
              project.coverTagline && project.logo
                ? "flex flex-row items-center justify-center gap-3.5 sm:gap-4"
                : "flex flex-col items-center justify-center gap-2 sm:gap-2.5"
            }`}
          >
            {project.logo ? (
              <ProjectLogo
                title={project.title}
                logo={project.logo}
                logoMaskWhite={
                  project.logoMaskWhite === true &&
                  !project.coverTagline?.dark
                }
                logoMaskBlack={project.coverTagline?.dark === true}
                logoBlendScreen={project.logoBlendScreen}
                logoAccent={project.logoAccent}
                logoWhite={project.logoWhite}
                className={
                  project.coverTagline && project.logo
                    ? "relative h-[3.25rem] w-[3.25rem] shrink-0 scale-110 sm:h-14 sm:w-14 sm:scale-[1.12]"
                    : project.logoLarge
                      ? "relative h-[5.75rem] w-[14.5rem] sm:h-[7rem] sm:w-[17.5rem]"
                      : "relative h-14 w-52 sm:h-16 sm:w-60"
                }
              />
            ) : null}
            {project.coverTagline ? (
              <div
                className={`flex flex-col gap-0 ${
                  project.logo
                    ? "items-start text-left"
                    : "items-center text-center"
                } ${
                  project.coverTagline.font === "tattoo"
                    ? "font-tattoo"
                    : "font-physio"
                } ${
                  project.coverTagline.dark
                    ? "text-zinc-950"
                    : "text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]"
                }`}
                aria-hidden
              >
                <p
                  className={
                    project.coverTagline.font === "tattoo"
                      ? "text-[1.65rem] font-semibold leading-none tracking-[0.14em] sm:text-[2rem]"
                      : "text-[1.2rem] font-bold leading-[1.12] tracking-[-0.01em] sm:text-[1.45rem]"
                  }
                >
                  {project.coverTagline.primary}
                </p>
                {project.coverTagline.secondary ? (
                  <p
                    className={`text-[0.8rem] font-semibold leading-[1.12] tracking-[0.01em] sm:text-[0.9rem] ${
                      project.coverTagline.dark ? "text-zinc-900" : "text-white/90"
                    }`}
                  >
                    {project.coverTagline.secondary}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
        </div>
      </Link>
    </div>
  );
}

function ClassicProjectCard({
  project,
  isScrollActive,
}: {
  project: PortfolioProject;
  isScrollActive?: boolean;
}) {
  const isExternal = project.href.startsWith("http");

  return (
    <div className="project-card-entrance h-full">
      <Link
        href={project.href}
        className={`project-card group relative block h-full overflow-hidden rounded-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${cardHover} ${
          isScrollActive ? "is-scroll-active" : ""
        }`}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <div className="relative aspect-[6/5] overflow-hidden bg-zinc-100">
        <div className="absolute inset-0 transition-transform duration-[800ms] ease-out group-hover:scale-110 group-[.is-scroll-active]:scale-110">
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {project.image ? (
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105 group-[.is-scroll-active]:scale-105">
            <div className="relative h-[70%] w-[60%]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 60vw, 30vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        ) : null}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-[.is-scroll-active]:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-[.is-scroll-active]:translate-y-0 group-[.is-scroll-active]:opacity-100">
          <p className="text-xs font-medium uppercase tracking-widest text-white/60">
            {project.category}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
            {project.title}
          </h3>
        </div>

        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 opacity-0 scale-75 transition-all duration-400 group-hover:opacity-100 group-hover:scale-100 group-[.is-scroll-active]:opacity-100 group-[.is-scroll-active]:scale-100 sm:right-5 sm:top-5 sm:h-12 sm:w-12">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        </div>
      </Link>
    </div>
  );
}

const MARQUEE_COUNT = 14;

function ScrollMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const inner = innerRef.current;
    const centerWord = centerRef.current;
    if (!marquee || !inner || !centerWord) return;

    // Center the black word on screen
    const wordRect = centerWord.getBoundingClientRect();
    const innerRect = inner.getBoundingClientRect();
    const wordCenterRelative = wordRect.left - innerRect.left + wordRect.width / 2;
    const viewportCenter = window.innerWidth / 2;
    const offset = -(wordCenterRelative - viewportCenter);
    gsap.set(inner, { x: offset });

    const ctx = gsap.context(() => {
      gsap.to(inner, {
        x: offset - 200,
        ease: "none",
        scrollTrigger: {
          trigger: marquee,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });
    }, marquee);

    return () => ctx.revert();
  }, []);

  const centerIndex = 4;

  return (
    <div ref={marqueeRef} className="overflow-hidden py-4 md:py-6">
      <div ref={innerRef} className="flex w-max items-center gap-4 sm:gap-6">
        {Array.from({ length: MARQUEE_COUNT }).map((_, i) => {
          const isBlack = i === centerIndex;
          return (
            <span key={i} className="flex items-center gap-4 sm:gap-6">
              {i > 0 && (
                <span className="text-zinc-300 text-xl sm:text-2xl md:text-3xl" aria-hidden>
                  ✦
                </span>
              )}
              <span
                ref={isBlack ? centerRef : undefined}
                className={`font-display text-[clamp(2.5rem,11vw,8.5rem)] font-bold leading-none tracking-[-0.02em] sm:text-[clamp(3.25rem,9vw,7rem)] md:text-[clamp(4.5rem,8vw,8.5rem)] ${
                  isBlack ? "text-zinc-900" : "text-zinc-300"
                }`}
              >
                PORTFOLIO
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { activeIndex, setCardRef } = useScrollCenteredCardIndex(PROJECTS.length);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const cards = grid.querySelectorAll<HTMLElement>(".project-card-entrance");

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const isLeft = i % 2 === 0;
        const row = Math.floor(i / 2);
        const rowTrigger = cards[row * 2];

        gsap.set(card, {
          x: isLeft ? -120 : 120,
          rotate: isLeft ? -6 : 6,
          opacity: 0,
        });

        gsap.to(card, {
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rowTrigger,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: isLeft ? 0 : 0.08,
        });
      });

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative z-0 overflow-hidden rounded-t-[2rem] bg-white pt-24 sm:rounded-t-[3rem] sm:pt-28 md:pt-32"
      aria-label="Portfolio"
    >
      {/* Scroll-driven marquee */}
      <ScrollMarquee />

      {/* Project Grid */}
      <div className="mx-auto px-3 pt-4 sm:px-4 md:px-5 md:pt-6">
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 [&>*]:overflow-visible"
        >
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => setCardRef(i, el)}
              className="h-full"
            >
              {project.layout === "cover" ? (
                <CoverProjectCard
                  project={project}
                  isScrollActive={activeIndex === i}
                />
              ) : (
                <ClassicProjectCard
                  project={project}
                  isScrollActive={activeIndex === i}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <div ref={ctaRef} className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mt-12 mb-20 flex justify-center md:mt-16 md:mb-24">
          <Link
            href="/projekte"
            className="group/btn inline-flex items-center gap-3 rounded-full border border-zinc-900 bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-zinc-900"
          >
            Alle Projekte ansehen
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
