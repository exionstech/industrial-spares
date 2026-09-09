import type React from "react";
import { CatalogueLevelHeader } from "@/components/products/CatalogueLevelHeader";
import { CatalogueNav } from "@/components/products/CatalogueNav";
import { Button } from "@/components/ui/button";
import type { CatalogueFamily } from "@/lib/catalogue-tree";
import { contactRouteFor, PRODUCTS_ROUTE } from "@/lib/constants";

/* Made-to-order family: a product list and a capability statement, with no drill-down. */
export const OtherCncView: React.FC<{ family: CatalogueFamily }> = ({ family }) => (
  <>
    <CatalogueNav
      back={{ name: "All Products", href: PRODUCTS_ROUTE }}
      crumbs={[{ name: "All Products", href: PRODUCTS_ROUTE }, { name: family.name }]}
    />

    <CatalogueLevelHeader
      eyebrow="Product Family"
      meta={`${family.products?.length ?? 0} Products`}
      title={family.name}
    />

    <div className="mx-auto max-w-shell px-4 pb-20 sm:px-8 lg:pb-[120px]">
      <ul className="border border-brand-line bg-white">
        {family.products?.map((product) => (
          <li
            className="flex items-center gap-4 border-brand-line border-b px-6 py-5 last:border-b-0"
            key={product}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 flex-shrink-0 bg-brand-red" />
            <span className="text-base text-brand-dark">{product}</span>
          </li>
        ))}
      </ul>

      {/* Made to order, so the requirement goes straight to the enquiry form. */}
      <div className="mt-6 flex flex-col gap-6 border-brand-red border-l-[3px] bg-brand-bg-light px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="text-base text-brand-dark leading-[1.6]">{family.note}</p>

        <Button
          className="flex-shrink-0 self-start sm:self-auto"
          href={contactRouteFor(family.name)}
          size="cta"
          variant="primary"
        >
          Send Your Requirement
        </Button>
      </div>
    </div>
  </>
);
