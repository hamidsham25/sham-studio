"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

function ServiceRow({
  category,
  index,
  isLast,
}: {
  category: (typeof SERVICE_CATEGORIES)[0];
  index: number;
  isLast: boolean;
}) {
  const rowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        row,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          delay: index * 0.06,
        }
      );
    }, row);

    return () => ctx.revert();
  }, [index]);

  return (
    <article
      ref={rowRef}
      id={category.id}
      className={`scroll-mt-28 border-zinc-200 py-12 opacity-0 md:py-16 ${
        index > 0 ? "border-t" : ""
      } ${isLast ? "border-b" : ""}`}
    >
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-3">
          <h3 className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            {category.title}
          </h3>
        </div>

        <ul className="flex flex-col gap-2.5 md:pl-8 lg:col-span-5 lg:col-start-6 lg:pl-0">
          {category.items.map((item) => (
            <li
              key={item}
              className="text-base leading-snug text-zinc-800 sm:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

type ServicesRowsProps = {
  className?: string;
};

export default function ServicesRows({ className = "" }: ServicesRowsProps) {
  return (
    <div className={className}>
      {SERVICE_CATEGORIES.map((category, i) => (
        <ServiceRow
          key={category.id}
          category={category}
          index={i}
          isLast={i === SERVICE_CATEGORIES.length - 1}
        />
      ))}
    </div>
  );
}
