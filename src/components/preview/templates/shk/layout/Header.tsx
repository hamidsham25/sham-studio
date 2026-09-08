import Link from "next/link";
import {
  NAV,
  previewPath,
  type PageKey,
} from "@/components/preview/templates/shk/navigation";
import { telHref } from "@/lib/previews/core/links";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import Logo from "./Logo";

type ShkHeaderProps = {
  config: PreviewConfig;
  activePage: PageKey;
};

/** SHK-Navigation: dunkler Header, eckige Links, Telefon-CTA im Vordergrund. */
export default function ShkHeader({ config, activePage }: ShkHeaderProps) {
  const ctaLabel = config.hero?.primaryCta?.label ?? "Jetzt anrufen";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--preview-border)] bg-[var(--preview-foreground)] text-[var(--preview-background)]">
      <PreviewContainer>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo config={config} inverted />

          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => {
              const isActive = item.key === activePage;

              return (
                <Link
                  key={item.key}
                  href={previewPath(config.slug, item.key)}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "bg-[var(--preview-primary)] text-[var(--preview-on-primary)]"
                      : "text-[var(--preview-background)]/80 hover:text-[var(--preview-background)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <PreviewButton
              href={telHref(config.contact.phone)}
              icon="phone"
              className="hidden sm:inline-flex"
            >
              {ctaLabel}
            </PreviewButton>

            <details className="group relative lg:hidden">
              <summary
                className="flex h-10 w-10 items-center justify-center ring-1 ring-[var(--preview-background)]/30"
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

              <div className="absolute right-0 top-[calc(100%+0.5rem)] w-64 border border-[var(--preview-border)] bg-[var(--preview-background)] p-2 text-[var(--preview-foreground)] shadow-2xl">
                <nav className="flex flex-col">
                  {NAV.map((item) => (
                    <Link
                      key={item.key}
                      href={previewPath(config.slug, item.key)}
                      className={`px-4 py-3 text-sm font-semibold ${
                        item.key === activePage
                          ? "bg-[var(--preview-tint-strong)] text-[var(--preview-primary)]"
                          : "hover:bg-[var(--preview-surface)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <a
                  href={telHref(config.contact.phone)}
                  className="mt-2 flex items-center gap-2 border-t border-[var(--preview-border)] px-4 py-3 text-sm font-semibold text-[var(--preview-primary)]"
                >
                  <PreviewIcon name="phone" className="h-4 w-4" />
                  {config.contact.phone}
                </a>
              </div>
            </details>
          </div>
        </div>
      </PreviewContainer>
    </header>
  );
}
