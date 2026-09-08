import type { PreviewStat } from "@/lib/previews/core/types";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";

type PreviewStatsProps = {
  stats: PreviewStat[];
  /** Optional: Überschrift links neben den Kennzahlen (HandGrid-Stil). */
  heading?: string;
  text?: string;
};

export default function PreviewStats({
  stats,
  heading,
  text,
}: PreviewStatsProps) {
  const statCards = (
    <dl
      className={`grid gap-4 ${
        heading
          ? "sm:grid-cols-3"
          : "gap-px overflow-hidden rounded-3xl bg-[var(--preview-border)] sm:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={
            heading
              ? "rounded-2xl bg-[var(--preview-surface)] px-6 py-8 text-center ring-1 ring-[var(--preview-border)]"
              : "bg-[var(--preview-tint)] px-6 py-8 text-center"
          }
        >
          <dt className="text-3xl font-extrabold tracking-tight text-[var(--preview-primary)] sm:text-4xl">
            {stat.value}
          </dt>
          <dd className="mt-1.5 text-sm font-medium text-[var(--preview-muted)]">
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );

  if (!heading) {
    return (
      <div className="pb-16 md:pb-24">
        <PreviewContainer>{statCards}</PreviewContainer>
      </div>
    );
  }

  return (
    <div className="pb-16 md:pb-24">
      <PreviewContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
              {heading}
            </h2>
            {text ? (
              <p className="mt-3 leading-relaxed text-[var(--preview-muted)]">
                {text}
              </p>
            ) : null}
          </div>
          {statCards}
        </div>
      </PreviewContainer>
    </div>
  );
}
