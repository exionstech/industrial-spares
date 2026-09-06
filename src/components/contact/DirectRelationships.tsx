import type React from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { FOUNDER } from "@/lib/constants";

export const DirectRelationships: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-[120px]">
      <div className="mx-auto grid max-w-shell grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_624px] lg:gap-16">
        <Reveal>
          <SectionEyebrow>Direct Relationships</SectionEyebrow>

          <h2 className="mt-4 max-w-[520px] font-medium text-3xl text-brand-dark leading-[1.25] tracking-tight">
            A direct line to the people behind the manufacturing.
          </h2>

          <p className="mt-8 max-w-[530px] text-[#4a4a4a] text-sm leading-[1.75]">
            At the heart of Industrial Spares is a deeply personal approach to business. Janardan
            Paul remains personally involved with customers, corresponding with and following up
            with clients himself, while the team continues to develop new international
            relationships.
          </p>
        </Reveal>

        {/* Founder card */}
        <div className="flex items-center gap-6 self-start border border-brand-line bg-[#f8f9fa] p-8 lg:p-10">
          <span
            aria-hidden="true"
            className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-brand-red font-medium text-2xl text-white"
          >
            {FOUNDER.initials}
          </span>
          <div>
            <h3 className="font-medium text-brand-dark text-lg">{FOUNDER.name}</h3>
            <p className="mt-1.5 text-brand-red text-sm uppercase tracking-[0.08em]">
              {FOUNDER.role}
            </p>
            <p className="mt-1.5 text-[#4a4a4a] text-sm">{FOUNDER.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
