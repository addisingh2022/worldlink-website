"use client";

import { motion, Transition } from "framer-motion";
import Hero from "@/components/Hero/Hero";
import IntroSection from "@/components/IntroSection/IntroSection";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function HomePage() {
  const animationSettings = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0 },
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } as Transition, // <-- fix here
  };

  return (
    <main className="w-full bg-gray-50 text-gray-800">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }} // <-- fix here
        className="min-h-[70vh]"
      >
        <Hero />
      </motion.div>

      {/* Intro */}
      <IntroSection />

      {/* Services */}
      <motion.div {...animationSettings} className="min-h-[50vh]">
        <Services />
      </motion.div>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contact Form */}
      <motion.div {...animationSettings} className="min-h-[60vh]">
        <ContactForm />
      </motion.div>

      {/* Footer */}
      <motion.div {...animationSettings} className="min-h-[40vh]">
        <Footer />
      </motion.div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import Hero from "@/components/Hero/Hero";
// import IntroSection from "@/components/IntroSection/IntroSection";
// import Services from "@/components/Services/Services";
// import Testimonials from "@/components/Testimonials/Testimonials";
// import FAQ from "@/components/FAQ/FAQ";
// import ContactForm from "@/components/ContactForm/ContactForm";
// import Footer from "@/components/Footer/Footer";
// import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

// export default function HomePage() {
//   const animationSettings = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: false, amount: 0 },
//     transition: { duration: 0.6, ease: "easeOut" },
//   };

//   return (
//     <main className="w-full bg-gray-50 text-gray-800">
//       {/* Hero */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="min-h-[70vh]"
//       >
//         <Hero />
//       </motion.div>

//       {/* Intro */}
//       <IntroSection />

//       {/* Services */}
//       <motion.div {...animationSettings} className="min-h-[50vh]">
//         <Services />
//       </motion.div>

//       {/* Testimonials */}
//       <Testimonials />

//       {/* FAQ */}
//       <FAQ />

//       {/* Contact Form */}
//       <motion.div {...animationSettings} className="min-h-[60vh]">
//         <ContactForm />
//       </motion.div>

//       {/* Footer */}
//       <motion.div {...animationSettings} className="min-h-[40vh]">
//         <Footer />
//       </motion.div>

//       {/* WhatsApp Button */}
//       <WhatsAppButton />
//     </main>
//   );
// }
