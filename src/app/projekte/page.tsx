"use client";

import { Fragment, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import { PROJEKTE_FAQ } from "@/lib/faq-content";
import { ContactModalProvider } from "@/components/ContactModalContext";
import { markLoadingScreenSeen } from "@/lib/loading-screen";
import {
  PORTFOLIO_PROJECTS,
  type ProjectListItem,
} from "@/lib/portfolio-projects";

gsap.registerPlugin(ScrollTrigger);

function ProjectRow({
  project,
  index,
}: {
  project: ProjectListItem;
  index: number;
}) {
  const rowRef = useRef<HTMLElement>(null);
  const isExternal = project.href.startsWith("http");

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        row,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          delay: index * 0.08,
        }
      );
    }, row);

    return () => ctx.revert();
  }, [index]);

  const isReversed = index % 2 !== 0;

  return (
    <article ref={rowRef} id={project.id} className="opacity-0 scroll-mt-28">
      <Link
        href={project.href}
        className="group block"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <div
          className={`flex flex-col gap-8 lg:gap-12 ${
            isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200/80 transition-transform duration-500 ease-out group-hover:scale-[0.99] lg:w-3/5">
            <Image
              src={project.preview}
              alt={`${project.title}, Website-Vorschau`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top"
            />
          </div>

          <div className="flex flex-col justify-center lg:w-2/5">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
              {project.category}
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-cyan-700 sm:text-4xl">
              {project.title}
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-900">
              Website ansehen
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function ProjektePage() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    markLoadingScreenSeen();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    if (!hero || !title) return;

    const lines = title.querySelectorAll<HTMLElement>(".projekte-line-inner");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.15,
          ease: "power4.out",
          stagger: 0.14,
          delay: 0.2,
        }
      );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-white text-zinc-900">
        <Header />
        <main>
          <section
            ref={heroRef}
            id="projekte-hero"
            className="relative flex min-h-viewport items-center justify-center overflow-x-clip bg-white px-5 sm:px-8"
            aria-label="Alle Projekte"
          >
            <h1
              ref={titleRef}
              className="w-full max-w-[100vw] box-border text-center font-display font-extrabold uppercase leading-[0.88] tracking-[-0.03em] text-zinc-900"
            >
              <span className="split-line block text-[clamp(2.25rem,10.5vw,9rem)]">
                <span className="projekte-line-inner inline-block">
                  Alle
                  <span
                    className="ml-[0.12em] inline-block h-[0.18em] w-[0.18em] translate-y-[-0.06em] rounded-full bg-cyan-500 align-middle"
                    aria-hidden
                  />
                </span>
              </span>
              <span className="split-line block text-[clamp(2.25rem,10.5vw,9rem)]">
                <span className="projekte-line-inner inline-block">Projekte</span>
              </span>
            </h1>
          </section>

          <section id="projekte-list" className="relative z-0 bg-white">
            <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
              <p className="mb-14 max-w-xl text-lg text-zinc-600">
                Sham Studio hat Websites für Elektrotechnik, Physiotherapie,
                Reinigung, Tattoo, Autohandel und weitere Branchen umgesetzt – hier
                finden Sie alle Referenzen mit Live-Links.
              </p>

              <div className="space-y-20 md:space-y-28">
                {PORTFOLIO_PROJECTS.map((project, i) => (
                  <Fragment key={project.id}>
                    {i > 0 ? (
                      <div className="flex justify-center" aria-hidden>
                        <span className="block h-px w-32 bg-zinc-200/90 sm:w-44 md:w-52" />
                      </div>
                    ) : null}
                    <ProjectRow project={project} index={i} />
                  </Fragment>
                ))}
              </div>

              <div className="mt-20 flex justify-center md:mt-28">
                <Link
                  href="/#contact"
                  className="group/btn inline-flex items-center gap-3 rounded-full border border-zinc-900 bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-zinc-900"
                >
                  Projekt starten
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <FaqSection items={PROJEKTE_FAQ} variant="light" />
        <Footer />
      </div>
    </ContactModalProvider>
  );
}
