import type React from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { VISION_PILLARS } from "@/lib/constants";

export const VisionMission: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionEyebrow>Vision &amp; Mission</SectionEyebrow>
            <h2 className="mt-3 max-w-[540px] font-medium text-3xl text-brand-dark leading-[1.25] tracking-tight">
              Taking Kolkata-made engineering to the world.
            </h2>
          </div>

          <div>
            <p className="text-brand-dark text-lg leading-[1.6]">
              Founded by Janardan Paul, Industrial Spares was built with a simple yet ambitious
              vision: to put Kolkata on the global map as a trusted source for precision mechanical
              and machine components.
            </p>
            <p className="mt-7 text-base text-brand-muted leading-[1.65]">
              What began from nothing has grown into a business serving customers across the USA,
              Australia, New Zealand and other international markets, while maintaining a strong
              presence in the local market.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VISION_PILLARS.map((pillar) => (
            <div className="bg-brand-bg-light p-7" key={pillar.title}>
              <h3 className="text-brand-red text-sm uppercase tracking-[0.08em]">{pillar.title}</h3>
              <p className="mt-4 text-brand-dark text-sm leading-[1.6]">{pillar.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-[1200px] text-base text-brand-dark leading-[1.65]">
          We believe in making connections that last, combining competitive manufacturing with
          personal service, and taking Kolkata-made engineering to the world.
        </p>
      </div>
    </section>
  );
};
