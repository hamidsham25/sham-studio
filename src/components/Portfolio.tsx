"use client";

import { useRef, useState, useEffect } from "react";
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
  image,
  overlayImage,
}: {
  title: string;
  tags: string[];
  image?: string;
  overlayImage?: string;
}) {
  return (
    <article className="relative h-full w-full min-h-0 overflow-hidden rounded-2xl bg-[#0a0a0a] shadow-xl flex flex-col">
      <div className="flex-shrink-0 px-4 pt-4 pb-2 sm:px-5 sm:pt-5 sm:pb-3">
        <motion.div
          className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-zinc-600/80 bg-zinc-800"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {image ? (
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null}
          {overlayImage ? (
            <img
              src={overlayImage}
              alt=""
              className="absolute inset-0 h-full w-full scale-105 object-contain object-center translate-y-1"
            />
          ) : null}
        </motion.div>
      </div>
      <div className="flex-shrink-0 px-5 pb-5 pt-1 sm:px-6 sm:pb-6 sm:pt-2 min-h-[5rem] sm:min-h-[5.5rem]">
        <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
          {title}
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2 sm:gap-3 overflow-visible">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-zinc-800 px-2.5 py-1.5 text-xs font-medium text-white sm:px-3 sm:text-sm"
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
  {
    title: "Sham Automobile",
    tags: ["CMS", "Individuelles Design", "Moderne Website"],
    image: "/images/card-background-1.webp",
    overlayImage: "/images/card-image-1.webp",
  },
  {
    title: "Handwerker-Website",
    tags: ["Responsive", "Professionelles Design", "Übersichtliche Struktur"],
    image: "/images/card-background-2.webp",
    overlayImage: "/images/card-image-2.webp",
  },
  {
    title: "Beauty-Page",
    tags: ["Moderne Optik", "Responsive", "Klare Struktur"],
    image: "/images/card-background-3.webp",
    overlayImage: "/images/card-image-3.webp",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const set = () => setIsMobile(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  // Keyframes: Desktop = eng, Mobile = minimaler Puffer an Übergängen 1↔2 und 2↔3
  const scrollInput = isMobile
    ? [0, 0.14, 0.25, 0.36, 0.44, 0.50, 0.52, 0.60, 0.70, 0.82, 1]
    : [0, 0.12, 0.22, 0.32, 0.42, 0.46, 0.49, 0.56, 0.66, 0.80, 1];
  const rotateOutput = [0, 0, -90, -180, -180, -180, -180, -270, -360, -360, -360];

  // Eine Ebene, Drehung 0° → -360°. Scroll → geglätteter Winkel (Spring) → Anzeige + Content-Wechsel.
  const rotateDeg = useTransform(scrollYProgress, scrollInput, rotateOutput);
  const rotateSmooth = useSpring(rotateDeg, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });
  const rotateX = useTransform(rotateSmooth, (v) => `${v}deg`);

  // Wechsel von derselben geglätteten Position wie die Anzeige → nur bei echter Kantenstellung
  const frontCard1 = useTransform(rotateSmooth, (angle) => (angle > -90 ? 1 : 0));
  const frontCard2 = useTransform(rotateSmooth, (angle) => (angle <= -90 && angle > -270 ? 1 : 0));
  const frontCard3 = useTransform(rotateSmooth, (angle) => (angle <= -270 ? 1 : 0));
  const backCard2 = useTransform(rotateSmooth, (angle) => (angle > -270 ? 1 : 0));
  const backCard3 = useTransform(rotateSmooth, (angle) => (angle <= -270 ? 1 : 0));

  // Nur die sichtbare Karte soll Hover erhalten (sonst fängt immer Projekt 3 ab, da oben im Stack)
  const pointerEvents1 = useTransform(frontCard1, (v) => (v > 0.5 ? "auto" : "none"));
  const pointerEvents2 = useTransform(frontCard2, (v) => (v > 0.5 ? "auto" : "none"));
  const pointerEvents3 = useTransform(frontCard3, (v) => (v > 0.5 ? "auto" : "none"));
  const backPointer2 = useTransform(backCard2, (v) => (v > 0.5 ? "auto" : "none"));
  const backPointer3 = useTransform(backCard3, (v) => (v > 0.5 ? "auto" : "none"));

  return (
    <div
      ref={sectionRef}
      className="relative h-[500vh] max-md:h-[360vh]"
      aria-hidden
    >
      <section
        id="portfolio"
        className="sticky top-0 left-0 right-0 flex min-h-screen flex-col overflow-hidden rounded-t-[2rem] bg-white px-6 pb-16 sm:rounded-t-[3rem] sm:px-8"
        aria-label="Portfolio"
      >
        {/* Karte exakt mittig; Mobile: Banner darüber, Tablet/Desktop: Banner in der Mitte */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
          {/* PORTFOLIO-Banner Tablet/PC: mittig im Viewport (in der Mitte der Cards) */}
          <div
            className="absolute left-0 right-0 top-1/2 z-0 hidden -translate-y-1/2 overflow-hidden py-2 md:-mx-4 md:block md:py-4"
            aria-hidden
          >
            <div className="flex w-max animate-portfolio-marquee items-center gap-20">
              <MarqueeStrip />
              <MarqueeStrip />
            </div>
          </div>
          <div className="relative w-full max-w-2xl">
            {/* PORTFOLIO-Banner nur Mobile: knapp über der Karte */}
            <div
              className="absolute left-0 right-0 bottom-full z-0 overflow-hidden py-2 sm:py-3 mb-4 sm:mb-5 md:hidden"
              aria-hidden
            >
              <div className="flex w-max animate-portfolio-marquee items-center gap-20">
                <MarqueeStrip />
                <MarqueeStrip />
              </div>
            </div>
            {/* Card-Bereich: definiert die Zentrierung (Karte mittig im Viewport) */}
            <div
              className="relative z-10 w-full"
              style={{ perspective: "1600px" }}
            >
            <motion.div
              className="absolute inset-0 w-full"
              style={{
                rotateX,
                transformOrigin: "center center",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Vorderseite: je nach Scroll Karte 1, 2 oder 3 (Wechsel bei -90° und -270°) */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(0deg)",
                }}
              >
                <motion.div className="absolute inset-0" style={{ opacity: frontCard1, pointerEvents: pointerEvents1 }}>
                  <CardFace title={CARDS[0].title} tags={CARDS[0].tags} image={CARDS[0].image} overlayImage={CARDS[0].overlayImage} />
                </motion.div>
                <motion.div className="absolute inset-0" style={{ opacity: frontCard2, pointerEvents: pointerEvents2 }}>
                  <CardFace title={CARDS[1].title} tags={CARDS[1].tags} image={CARDS[1].image} overlayImage={CARDS[1].overlayImage} />
                </motion.div>
                <motion.div className="absolute inset-0" style={{ opacity: frontCard3, pointerEvents: pointerEvents3 }}>
                  <CardFace title={CARDS[2].title} tags={CARDS[2].tags} image={CARDS[2].image} overlayImage={CARDS[2].overlayImage} />
                </motion.div>
              </div>
              {/* Rückseite: Karte 2 bis -270°, danach Karte 3 (Wechsel bei -270°) */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                <motion.div className="absolute inset-0" style={{ opacity: backCard2, pointerEvents: backPointer2 }}>
                  <CardFace title={CARDS[1].title} tags={CARDS[1].tags} image={CARDS[1].image} overlayImage={CARDS[1].overlayImage} />
                </motion.div>
                <motion.div className="absolute inset-0" style={{ opacity: backCard3, pointerEvents: backPointer3 }}>
                  <CardFace title={CARDS[2].title} tags={CARDS[2].tags} image={CARDS[2].image} overlayImage={CARDS[2].overlayImage} />
                </motion.div>
              </div>
            </motion.div>

            <div className="pointer-events-none invisible">
              <CardFace title={CARDS[0].title} tags={CARDS[0].tags} image={CARDS[0].image} overlayImage={CARDS[0].overlayImage} />
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
