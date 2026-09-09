import Image from "next/image";
import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { familyRoute } from "@/lib/catalogue-tree";
import { HOME_OTHER_CNC_PRODUCTS, HOME_PRODUCT_FAMILIES } from "@/lib/product-catalogue";

type ProductFamily = (typeof HOME_PRODUCT_FAMILIES)[number];

/* Shared card shell so all three cards keep the same frame, image ratio and footer band. */
const CardShell: React.FC<{
  image: string;
  imageAlt: string;
  title: string;
  interactive?: boolean;
  children: React.ReactNode;
  footer: React.ReactNode;
}> = ({ image, imageAlt, title, interactive = false, children, footer }) => (
  <article
    className={`group flex h-full flex-col border border-brand-line bg-white transition-colors ${
      interactive ? "hover:border-brand-red" : ""
    }`}
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
        unoptimized
      />
    </div>

    <div className="flex flex-1 flex-col p-7 lg:p-8">
      <h3 className="font-medium text-2xl text-brand-dark tracking-tight">{title}</h3>
      {children}
      <div className="mt-auto border-brand-bg-light border-t pt-6">{footer}</div>
    </div>
  </article>
);

/* Catalogue-driven family: description, configuration chips, catalogue CTA. */
const FamilyCard: React.FC<{ family: ProductFamily }> = ({ family }) => (
  <CardShell
    image={family.image}
    imageAlt={family.imageAlt}
    title={family.title}
    interactive
    footer={
      <Button className="w-full" href={familyRoute(family.id)} variant="primary" size="cta">
        Explore Catalogue
      </Button>
    }
  >
    <p className="mt-3 text-brand-muted text-[15px] leading-[1.65]">{family.description}</p>

    <div className="mt-6 mb-8 flex flex-wrap gap-1.5">
      {family.configurations.map((config) => (
        <Badge
          key={config}
          variant="outline"
          className="h-7 px-3 text-[11px] text-brand-dark uppercase tracking-[0.1em]"
        >
          {config}
        </Badge>
      ))}
    </div>
  </CardShell>
);

/* Made-to-order family: a plain list and a capability statement, no catalogue drill-down. */
const OtherCncCard: React.FC = () => (
  <CardShell
    image={HOME_OTHER_CNC_PRODUCTS.image}
    imageAlt={HOME_OTHER_CNC_PRODUCTS.imageAlt}
    title={HOME_OTHER_CNC_PRODUCTS.title}
    footer={
      <Button
        className="w-full"
        href={familyRoute(HOME_OTHER_CNC_PRODUCTS.id)}
        showArrow={false}
        size="cta"
        variant="secondary"
      >
        Manufactured To Specifications
      </Button>
    }
  >
    <ul className="mt-5 mb-5">
      {HOME_OTHER_CNC_PRODUCTS.products.map((product) => (
        <li
          key={product}
          className="flex items-center gap-3 border-brand-bg-light border-b py-3 last:border-b-0"
        >
          <span className="h-1.5 w-1.5 flex-shrink-0 bg-brand-red" />
          <span className="text-brand-dark text-[15px]">{product}</span>
        </li>
      ))}
    </ul>

    <p className="mb-8 text-brand-muted text-sm leading-[1.55]">{HOME_OTHER_CNC_PRODUCTS.note}</p>
  </CardShell>
);

export const ProductsSection: React.FC = () => {
  return (
    <section
      id="products"
      className="scroll-mt-[68px] lg:scroll-mt-[92px] border-brand-line border-b bg-white pt-10 pb-[96px] lg:pt-[93px]"
    >
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        {/* Section header */}
        <Reveal className="flex flex-col gap-6 text-center lg:grid lg:grid-cols-[1fr_440px] lg:items-start lg:text-left">
          <div>
            <SectionEyebrow className="justify-center lg:justify-start">
              Core Products
            </SectionEyebrow>
            <h2 className="mt-3 font-medium text-[30px] text-brand-dark tracking-tight sm:text-5xl">
              What we manufacture
            </h2>
          </div>
          <p className="mx-auto max-w-[360px] text-brand-muted text-[15px] leading-[1.65] lg:mx-0 lg:pt-2">
            Precision-manufactured mechanical power transmission products and custom machined
            components from Kolkata, India.
          </p>
        </Reveal>

        {/* Three product families */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {HOME_PRODUCT_FAMILIES.map((family, index) => (
            <Reveal className="h-full" delay={index * 80} key={family.id}>
              <FamilyCard family={family} />
            </Reveal>
          ))}
          <Reveal className="h-full" delay={160}>
            <OtherCncCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
