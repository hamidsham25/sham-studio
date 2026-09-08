import { mailHref, telHref } from "@/lib/previews/core/links";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";
import PreviewContainer from "@/components/preview/core/ui/PreviewContainer";

type ShkTopBarProps = {
  config: PreviewConfig;
};

/** SHK: rote Notdienst-Leiste – immer sichtbar, auch auf Mobil. */
export default function ShkTopBar({ config }: ShkTopBarProps) {
  return (
    <div className="bg-[var(--preview-primary)] text-[var(--preview-on-primary)]">
      <PreviewContainer>
        <div className="flex min-h-10 flex-wrap items-center justify-between gap-3 py-2 text-xs font-semibold sm:text-sm">
          <p className="inline-flex items-center gap-2">
            <PreviewIcon name="shield" className="h-4 w-4 shrink-0" />
            {config.topBarMessage ?? "24h Notdienst erreichbar"}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={telHref(config.contact.phone)}
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <PreviewIcon name="phone" className="h-3.5 w-3.5" />
              {config.contact.phone}
            </a>
            <a
              href={mailHref(config.contact.email)}
              className="hidden items-center gap-1.5 transition-opacity hover:opacity-80 sm:inline-flex"
            >
              <PreviewIcon name="mail" className="h-3.5 w-3.5" />
              {config.contact.email}
            </a>
          </div>
        </div>
      </PreviewContainer>
    </div>
  );
}
