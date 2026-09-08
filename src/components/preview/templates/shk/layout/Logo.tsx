import Link from "next/link";
import { previewPath } from "@/components/preview/templates/shk/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";

type ShkLogoProps = {
  config: PreviewConfig;
  className?: string;
  /** Auf dunklem Header: helle Schrift. */
  inverted?: boolean;
};

/** SHK-Wortmarke mit Tropfen-Icon. */
export default function ShkLogo({
  config,
  className = "",
  inverted = false,
}: ShkLogoProps) {
  return (
    <Link
      href={previewPath(config.slug)}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      {config.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={config.logoUrl}
          alt={config.businessName}
          className="h-9 w-auto"
        />
      ) : (
        <>
          <span
            className={`flex h-9 w-9 items-center justify-center ${
              inverted
                ? "bg-[var(--preview-primary)] text-[var(--preview-on-primary)]"
                : "bg-[var(--preview-tint-strong)] text-[var(--preview-primary)]"
            }`}
          >
            <PreviewIcon name={TRADE_ICON.shk} className="h-5 w-5" />
          </span>
          <span
            className={`text-base font-extrabold uppercase tracking-wide ${
              inverted ? "text-[var(--preview-background)]" : ""
            }`}
          >
            {config.businessName}
          </span>
        </>
      )}
    </Link>
  );
}
