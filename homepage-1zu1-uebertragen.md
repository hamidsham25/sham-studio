# Startseite 1:1 in ein anderes Next.js-Projekt übertragen

**Quellprojekt:** `gartenbau-sawitzki`  
**Ziel:** Exakt gleiches Aussehen der Startseite  
**Am Quellprojekt nichts ändern** — nur Dateien kopieren.

---

## So arbeitest du

1. Gehe die Schritte **1 → 10** der Reihe nach durch.
2. Pro Schritt: Datei(en) aus dem Quellprojekt kopieren **oder** Inhalt 1:1 einfügen.
3. Danach `npm install` / Dev-Server starten und prüfen.

**Pfad-Alias:** Im Zielprojekt muss `@/*` → Projektroot zeigen (`tsconfig.json`).

---

## Schritt 1 — Dependencies installieren

Im **Zielprojekt** ausführen:

```bash
npm install motion@^12.42.2 lucide-react@^1.25.0
npm install -D tailwindcss@^4 @tailwindcss/postcss@^4
```

| Package | Version | Wofür |
|---------|---------|--------|
| `motion` | `^12.42.2` | Animationen |
| `lucide-react` | `^1.25.0` | Icons |
| `tailwindcss` | `^4` | Styles / Tokens |
| `@tailwindcss/postcss` | `^4` | PostCSS-Plugin |

Kein GSAP, kein framer-motion, kein shadcn nötig.

---

## Schritt 2 — PostCSS (Tailwind v4)

**Datei anlegen/überschreiben:** `postcss.config.mjs`

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

---

## Schritt 3 — Next.js Image-Config (Unsplash)

**Datei:** `next.config.ts`  
Remote-Patterns ergänzen (oder Datei so setzen):

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
```

Ohne diesen Schritt laden die Hero-/Sektionsbilder nicht.

---

## Schritt 4 — Globale CSS / Design-Tokens

**Datei kopieren:** `app/globals.css`  
**Aus:** Quellprojekt → `app/globals.css`  
**Nach:** Zielprojekt → `app/globals.css` (bestehende globals ersetzen oder Inhalt übernehmen)

Enthält:
- Farben: `forest`, `sage`, `action`, `surface`, `ink`, `muted`
- Font-Utilities: `font-heading`, `font-body`
- Utility: `heading` (uppercase, bold)
- Reduced-motion Kill-Switch

---

## Schritt 5 — Fonts + Layout-Shell

**Datei kopieren:** `app/layout.tsx`  
**Aus:** Quellprojekt → `app/layout.tsx`

Oder nur den Font-/Shell-Teil übernehmen:

| Font | next/font | CSS-Variable |
|------|-----------|--------------|
| Familjen Grotesk | `Familjen_Grotesk` | `--font-heading` |
| Inter | `Inter` | `--font-body` |

Layout muss laden:
- `./globals.css`
- `<Header />` oben
- `<main>{children}</main>`
- `<Footer />` unten
- Classes auf `html`: Font-Variablen + `h-full antialiased`
- Classes auf `body`: `flex min-h-full flex-col bg-surface font-body text-ink`

---

## Schritt 6 — Content-Daten (Texte + Bild-URLs)

Ordner `lib/` im Zielprojekt anlegen, dann **beide** Dateien kopieren:

| # | Quelle | Ziel |
|---|--------|------|
| 1 | `lib/hero-images.ts` | `lib/hero-images.ts` |
| 2 | `lib/home-content.ts` | `lib/home-content.ts` |

Keine lokalen Bilder nötig — alles Unsplash-URLs in diesen Dateien.

---

## Schritt 7 — Shared UI / Layout-Bausteine

Ordner anlegen, dann **in dieser Reihenfolge** kopieren:

| # | Quelle | Ziel |
|---|--------|------|
| 1 | `components/layout/Container.tsx` | `components/layout/Container.tsx` |
| 2 | `components/layout/Section.tsx` | `components/layout/Section.tsx` |
| 3 | `components/ui/Heading.tsx` | `components/ui/Heading.tsx` |
| 4 | `components/ui/ScrollReveal.tsx` | `components/ui/ScrollReveal.tsx` |

**Hinweis:** Es gibt keine separaten Button-/Card-Komponenten.

---

## Schritt 8 — Header + Footer

| # | Quelle | Ziel |
|---|--------|------|
| 1 | `components/layout/Header.tsx` | `components/layout/Header.tsx` |
| 2 | `components/layout/Footer.tsx` | `components/layout/Footer.tsx` |

Header braucht Lucide: `Menu`, `X`.  
Footer braucht Lucide: `Leaf` + `SERVICES` aus `lib/home-content.ts`.

---

## Schritt 9 — Sektionen (Reihenfolge = Seitenreihenfolge)

Ordner `components/sections/` anlegen. Dateien **genau so** kopieren:

| # | Quelle | Ziel | Bemerkung |
|---|--------|------|-----------|
| 1 | `components/sections/Hero.tsx` | gleich | Client; braucht Slider + TrustCard |
| 2 | `components/sections/HeroSliderIndicator.tsx` | gleich | Hero-Child |
| 3 | `components/sections/HeroTrustCard.tsx` | gleich | Hero-Child |
| 4 | `components/sections/AboutTeaserSection.tsx` | gleich | |
| 5 | `components/sections/WhyUsSection.tsx` | gleich | |
| 6 | `components/sections/ServicesSection.tsx` | gleich | |
| 7 | `components/sections/ProcessSection.tsx` | gleich | |
| 8 | `components/sections/ProjectsSection.tsx` | gleich | |
| 9 | `components/sections/ClosingCtaSection.tsx` | gleich | zuerst (wird von Contact benutzt) |
| 10 | `components/sections/ContactCtaSection.tsx` | gleich | wrapper um ClosingCta |

---

## Schritt 10 — Startseite zusammensetzen

**Datei:** `app/page.tsx`

```tsx
import { Hero } from "@/components/sections/Hero";
import { AboutTeaserSection } from "@/components/sections/AboutTeaserSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaserSection />
      <WhyUsSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <ContactCtaSection />
    </>
  );
}
```

---

## Schnell-Copy (Terminal, einmal)

Vom **Quellprojekt-Root** aus (Pfad `DEST` anpassen):

```bash
DEST="/pfad/zum/zielprojekt"

