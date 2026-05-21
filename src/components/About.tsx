"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
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

      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      gsap.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
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
      id="about"
      className="relative z-10 flex min-h-[28rem] min-h-viewport flex-col pb-12 sm:pb-16 md:pb-20 lg:pb-24"
      aria-labelledby="about-heading"
    >
      <div className="relative mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col gap-6 px-6 pb-8 pt-24 sm:gap-8 md:flex-row md:items-center md:gap-14 md:px-8 md:pb-0 md:pt-24 lg:gap-16">
        <div className="relative z-20 flex min-h-0 flex-1 flex-col justify-center pb-10 sm:pb-12 md:pb-0">
          <h2
            ref={headingRef}
            id="about-heading"
            className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Über mich.
          </h2>
          <div ref={textRef} className="mt-6 max-w-lg space-y-4 text-zinc-400 leading-relaxed md:text-lg lg:mt-8">
            <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Hi, ich bin Hamid Sham.
            </p>
            <p>
              Webdesigner aus Hannover. Ich helfe Unternehmen dabei, online{" "}
              <span className="font-semibold text-zinc-200">professionell wahrgenommen</span>{" "}
              zu werden – mit Websites, die{" "}
              <span className="font-semibold text-zinc-200">Vertrauen</span>{" "}
              schaffen und Besucher zu{" "}
              <span className="font-semibold text-zinc-200">Kunden</span> machen.
            </p>
            <p>
              Modern, schnell, mobiloptimiert – gemeinsam entwickeln wir Ihren digitalen Auftritt.
            </p>
          </div>
        </div>

        <div
          ref={imageRef}
          className="relative z-[1] flex shrink-0 justify-center md:mt-0 md:justify-end"
        >
          <div className="relative h-[min(42vh,280px)] w-[min(34vh,224px)] shrink-0 overflow-hidden rounded-lg bg-white/5 shadow-2xl ring-1 ring-white/20 sm:h-[min(48vh,320px)] sm:w-[min(38vh,256px)] md:mb-0 md:h-[min(58vh,420px)] md:w-[min(46vh,336px)]">
            <Image
              src="/images/about-img.png"
              alt="Porträt von Hamid Sham"
              fill
              sizes="(max-width: 768px) 40vh, 336px"
              className="object-cover object-top"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
