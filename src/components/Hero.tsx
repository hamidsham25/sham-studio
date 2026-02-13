"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useEffect, useState, useCallback } from "react";

// Stiffness höher, Mass niedriger → Wolke folgt schneller, bei rascher Bewegung keine „mehreren Objekte“
const dustParticles = [
  // --- Cyan – große, organische Formen ---
  { w: 380, h: 180, offsetX: 0, offsetY: 0, stiffness: 180, damping: 24, mass: 0.4, blur: 65, color: "rgba(34,211,238,0.22)", radius: "15% 85% 70% 30% / 80% 20% 60% 40%", gradientPos: "28% 35%", opacity: 1 },
  { w: 260, h: 160, offsetX: 50, offsetY: -50, stiffness: 140, damping: 26, mass: 0.5, blur: 55, color: "rgba(34,211,238,0.18)", radius: "80% 20% 25% 75% / 20% 80% 70% 30%", gradientPos: "60% 38%", opacity: 0.9 },
  { w: 180, h: 110, offsetX: -70, offsetY: 40, stiffness: 120, damping: 25, mass: 0.6, blur: 48, color: "rgba(34,211,238,0.15)", radius: "40% 60% 85% 15% / 50% 50% 25% 75%", gradientPos: "42% 58%", opacity: 0.85 },
  { w: 520, h: 280, offsetX: 20, offsetY: 30, stiffness: 80, damping: 28, mass: 0.9, blur: 95, color: "rgba(34,211,238,0.11)", radius: "65% 35% 20% 80% / 30% 70% 60% 40%", gradientPos: "48% 42%", opacity: 0.7 },
  { w: 140, h: 220, offsetX: -40, offsetY: -30, stiffness: 130, damping: 25, mass: 0.55, blur: 52, color: "rgba(6,182,212,0.17)", radius: "30% 70% 60% 40% / 75% 25% 35% 65%", gradientPos: "35% 55%", opacity: 0.88 },
  // --- Purple – längliche Wisps ---
  { w: 240, h: 95, offsetX: 80, offsetY: 50, stiffness: 110, damping: 24, mass: 0.65, blur: 58, color: "rgba(168,85,247,0.15)", radius: "20% 80% 75% 25% / 70% 30% 15% 85%", gradientPos: "38% 62%", opacity: 0.85 },
  { w: 160, h: 85, offsetX: -90, offsetY: -70, stiffness: 100, damping: 23, mass: 0.75, blur: 42, color: "rgba(168,85,247,0.12)", radius: "85% 15% 40% 60% / 25% 75% 55% 45%", gradientPos: "62% 28%", opacity: 0.78 },
  { w: 100, h: 200, offsetX: 60, offsetY: -40, stiffness: 105, damping: 24, mass: 0.7, blur: 45, color: "rgba(192,132,252,0.11)", radius: "55% 45% 80% 20% / 35% 65% 25% 75%", gradientPos: "45% 50%", opacity: 0.8 },
  // --- Kleine Streuer ---
  { w: 100, h: 55, offsetX: -38, offsetY: -88, stiffness: 200, damping: 22, mass: 0.3, blur: 32, color: "rgba(34,211,238,0.2)", radius: "25% 75% 80% 20% / 65% 35% 40% 60%", gradientPos: "52% 48%", opacity: 0.95 },
  { w: 75, h: 40, offsetX: 98, offsetY: -38, stiffness: 220, damping: 22, mass: 0.28, blur: 28, color: "rgba(6,182,212,0.18)", radius: "72% 28% 20% 80% / 38% 62% 68% 32%", gradientPos: "42% 58%", opacity: 0.9 },
  { w: 120, h: 70, offsetX: -100, offsetY: 55, stiffness: 160, damping: 24, mass: 0.45, blur: 38, color: "rgba(34,211,238,0.16)", radius: "10% 90% 90% 10% / 50% 50% 50% 50%", gradientPos: "48% 52%", opacity: 0.88 },
  { w: 85, h: 140, offsetX: 88, offsetY: 30, stiffness: 165, damping: 24, mass: 0.45, blur: 40, color: "rgba(168,85,247,0.13)", radius: "60% 40% 15% 85% / 70% 30% 60% 40%", gradientPos: "55% 45%", opacity: 0.82 },
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
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
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
      className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      aria-hidden
    >
      <span className="text-xs uppercase tracking-[0.15em] lg:hidden">Swipe</span>
      <span className="text-xs uppercase tracking-[0.15em] hidden lg:inline">Scroll</span>
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
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6"
      aria-label="Willkommen"
    >
      {/* Bildschicht mit Opacity – darunter, PaintCloud darüber */}
      <div
        className="hero-bg-image absolute inset-0 z-0 opacity-15"
        aria-hidden
      />
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
