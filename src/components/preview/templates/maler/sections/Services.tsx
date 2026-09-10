import { previewPath } from "@/components/preview/templates/maler/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewImageFrame from "@/components/preview/core/ui/PreviewImageFrame";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";
import PreviewSectionHeading from "@/components/preview/core/ui/PreviewSectionHeading";

type MalerServicesProps = {
  config: PreviewConfig;
  limit?: number;
  /** Auf der Unterseite ausblenden, wenn PageHero die Überschrift schon trägt. */
  showHeading?: boolean;
};

/** Maler-Leistungen: eckige Bildkarten mit farbigem Textblock. */
export default function MalerServices({
  config,
  limit,
  showHeading = true,
}: MalerServicesProps) {
  const titles = config.sectionTitles?.services;
  const services = limit ? config.services.slice(0, limit) : config.services;
  const hasMore = services.length < config.services.length;
  const servicesHref = previewPath(config.slug, "services");

  return (
    <PreviewSection id="leistungen" tone="default">
      {showHeading ? (
        <PreviewSectionHeading
          eyebrow={titles?.eyebrow ?? "Leistungen"}
          title={titles?.title ?? "Unsere Leistungen"}
          text={titles?.text}
          align="left"
        />
      ) : null}

      <div
        className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 ${
          showHeading ? "mt-12" : ""
        }`}
      >
        {services.map((service) => {
          const linkLabel = service.linkLabel ?? service.title;

          return (
            <a
              key={service.title}
              href={servicesHref}
              className="group flex flex-col overflow-hidden rounded-none outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[var(--preview-primary)] focus-visible:ring-offset-2"
            >
              <PreviewImageFrame
                image={service.image}
                placeholderIcon={service.icon ?? TRADE_ICON.maler}
                rounded="rounded-none"
                className="aspect-3/4 w-full"
              />

              <div className="flex min-h-[9.5rem] flex-1 flex-col bg-[var(--preview-primary)] px-5 py-5 text-[var(--preview-on-primary)] sm:min-h-[10.5rem] sm:px-6 sm:py-6">
                <h3 className="text-[1.15rem] font-bold leading-snug tracking-tight sm:text-xl">
                  {service.title}
                </h3>
                <span className="mt-auto pt-5 text-sm font-normal opacity-90 transition-opacity group-hover:opacity-100">
                  weiter zu {linkLabel}
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {hasMore ? (
        <div className="mt-10">
          <PreviewButton
            href={servicesHref}
            variant="outline"
            size="lg"
            icon="arrowRight"
          >
            Alle Leistungen ansehen
          </PreviewButton>
        </div>
      ) : null}
    </PreviewSection>
  );
}