# Config / CSS / Page / Layout
cp app/globals.css "$DEST/app/globals.css"
cp app/layout.tsx "$DEST/app/layout.tsx"
cp app/page.tsx "$DEST/app/page.tsx"
cp postcss.config.mjs "$DEST/postcss.config.mjs"
# next.config.ts manuell mergen (remotePatterns!)

# Lib
mkdir -p "$DEST/lib"
cp lib/hero-images.ts lib/home-content.ts "$DEST/lib/"

# Layout + UI
mkdir -p "$DEST/components/layout" "$DEST/components/ui" "$DEST/components/sections"
cp components/layout/Container.tsx \
   components/layout/Section.tsx \
   components/layout/Header.tsx \
   components/layout/Footer.tsx \
   "$DEST/components/layout/"
cp components/ui/Heading.tsx \
   components/ui/ScrollReveal.tsx \
   "$DEST/components/ui/"

# Sections
cp components/sections/Hero.tsx \
   components/sections/HeroSliderIndicator.tsx \
   components/sections/HeroTrustCard.tsx \
   components/sections/AboutTeaserSection.tsx \
   components/sections/WhyUsSection.tsx \
   components/sections/ServicesSection.tsx \
   components/sections/ProcessSection.tsx \
   components/sections/ProjectsSection.tsx \
   components/sections/ClosingCtaSection.tsx \
   components/sections/ContactCtaSection.tsx \
   "$DEST/components/sections/"
```

Danach im Zielprojekt:

```bash
npm install motion@^12.42.2 lucide-react@^1.25.0
npm install -D tailwindcss@^4 @tailwindcss/postcss@^4
npm run dev
```

---

## Checkliste (Haken setzen)

- [ ] Schritt 1: Packages installiert
- [ ] Schritt 2: `postcss.config.mjs`
- [ ] Schritt 3: Unsplash in `next.config.ts`
- [ ] Schritt 4: `app/globals.css`
- [ ] Schritt 5: `app/layout.tsx` (Fonts + Header/Footer)
- [ ] Schritt 6: `lib/hero-images.ts` + `lib/home-content.ts`
- [ ] Schritt 7: Container, Section, Heading, ScrollReveal
- [ ] Schritt 8: Header + Footer
- [ ] Schritt 9: Alle 10 Section-Dateien
- [ ] Schritt 10: `app/page.tsx`
- [ ] `@/*` Path-Alias in `tsconfig.json`
- [ ] Visuell geprüft: Hero → About → WhyUs → Services → Process → Projects → CTA → Footer

---

## Was du NICHT brauchst

- `public/file.svg`, `vercel.svg`, `window.svg`
- Andere Seiten (`/ueber-uns`, `/leistungen`, …) — Links dürfen 404 sein, Design der Startseite bleibt gleich
- `components/sections/about/*`, `projects/*`, `contact/*` (Unterseiten)
- Lokale Bildordner — Bilder kommen von Unsplash

---

## Visuelle Reihenfolge auf der Seite

```
┌─────────────────────────────┐
│ Header (fixed)              │
├─────────────────────────────┤
│ 1. Hero                     │
│ 2. AboutTeaserSection       │
│ 3. WhyUsSection             │
│ 4. ServicesSection          │
│ 5. ProcessSection           │
│ 6. ProjectsSection          │
│ 7. ContactCtaSection        │
├─────────────────────────────┤
│ Footer                      │
└─────────────────────────────┘
```

---

## Kurz: Merksatz

> **Config → Tokens/Fonts → Lib → Shared UI → Header/Footer → Sections → page.tsx**

Das ist die Reihenfolge. Fertig.
