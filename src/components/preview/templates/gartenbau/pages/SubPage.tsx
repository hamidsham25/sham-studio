import Link from "next/link";
import type { PreviewConfig } from "@/lib/previews/core/types";
import type { PageKey } from "@/components/preview/templates/gartenbau/navigation";
import { previewPath } from "@/components/preview/templates/gartenbau/navigation";
import GartenbauLayout from "../layout/Layout";
import { Container } from "../layout/Container";

type Props = {
  config: PreviewConfig;
  activePage: Exclude<PageKey, "home">;
  title: string;
};

/** Platzhalter für Unterseiten — sage Header wie im Original, Content folgt später. */
export default function GartenbauSubPage({
  config,
  activePage,
  title,
}: Props) {
  const homeHref = previewPath(config.slug, "home");

  return (
    <GartenbauLayout config={config} activePage={activePage}>
      <header className="relative overflow-hidden bg-sage">
        <Container as="div" className="relative z-10 pt-20 lg:pt-24">
          <nav aria-label="Breadcrumb" className="pt-4 sm:pt-6 lg:pt-8">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Link
                  href={homeHref}
                  className="transition-colors duration-200 hover:text-white"
                >
                  Start
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden className="text-white/40">
                  |
                </span>
                <span className="text-white/90">{title}</span>
              </li>
            </ol>
          </nav>

          <div className="flex min-h-[200px] items-end pb-16 pt-8 sm:min-h-[240px] sm:pb-20 sm:pt-10 lg:min-h-[300px] lg:pb-24 lg:pt-12">
            <h1 className="heading max-w-2xl text-4xl text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>
          </div>
        </Container>
      </header>

      <section className="bg-surface py-16 lg:py-24">
        <Container className="max-w-2xl">
          <p className="font-body text-base leading-relaxed text-muted sm:text-lg">
            Diese Unterseite ist im Preview noch ein Platzhalter. Die Startseite
            trägt bereits das vollständige Gartenbau-Design — Inhalte folgen.
          </p>
          <Link
            href={homeHref}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-action px-8 py-3.5 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-forest"
          >
            Zur Startseite
          </Link>
        </Container>
      </section>
    </GartenbauLayout>
  );
}
