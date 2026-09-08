import type { ReactNode } from "react";
import type { PreviewSocialPlatform } from "@/lib/previews/core/types";

const LABELS: Record<PreviewSocialPlatform, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  x: "X",
  youtube: "YouTube",
  tiktok: "TikTok",
};

const FILLED_ICONS: Partial<Record<PreviewSocialPlatform, ReactNode>> = {
  facebook: (
    <path d="M13.4 21v-7.1h2.4l.4-2.9h-2.8V9.2c0-.9.3-1.4 1.6-1.4h1.3V5.1c-.6-.1-1.5-.2-2.4-.2-2.4 0-4 1.4-4 4.1V11H8v2.9h2.5V21z" />
  ),
  linkedin: (
    <>
      <path d="M4.5 9h3v10h-3z" />
      <path d="M6 4.4a1.8 1.8 0 1 0 0 3.7 1.8 1.8 0 0 0 0-3.7z" />
      <path d="M10 19V9h2.9v1.4c.5-.9 1.6-1.6 3.2-1.6 2.4 0 3.9 1.5 3.9 4.3V19h-3v-5.2c0-1.3-.6-2.1-1.8-2.1s-2.2.8-2.2 2.3V19z" />
    </>
  ),
  x: (
    <path d="M4 4h4.1l3.8 5.2L16.6 4h3l-6.2 7 6.7 9h-4.1l-4-5.5L7.4 20h-3l6.4-7.3z" />
  ),
  tiktok: (
    <path d="M14 3h2.6A5 5 0 0 0 21 7.3v2.6a7.6 7.6 0 0 1-4.4-1.4v5.4A5.7 5.7 0 1 1 11 8.2v2.9a2.8 2.8 0 1 0 2 2.7z" />
  ),
};

const OUTLINE_ICONS: Partial<Record<PreviewSocialPlatform, ReactNode>> = {
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M11 9.5l4.5 2.5L11 14.5z" fill="currentColor" stroke="none" />
    </>
  ),
};

type PreviewSocialIconProps = {
  platform: PreviewSocialPlatform;
  className?: string;
};

export default function PreviewSocialIcon({
  platform,
  className = "h-4 w-4",
}: PreviewSocialIconProps) {
  const filled = FILLED_ICONS[platform];

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {filled ?? OUTLINE_ICONS[platform]}
    </svg>
  );
}

export function socialLabel(platform: PreviewSocialPlatform) {
  return LABELS[platform];
}
