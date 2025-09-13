import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import TestimonialStrip from "@/components/TestimonialStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full">
      <Navigation />
      <Hero />
      <TestimonialStrip />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}