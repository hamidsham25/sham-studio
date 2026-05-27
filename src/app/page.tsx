import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import FaqSection from "@/components/FaqSection";
import StructuredData from "@/components/StructuredData";
import { ContactModalProvider } from "@/components/ContactModalContext";
import { HOME_FAQ } from "@/lib/faq-content";
import { faqPageJsonLd, personJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <ContactModalProvider>
      <StructuredData data={[faqPageJsonLd(HOME_FAQ), personJsonLd()]} />
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <div className="h-px w-full shrink-0 bg-zinc-600" aria-hidden />
        <Contact />
        <FaqSection items={HOME_FAQ} />
      </main>
      <Footer />
      <LoadingScreen />
    </ContactModalProvider>
  );
}
