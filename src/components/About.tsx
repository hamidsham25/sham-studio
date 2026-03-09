"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";

const aboutTypewriterWords = [
  "Hamid",
  "Webdesigner",
  "Entwickler",
  "Ihr Partner",
  "kreativ",
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
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-[28rem] min-h-viewport flex-col pb-12 sm:pb-16 md:pb-20 lg:pb-24"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col gap-6 px-6 pb-8 pt-24 sm:gap-8 md:flex-row md:items-center md:gap-14 md:px-8 md:pb-0 md:pt-24 lg:gap-16">
        {/* Links: Headlines + Text */}
        <motion.div
          className="relative z-20 flex min-h-0 flex-1 flex-col justify-center pb-10 sm:pb-12 md:pb-0"
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
            Hi, ich bin <AboutTypewriter />
          </p>
          <div className="mt-6 max-w-lg space-y-4 text-zinc-400 leading-relaxed md:text-lg lg:mt-8">
          <p>
            Ich bin Hamid Sham, Webdesigner, und helfe Unternehmen in
            Deutschland dabei, online{" "}
            <span className="font-semibold text-inherit">professionell wahrgenommen</span>{" "}
            zu werden. Dabei unterstütze ich vor allem{" "}
            <span className="font-semibold text-inherit">Selbstständige, kleine
            Unternehmen und den Mittelstand</span>, die einen{" "}
            <span className="font-semibold text-inherit">starken Online-Auftritt</span>{" "}
            aufbauen möchten.
          </p>
          <p>
            Ich entwickle{" "}
            <span className="font-semibold text-inherit">moderne, schnelle und mobiloptimierte Websites</span>, die{" "}
            <span className="font-semibold text-inherit">Vertrauen</span>{" "}
            schaffen und Besucher zu{" "}
            <span className="font-semibold text-inherit">echten Kunden</span>{" "}
            machen. Es geht mir um mehr als eine
            Website – um einen digitalen Auftritt, der zeigt, wofür Ihr
            Unternehmen steht und der dafür sorgt, dass Besucher sich angesprochen
            fühlen und <span className="font-semibold text-inherit">den ersten Kontakt aufnehmen</span>.
          </p>
          <p>
            Gemeinsam entwickeln wir eine Website, die{" "}
            <span className="font-semibold text-inherit">modern, verständlich und
            vertrauenswürdig</span> ist.
          </p>
          </div>
        </motion.div>

        {/* Rechts: Porträt – auf Mobile unter dem Text */}
        <motion.div
          className="relative z-[1] flex shrink-0 justify-center md:mt-0 md:justify-end"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
        </motion.div>
      </div>
    </section>
  );
}
