import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Applications } from "@/components/about/Applications";
import { Capabilities } from "@/components/about/Capabilities";
import { Experience } from "@/components/about/Experience";
import { InsideManufacturing } from "@/components/about/InsideManufacturing";
import { OurApproach } from "@/components/about/OurApproach";
import { OurStory } from "@/components/about/OurStory";
import { QualityInspection } from "@/components/about/QualityInspection";
import { VisionMission } from "@/components/about/VisionMission";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About Us | Industrial Spares Manufacturing Company",
  description:
    "Manufacturing precision shaft collars, couplings and machined components in Kolkata since 1993. ISO 9001 certified, exporting to the USA, Australia, New Zealand and beyond.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />

      <div className="flex-1">
        <AboutHero />
        <OurStory />
        <InsideManufacturing />
        <Capabilities />
        <QualityInspection />
        <Experience />
        <Applications />
        <OurApproach />
        <VisionMission />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
