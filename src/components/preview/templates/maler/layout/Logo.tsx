import Link from "next/link";
import { previewPath } from "@/components/preview/templates/maler/navigation";
import { TRADE_ICON } from "@/lib/previews/core/trade";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewIcon from "@/components/preview/core/ui/PreviewIcon";

type MalerLogoProps = {
  config: PreviewConfig;
  className?: string;
  /** Auf transparenter Navbar über dem Hero: helle Schrift. */
  inverted?: boolean;
  onClick?: () => void;
};

/** Maler-Wortmarke mit Pinsel-Icon. */
export default function MalerLogo({
  config,
  className = "",
  inverted = false,
  onClick,
}: MalerLogoProps) {
  return (
    <Link
      href={previewPath(config.slug)}
      onClick={onClick}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      {config.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={config.logoUrl}
          alt={config.businessName}
          className="h-11 w-auto md:h-12"
        />
      ) : (
        <>
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--preview-primary)] text-[var(--preview-on-primary)] md:h-12 md:w-12">
            <PreviewIcon name={TRADE_ICON.maler} className="h-5 w-5" />
          </span>
          <span
            className={`preview-nav-link text-xl font-bold tracking-tight md:text-2xl ${
              inverted ? "text-white" : "text-[var(--preview-foreground)]"
            }`}
          >
            {config.businessName}
          </span>
        </>
      )}
    </Link>
  );
}
