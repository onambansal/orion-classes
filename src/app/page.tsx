import FreeTrialBanner from "@/components/FreeTrialBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import AssessmentBanner from "@/components/AssessmentBanner";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import ScrollReveal from "@/components/ScrollReveal";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <main className="pb-16 md:pb-0">
      <FreeTrialBanner />
      <Navbar />
      <Hero />

      {/* Hero → About: white to white */}
      <WaveDivider fromColor="#ffffff" toColor="#ffffff" />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      {/* About → Programs: white to purple-50 */}
      <WaveDivider fromColor="#ffffff" toColor="#f5f3ff" />

      <ScrollReveal>
        <Programs />
      </ScrollReveal>

      {/* Programs → Assessment Banner */}
      <AssessmentBanner />

      {/* Assessment Banner → Testimonials */}
      <WaveDivider fromColor="#ffffff" toColor="#f5f3ff" />

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      {/* Testimonials → Gallery: white to gray-50 */}
      <WaveDivider fromColor="#ffffff" toColor="#f9fafb" />

      <ScrollReveal>
        <Gallery />
      </ScrollReveal>

      {/* Gallery → Contact: gray-50 to purple-50 */}
      <WaveDivider fromColor="#f9fafb" toColor="#faf5ff" />

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </main>
  );
}
