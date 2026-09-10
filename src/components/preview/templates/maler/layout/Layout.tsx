import type { ReactNode } from "react";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import type { PageKey } from "@/components/preview/templates/maler/navigation";
import type { PreviewConfig } from "@/lib/previews/core/types";
import PreviewShell from "@/components/preview/core/PreviewShell";
import Footer from "./Footer";
import Header from "./Header";
import TopBar from "./TopBar";

/** Fließtext – klar und schlicht. */
const malerSans = Source_Sans_3({
  variable: "--preview-font-sans",
  subsets: ["latin"],
  display: "swap",
});

/** Überschriften + Nav – Serif, damit Navbar und Headlines sich abheben. */
const malerDisplay = Source_Serif_4({
  variable: "--preview-font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

type MalerLayoutProps = {
  config: PreviewConfig;
  activePage: PageKey;
  children: ReactNode;
};

/** Maler-Template: TopBar scrollt weg, nur die Navbar ist sticky. */
export default function MalerLayout({
  config,
  activePage,
  children,
}: MalerLayoutProps) {
  return (
    <div className={`${malerSans.variable} ${malerDisplay.variable}`}>
      <PreviewShell config={config}>
        <TopBar config={config} />
        <Header config={config} activePage={activePage} />
        <main>{children}</main>
        <Footer config={config} />
      </PreviewShell>
    </div>
  );
}
