import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      {/* Hero & Inhalt zuerst im DOM → LCP kann früher gemessen werden */}
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
      {/* Nur optisches Overlay – liegt mit z-index darüber */}
      <LoadingScreen />
    </>
  );
}
