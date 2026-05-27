"use client";

import { useId } from "react";
import type { FaqItem } from "@/lib/schema";

type FaqSectionProps = {
  items: FaqItem[];
  heading?: string;
  id?: string;
  variant?: "dark" | "light";
};

function FaqAccordionItem({
  item,
  variant,
  name,
}: {
  item: FaqItem;
  variant: "dark" | "light";
  name: string;
}) {
  const isDark = variant === "dark";

  return (
    <details
      name={name}
      className={`group border-b ${
        isDark ? "border-zinc-800" : "border-zinc-200"
      }`}
    >
      <summary
        className={`flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[0.9375rem] font-medium leading-snug transition-colors [&::-webkit-details-marker]:hidden ${
          isDark
            ? "text-zinc-200 hover:text-white"
            : "text-zinc-800 hover:text-zinc-900"
        }`}
      >
        <span className="min-w-0 flex-1">{item.question}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 group-open:rotate-90 ${
            isDark
              ? "border-zinc-700 bg-zinc-900 text-zinc-400 group-open:text-cyan-400"
              : "border-zinc-200 bg-white text-zinc-500 group-open:text-cyan-700"
          }`}
          aria-hidden
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </summary>
      <p
        className={`pb-4 pr-11 text-sm leading-relaxed ${
          isDark ? "text-zinc-400" : "text-zinc-600"
        }`}
      >
        {item.answer}
      </p>
    </details>
  );
}

function FaqColumn({
  items,
  variant,
  groupName,
}: {
  items: FaqItem[];
  variant: "dark" | "light";
  groupName: string;
}) {
  return (
    <div>
      {items.map((item) => (
        <FaqAccordionItem
          key={item.question}
          item={item}
          variant={variant}
          name={groupName}
        />
      ))}
    </div>
  );
}

export default function FaqSection({
  items,
  heading,
  id = "faq",
  variant = "dark",
}: FaqSectionProps) {
  const isDark = variant === "dark";
  const groupId = useId();
  const mid = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, mid);
  const rightItems = items.slice(mid);

  const title = heading ?? (
    <>
      Häufig gestellte{" "}
      <span
        className={`underline decoration-2 underline-offset-[0.35em] ${
          isDark ? "decoration-cyan-500" : "decoration-cyan-600"
        }`}
      >
        Fragen
      </span>
    </>
  );

  return (
    <section
      id={id}
      className={
        isDark
          ? "relative z-10 border-t border-zinc-800 bg-[#0a0a0a] py-14 md:py-16"
          : "border-t border-zinc-200 bg-zinc-50 py-14 md:py-16"
      }
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <h2
          id={`${id}-heading`}
          className={`text-center font-display text-2xl font-bold tracking-tight sm:text-3xl ${
            isDark ? "text-white" : "text-zinc-900"
          }`}
        >
          {title}
        </h2>

        <div className="mt-8 grid gap-x-10 md:grid-cols-2 md:gap-x-14 lg:gap-x-20">
          <FaqColumn
            items={leftItems}
            variant={variant}
            groupName={`faq-${groupId}-left`}
          />
          <FaqColumn
            items={rightItems}
            variant={variant}
            groupName={`faq-${groupId}-right`}
          />
        </div>
      </div>
    </section>
  );
}
