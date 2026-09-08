"use client";

import { useState } from "react";
import type { PreviewIconName, PreviewImage } from "@/lib/previews/core/types";
import PreviewIcon from "./PreviewIcon";

type PreviewImageFrameProps = {
  image?: PreviewImage;
  /** Icon des Platzhalters, falls kein Bild in der Config steht. */
  placeholderIcon?: PreviewIconName;
  /** z. B. "aspect-[4/3]" oder "h-full" – vom aufrufenden Baustein gesetzt. */
  className?: string;
  rounded?: string;
};

/**
 * Einzige Stelle, an der Bilder aus der Config gerendert werden.
 * Fehlt das Bild, kommt ein Platzhalter in der Kundenfarbe – so sieht ein
 * Entwurf auch ohne Fotomaterial fertig aus.
 */
export default function PreviewImageFrame({
  image,
  placeholderIcon = "brush",
  className = "",
  rounded = "rounded-3xl",
}: PreviewImageFrameProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !image?.src || failed;

  return (
    <div
      className={`relative overflow-hidden bg-[var(--preview-tint)] ${rounded} ${className}`}
    >
      {!showPlaceholder ? (
        // Bilder kommen als beliebige URL aus der Config – ohne next/image,
        // damit für Kunden-Domains keine next.config-Anpassung nötig ist.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--preview-tint),var(--preview-tint-strong))]" />
          <div className="absolute inset-0 flex items-center justify-center text-[var(--preview-primary)] opacity-35">
            <PreviewIcon name={placeholderIcon} className="h-10 w-10" />
          </div>
        </>
      )}
    </div>
  );
}
