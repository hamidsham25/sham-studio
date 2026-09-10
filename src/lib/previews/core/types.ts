/**
 * Typen für das Preview-System (Kundenentwürfe unter /preview/[slug]).
 * Komplett getrennt vom Sham-Studio-Content in src/lib/*.
 *
 * Grundregel: slug, trade, businessName, tagline, colors, contact und services
 * sind Pflicht. Alles andere ist optional – fehlt ein Block, rendert die
 * Preview die zugehörige Sektion einfach nicht.
 */

/** Gewerk des Kunden – steuert später branchenspezifische Inhalte. */
export type PreviewTrade = "maler" | "shk" | "pv" | "sanierung";

/** Icons der Preview-Bausteine, siehe components/preview/ui/PreviewIcon.tsx. */
export type PreviewIconName =
  | "brush"
  | "roller"
  | "wall"
  | "droplet"
  | "ruler"
  | "home"
  | "shield"
  | "clock"
  | "euro"
  | "leaf"
  | "sparkles"
  | "award"
  | "users"
  | "check"
  | "star"
  | "phone"
  | "mail"
  | "whatsapp"
  | "mapPin"
  | "arrowRight";

export type PreviewSocialPlatform =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "x"
  | "youtube"
  | "tiktok";

/**
 * Farben eines Kunden. Werden 1:1 als --preview-* CSS-Variablen
 * auf .preview-root gesetzt (siehe lib/previews/theme.ts).
 */
export type PreviewColors = {
  /** Akzentfarbe: Buttons, Links, Hervorhebungen. */
  primary: string;
  /** Hover-/Active-Zustand der Akzentfarbe. */
  primaryHover: string;
  /** Seitenhintergrund. */
  background: string;
  /** Standard-Textfarbe. */
  foreground: string;
  /** Gedeckte Textfarbe für Sekundärtexte. */
  muted: string;
  /** Textfarbe auf der Akzentfarbe. Default: #ffffff. */
  onPrimary?: string;
};

export type PreviewContact = {
  phone: string;
  email: string;
  whatsapp?: string;
  address?: string;
};

/** Bild aus der Config. Fehlt es, rendert PreviewImageFrame einen Platzhalter. */
export type PreviewImage = {
  /** Am besten lokal unter /public/images/preview/<slug>/…  */
  src: string;
  alt: string;
};

export type PreviewAction = {
  label: string;
  /** Default: interne Kontaktseite der Preview. */
  href?: string;
};

export type PreviewStat = {
  value: string;
  label: string;
};

export type PreviewService = {
  title: string;
  description: string;
  icon?: PreviewIconName;
  bullets?: string[];
  image?: PreviewImage;
  /** Kurzlabel für den Card-Link, z. B. "Malerarbeiten" → "weiter zu Malerarbeiten". */
  linkLabel?: string;
};

export type PreviewProject = {
  title: string;
  category: string;
  location?: string;
  description?: string;
  image?: PreviewImage;
};

export type PreviewProcessStep = {
  title: string;
  description: string;
  icon?: PreviewIconName;
};

export type PreviewBenefit = {
  title: string;
  description: string;
  icon?: PreviewIconName;
};

export type PreviewHero = {
  /** Kleiner Text über der Headline. */
  eyebrow?: string;
  /** Default: tagline. */
  headline?: string;
  subline?: string;
  primaryCta?: PreviewAction;
  secondaryCta?: PreviewAction;
  /** Einzelnes Hero-Bild (Fallback, wenn backgroundImages fehlen). */
  image?: PreviewImage;
  /**
   * Hintergrundbilder für den Hero-Wechsel (Maler u. a.).
   * Mehrere Bilder → automatischer Wechsel im Template.
   */
  backgroundImages?: PreviewImage[];
  /** Kleine Karten unten rechts im Hero (max. 3 werden gerendert). */
  thumbnails?: PreviewImage[];
  /** Vertrauens-Zeile unten links: Sterne + Text. */
  trust?: {
    text: string;
    /** 0–5, wird auf halbe Sterne gerundet dargestellt. */
    rating?: number;
  };
};

