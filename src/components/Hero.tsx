"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";

// Each dust particle has unique physics and visual properties
const dustParticles = [
  // --- Cyan family – stretched, organic, wispy shapes ---
  { w: 340, h: 200, offsetX: 0, offsetY: 0, stiffness: 90, damping: 18, mass: 0.8, blur: 60, color: "rgba(34,211,238,0.16)", radius: "20% 80% 65% 35% / 70% 25% 75% 30%", gradientPos: "25% 30%", opacity: 1 },
  { w: 220, h: 130, offsetX: 45, offsetY: -55, stiffness: 55, damping: 22, mass: 1.4, blur: 50, color: "rgba(34,211,238,0.12)", radius: "75% 25% 30% 70% / 25% 75% 20% 80%", gradientPos: "65% 35%", opacity: 0.85 },
  { w: 150, h: 90, offsetX: -65, offsetY: 35, stiffness: 40, damping: 20, mass: 2.0, blur: 45, color: "rgba(34,211,238,0.10)", radius: "35% 65% 80% 20% / 55% 45% 30% 70%", gradientPos: "40% 60%", opacity: 0.75 },
  { w: 500, h: 300, offsetX: 15, offsetY: 25, stiffness: 25, damping: 24, mass: 3.0, blur: 90, color: "rgba(34,211,238,0.07)", radius: "60% 40% 25% 75% / 35% 65% 55% 45%", gradientPos: "50% 40%", opacity: 0.6 },
  // --- Purple accent – elongated wisps ---
  { w: 200, h: 100, offsetX: 75, offsetY: 45, stiffness: 35, damping: 16, mass: 1.8, blur: 55, color: "rgba(168,85,247,0.10)", radius: "25% 75% 70% 30% / 65% 35% 20% 80%", gradientPos: "35% 65%", opacity: 0.8 },
  { w: 130, h: 70, offsetX: -85, offsetY: -65, stiffness: 28, damping: 14, mass: 2.5, blur: 40, color: "rgba(168,85,247,0.08)", radius: "80% 20% 35% 65% / 30% 70% 60% 40%", gradientPos: "60% 30%", opacity: 0.7 },
  // --- Small scatter wisps ---
  { w: 90, h: 45, offsetX: -35, offsetY: -85, stiffness: 70, damping: 12, mass: 0.6, blur: 30, color: "rgba(34,211,238,0.14)", radius: "30% 70% 75% 25% / 60% 40% 35% 65%", gradientPos: "50% 45%", opacity: 0.9 },
  { w: 65, h: 35, offsetX: 95, offsetY: -35, stiffness: 100, damping: 14, mass: 0.5, blur: 25, color: "rgba(6,182,212,0.12)", radius: "70% 30% 25% 75% / 40% 60% 70% 30%", gradientPos: "40% 55%", opacity: 0.85 },
];

function DustParticle({
  particle,
  mouseX,
  mouseY,
  isActive,
  containerSize,
}: {
  particle: (typeof dustParticles)[0];
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  isActive: boolean;
  containerSize: { width: number; height: number };
}) {
  const margin = 40;
  const minX = margin;
  const maxX = containerSize.width - margin;
  const minY = margin;
  const maxY = containerSize.height - margin;

  // Clamp the TARGET position (before spring) so particles converge at edges
  const clampedX = useTransform(mouseX, (v) =>
    Math.max(minX, Math.min(maxX, v + particle.offsetX))
  );
  const clampedY = useTransform(mouseY, (v) =>
    Math.max(minY, Math.min(maxY, v + particle.offsetY))
  );

  const x = useSpring(clampedX, {
    stiffness: particle.stiffness,
    damping: particle.damping,
    mass: particle.mass,
  });
  const y = useSpring(clampedY, {
    stiffness: particle.stiffness,
    damping: particle.damping,
    mass: particle.mass,
  });

  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        width: particle.w,
        height: particle.h,
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        borderRadius: particle.radius,
        background: `radial-gradient(ellipse at ${particle.gradientPos}, ${particle.color} 0%, transparent 70%)`,
        filter: `blur(${particle.blur}px)`,
      }}
      animate={{ opacity: isActive ? particle.opacity : 0 }}
      transition={{ opacity: { duration: isActive ? 0.4 : 1.4, ease: "easeInOut" } }}
    />
  );
}

function PaintCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 1200, height: 800 });
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const startIdleTimer = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      setIsActive(false);
    }, 2000);
  }, []);

  // Measure container size
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      setContainerSize({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };
    updateSize();

    const ro = new ResizeObserver(updateSize);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      setIsActive(true);
      startIdleTimer();
    };

    const handleLeave = () => {
      setIsActive(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const rect = container.getBoundingClientRect();
      mouseX.set(e.touches[0].clientX - rect.left);
      mouseY.set(e.touches[0].clientY - rect.top);
      setIsActive(true);
      startIdleTimer();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const rect = container.getBoundingClientRect();
      mouseX.set(e.touches[0].clientX - rect.left);
      mouseY.set(e.touches[0].clientY - rect.top);
      setIsActive(true);
      startIdleTimer();
    };

    const handleTouchEnd = () => {
      setIsActive(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleLeave);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [mouseX, mouseY, startIdleTimer]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {dustParticles.map((particle, i) => (
        <DustParticle
          key={i}
          particle={particle}
          mouseX={mouseX}
          mouseY={mouseY}
          isActive={isActive}
          containerSize={containerSize}
        />
      ))}
    </div>
  );
}

const typewriterWords = ["innovativ", "modern", "einzigartig", "schnell", "kreativ"];

function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typewriterWords.length);
    } else {
      const speed = isDeleting ? 60 : 100;
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
    <motion.h2
      className="mt-4 text-2xl font-medium text-cyan-400 sm:text-3xl md:text-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {text}
      <span className="inline-block w-[3px] translate-y-[2px] animate-pulse bg-cyan-400 ml-0.5"
        style={{ height: "1em" }}
      />
    </motion.h2>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <Link
        href="#services"
        className="flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-300"
        aria-label="Nach unten scrollen"
      >
        <span className="text-xs uppercase tracking-[0.15em]">Scroll</span>
        <motion.svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6"
      aria-label="Willkommen"
    >
      <PaintCloud />

      <motion.div
        className="relative z-10 mx-auto -mt-24 max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Webdesign & Entwicklung
        </motion.p>
        <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Sham Studio
        </h1>
        <Typewriter />
        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 md:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Websites, die wirken. Von der Idee bis zum Launch – klar, schnell und
          auf den Punkt.
        </motion.p>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
