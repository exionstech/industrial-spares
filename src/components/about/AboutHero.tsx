import Image from "next/image";
import type React from "react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CONTACT_ROUTE } from "@/lib/constants";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-[-120px] translate-y-40 translate-x-32 opacity-100 lg:opacity-100">
        <Image
          alt="Map of export destinations served from Kolkata"
          className="h-full w-full scale-[0.6] translate-y-[-120px] translate-x-[-130px] object-contain object-center opacity-25 lg:hidden"
          fill
          priority
          sizes="100vw"
          src="/assets/about/mobile-about-hero-bg.png"
          unoptimized
        />
        <Image
          alt="Map of export destinations served from Kolkata"
          className="hidden h-full w-full object-contain object-center opacity-25 lg:block"
          fill
          priority
          sizes="100vw"
          src="/assets/about/about-hero-bg.png"
          unoptimized
        />
      </div>

      <div className="relative mx-auto max-w-shell px-4 pt-32 pb-8 text-center sm:px-8 lg:pt-[226px] lg:pb-[26px] lg:text-left">
        <SectionEyebrow className="relative z-10 justify-center lg:justify-start">
          From Kolkata to the World
        </SectionEyebrow>

        <h1 className="mt-6 mx-auto max-w-[640px] font-medium text-[30px] text-brand-dark leading-[1.2] tracking-tight sm:text-6xl sm:leading-[1.08] lg:mx-0 lg:text-[4.5rem]">
          Wherever you are,<span className="block sm:inline"> we deliver.</span>
        </h1>

        <p className="mx-auto mt-4 max-w-[470px] text-[#4a4a4a] text-base leading-[1.7] sm:mt-8 lg:mx-0">
          30+ years of export experience and regular supply relationships with customers across
          international markets.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-start">
          <Button
            className="w-[224px] lg:order-2 lg:w-auto"
            href={CONTACT_ROUTE}
            size="cta"
            variant="primary"
          >
            Request A Quote
          </Button>
          <Button
            className="w-[224px] lg:order-1 lg:w-auto"
            href="/#products"
            size="cta"
            variant="secondary"
          >
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
};
