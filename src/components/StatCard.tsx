"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { AboutStatCard } from "@/lib/about-content";

gsap.registerPlugin(ScrollTrigger);

type StatCardProps = {
  card: AboutStatCard;
  index: number;
};

export default function StatCard({ card, index }: StatCardProps) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  const runCountUp = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    setDisplayValue(0);

    const counter = { val: 0 };
    gsap.to(counter, {
      val: card.value,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        setDisplayValue(Math.round(counter.val));
      },
    });
  }, [card.value]);

  useEffect(() => {
    hasAnimated.current = false;
    setDisplayValue(0);
  }, [pathname, card.id]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        root,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          delay: index * 0.08,
          scrollTrigger: {
            trigger: root,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      ScrollTrigger.create({
        trigger: root,
        start: "top 88%",
        once: true,
        onEnter: runCountUp,
      });
    }, root);

    const checkInView = () => {
      const rect = root.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
        runCountUp();
      }
    };

    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      checkInView();
    });

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, [card.value, index, runCountUp]);

  const valueLabel = `${displayValue}${card.suffix ?? ""}`;

  return (
    <article
      ref={rootRef}
      className="grid h-full grid-rows-[auto_auto_1fr] rounded-2xl border border-zinc-200/90 bg-white p-6 opacity-0 sm:p-7 md:row-span-3 md:grid-rows-subgrid"
    >
      <div>
        <h3 className="font-display text-lg font-bold text-zinc-900 sm:text-xl">
          {card.title}
        </h3>

        {card.tags.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-700 ${
                  tag === "& mehr" ? "border-dashed text-zinc-500" : ""
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-5 h-px w-full shrink-0 bg-zinc-900" aria-hidden />

      <div className="mt-5 flex flex-col">
        <p
          className="font-display text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl"
          aria-label={`${card.value}${card.suffix ?? ""} ${card.title}`}
        >
          {valueLabel}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-[0.938rem]">
          {card.description}
        </p>
      </div>
    </article>
  );
}