export type PreviewAbout = {
  eyebrow?: string;
  heading: string;
  text: string;
  /** Aufzählung mit Häkchen. */
  points?: string[];
  /** Einzelbild (Fallback, wenn images fehlen). */
  image?: PreviewImage;
  /** Zwei Fotos für die Collage (Maler-Über-uns). */
  images?: PreviewImage[];
  /** Dezentes Sektions-Hintergrundbild (niedrige Sichtbarkeit). */
  backgroundImage?: PreviewImage;
  /** Jahr im runden Badge, z. B. "1998". */
  sinceYear?: string;
  /** Kleines Label über dem Jahr. Default: "Seit". */
  sinceLabel?: string;
  signature?: { name: string; role: string };
};

export type PreviewCtaBlock = {
  heading: string;
  text?: string;
  primaryCta?: PreviewAction;
  secondaryCta?: PreviewAction;
};

export type PreviewSocial = {
  platform: PreviewSocialPlatform;
  href: string;
};

export type PreviewFooterConfig = {
  /** Kurzer Absatz in der ersten Footer-Spalte. Default: tagline. */
  about?: string;
  socials?: PreviewSocial[];
  /** Zusätzliche Links, z. B. Impressum/Datenschutz (im Entwurf ohne Ziel). */
  legalLinks?: { label: string; href?: string }[];
  /** Zeile unter dem Footer. Default: © Jahr businessName. */
  note?: string;
};

/** Intro-Texte der Unterseiten. Ohne Angabe greifen Defaults. */
export type PreviewPageIntro = {
  title?: string;
  text?: string;
  /** Optionales Hintergrundbild für den Unterseiten-Kopf. */
  image?: PreviewImage;
};

export type PreviewOpeningHours = {
  days: string;
  hours: string;
};

export type PreviewSectionTitles = {
  eyebrow?: string;
  title?: string;
  text?: string;
};

export type PreviewConfig = {
  /** Teil der URL: /preview/<slug>. Muss eindeutig sein. */
  slug: string;
  trade: PreviewTrade;
  businessName: string;
  tagline: string;
  colors: PreviewColors;
  /** Pfad unter /public oder absolute URL. Fehlt es, wird der Name gesetzt. */
  logoUrl?: string;
  contact: PreviewContact;
  services: PreviewService[];

  /* --- Startseiten-Sektionen: fehlt der Block, entfällt die Sektion --- */
  /** Schmale Leiste über dem Header. */
  topBarMessage?: string;
  hero?: PreviewHero;
  about?: PreviewAbout;
  /** Zahlenband unter "Über uns". */
  stats?: PreviewStat[];
  projects?: PreviewProject[];
  process?: PreviewProcessStep[];
  benefits?: PreviewBenefit[];
  cta?: PreviewCtaBlock;
  footer?: PreviewFooterConfig;

  /* --- Überschriften der Sektionen (optional überschreibbar) --- */
  sectionTitles?: {
    services?: PreviewSectionTitles;
    projects?: PreviewSectionTitles;
    process?: PreviewSectionTitles;
    benefits?: PreviewSectionTitles;
    stats?: PreviewSectionTitles;
  };

  /* --- Unterseiten --- */
  pageIntros?: {
    about?: PreviewPageIntro;
    services?: PreviewPageIntro;
    projects?: PreviewPageIntro;
    contact?: PreviewPageIntro;
  };

  /* --- Kontaktseite --- */
  openingHours?: PreviewOpeningHours[];
  /** Einsatzgebiet, z. B. ["Hannover", "Laatzen"]. */
  serviceArea?: string[];

  /* --- Platzhalter für später: noch von keinem Baustein gerendert --- */
  testimonials?: { name: string; quote: string; role?: string }[];
  faq?: { question: string; answer: string }[];
  gallery?: PreviewImage[];
  legal?: { companyName: string; owner?: string; vatId?: string };
};
