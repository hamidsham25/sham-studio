import type { ReactNode } from "react";

type MalerNavContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Seitenabstand für TopBar/Navbar – angeglichen an die Sections. */
export default function MalerNavContainer({
  children,
  className = "",
}: MalerNavContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 md:px-7 ${className}`}>
      {children}
    </div>
  );
}
