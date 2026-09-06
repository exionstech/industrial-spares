import type React from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT_ROUTE } from "@/lib/constants";

export const ProductsClosingCta: React.FC = () => {
  return (
    <section className="border-brand-line border-y bg-[#f9fafb] py-20 lg:py-[92px]">
      <Reveal className="mx-auto max-w-shell px-4 text-center sm:px-8">
        <h2 className="font-medium text-[30px] text-brand-dark tracking-tight sm:text-4xl">
          Have a Specific Requirement?
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-brand-muted text-base leading-[1.65]">
          Tell us what you need and our team can help with the appropriate product, dimensions and
          specifications.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href={CONTACT_ROUTE} size="cta" variant="primary">
            Request A Quote
          </Button>
        </div>
      </Reveal>
    </section>
  );
};
