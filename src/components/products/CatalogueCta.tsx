import type React from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT_ROUTE } from "@/lib/constants";

export const CatalogueCta: React.FC = () => {
  return (
    <section className="bg-white pb-20 lg:pb-[120px]">
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        <Reveal className="flex flex-col gap-8 border-brand-red border-l-[3px] bg-brand-bg-light px-8 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <h2 className="font-medium text-2xl text-brand-dark tracking-tight">
              Need a specific size or variation?
            </h2>
            <p className="mt-3 max-w-[620px] text-brand-muted text-base leading-[1.65]">
              Additional sizes, materials, standards and product variations are available through
              our technical catalogues.
            </p>
          </div>

          <Button
            className="flex-shrink-0 self-start lg:self-auto"
            href={contactCatalogueRoute}
            size="cta"
            variant="primary"
          >
            Request Catalogue
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

const contactCatalogueRoute = `${CONTACT_ROUTE}?product=${encodeURIComponent("Technical catalogue")}`;
