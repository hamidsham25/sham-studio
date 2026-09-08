import { previewPath } from "@/components/preview/templates/shk/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewConfig, PreviewProject } from "@/lib/previews/core/types";
import PreviewButton from "@/components/preview/core/ui/PreviewButton";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewImageFrame from "@/components/preview/core/ui/PreviewImageFrame";
import PreviewSection from "@/components/preview/core/ui/PreviewSection";
import PreviewSectionHeading from "@/components/preview/core/ui/PreviewSectionHeading";

type PreviewProjectsProps = {
  config: PreviewConfig;
  projects: PreviewProject[];
  /** Anzahl der Karten – ohne Angabe werden alle gezeigt. */
  limit?: number;
  showHeading?: boolean;
};

export default function PreviewProjects({
  config,
  projects,
  limit,
  showHeading = true,
}: PreviewProjectsProps) {
  const titles = config.sectionTitles?.projects;
  const visible = limit ? projects.slice(0, limit) : projects;
  const hasMore = visible.length < projects.length;

  return (
    <PreviewSection id="projekte">
      {showHeading ? (
        <PreviewSectionHeading
          eyebrow={titles?.eyebrow ?? "Projekte"}
          title={titles?.title ?? "Unsere Projekte"}
          text={titles?.text}
        />
      ) : null}

      <div
        className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-12" : ""}`}
      >
        {visible.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-3xl bg-[var(--preview-background)] ring-1 ring-[var(--preview-border)]"
          >
            <PreviewImageFrame
              image={project.image}
              placeholderIcon={TRADE_ICON[config.trade]}
              rounded="rounded-none"
              className="aspect-4/3 w-full"
            />

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="rounded-full bg-[var(--preview-tint-strong)] px-3 py-1 text-xs font-bold text-[var(--preview-primary)]">
                  {project.category}
                </span>
                {project.location ? (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--preview-muted)]">
                    <PreviewIcon name="mapPin" className="h-3.5 w-3.5" />
                    {project.location}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-3 text-lg font-bold tracking-tight">
                {project.title}
              </h3>
              {project.description ? (
                <p className="mt-2 text-sm leading-relaxed text-[var(--preview-muted)]">
                  {project.description}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {hasMore ? (
        <div className="mt-10 text-center">
          <PreviewButton
            href={previewPath(config.slug, "projects")}
            variant="outline"
            size="lg"
            icon="arrowRight"
          >
            Alle Projekte ansehen
          </PreviewButton>
        </div>
      ) : null}
    </PreviewSection>
  );
}
