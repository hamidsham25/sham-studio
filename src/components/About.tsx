"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const aboutTypewriterWords = [
  "Webdesigner",
  "Entwickler",
  "kreativ",
  "Ideenfinder",
  "Ihr Partner",
];

function AboutTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = aboutTypewriterWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % aboutTypewriterWords.length);
    } else {
      const speed = isDeleting ? 45 : 85;
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="font-medium text-cyan-400">
      {text}
      <span
        className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[2px] animate-pulse bg-cyan-400"
        aria-hidden
      />
    </span>
  );
}

export default function About() {
  const name = "Sham";

  return (
    <section
      id="about"
      className="relative flex h-screen h-[100dvh] flex-col overflow-hidden snap-start"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col px-6 pt-16 md:flex-row md:items-center md:gap-14 md:px-8 md:pt-24 lg:gap-16">
        {/* Links: Große Headlines + ein Satz (wie Referenzen) */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Über mich.
          </h2>
          <p className="mt-4 font-display text-2xl font-semibold text-white sm:mt-6 sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Hi, ich bin {name}.
          </p>
          <p className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Ich bin <AboutTypewriter />
          </p>
          <p className="mt-6 max-w-lg text-zinc-400 leading-relaxed md:text-lg lg:mt-8">
            Websites, die wirken – von der Idee bis zum Launch. Mit Fokus auf
            klare Strukturen und durchdachte Nutzerführung begleite ich Sie von
            der ersten Idee bis zum Go-Live.
          </p>
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
          >
            Projekt besprechen
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Rechts: Porträt mit dezentem Rahmen (wie Referenz 1) */}
        <motion.div
          className="mt-10 flex shrink-0 justify-center md:mt-0 md:justify-end"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative h-[min(50vh,360px)] w-[min(40vh,288px)] shrink-0 overflow-hidden rounded-lg bg-white/5 shadow-2xl ring-1 ring-white/20 md:h-[min(58vh,420px)] md:w-[min(46vh,336px)]">
            <Image
              src="/images/about-img.png"
              alt="Porträt – Sham Studio"
              fill
              sizes="(max-width: 768px) 40vh, 336px"
              className="object-cover object-top"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
