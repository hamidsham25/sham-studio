"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesPageHero from "@/components/ServicesPageHero";
import ServicesRows from "@/components/ServicesRows";
import { ContactModalProvider } from "@/components/ContactModalContext";
import { markLoadingScreenSeen } from "@/lib/loading-screen";

const SERVICES_LEAD =
  "Vom ersten Markenauftritt bis zur messbaren Anfrage über Google: Wir verbinden Design, Technik und Marketing zu einem klaren System – damit aus Besuchern echte Kunden werden.";

export default function ServicesPage() {
  useEffect(() => {
    markLoadingScreenSeen();
  }, []);

  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-white text-zinc-900">
        <Header />
        <main>
          <ServicesPageHero lead={SERVICES_LEAD} />

          <section id="services-list" className="relative z-0 bg-white">
            <div className="mx-auto max-w-6xl px-6 pb-20 md:px-8 md:pb-28 lg:px-10">
              <ServicesRows />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ContactModalProvider>
  );
}
