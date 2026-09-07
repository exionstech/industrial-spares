import type React from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
// import { MILESTONES } from "@/lib/constants";

export const OurStory: React.FC = () => {
  return (
    <section className="bg-white pt-[50px] pb-20 lg:py-[120px]">
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionEyebrow>Our Story</SectionEyebrow>
            <h2 className="mt-3 max-w-[480px] font-medium text-3xl text-brand-dark tracking-tight">
              Precision Engineering Since 1993
            </h2>
          </div>

          <div className="space-y-6 text-base leading-[1.65]">
            <p className="text-brand-dark">
              Industrial Spares Manufacturing Company was established in Kolkata in 1993 by Mr.
              Janardan Paul, initially as a merchant exporter of mechanical power transmission
              products to customers in the United States. Over the years, the company evolved into a
              manufacturing-led enterprise, developing its own machining capabilities and building
              long-standing expertise in precision mechanical components.
            </p>
            <p className="text-brand-muted">
              Today, Industrial Spares specialises in the manufacture and export of precision
              mechanical power transmission products and customised machined components. Our product
              range includes shaft collars, couplings, shafts and other engineered components
              manufactured to customer-specific requirements.
            </p>
          </div>
        </Reveal>

        {/*
        Milestone timeline
        <div className="mt-16 border border-brand-line px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-brand-muted text-sm uppercase tracking-[0.14em]">
            Our Milestone Journey
          </p>

          <div className="mt-8 md:hidden">
            <div className="relative overflow-hidden">
              <div className="mobile-marquee flex w-max items-start gap-8">
                {[...MILESTONES, ...MILESTONES].map((milestone, index) => (
                  <div
                    className="relative min-w-[150px] shrink-0 text-center"
                    key={`${milestone.year}-${index}`}
                  >
                    <p className="text-base text-brand-dark">{milestone.year}</p>

                    <div className="relative mt-3 flex h-6 items-center justify-center">
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 h-px w-[110px] -translate-x-1/2 -translate-y-1/2 bg-brand-red/80"
                      />
                      <span className="z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-red bg-white">
                        <span className="h-2 w-2 rounded-full bg-brand-red" />
                      </span>
                    </div>

                    <p className="mt-3 text-brand-dark text-sm leading-[1.4]">
                      {milestone.title.map((line) => (
                        <span className="block" key={line}>
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ol className="mt-8 hidden grid-cols-2 gap-y-10 md:grid md:grid-cols-4">
            {MILESTONES.map((milestone, index) => (
              <li className="relative text-center" key={milestone.year}>
                <p className="text-base text-brand-dark">{milestone.year}</p>

                <div className="relative mt-3 flex h-6 items-center justify-center">
                  <span className="z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-red bg-white">
                    <span className="h-2 w-2 rounded-full bg-brand-red" />
                  </span>
                  {index < MILESTONES.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 left-[calc(50%+20px)] hidden w-[calc(100%-40px)] border-brand-red border-t border-dashed md:block"
                    />
                  )}
                </div>

                <p className="mt-3 text-brand-dark text-sm leading-[1.4]">
                  {milestone.title.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ol>
        </div>
        */}
      </div>
    </section>
  );
};
