import { useEffect, useState } from "react";
import Lenis from "lenis";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
import { CTASection } from "@/components/CTASection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/data";

function App() {
  const [showTop, setShowTop] = useState(false);

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

    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.removeEventListener("scroll", onScroll);
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
        <CTASection />
        <Contact />
      </main>
      <Footer />

      {/* Floating contact stack */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {showTop && (
            <motion.button
              key="top"
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-testid="floating-top"
              aria-label="Back to top"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-elegant-lg transition-transform duration-300 hover:scale-110"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.a
          data-testid="floating-phone"
          href={`tel:${COMPANY.phone1}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Call us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-elegant-lg ring-1 ring-black/5 transition-transform duration-300 hover:scale-110"
        >
          <Phone size={22} />
        </motion.a>

        <motion.a
          data-testid="floating-whatsapp"
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Chat on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant-lg transition-transform duration-300 hover:scale-110"
        >
          <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-white/90">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/60" />
          </span>
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </div>
  );
}

export default App;
