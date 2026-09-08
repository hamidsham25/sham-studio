import Link from "next/link";
import {
  NAV,
  previewPath,
  type PageKey,
} from "@/components/preview/templates/maler/navigation";
import { telHref } from "@/lib/previews/core/links";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import Logo from "./Logo";

type MalerHeaderProps = {
  config: PreviewConfig;
  activePage: PageKey;
};

/** Maler-Navigation: helle Pill-Links + orangefarbener CTA. */
export default function MalerHeader({
  config,
  activePage,
}: MalerHeaderProps) {
  const ctaLabel = config.hero?.primaryCta?.label ?? "Angebot anfordern";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--preview-border)] bg-[var(--preview-header-bg)] backdrop-blur-md">
      <PreviewContainer>
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <Logo config={config} />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const isActive = item.key === activePage;

              return (
                <Link
                  key={item.key}
                  href={previewPath(config.slug, item.key)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[var(--preview-tint-strong)] text-[var(--preview-primary)]"
                      : "text-[var(--preview-foreground)] hover:text-[var(--preview-primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref(config.contact.phone)}
              className="hidden items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--preview-primary)] xl:inline-flex"
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

            {/* Mobile-Menü */}
            <details className="group relative lg:hidden">
              <summary
                className="flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-[var(--preview-border)]"
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

              <div className="absolute right-0 top-[calc(100%+0.75rem)] w-64 rounded-2xl border border-[var(--preview-border)] bg-[var(--preview-background)] p-2 shadow-2xl shadow-black/10">
                <nav className="flex flex-col">
                  {NAV.map((item) => (
                    <Link
                      key={item.key}
                      href={previewPath(config.slug, item.key)}
                      aria-current={item.key === activePage ? "page" : undefined}
                      className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                        item.key === activePage
                          ? "bg-[var(--preview-tint-strong)] text-[var(--preview-primary)]"
                          : "hover:bg-[var(--preview-surface)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-2 border-t border-[var(--preview-border)] pt-2">
                  <a
                    href={telHref(config.contact.phone)}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[var(--preview-primary)]"
                  >
                    <PreviewIcon name="phone" className="h-4 w-4" />
                    {config.contact.phone}
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </PreviewContainer>
    </header>
  );
}
