import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { CatalogueLevelHeader } from "@/components/products/CatalogueLevelHeader";
import { CatalogueNav } from "@/components/products/CatalogueNav";
import { type CatalogueFamily, typeRoute } from "@/lib/catalogue-tree";
import { PRODUCTS_ROUTE } from "@/lib/constants";

/* Level 2: the configurations available within one family. */
export const FamilyView: React.FC<{ family: CatalogueFamily }> = ({ family }) => (
  <>
    <CatalogueNav
      back={{ name: "All Products", href: PRODUCTS_ROUTE }}
      crumbs={[{ name: "All Products", href: PRODUCTS_ROUTE }, { name: family.name }]}
    />

    <CatalogueLevelHeader
      eyebrow="Product Family"
      meta={`${family.types.length} Configurations`}
      title={family.name}
    />

    <div className="mx-auto max-w-shell px-4 pb-20 sm:px-8 lg:pb-[120px]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {family.types.map((type, index) => (
          <Link
            className="group flex items-center justify-between gap-6 border border-brand-line bg-white p-7 transition-colors hover:border-brand-red lg:p-8"
            href={typeRoute(family.id, type.id)}
            key={type.id}
          >
            <div className="flex items-baseline gap-5">
              <span className="text-brand-red text-sm tabular-nums tracking-[0.1em]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-medium text-brand-dark text-xl tracking-tight">{type.name}</h2>
                <p className="mt-1.5 text-brand-muted text-xs uppercase tracking-[0.16em]">
                  {type.variants.length} Variants
                </p>
              </div>
            </div>
            <ArrowRight
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-brand-line transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand-red"
            />
          </Link>
        ))}
      </div>
    </div>
  </>
);
