"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContactModal } from "@/components/ContactModalContext";

gsap.registerPlugin(ScrollTrigger);

type PricingItem = {
  label: string;
  included: boolean;
};

type PackagePlan = {
  name: "Starter" | "Business" | "Premium";
  price: string;
  subline: string;
  badge?: string;
  highlight?: boolean;
  items: PricingItem[];
};

type MaintenancePlan = {
  name: "Basic" | "Komfort" | "Pro";
  price: string;
  subline: string;
  items: string[];
};

const PACKAGE_PLANS: PackagePlan[] = [
  {
    name: "Starter",
    price: "ab 499 €",
    subline: "einmalig, netto",
    items: [
      { label: "1-seitiger Auftritt", included: true },
      { label: "Mobil optimiert", included: true },
      { label: "Kontaktformular", included: true },
      { label: "DSGVO-konform", included: true },
      { label: "SEO Basics", included: true },
      { label: "1 Revision", included: true },
      { label: "Unterseiten", included: false },
    ],
  },
  {
    name: "Business",
    price: "ab 899 €",
    subline: "einmalig, netto",
    badge: "Am beliebtesten",
    highlight: true,
    items: [
      { label: "Bis zu 5 Unterseiten", included: true },
      { label: "Mobil optimiert", included: true },
      { label: "SEO-Grundausstattung", included: true },
      { label: "Google Maps Integration", included: true },
      { label: "2 Revisionen", included: true },
      { label: "30 Tage Support", included: true },
      { label: "Branding / Logo", included: false },
    ],
  },
  {
    name: "Premium",
    price: "Auf Anfrage",
    subline: "individuell kalkuliert",
    items: [
      { label: "Bis zu 10+ Unterseiten", included: true },
      { label: "Branding & Logo", included: true },
      { label: "Erweitertes SEO + AEO", included: true },
      { label: "Google Business Setup", included: true },
      { label: "3+ Revisionen", included: true },
      { label: "60 Tage Support", included: true },
    ],
  },
];

const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    name: "Basic",
    price: "19 €/Monat",
    subline: "monatlich, netto",
    items: [
      "Updates & Sicherheit",
      "1 kleine Änderung/Monat",
    ],
  },
  {
    name: "Komfort",
    price: "59 €/Monat",
    subline: "monatlich, netto",
    items: [
      "Alles aus Basic",
      "Bis 2h Änderungen/Monat",
      "Priorität-Support",
    ],
  },
  {
    name: "Pro",
    price: "99 €/Monat",
    subline: "monatlich, netto",
    items: [
      "Alles aus Komfort",
      "Bis 4h Änderungen/Monat",
      "SEO-Monitoring",
      "Google Business Pflege",
    ],
  },
];

function PackageCard({
  plan,
  index,
  inView,
  onCta,
}: {
  plan: PackagePlan;
  index: number;
  inView: boolean;
  onCta: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 60, scale: 0.96, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`group relative flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60 sm:p-8 ${
        plan.highlight
          ? "ring-2 ring-cyan-500/30"
          : "ring-1 ring-zinc-200/80"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/[0.06] to-purple-500/[0.03] transition-opacity duration-300 ${
          plan.highlight ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        aria-hidden
      />

      {plan.badge ? (
        <span className="relative inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 ring-1 ring-cyan-100">
          {plan.badge}
        </span>
      ) : null}

      <h3 className="relative mt-4 font-display text-2xl font-bold text-zinc-900">
        {plan.name}
      </h3>
      <p className="relative mt-3 font-display text-3xl font-bold tracking-tight text-zinc-900">
        {plan.price}
      </p>
      <p className="relative mt-1 text-xs uppercase tracking-wide text-zinc-500">
        {plan.subline}
      </p>

      <ul className="relative mt-6 flex-1 space-y-3">
        {plan.items.map((item) => (
          <li key={item.label} className="flex items-start gap-3 text-sm">
            <span
              className={`mt-0.5 text-base leading-none ${
                item.included ? "text-emerald-600" : "text-zinc-400"
              }`}
              aria-hidden
            >
              {item.included ? "✓" : "✗"}
            </span>
            <span className={item.included ? "text-zinc-700" : "text-zinc-500"}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onCta}
        className={`relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
          plan.highlight
            ? "bg-zinc-900 text-white hover:bg-zinc-800"
            : "bg-white text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-50"
        }`}
      >
        Angebot anfragen
      </button>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-transform duration-300 group-hover:scale-x-100" />
    </motion.div>
  );
}

function MaintenanceCard({
  plan,
  index,
  inView,
}: {
  plan: MaintenancePlan;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.65, delay: 0.1 + index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-[transform,box-shadow] duration-300 hover:shadow-lg hover:shadow-zinc-200/60"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] to-purple-500/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <h4 className="font-display text-xl font-bold text-zinc-900">{plan.name}</h4>
      <p className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-900">
        {plan.price}
      </p>
      <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{plan.subline}</p>
      <ul className="mt-5 space-y-2 text-sm text-zinc-700">
        {plan.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-zinc-500">zzgl. einmaligem Paketpreis</p>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-cyan-600 transition-transform duration-300 group-hover:scale-x-100" />
    </motion.div>
  );
}

export default function PricingSection() {
  const { openModal } = useContactModal();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [packagesInView, setPackagesInView] = useState(false);
  const [maintenanceInView, setMaintenanceInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const headingEls = headingRef.current.children;
        gsap.fromTo(
          headingEls,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        onEnter: () => setPackagesInView(true),
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 45%",
        onEnter: () => setMaintenanceInView(true),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative z-10 overflow-hidden rounded-b-[2rem] bg-white pb-18 pt-6 sm:rounded-b-[3rem] md:pb-24 md:pt-8"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div ref={headingRef} className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Preise
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl"
          >
            Pakete für Ihren Webauftritt
          </h2>
          <p className="mt-5 text-lg text-zinc-600 md:text-xl">
            Transparent, klar und passend zum Projektumfang.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
          {PACKAGE_PLANS.map((plan, i) => (
            <PackageCard
              key={plan.name}
              plan={plan}
              index={i}
              inView={packagesInView}
              onCta={() => openModal(`Paket: ${plan.name}`)}
            />
          ))}
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-12">
          <h3 className="font-display text-3xl font-bold tracking-tight text-zinc-900">
            Wartung & Pflege optional zu jedem Paket
          </h3>
          <p className="mt-3 text-zinc-600">
            Monatlich kündbar. Keine Mindestlaufzeit.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MAINTENANCE_PLANS.map((plan, i) => (
              <MaintenanceCard
                key={plan.name}
                plan={plan}
                index={i}
                inView={maintenanceInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
