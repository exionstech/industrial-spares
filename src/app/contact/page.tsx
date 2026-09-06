import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { DirectRelationships } from "@/components/contact/DirectRelationships";
import { LocationsSection } from "@/components/contact/LocationsSection";
import { MapSection } from "@/components/contact/MapSection";
import { RfqSection } from "@/components/contact/RfqSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Contact & RFQ | Industrial Spares Manufacturing Company",
  description:
    "Send your requirement to Industrial Spares Manufacturing Company - ISO 9001:2015 certified manufacturer and exporter of shaft collars, couplings and precision CNC machined components from Kolkata, India.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />

      <div className="flex-1">
        <ContactHero />
        <RfqSection />
        <LocationsSection />
        <MapSection />
        <DirectRelationships />
      </div>

      <Footer />
    </main>
  );
}
