import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { CatalogueLevelHeader } from "@/components/products/CatalogueLevelHeader";
import { CatalogueNav } from "@/components/products/CatalogueNav";
import { CATALOGUE_FAMILIES, familyRoute } from "@/lib/catalogue-tree";

/* Level 1 of the browser: the three families we manufacture. */
export const AllProductsView: React.FC = () => (
  <>
    <CatalogueNav crumbs={[{ name: "All Products" }]} />

    <CatalogueLevelHeader
      eyebrow="Product Catalogue"
      title="All products"
      supporting="Explore our product range by category, configuration and material."
    />

    <div className="mx-auto max-w-shell px-4 pb-20 sm:px-8 lg:pb-[120px]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATALOGUE_FAMILIES.map((family) => {
          const meta =
            family.types.length > 0
              ? `${family.types.length} Configurations`
              : `${family.products?.length ?? 0} Products`;

          return (
            <Link
              className="group flex h-full flex-col border border-brand-line bg-white transition-colors hover:border-brand-red"
              href={familyRoute(family.id)}
              key={family.id}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark">
                <Image
                  alt={family.imageAlt}
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={family.image}
                  unoptimized
                />
              </div>

              <div className="flex flex-1 items-end justify-between gap-4 p-7 lg:p-8">
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-[0.16em]">{meta}</p>
                  <h2 className="mt-2 font-medium text-2xl text-brand-dark tracking-tight">
                    {family.name}
                  </h2>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  className="mb-1.5 h-5 w-5 flex-shrink-0 text-brand-line transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand-red"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </>
);
