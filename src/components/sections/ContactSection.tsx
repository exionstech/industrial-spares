import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { IMAGES } from "@/lib/constants";

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="contact" className="bg-brand-red-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Column Text Content */}
        <div className="p-8 sm:p-12 lg:p-16 space-y-8 z-10">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-red-200 block">
              Contact us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s discuss your requirement.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-red-100 font-medium leading-relaxed max-w-xl">
            Contact us for enquiries about our mechanical power transmission products and CNC
            machined components.
          </p>

          <div className="pt-4">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-4 text-lg sm:text-xl font-bold tracking-tight text-white hover:text-red-200 group border-b-2 border-white/40 pb-2 transition-all"
            >
              <span>Let&apos;s get in touch</span>
              <div className="w-8 h-8 rounded-full bg-white text-brand-red flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="relative min-h-[400px] lg:min-h-[600px] w-full h-full bg-red-950 overflow-hidden">
          <Image
            src={IMAGES.contactEngineer}
            alt="Manufacturing Engineer & Quality Manager"
            fill
            className="object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-red-dark via-transparent to-transparent lg:bg-gradient-to-r lg:from-brand-red-dark lg:via-transparent lg:to-transparent" />
        </div>
      </div>
    </section>
  );
};
