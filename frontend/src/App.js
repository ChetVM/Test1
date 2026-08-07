import { useEffect } from "react";
import Lenis from "lenis";
import { MessageCircle } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Industries } from "@/components/Industries";
import { FleetGallery } from "@/components/FleetGallery";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/data";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Services />
        <WhyChooseUs />
        <Industries />
        <FleetGallery />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp */}
      <a
        data-testid="floating-whatsapp"
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

export default App;
