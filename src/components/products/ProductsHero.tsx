import Image from "next/image";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CONTACT_ROUTE } from "@/lib/constants";

export const ProductsHero: React.FC = () => {
  return (
    <section className="bg-white pt-[84px] pb-6 sm:pb-10 lg:pt-[92px] lg:pb-16">
      <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-8 px-4 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-1 pt-0 lg:col-start-1 lg:row-start-1 lg:pt-14 lg:pb-0 ">
          <SectionEyebrow className="text-[0.68rem] tracking-[0.22em] sm:text-[0.75rem]">
            Our Products
          </SectionEyebrow>

          <h1 className="mt-4 font-medium text-[30px] leading-[0.96] tracking-[-0.04em] text-brand-dark sm:mt-5 sm:text-5xl lg:text-6xl">
            All products
          </h1>
        </Reveal>

        {/* Photo bleeds to the right edge of the page shell */}
        <div className="relative order-2 aspect-[630/420] w-full overflow-hidden bg-brand-bg-light lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:translate-y-8">
          <Image
            alt="Shaft collars and couplings laid out on an engineering drawing"
            className="object-cover object-center"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/assets/products/hero-products.jpg"
            unoptimized
          />
        </div>

        <p className="order-3 max-w-[520px] text-base leading-[1.6] text-[#4a4a4a] sm:text-lg lg:col-start-1 lg:row-start-2">
          Explore our range of shaft collars, couplings and precision mechanical products.
        </p>

        <div className="order-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:col-start-1 lg:row-start-3">
          <Button href={CONTACT_ROUTE} size="cta" variant="primary">
            Request A Quote
          </Button>
          <Button href="#catalogue" showArrow={false} size="cta" variant="secondary">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
};
