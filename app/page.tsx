import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Architecture from "@/components/sections/Architecture";
import Platform from "@/components/sections/Platform";
import Capabilities from "@/components/sections/Capabilities";
import CommercialValidation from "@/components/sections/CommercialValidation";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Architecture />
        <Platform />
        <Capabilities />
        <CommercialValidation />
        <CTA />
      </main>
    </>
  );
}