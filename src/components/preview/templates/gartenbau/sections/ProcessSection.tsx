"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { getGartenbauContent } from "../content";
import { previewPath } from "../navigation";
import { Container } from "../layout/Container";
import { Heading } from "../ui/Heading";
import { ScrollReveal } from "../ui/ScrollReveal";

const STEP_STAGGER = 0.12;
const DIVIDER_DURATION = 0.55;

type ProcessStepData = ReturnType<
  typeof getGartenbauContent
>["process"]["steps"][number];

function ProcessStep({
  step,
  index,
  isInView,
  prefersReducedMotion,
}: {
  step: ProcessStepData;
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean | null;
}) {
  const delay = prefersReducedMotion ? 0 : index * STEP_STAGGER;

  return (
    <div>
      {index > 0 && (
        <div aria-hidden className="h-px overflow-hidden bg-white/10">
          <motion.div
            className="h-full w-full origin-left bg-action/70"
            initial={{ scaleX: prefersReducedMotion ? 1 : 0 }}
            animate={
              isInView
                ? { scaleX: 1 }
                : { scaleX: prefersReducedMotion ? 1 : 0 }
            }
            transition={{
              duration: prefersReducedMotion ? 0 : DIVIDER_DURATION,
              delay: prefersReducedMotion ? 0 : delay,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </div>
      )}

      <motion.article
        className={`group grid grid-cols-[1fr_auto] items-center gap-x-6 sm:gap-x-8 ${
          index === 0 ? "pb-6 pt-0 lg:pb-7" : "py-6 lg:py-7"
        }`}
        initial={{
          opacity: prefersReducedMotion ? 1 : 0,
          y: prefersReducedMotion ? 0 : 18,
        }}
        animate={
          isInView
            ? { opacity: 1, y: 0 }
            : {
                opacity: prefersReducedMotion ? 1 : 0,
                y: prefersReducedMotion ? 0 : 18,
              }
        }
        transition={{
          duration: prefersReducedMotion ? 0 : 0.5,
          delay,
          ease: "easeOut",
        }}
      >
        <div className="min-w-0">
          <h3 className="heading text-base text-white sm:text-lg">{step.title}</h3>
          <p className="mt-2.5 max-w-lg font-body text-sm leading-relaxed text-white/60 sm:text-base">
            {step.description}
          </p>
        </div>

        <span
          aria-hidden
          className="shrink-0 select-none font-heading text-[4.5rem] font-bold leading-none text-white/[0.08] transition-colors duration-200 ease-out group-hover:text-white/[0.12] sm:text-[5.5rem] lg:text-[6rem]"
        >
          {step.number}
        </span>
      </motion.article>
    </div>
  );
}

type ProcessSectionProps = {
  slug: string;
};

export function ProcessSection({ slug }: ProcessSectionProps) {
  const process = getGartenbauContent(slug).process;
  const stepsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepsRef, { once: true, margin: "-8% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-forest py-20 text-white lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:pt-0 lg:self-start">
            <ScrollReveal>
              <Heading
                as="h2"
                className="text-4xl text-white sm:text-5xl lg:text-5xl"
              >
                So arbeiten wir
              </Heading>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="mt-5 max-w-md font-body text-base leading-relaxed text-white/70 sm:text-lg">
                {process.intro}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <Link
                href={previewPath(slug, "contact")}
                className="mt-10 inline-flex items-center gap-3 font-heading text-sm font-semibold uppercase tracking-wide text-action transition-colors duration-200 hover:text-white sm:text-base"
              >
                <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
                {process.ctaLabel}
              </Link>
            </ScrollReveal>
          </div>

          <div ref={stepsRef} className="min-w-0">
            {process.steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                isInView={isInView}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
