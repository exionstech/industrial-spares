import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { catalogueScrollRouteFor } from "@/lib/constants";
import { CORE_PRODUCTS, MATERIALS, OTHER_PRODUCTS } from "@/lib/product-catalogue";

type CoreProduct = (typeof CORE_PRODUCTS)[number];

interface CoreProductCardProps {
  product: CoreProduct;
  imageAlt: string;
  /* The second core card mirrors the first: copy left, photo right. */
  reversed?: boolean;
}

const CoreProductCard: React.FC<CoreProductCardProps> = ({
  product,
  imageAlt,
  reversed = false,
}) => (
  <div className="grid grid-cols-1 border border-brand-line bg-white lg:grid-cols-2">
    {/* Photo half with floating tag chips */}
    <div
      className={`relative min-h-[320px] overflow-hidden bg-brand-dark sm:min-h-[440px] lg:min-h-[440px] ${
        reversed ? "lg:order-2" : ""
      }`}
    >
      <Image
        src={product.image}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
        unoptimized
      />
    </div>

    {/* Copy half */}
    <div className={`flex flex-col p-8 lg:p-10 ${reversed ? "lg:order-1" : ""}`}>
      <h3 className="font-medium text-3xl text-brand-dark tracking-tight">{product.title}</h3>
      <p className="mt-4 text-brand-muted text-[15px] leading-[1.65]">{product.description}</p>

      <div className="mt-8">
        {product.features.map((feat) => (
          <div
            key={feat.title}
            className="flex items-start gap-3 border-brand-bg-light border-b py-3.5"
          >
            <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 bg-brand-red" />
            <div>
              <h4 className="text-brand-dark text-sm">{feat.title}</h4>
              <p className="mt-0.5 text-brand-muted text-[15px]">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button
          className="w-fit justify-center px-3 text-xs tracking-[0.06em] sm:px-6 sm:text-sm sm:tracking-[0.08em]"
          href={catalogueScrollRouteFor(product.title)}
          variant="primary"
          size="cta"
        >
          {product.ctaText}
        </Button>
      </div>
    </div>
  </div>
);

export const ProductsSection: React.FC = () => {
  return (
    <section
      id="products"
      className="scroll-mt-[68px] lg:scroll-mt-[92px] border-brand-line border-b bg-brand-bg-light pt-10 pb-[96px] lg:pt-[93px]"
    >
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col gap-6 text-center lg:grid lg:grid-cols-[1fr_440px] lg:items-start lg:text-left">
          <div>
            <SectionEyebrow className="justify-center lg:justify-start">
              Core Products
            </SectionEyebrow>
            <h2 className="mt-3 font-medium text-[30px] text-brand-dark tracking-tight sm:text-5xl">
              What we manufacture
            </h2>
          </div>
          <p className="mx-auto max-w-[320px] text-brand-muted text-[15px] leading-[1.65] lg:mx-0 lg:pt-2">
            Shaft Collars and Couplings are our primary product families - manufactured to
            international standards since 1993.
          </p>
        </div>

        {/* Core product cards */}
        <div className="mt-20 space-y-6">
          <CoreProductCard product={CORE_PRODUCTS[0]} imageAlt="Precision machined shaft collars" />
          <CoreProductCard
            product={CORE_PRODUCTS[1]}
            imageAlt="Precision machined couplings"
            reversed
          />
        </div>

        {/* Other machine parts */}
        <div className="mt-[72px]">
          <SectionEyebrow tone="muted">Other Products</SectionEyebrow>
          <h3 className="mt-2 font-medium text-brand-dark text-lg">
            Other machine parts we manufacture
          </h3>

          <div className="mt-11 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {OTHER_PRODUCTS.map((prod) => (
              <Link
                key={prod.id}
                href={catalogueScrollRouteFor(prod.title)}
                className="group block border border-brand-line bg-white text-left transition-colors hover:border-brand-red"
              >
                <div className="relative h-36 overflow-hidden bg-brand-dark">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="px-4 py-3.5">
                  <h4 className="text-brand-dark text-sm transition-colors group-hover:text-brand-red">
                    {prod.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Materials strip */}
        <div className="mt-6 border border-brand-line bg-white p-5">
          <h4 className="text-brand-muted text-sm uppercase tracking-[0.18em]">
            Materials Available
          </h4>
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {MATERIALS.map((mat) => (
              <Badge key={mat} variant="outline">
                {mat}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
