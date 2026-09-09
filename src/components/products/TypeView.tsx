import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { CatalogueLevelHeader } from "@/components/products/CatalogueLevelHeader";
import { CatalogueNav } from "@/components/products/CatalogueNav";
import {
  type CatalogueFamily,
  type CatalogueType,
  familyRoute,
  variantRoute,
} from "@/lib/catalogue-tree";
import { PRODUCTS_ROUTE } from "@/lib/constants";

interface TypeViewProps {
  family: CatalogueFamily;
  type: CatalogueType;
}

/* Level 3: the material / variant selection, the last step before the catalogue. */
export const TypeView: React.FC<TypeViewProps> = ({ family, type }) => {
  /* Three across divides six variants evenly; two across avoids an orphan for four. */
  const columns = type.variants.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <>
      <CatalogueNav
        back={{ name: family.name, href: familyRoute(family.id) }}
        crumbs={[
          { name: "All Products", href: PRODUCTS_ROUTE },
          { name: family.name, href: familyRoute(family.id) },
          { name: type.name },
        ]}
      />

      <CatalogueLevelHeader
        eyebrow="Configuration"
        meta={`${type.variants.length} Variants`}
        title={type.name}
      />

      <div className="mx-auto max-w-shell px-4 pb-20 sm:px-8 lg:pb-[120px]">
        <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${columns}`}>
          {type.variants.map((variant) => (
            <Link
              className="group flex h-full flex-col border border-brand-line bg-white transition-colors hover:border-brand-red"
              href={variantRoute(family.id, type.id, variant.id)}
              key={variant.id}
            >
              {variant.image && (
                <span className="relative block aspect-[4/3] overflow-hidden border-brand-line border-b bg-white">
                  <Image
                    alt={`${variant.name} ${type.name.toLowerCase()}`}
                    className="object-contain object-center p-5 transition-transform duration-500 group-hover:scale-[1.04]"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={encodeURI(variant.image)}
                  />
                </span>
              )}

              <span className="mt-auto flex items-center justify-between gap-4 px-5 py-4 transition-colors group-hover:bg-brand-bg-light">
                <span className="whitespace-nowrap text-[13px] text-brand-dark uppercase tracking-[0.1em]">
                  {variant.name}
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 flex-shrink-0 text-brand-line transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand-red"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
