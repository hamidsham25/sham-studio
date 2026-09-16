"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Dezentes Einblenden beim Scrollen (fade + leichtes translateY).
 * Respektiert prefers-reduced-motion.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: prefersReducedMotion ? 1 : 0,
        y: prefersReducedMotion ? 0 : 20,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }
      }
      transition={{
        duration: prefersReducedMotion ? 0 : 0.55,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
