import Image from "next/image";
import type React from "react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/constants";

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[750px] lg:min-h-[820px] flex items-center pt-24 pb-16 bg-gray-900 overflow-hidden"
    >
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.heroBg}
          alt="Industrial Spares Manufacturing Facility"
          fill
          className="object-cover object-center opacity-60"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white space-y-6 animate-fade-in">
          {/* Subtitle / Kicker */}
          <div className="inline-flex items-center gap-2">
            <span className="h-0.5 w-6 bg-brand-orange"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-200">
              FROM KOLKATA TO THE WORLD
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Wherever you are, <br />
            <span className="text-brand-red">we deliver.</span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
            30+ years of export experience and regular supply relationships with customers across
            international markets.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#products">
              <Button variant="secondary">EXPLORE PRODUCTS</Button>
            </a>
            <Button onClick={onOpenQuoteModal} variant="primary">
              REQUEST A QUOTE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
