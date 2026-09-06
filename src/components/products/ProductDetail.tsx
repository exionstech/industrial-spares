"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductSpecifications } from "@/components/products/ProductSpecifications";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import {
  categoryRouteFor,
  contactRouteFor,
  mediaFor,
  PRODUCTS_ROUTE,
  type ShaftCollar,
} from "@/lib/constants";
import { OTHER_PRODUCT_FAMILIES } from "@/lib/product-catalogue";

interface ProductDetailProps {
  product: ShaftCollar;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const bores = product.bores ?? [];
  const [bore, setBore] = useState<string | null>(bores[0] ?? null);

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white pt-[68px] lg:pt-[92px]">
        <ol className="mx-auto flex max-w-shell flex-wrap items-center gap-2 px-4 pt-6 text-sm sm:px-8">
          <li>
            <Link className="text-brand-muted transition-colors hover:text-brand-red" href="/">
              Home
            </Link>
          </li>
          <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-brand-line" />
          <li>
            <Link
              className="text-brand-muted transition-colors hover:text-brand-red"
              href={PRODUCTS_ROUTE}
            >
              Products
            </Link>
          </li>
          <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-brand-line" />
          <li aria-current="page" className="text-brand-dark">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Product header */}
      <section className="bg-white pt-8 pb-16 lg:pb-20">
        <div className="mx-auto grid max-w-shell grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <ProductGallery media={mediaFor(product)} productName={product.name} />

          <Reveal className="lg:py-4">
            <SectionEyebrow>{product.category}</SectionEyebrow>

            <h1 className="mt-4 font-medium text-[30px] text-brand-dark leading-[1.15] tracking-tight sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 max-w-[540px] text-[#4a4a4a] text-base leading-[1.7]">
              {product.finish} collar, clamped by {product.clamping.toLowerCase()}.
            </p>

            {bores.length > 0 && (
              <fieldset className="mt-9">
                <legend className="text-brand-red text-sm uppercase tracking-[0.14em]">
                  Select Bore
                </legend>
                <div className="mt-4 flex flex-wrap gap-3">
                  {bores.map((option) => {
                    const isActive = option === bore;
                    return (
                      <button
                        aria-pressed={isActive}
                        className={`h-10 border px-5 text-sm transition-colors ${
                          isActive
                            ? "border-brand-red bg-brand-red text-white"
                            : "border-brand-line bg-white text-brand-dark hover:border-brand-red hover:text-brand-red"
                        }`}
                        key={option}
                        onClick={() => setBore(option)}
                        type="button"
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            )}

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={contactRouteFor(product.name)} size="cta" variant="primary">
                Request a Quote
              </Button>
              <Button href={PRODUCTS_ROUTE} showArrow={false} size="cta" variant="secondary">
                Back to Catalogue
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductSpecifications bore={bore} product={product} />

      {/* Quality assurance */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-shell px-4 sm:px-8">
          <div className="flex items-start gap-6 border border-brand-line bg-[#f9fafb] p-8">
            <Image
              alt="ISO 9001 certified company"
              className="flex-shrink-0"
              height={48}
              src="/assets/brand/iso-9001-badge.png"
              unoptimized
              width={48}
            />
            <div>
              <h2 className="font-medium text-brand-dark text-lg">Quality Assurance</h2>
              <p className="mt-2 text-brand-muted text-sm leading-[1.6]">
                All products are manufactured under ISO 9001:2015 certified quality management
                processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other products */}
      <section className="border-brand-line border-t bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-shell px-4 sm:px-8">
          <SectionEyebrow>Explore More</SectionEyebrow>
          <h2 className="mt-3 font-medium text-[30px] text-brand-dark tracking-tight">
            Other Products
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER_PRODUCT_FAMILIES.map((family, index) => (
              <Link
                className="group flex flex-col border border-brand-line bg-white transition-colors hover:border-brand-red"
                href={categoryRouteFor(family.category)}
                key={family.id}
              >
                <div className="flex items-center justify-between gap-3 px-6 pt-6">
                  <span className="font-medium text-brand-red text-lg">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <span className="border border-brand-line px-2.5 py-1 text-brand-muted text-xs uppercase tracking-[0.08em]">
                    Manufacturing Co.
                  </span>
                </div>

                <div className="relative mt-5 aspect-[412/180] w-full overflow-hidden bg-[#fafafa]">
                  <Image
                    alt={family.title}
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={family.image}
                    unoptimized
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-medium text-base text-brand-dark uppercase tracking-[0.02em]">
                    {family.title}
                  </h3>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-brand-red text-sm uppercase tracking-[0.08em]">
                    View Product
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-brand-line border-y bg-[#f9fafb] py-16 lg:py-20">
        <Reveal className="mx-auto max-w-shell px-4 text-center sm:px-8">
          <h2 className="font-medium text-[30px] text-brand-dark tracking-tight">
            Need Another Size or Variation?
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-brand-muted text-base leading-[1.65]">
            Contact us and we will send you the relevant technical catalogue for your required
            product variation.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={contactRouteFor(product.name)} size="cta" variant="primary">
              Request Catalogue
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
};
