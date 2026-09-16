/**
 * Inhalts-Pack für das Gartenbau-Preview-Template.
 * Pro Kunde ein Pack — Design/Struktur bleibt gleich.
 */

export type WhyUsIcon = "layers" | "map-pin" | "shield-check" | "users";

export type GartenbauContent = {
  brandName: string;
  /** Optional: Logo unter /public — sonst Textmarke in der Navbar */
  logoSrc?: string;
  logoAlt?: string;
  footerBlurb: string;
  copyrightName: string;

  hero: {
    headingLines: [string, string, string];
    headingAccentIndex: 0 | 1 | 2;
    subline: string;
    primaryCta: string;
    secondaryCta: string;
  };

  heroSlides: readonly {
    src: string;
    alt: string;
    label: string;
  }[];

  heroTrust: {
    ownerName: string;
    ownerRole: string;
    ownerImage: string;
    clientCount: number;
    clientsLabel: string;
  };

  aboutTeaser: {
    heading: { primary: string; accent: string; secondary: string };
    body: readonly string[];
    ctaLabel: string;
    images: readonly { src: string; alt: string }[];
  };

  whyUs: {
    headingBrand: string;
    subline: string;
    items: readonly {
      icon: WhyUsIcon;
      title: string;
      description: string;
      anchor: string;
      featured: boolean;
    }[];
  };

  servicesIntro: string;
  services: readonly {
    slug: string;
    title: string;
    description: string;
    image: { src: string; alt: string };
  }[];

  process: {
    intro: string;
    ctaLabel: string;
    steps: readonly {
      number: string;
      title: string;
      description: string;
    }[];
  };

  projects: {
    headingPrimary: string;
    headingAccent: string;
    subline: string;
    items: readonly {
      src: string;
      alt: string;
      featured: boolean;
    }[];
  };

  contactCta: {
    heading: { line1: string; line2: string; accent: string };
    body: string;
    ctaLabel: string;
    callLabel: string;
    phoneHref: string;
  };
};

export const HERO_SLIDE_DURATION_MS = 7500;
export const HERO_FADE_DURATION_S = 0.85;
