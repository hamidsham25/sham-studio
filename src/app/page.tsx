import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { ContactModalProvider } from "@/components/ContactModalContext";

const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  return (
    <ContactModalProvider>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <div className="h-px w-full shrink-0 bg-zinc-600" aria-hidden />
        <Contact />
      </main>
      <Footer />
      <LoadingScreen />
    </ContactModalProvider>
  );
}
