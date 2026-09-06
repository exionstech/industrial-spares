import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CertificationSection } from "@/components/sections/CertificationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ValuePropositions } from "@/components/sections/ValuePropositions";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />

      <div className="flex-1">
        <HeroSection />
        <CertificationSection />
        <ProductsSection />
        <ValuePropositions />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
