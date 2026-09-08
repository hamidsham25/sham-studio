import type { ReactNode } from "react";

type PreviewContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Einheitliche Seitenbreite und Innenabstände aller Preview-Sektionen. */
export default function PreviewContainer({
  children,
  className = "",
}: PreviewContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
