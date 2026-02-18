import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  return (
    <>
      {/* Hero & Inhalt zuerst im DOM → LCP kann früher gemessen werden */}
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <div className="relative z-20 isolate" style={{ transform: "translateZ(0)" }}>
          <Services />
          <About />
          <div className="h-px w-full shrink-0 bg-zinc-600" aria-hidden />
          <Contact />
        </div>
      </main>
      <Footer />
      {/* Nur optisches Overlay – liegt mit z-index darüber */}
      <LoadingScreen />
    </>
  );
}
