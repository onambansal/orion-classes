import FreeTrialBanner from "@/components/FreeTrialBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <main className="pb-16 md:pb-0">
      <FreeTrialBanner />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </main>
  );
}
