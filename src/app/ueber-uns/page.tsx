"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplitPageHero from "@/components/SplitPageHero";
import StatCard from "@/components/StatCard";
import { ContactModalProvider } from "@/components/ContactModalContext";
import { markLoadingScreenSeen } from "@/lib/loading-screen";
import {
  ABOUT_STAT_CARDS,
  MANIFEST_HEADLINE,
  MANIFEST_LABEL,
  WHY_SHAM_STUDIO,
} from "@/lib/about-content";
import { AUTHOR, CONTACT } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function UeberUnsPage() {
  const whyRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    markLoadingScreenSeen();
  }, []);

  useEffect(() => {
    const why = whyRef.current;
    if (!why) return;

    const ctx = gsap.context(() => {
      const heading = why.querySelector<HTMLElement>("[data-why-heading]");
      const items = why.querySelectorAll<HTMLElement>("[data-why-item]");

      gsap.fromTo(
        heading,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: why,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        items,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: why,
            start: "top 78%",
            toggleActions: "play none none none",
          },
          delay: 0.1,
        }
      );
    }, why);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = aboutMeRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.children,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-zinc-50 text-zinc-900">
        <Header />
        <main id="ueber-uns-page">
          <SplitPageHero
            id="ueber-uns-hero"
            ariaLabel="Über uns"
            label={MANIFEST_LABEL}
            lines={[
              { text: "Über" },
              { text: "uns", showDot: true },
            ]}
            lead={MANIFEST_HEADLINE}
            className="bg-zinc-50"
          />

          <section
            className="bg-zinc-50 px-6 pb-20 pt-4 md:px-8 md:pb-24 lg:px-10"
            aria-label="Zahlen und Fakten"
          >
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:grid-rows-[auto_auto_1fr] md:gap-6">
                {ABOUT_STAT_CARDS.map((card, i) => (
                  <StatCard key={card.id} card={card} index={i} />
                ))}
              </div>
            </div>
          </section>

          <section
            ref={whyRef}
            className="border-t border-zinc-200/80 bg-white px-6 py-20 md:px-8 md:py-24 lg:px-10"
            aria-labelledby="why-heading"
          >
            <div className="mx-auto max-w-6xl">
              <h2
                id="why-heading"
                data-why-heading
                className="max-w-2xl font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
              >
                Warum Sham Studio?
              </h2>
              <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-14">
                {WHY_SHAM_STUDIO.map((item) => (
                  <div key={item.title} data-why-item>
                    <h3 className="font-display text-xl font-bold text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-zinc-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            ref={aboutMeRef}
            className="border-t border-zinc-200/80 bg-zinc-50 px-6 py-20 md:px-8 md:py-24 lg:px-10"
            aria-labelledby="about-me-heading"
          >
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 font-display text-2xl font-bold text-white sm:h-24 sm:w-24 sm:text-3xl"
                  aria-hidden
                >
                  H
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Über mich
                  </p>
                  <h2
                    id="about-me-heading"
                    className="mt-3 font-display text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
                  >
                    {AUTHOR.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-cyan-700">
                    {AUTHOR.jobTitle}
                  </p>
                  <p className="mt-5 max-w-2xl leading-relaxed text-zinc-600">
                    {AUTHOR.bio}
                  </p>
                  <p className="mt-4 text-sm text-zinc-500">
                    {CONTACT.businessName} · {CONTACT.city} bei Hannover
                  </p>
                  <Link
                    href="/anfragen"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                  >
                    Projekt anfragen
                    <svg
                      className="h-4 w-4"
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
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ContactModalProvider>
  );
}
