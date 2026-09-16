"use client";

import type { LucideIcon } from "lucide-react";
import { Layers, MapPin, ShieldCheck, Users } from "lucide-react";
import { getGartenbauContent, type WhyUsIcon } from "../content";
import { Container } from "../layout/Container";
import { Heading } from "../ui/Heading";
import { ScrollReveal } from "../ui/ScrollReveal";

const iconMap: Record<WhyUsIcon, LucideIcon> = {
  layers: Layers,
  "map-pin": MapPin,
  "shield-check": ShieldCheck,
  users: Users,
};

type WhyUsItem = ReturnType<typeof getGartenbauContent>["whyUs"]["items"][number];

function IconBadge({
  icon,
  featured = false,
}: {
  icon: LucideIcon;
  featured?: boolean;
}) {
  const Icon = icon;

  return (
    <div
      className={
        featured
          ? "flex h-20 w-20 items-center justify-center rounded-full bg-white text-action shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          : "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-action text-white shadow-[0_4px_20px_rgba(76,175,80,0.35)]"
      }
    >
      <Icon size={featured ? 36 : 26} strokeWidth={2} aria-hidden />
    </div>
  );
}

function FeaturedCard({
  item,
  Icon,
}: {
  item: WhyUsItem;
  Icon: LucideIcon;
}) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl bg-action p-8 text-white sm:p-10 lg:min-h-[420px] lg:p-12">
      <div>
        <IconBadge icon={Icon} featured />

        <p className="mt-8 font-heading text-sm font-semibold uppercase tracking-[0.14em] text-white/75">
          {item.anchor}
        </p>

        <h3 className="heading mt-3 text-2xl text-white sm:text-3xl">{item.title}</h3>
        <p className="mt-4 max-w-sm font-body text-base leading-relaxed text-white/85">
          {item.description}
        </p>
      </div>

      <p className="mt-10 font-heading text-[5rem] font-bold leading-none text-white/[0.12] sm:text-[6rem]">
        {String(1).padStart(2, "0")}
      </p>
    </article>
  );
}

function SecondaryCard({
  item,
  Icon,
  index,
}: {
  item: WhyUsItem;
  Icon: LucideIcon;
  index: number;
}) {
  return (
    <article className="group flex gap-5 rounded-2xl border border-white/12 bg-white/[0.06] p-6 transition-colors duration-200 ease-out hover:border-white/20 hover:bg-white/[0.1] sm:gap-6 sm:p-7">
      <IconBadge icon={Icon} />

      <div className="min-w-0 flex-1">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-action">
          {item.anchor}
        </p>
        <h3 className="heading mt-2 text-base text-white sm:text-lg">{item.title}</h3>
        <p className="mt-2.5 font-body text-sm leading-relaxed text-white/65 sm:text-base">
          {item.description}
        </p>
      </div>

      <span
        aria-hidden
        className="hidden shrink-0 select-none font-heading text-3xl font-bold leading-none text-white/[0.08] transition-colors duration-200 group-hover:text-white/[0.14] sm:block"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  );
}

type WhyUsSectionProps = {
  slug: string;
};

export function WhyUsSection({ slug }: WhyUsSectionProps) {
  const whyUs = getGartenbauContent(slug).whyUs;
  const [featured, ...secondaryItems] = whyUs.items;

  return (
    <section className="bg-forest py-20 text-white lg:py-28">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Heading as="h2" className="text-3xl text-white sm:text-4xl lg:text-5xl">
            Warum <span className="text-white/45">{whyUs.headingBrand}</span>
          </Heading>
          <p className="mt-4 font-body text-base leading-relaxed text-white/70 sm:text-lg">
            {whyUs.subline}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          <ScrollReveal className="lg:col-span-5" delay={0}>
            <FeaturedCard item={featured} Icon={iconMap[featured.icon]} />
          </ScrollReveal>

          <div className="flex flex-col gap-5 lg:col-span-7 lg:justify-between lg:gap-6">
            {secondaryItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.08 + index * 0.08}>
                <SecondaryCard
                  item={item}
                  Icon={iconMap[item.icon]}
                  index={index + 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
