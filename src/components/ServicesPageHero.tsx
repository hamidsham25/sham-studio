"use client";

import SplitPageHero from "@/components/SplitPageHero";

type ServicesPageHeroProps = {
  lead: string;
};

export default function ServicesPageHero({ lead }: ServicesPageHeroProps) {
  return (
    <SplitPageHero
      id="services-hero"
      ariaLabel="Services"
      lines={[{ text: "Services", showDot: true }]}
      lead={lead}
    />
  );
}
