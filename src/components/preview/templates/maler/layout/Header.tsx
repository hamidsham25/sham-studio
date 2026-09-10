"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NAV,
  previewPath,
  type PageKey,
} from "@/components/preview/templates/maler/navigation";
import { telHref } from "@/lib/previews/core/links";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import MalerNavContainer from "./NavContainer";
import Logo from "./Logo";

type MalerHeaderProps = {
  config: PreviewConfig;
  activePage: PageKey;
};

/**
 * Sticky Navbar (ohne TopBar).
 * Startseite: erst transparent, nach Scroll weiß.
 * -mt-px schließt den Haarstrich zur TopBar.
 */
export default function MalerHeader({
  config,
  activePage,
}: MalerHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const isHome = activePage === "home";
  const solid = !isHome || scrolled;
  const ctaLabel = config.hero?.primaryCta?.label ?? "Angebot anfordern";

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 -mt-px transition-[background-color,box-shadow] duration-300 ${
        solid ? "border-b border-[var(--preview-border)] bg-white shadow-sm" : ""
      }`}
    >
      <MalerNavContainer>
        <div className="flex h-20 items-center justify-between gap-4 md:h-24">
          <Logo
            config={config}
            inverted={!solid}
            onClick={() => {
              if (isHome) scrollToTop();
            }}
          />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const isActive = item.key === activePage;

              return (
                <Link
                  key={item.key}
                  href={previewPath(config.slug, item.key)}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => {
                    if (isActive) scrollToTop();
                  }}
                  className={`preview-nav-link px-3 py-2 text-base font-semibold tracking-wide transition-colors md:px-4 md:text-[1.05rem] ${
                    solid
                      ? isActive
                        ? "text-[var(--preview-primary)]"
                        : "text-[var(--preview-foreground)] hover:text-[var(--preview-primary)]"
                      : isActive
                        ? "text-white"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={telHref(config.contact.phone)}
              className={`hidden items-center gap-2 text-base font-semibold transition-colors xl:inline-flex ${
                solid
                  ? "text-[var(--preview-foreground)] hover:text-[var(--preview-primary)]"
                  : "text-white hover:text-white/80"
              }`}
            >
              <PreviewIcon name="phone" className="h-4 w-4" />
              {config.contact.phone}
            </a>

            <PreviewButton
              href={previewPath(config.slug, "contact")}
              className="hidden sm:inline-flex"
            >
              {ctaLabel}
            </PreviewButton>

            <details className="group relative lg:hidden">
              <summary
                className={`flex h-12 w-12 items-center justify-center rounded-md ${
                  solid
                    ? "ring-1 ring-[var(--preview-border)]"
                    : "text-white ring-1 ring-white/40"
                }`}
                aria-label="Menü öffnen"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 group-open:hidden"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  className="hidden h-5 w-5 group-open:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </summary>

              <div className="absolute right-0 top-[calc(100%+0.75rem)] w-64 rounded-md border border-[var(--preview-border)] bg-white p-2 text-[var(--preview-foreground)] shadow-xl">
                <nav className="flex flex-col">
                  {NAV.map((item) => {
                    const isActive = item.key === activePage;

                    return (
                      <Link
                        key={item.key}
                        href={previewPath(config.slug, item.key)}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => {
                          if (isActive) scrollToTop();
                        }}
                        className={`preview-nav-link rounded-md px-4 py-3 text-base font-semibold ${
                          isActive
                            ? "bg-[var(--preview-tint)] text-[var(--preview-primary)]"
                            : "hover:bg-[var(--preview-surface)]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-2 border-t border-[var(--preview-border)] pt-2">
                  <a
                    href={telHref(config.contact.phone)}
                    className="flex items-center gap-2 rounded-md px-4 py-3 text-base font-semibold text-[var(--preview-primary)]"
                  >
                    <PreviewIcon name="phone" className="h-4 w-4" />
                    {config.contact.phone}
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </MalerNavContainer>
    </header>
  );
}
