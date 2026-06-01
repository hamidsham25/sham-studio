"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfoCard from "@/components/ContactInfoCard";
import SplitPageHero, { type SplitHeroLine } from "@/components/SplitPageHero";
import { ContactModalProvider } from "@/components/ContactModalContext";
import { markLoadingScreenSeen } from "@/lib/loading-screen";

type ContactPageLayoutProps = {
  pageId: string;
  heroId: string;
  heroAriaLabel: string;
  heroLines: SplitHeroLine[];
  heroLead: string;
  cardText: string;
  formSource: string;
  defaultSubject?: string;
  heroClassName?: string;
};

export default function ContactPageLayout({
  pageId,
  heroId,
  heroAriaLabel,
  heroLines,
  heroLead,
  cardText,
  formSource,
  defaultSubject,
  heroClassName = "bg-white",
}: ContactPageLayoutProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const formWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    markLoadingScreenSeen();
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    const formWrap = formWrapRef.current;
    if (!card || !formWrap) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [card, formWrap],
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.55,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-white text-zinc-900">
        <Header />
        <main id={pageId}>
          <SplitPageHero
            id={heroId}
            ariaLabel={heroAriaLabel}
            lines={heroLines}
            lead={heroLead}
            className={heroClassName}
          />

          <div className="relative z-0 bg-white">
            <div className="mx-auto max-w-6xl px-6 pb-20 md:px-8 md:pb-28 lg:px-10">
              <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                <div ref={cardRef} className="max-w-md opacity-0">
                  <ContactInfoCard>{cardText}</ContactInfoCard>
                </div>

                <div
                  ref={formWrapRef}
                  className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-6 opacity-0 sm:p-8 lg:sticky lg:top-28"
                >
                  <ContactForm
                    source={formSource}
                    variant="light"
                    defaultSubject={defaultSubject}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ContactModalProvider>
  );
}
