import type { ReactNode } from "react";
import type { PageKey } from "@/components/preview/templates/maler/navigation";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewShell from "@/components/preview/core/PreviewShell";
import Footer from "./Footer";
import Header from "./Header";
import TopBar from "./TopBar";

type MalerLayoutProps = {
  config: PreviewConfig;
  activePage: PageKey;
  children: ReactNode;
};

/** Maler-Template: helle Colorix-Struktur mit TopBar + Pill-Navigation. */
export default function MalerLayout({
  config,
  activePage,
  children,
}: MalerLayoutProps) {
  return (
    <PreviewShell config={config}>
      <TopBar config={config} />
      <Header config={config} activePage={activePage} />
      <main>{children}</main>
      <Footer config={config} />
    </PreviewShell>
  );
}
