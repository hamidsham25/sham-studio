import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewShell from "@/components/preview/core/PreviewShell";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";

type Props = { config: PreviewConfig };

/** Minimaler Platzhalter für demo, PV und Sanierung – bis eigenes Template existiert. */
function FallbackPage({ config }: Props) {
  return (
    <PreviewShell config={config}>
      <PreviewContainer className="py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--preview-primary)]">
          Entwurf – Template noch nicht gebaut
        </p>
        <h1 className="mt-3 text-3xl font-bold">{config.businessName}</h1>
        <p className="mt-2 text-[var(--preview-muted)]">{config.tagline}</p>
        <p className="mt-6 text-sm text-[var(--preview-muted)]">
          Branche: <strong className="text-[var(--preview-foreground)]">{config.trade}</strong>
          {" · "}
          Für diese Branche gibt es noch kein eigenes Template unter{" "}
          <code className="text-[var(--preview-primary)]">
            src/components/preview/templates/{config.trade}/
          </code>
        </p>

        {config.services.length > 0 ? (
          <ul className="mt-8 space-y-3">
            {config.services.map((service) => (
              <li
                key={service.title}
                className="rounded-xl bg-[var(--preview-surface)] p-4 ring-1 ring-[var(--preview-border)]"
              >
                <strong>{service.title}</strong>
                <p className="mt-1 text-sm text-[var(--preview-muted)]">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </PreviewContainer>
    </PreviewShell>
  );
}

export default FallbackPage;
