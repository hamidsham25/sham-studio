"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-10 flex min-h-[28rem] min-h-viewport flex-col section-padding rounded-b-3xl"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex max-w-2xl flex-1 flex-col justify-center px-6 md:px-8">
        <h2
          ref={headingRef}
          id="contact-heading"
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Kontakt
        </h2>
        <p className="mt-4 text-zinc-400 md:text-lg">
          Bereit für Ihr Projekt? Schreiben Sie mir, ich melde mich zeitnah.
        </p>
        <div
          ref={formRef}
          className="mt-10 rounded-2xl border border-zinc-700 bg-[#1a1a1a] px-6 py-8 sm:px-8"
        >
          <ContactForm source="Kontaktformular" />
        </div>
      </div>
    </section>
  );
}
