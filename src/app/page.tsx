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
      <LoadingScreen />
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
    </>
  );
}
