import Image from "next/image";
import type React from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export const ContactHero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 border-brand-line border-b bg-[#f8f9fa] pt-[68px] lg:pt-[92px] lg:grid-cols-[5fr_4fr]">
      {/* Copy holds the shared left margin even though the panel is full-bleed */}
      <div className="py-16 pr-4 pl-[var(--shell-gutter)] sm:pr-8 lg:py-[108px] lg:pr-16">
        <SectionEyebrow>Get in Touch</SectionEyebrow>

        <h1 className="mt-4 max-w-[640px] font-medium text-4xl text-brand-dark leading-[1.15] tracking-tight sm:text-5xl">
          Let&apos;s build what you need.
        </h1>

        <p className="mt-8 max-w-[560px] text-[#4a4a4a] text-base leading-[1.65]">
          Whether you need a standard component, a repeat production order or a customised machined
          part, share your requirement with our team.
        </p>
      </div>

      {/* Photo bleeds to the right edge of the screen */}
      <div className="relative min-h-[320px] bg-brand-dark lg:min-h-[468px]">
        <Image
          src="/assets/contact/hero.jpg"
          alt="Turning operation throwing sparks on the machine shop floor"
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          priority
          className="object-cover object-center"
          unoptimized
        />
        <span className="absolute right-6 bottom-6 left-6 text-white text-xs uppercase tracking-[0.1em] sm:right-8 sm:bottom-8 sm:left-8 sm:text-sm">
          Precision Engineering &amp; Global Export · Kolkata
        </span>
      </div>
    </section>
  );
};
