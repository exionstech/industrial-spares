import type React from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { APPROACH_PILLARS } from "@/lib/constants";

export const OurApproach: React.FC = () => {
  return (
    <section className="border-brand-line border-y bg-brand-bg-light py-20 lg:py-[120px]">
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        <SectionEyebrow>Our Approach</SectionEyebrow>
        <h2 className="mt-3 font-medium text-3xl text-brand-dark tracking-tight">
          Precision manufactured. Reliably delivered.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="max-w-[560px] text-brand-dark text-lg leading-[1.6]">
              At Industrial Spares, we believe that successful business relationships are built on
              more than simply supplying a component. We focus on understanding the application,
              meeting specifications accurately and providing dependable service throughout the
              process.
            </p>

            <p className="mt-8 max-w-[540px] text-base text-brand-muted leading-[1.65]">
              From customised components and small-batch requirements to repeat production orders,
              our objective is simple: to deliver products that meet expectations and build
              relationships that last.
            </p>

            <blockquote className="mt-10 max-w-[560px] font-medium text-2xl text-brand-red leading-[1.35]">
              Industrial Spares &mdash; Precision manufactured. Reliably delivered.
            </blockquote>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {APPROACH_PILLARS.map((pillar) => (
              <div className="bg-white p-8 shadow-sm" key={pillar.number}>
                <div className="flex items-baseline gap-3">
                  <span className="text-base text-brand-muted">{pillar.number}</span>
                  <h3 className="text-brand-red text-sm uppercase tracking-[0.08em]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 text-brand-muted text-sm leading-[1.6]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
