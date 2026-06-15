import FreeTrialBanner from "@/components/FreeTrialBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <FreeTrialBanner />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <WhyChoose />
      <Programs />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
