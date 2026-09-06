import Image from "next/image";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CONTACT_ROUTE } from "@/lib/constants";

export const SecondaryCapabilities: React.FC = () => {
  return (
    <section className="bg-white pb-20 lg:pb-[120px]">
      <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionEyebrow>Secondary Capabilities</SectionEyebrow>
          <h2 className="mt-3 font-medium text-[30px] text-brand-dark tracking-tight sm:text-4xl">
            Precision Mechanical Components
          </h2>
          <p className="mt-4 max-w-[520px] text-brand-muted text-base leading-[1.65]">
            Manufactured in CNC Machining Centre as per technical drawing / blueprint.
          </p>

          <Button
            className="mt-9"
            href={CONTACT_ROUTE}
            showArrow={false}
            size="cta"
            variant="secondary"
          >
            Discuss Your Requirement
          </Button>
        </Reveal>

        <div className="relative aspect-[608/348] w-full bg-brand-dark">
          <Image
            alt="CNC machining centre cutting a component under coolant"
            className="object-cover object-center"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/assets/products/cnc-centre.jpg"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};
