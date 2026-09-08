import { previewPath } from "@/components/preview/templates/shk/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewImageFrame from "@/components/preview/core/ui/PreviewImageFrame";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";
import PreviewSectionHeading from "@/components/preview/core/ui/PreviewSectionHeading";

type ShkServicesProps = {
  config: PreviewConfig;
  limit?: number;
};

/** SHK-Leistungen: Bildkarten mit überlagertem Text (HandGrid-Referenz). */
export default function ShkServices({ config, limit }: ShkServicesProps) {
  const titles = config.sectionTitles?.services;
  const services = limit ? config.services.slice(0, limit) : config.services;
  const hasMore = services.length < config.services.length;

  return (
    <PreviewSection id="leistungen" tone="default">
      <PreviewSectionHeading
        eyebrow={titles?.eyebrow ?? "Leistungen"}
        title={titles?.title ?? "Unsere Leistungen"}
        text={titles?.text}
        align="left"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const isFeatured = index === 0;

          return (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-[var(--preview-border)]"
            >
              <PreviewImageFrame
                image={service.image}
                placeholderIcon={service.icon ?? TRADE_ICON.shk}
                rounded="rounded-none"
                className="aspect-4/3 w-full"
              />

              <div
                className={`absolute inset-x-4 bottom-4 rounded-xl p-5 shadow-lg ${
                  isFeatured
                    ? "bg-[var(--preview-primary)] text-[var(--preview-on-primary)]"
                    : "bg-[var(--preview-background)]"
                }`}
              >
                <h3 className="text-lg font-bold tracking-tight">
                  {service.title}
                </h3>
                <p
                  className={`mt-1.5 text-sm leading-relaxed ${
                    isFeatured ? "opacity-90" : "text-[var(--preview-muted)]"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {hasMore ? (
        <div className="mt-10">
          <PreviewButton
            href={previewPath(config.slug, "services")}
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
