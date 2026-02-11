"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const MARQUEE_REPEAT = 12;

function MarqueeStrip() {
  return (
    <div className="flex shrink-0 items-center gap-20 whitespace-nowrap">
      {Array.from({ length: MARQUEE_REPEAT }).map((_, i) => (
        <span
          key={i}
          className="font-display text-5xl font-bold tracking-tighter text-[#0a0a0a] sm:text-6xl md:text-7xl"
        >
          PORTFOLIO
        </span>
      ))}
    </div>
  );
}

function CardFace({
  title,
  tags,
}: {
  title: string;
  tags: string[];
}) {
  return (
    <article className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0a0a0a] shadow-xl">
      <div className="px-4 pt-4 pb-2 sm:px-5 sm:pt-5 sm:pb-3">
        <div className="aspect-[4/3] w-full rounded-lg border border-zinc-600/80 bg-zinc-800" />
      </div>
      <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 sm:pt-2">
        <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
          {title}
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2 sm:gap-3">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300 sm:text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

const CARDS = [
  { title: "Projekt Eins", tags: ["Design", "UI/UX", "Branding"] },
  { title: "Projekt Zwei", tags: ["Web", "Motion", "Konzept"] },
  { title: "Projekt Drei", tags: ["App", "Design", "Development"] },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Nur rotateX – keine Schräge. Zwei Flip-Ebenen: 1→2, dann 2→3.
  // Mehr Scroll-Raum (500vh), damit Flip 2 zu Projekt 3 genug Platz hat.

  // Flip 1: Puffer → Drehung 0→-180 → Puffer (Karte 2)
  const flip1Rotate = useTransform(
    scrollYProgress,
    [0, 0.08, 0.28, 0.38, 0.42, 1],
    [0, 0, -180, -180, -180, -180]
  );
  const flip1RotateSmooth = useSpring(flip1Rotate, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });
  const flip1RotateX = useTransform(flip1RotateSmooth, (v) => `${v}deg`);

  // Flip 2: Ab 0.42 sichtbar (Karte 2), dann volle Drehung -180→-360 wie bei Flip 1 (ca. 20 % Scroll)
  const flip2Rotate = useTransform(
    scrollYProgress,
    [0, 0.42, 0.45, 0.65, 0.75, 1],
    [-180, -180, -360, -360, -360, -360]
  );
  const flip2RotateSmooth = useSpring(flip2Rotate, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });
  const flip2RotateX = useTransform(flip2RotateSmooth, (v) => `${v}deg`);

  // Harter Wechsel bei 0.42 (kein Fade): Beide Ebenen zeigen dort Karte 2 → nur die Flip-Drehung ist sichtbar, wie bei 1→2
  const flip1Opacity = useTransform(scrollYProgress, [0, 0.419, 0.421, 1], [1, 1, 0, 0]);
  const flip2Opacity = useTransform(scrollYProgress, [0, 0.419, 0.421, 1], [0, 0, 1, 1]);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: "500vh" }}
      aria-hidden
    >
      <section
        id="portfolio"
        className="sticky top-0 left-0 right-0 flex min-h-screen overflow-hidden rounded-t-[2rem] bg-white px-6 pb-16 sm:rounded-t-[3rem] sm:px-8"
        aria-label="Portfolio"
      >
        <div className="relative flex min-h-screen w-full items-center justify-center">
          {/* Marquee */}
          <div
            className="absolute inset-y-0 left-[-1.5rem] right-[-1.5rem] flex items-center overflow-hidden sm:left-[-2rem] sm:right-[-2rem]"
            aria-hidden
          >
            <div className="flex w-max animate-portfolio-marquee items-center gap-20">
              <MarqueeStrip />
              <MarqueeStrip />
            </div>
          </div>

          {/* Zwei Flip-Ebenen: 1→2, 2→3, nur rotateX (gerade), mit Puffer nach jeder Karte */}
          <div
            className="relative z-10 w-full max-w-2xl"
            style={{ perspective: "1600px" }}
          >
            {/* Flip 1: Karte 1 (vorn) ↔ Karte 2 (Rückseite) */}
            <motion.div
              className="absolute inset-0 w-full"
              style={{
                opacity: flip1Opacity,
                rotateX: flip1RotateX,
                transformOrigin: "center center",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(0deg)",
                }}
              >
                <CardFace title={CARDS[0].title} tags={CARDS[0].tags} />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                <CardFace title={CARDS[1].title} tags={CARDS[1].tags} />
              </div>
            </motion.div>

            {/* Flip 2: bei -180° 180°-Face = Karte 2, bei -360° 0°-Face = Karte 3 */}
            <motion.div
              className="absolute inset-0 w-full"
              style={{
                opacity: flip2Opacity,
                rotateX: flip2RotateX,
                transformOrigin: "center center",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(0deg)",
                }}
              >
                <CardFace title={CARDS[2].title} tags={CARDS[2].tags} />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                <CardFace title={CARDS[1].title} tags={CARDS[1].tags} />
              </div>
            </motion.div>

            <div className="pointer-events-none invisible">
              <CardFace title={CARDS[0].title} tags={CARDS[0].tags} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
