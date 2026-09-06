import type React from "react";
import { FacilityVideoCard } from "@/components/about/FacilityVideoCard";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { FACILITY_MEDIA } from "@/lib/constants";

export const InsideManufacturing: React.FC = () => {
  return (
    <section className="border-brand-line border-y bg-brand-bg-light py-20 lg:py-[120px]">
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_440px] lg:gap-20">
          <div>
            <SectionEyebrow>Inside Our Manufacturing</SectionEyebrow>
            <h2 className="mt-3 font-medium text-3xl text-brand-dark tracking-tight">
              Built in Kolkata. Delivered to the world.
            </h2>
          </div>
          <p className="text-brand-muted text-base leading-[1.65] lg:pt-2">
            Our manufacturing facility combines modern machining technology with experienced
            workmanship and a skilled manufacturing and inspection team.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {FACILITY_MEDIA.map((item) => (
            <FacilityVideoCard
              description={item.description}
              image={item.image}
              key={item.id}
              title={item.title}
              videoUrl={item.videoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
