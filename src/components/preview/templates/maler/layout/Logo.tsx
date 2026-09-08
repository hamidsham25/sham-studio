import Link from "next/link";
import { previewPath } from "@/components/preview/templates/maler/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";

type MalerLogoProps = {
  config: PreviewConfig;
  className?: string;
};

/** Maler-Wortmarke mit Pinsel-Icon. */
export default function MalerLogo({
  config,
  className = "",
}: MalerLogoProps) {
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
          className="h-10 w-auto"
        />
      ) : (
        <>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--preview-primary)] text-[var(--preview-on-primary)]">
            <PreviewIcon name={TRADE_ICON[config.trade]} className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            {config.businessName}
          </span>
        </>
      )}
    </Link>
  );
}
