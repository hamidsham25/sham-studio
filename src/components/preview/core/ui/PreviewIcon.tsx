import type { ReactNode } from "react";
import type { PreviewIconName } from "@/lib/previews/core/types";

/**
 * Icon-Set der Preview-Bausteine. Alle Icons erben die Farbe per currentColor,
 * damit sie sich automatisch mit den --preview-* Variablen umfärben.
 */
const ICONS: Record<PreviewIconName, ReactNode> = {
  brush: (
    <>
      <path d="M10.5 2.5h3v8h-3z" />
      <path d="M9.5 10.5h5v3h-5z" />
      <path d="M10 13.5h4l-.5 5.5a1.5 1.5 0 0 1-3 0z" />
    </>
  ),
  roller: (
    <>
      <rect x="3" y="4" width="13" height="6" rx="1.5" />
      <path d="M16 7h3.5A1.5 1.5 0 0 1 21 8.5v2A1.5 1.5 0 0 1 19.5 12H12v3" />
      <rect x="10.5" y="15" width="3" height="6" rx="1" />
    </>
  ),
  wall: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 12h18M9 5v7M15 12v7" />
    </>
  ),
  droplet: <path d="M12 3s6 5.7 6 9.6A6 6 0 0 1 6 12.6C6 8.7 12 3 12 3z" />,
  ruler: (
    <>
      <rect x="1.5" y="8.5" width="21" height="7" rx="1.5" />
      <path d="M6 8.5v3M10 8.5v3M14 8.5v3M18 8.5v3" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v5.5c0 4.9-3.4 8.2-8 9.5-4.6-1.3-8-4.6-8-9.5V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-4.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.8 2.3" />
    </>
  ),
  euro: (
    <>
      <path d="M18 5.5A7.5 7.5 0 1 0 18 18.5" />
      <path d="M4 10.5h9M4 13.5h9" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4C10.5 4 4 10.5 4 20c9.5 0 16-6.5 16-16z" />
      <path d="M4 20c3.5-4 7.5-6.5 12-8" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M18.4 15.4l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14.2 7 22l5-2.6 5 2.6-1.5-7.8" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
      <path d="M16 5.2a3.5 3.5 0 0 1 0 5.6" />
      <path d="M18 14.2c2.1.9 3.5 3 3.5 5.8" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  star: (
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
  ),
  phone: (
    <path d="M6.5 3h3.2l1.8 4.5-2.4 1.6a11.5 11.5 0 0 0 5.8 5.8l1.6-2.4L21 14.3v3.2a2.5 2.5 0 0 1-2.7 2.5A16.8 16.8 0 0 1 4 5.7 2.5 2.5 0 0 1 6.5 3z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.6 13.8L3.2 21l4.4-1.2A9 9 0 1 0 12 3z" />
      <path d="M9.2 9.4c0 3 2.4 5.4 5.4 5.4.5 0 1-.4 1-.9l-1.7-.9-1 1a5.6 5.6 0 0 1-2.4-2.4l1-1-.9-1.7c-.5 0-1.4.1-1.4.5z" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21.5s7-6.9 7-11.5a7 7 0 1 0-14 0c0 4.6 7 11.5 7 11.5z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrowRight: <path d="M4 12h15M13 6l6 6-6 6" />,
};

/** Icons, die flächig statt als Kontur gezeichnet werden. */
const FILLED: PreviewIconName[] = ["star"];

type PreviewIconProps = {
  name: PreviewIconName;
  className?: string;
};

export default function PreviewIcon({
  name,
  className = "h-5 w-5",
}: PreviewIconProps) {
  const isFilled = FILLED.includes(name);

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ICONS[name]}
    </svg>
  );
}
