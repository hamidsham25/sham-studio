"use client";

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

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen overflow-hidden rounded-t-[2rem] bg-white px-6 pb-16 sm:rounded-t-[3rem] sm:px-8"
      aria-label="Portfolio"
    >
      <div className="relative flex min-h-screen items-center justify-center">
        {/* Marquee – nahtlose Loop per CSS (Dauer in globals.css: 90s) */}
        <div
          className="absolute inset-y-0 left-[-1.5rem] right-[-1.5rem] flex items-center overflow-hidden sm:left-[-2rem] sm:right-[-2rem]"
          aria-hidden
        >
          <div className="flex w-max animate-portfolio-marquee items-center">
            <MarqueeStrip />
            <MarqueeStrip />
          </div>
        </div>

        {/* Card – darüber, etwas kleiner, harmonischere Proportionen */}
        <article className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-[#0a0a0a] shadow-xl">
          <div className="px-4 pt-4 pb-2 sm:px-5 sm:pt-5 sm:pb-3">
            <div className="aspect-[4/3] w-full rounded-lg border border-zinc-600/80 bg-zinc-800">
              {/* Platzhalter für Projektbild – später durch echte Bilder ersetzen */}
            </div>
          </div>
          <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 sm:pt-2">
            <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
              Projektname
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2 sm:gap-3">
              <li className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300 sm:text-sm">
                Design
              </li>
              <li className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300 sm:text-sm">
                UI/UX
              </li>
              <li className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300 sm:text-sm">
                Branding
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
