import Link from "next/link";
import type { ReactNode } from "react";
import type { PreviewIconName } from "@/lib/previews/core/types";
import PreviewIcon from "./PreviewIcon";

type PreviewButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  /** Für Buttons, die auf der Akzentfarbe stehen (siehe globals.css). */
  | "onPrimary"
  /** Halbtransparent auf dunklem Hintergrund (z. B. Hero-Overlay). */
  | "ghostLight";

const VARIANT_CLASS: Record<PreviewButtonVariant, string> = {
  primary:
    "bg-[var(--preview-primary)] text-[var(--preview-on-primary)] hover:bg-[var(--preview-primary-hover)]",
  secondary:
    "bg-[var(--preview-background)] text-[var(--preview-foreground)] ring-1 ring-[var(--preview-border)] hover:ring-[var(--preview-primary)]",
  outline:
    "text-[var(--preview-primary)] ring-1 ring-[var(--preview-primary-border)] hover:bg-[var(--preview-tint)]",
  onPrimary: "preview-btn-on-primary",
  ghostLight:
    "bg-white/10 text-white ring-1 ring-white/35 hover:bg-white/20 hover:ring-white/55",
};

const SIZE_CLASS = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
} as const;

type PreviewButtonProps = {
  href: string;
  children: ReactNode;
  variant?: PreviewButtonVariant;
  size?: keyof typeof SIZE_CLASS;
  icon?: PreviewIconName;
  className?: string;
};

export default function PreviewButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
}: PreviewButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors ${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${className}`;
  const content = (
    <>
      {icon ? <PreviewIcon name={icon} className="h-4 w-4" /> : null}
      {children}
    </>
  );

  // Interne Preview-Links über next/link, tel:/mailto:/externe als <a>.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={classes}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {content}
    </a>
  );
}
