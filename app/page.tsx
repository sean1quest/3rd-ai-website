import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Architecture from "@/components/sections/Architecture";
import Platform from "@/components/sections/Platform";
import CommercialValidation from "@/components/sections/CommercialValidation";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Architecture />
        <Platform />
        <CommercialValidation />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
