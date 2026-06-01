"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactModalProvider } from "@/components/ContactModalContext";
import { markLoadingScreenSeen } from "@/lib/loading-screen";
import {
  PORTFOLIO_PROJECTS,
  type ProjectListItem,
} from "@/lib/portfolio-projects";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({
  project,
  index,
}: {
  project: ProjectListItem;
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const isExternal = project.href.startsWith("http");

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          delay: (index % 2) * 0.1,
        }
      );
    }, card);

    return () => ctx.revert();
  }, [index]);

  const tags = project.isMockup
    ? [...project.tags, "Mockup"]
    : project.tags;

  return (
    <article ref={cardRef} id={project.id} className="opacity-0 scroll-mt-28">
      <Link
        href={project.href}
        className="group block"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100 ring-1 ring-zinc-200/70 transition-transform duration-500 ease-out group-hover:scale-[0.995]">
          <Image
            src={project.preview}
            alt={`${project.title}, Website-Vorschau`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-cyan-700 sm:text-3xl">
          {project.title}
        </h2>
      </Link>
    </article>
  );
}

export default function ProjektePage() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const projectCount = PORTFOLIO_PROJECTS.length;

  useEffect(() => {
    markLoadingScreenSeen();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const line = lineRef.current;
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

      if (line) {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power3.inOut",
            delay: 0.45,
            transformOrigin: "left center",
          }
        );
      }
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
            className="relative overflow-x-clip bg-white px-6 pb-6 pt-28 sm:px-8 sm:pt-32 md:px-10"
            aria-label="Alle Projekte"
          >
            <div className="mx-auto max-w-6xl">
              <h1
                ref={titleRef}
                className="font-display font-bold uppercase leading-[0.95] tracking-[-0.02em] text-zinc-900"
              >
                <span className="split-line block text-[clamp(1.75rem,4.5vw,2.75rem)]">
                  <span className="projekte-line-inner inline-block">Alle</span>
                </span>
                <span className="split-line block text-[clamp(1.75rem,4.5vw,2.75rem)]">
                  <span className="projekte-line-inner inline-block">
                    Projekte
                    <span
                      className="ml-[0.1em] inline-block h-[0.2em] w-[0.2em] translate-y-[-0.05em] rounded-full bg-cyan-500 align-middle"
                      aria-hidden
                    />
                  </span>
                </span>
              </h1>

              <div
                ref={lineRef}
                className="mt-8 h-px w-full origin-left bg-zinc-200"
                aria-hidden
              />
            </div>
          </section>

          <section id="projekte-list" className="relative z-0 bg-white">
            <div className="mx-auto max-w-6xl px-6 pb-20 md:px-8 md:pb-28 lg:px-10">
              <p className="mb-10 text-sm font-medium text-zinc-900">
                Alle{" "}
                <span className="font-normal text-zinc-400">
                  [{projectCount}]
                </span>
              </p>

              <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:gap-y-16 md:grid-cols-2">
                {PORTFOLIO_PROJECTS.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>

              <div className="mt-20 flex justify-center md:mt-24">
                <Link
                  href="/anfragen"
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
        <Footer />
      </div>
    </ContactModalProvider>
  );
}
