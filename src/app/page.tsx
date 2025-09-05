"use client";

import Hero from "@/components/Hero/Hero";
import IntroSection from "@/components/IntroSection/IntroSection";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function HomePage() {
  return (
    <main className="w-full bg-gray-50 text-gray-800">
      <Hero />
      <IntroSection />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
