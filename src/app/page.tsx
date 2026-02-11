import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CtaBanner from "@/components/CtaBanner";
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
        <Contact />
        <CtaBanner />
      </main>
      <footer className="py-8">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Sham Studio. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </>
  );
}
