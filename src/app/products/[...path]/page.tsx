import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CatalogueCta } from "@/components/products/CatalogueCta";
import { FamilyView } from "@/components/products/FamilyView";
import { OtherCncView } from "@/components/products/OtherCncView";
import { ProductDetail } from "@/components/products/ProductDetail";
import { TypeView } from "@/components/products/TypeView";
import { VariantCatalogueView } from "@/components/products/VariantCatalogueView";
import { cataloguePaths, findFamily, findType, findVariant } from "@/lib/catalogue-tree";
import { findProductBySlug, slugify } from "@/lib/constants";
import { SHAFT_COLLARS } from "@/lib/product-catalogue";

interface CataloguePageProps {
  params: { path: string[] };
}

const TITLE_SUFFIX = "Industrial Spares Manufacturing Company";

/*
 * One catch-all serves every catalogue level. Single-segment paths that are not
 * a family fall through to the individual product pages, which keeps the URLs
 * published before the catalogue browser existed working.
 */
const resolve = (path: string[]) => {
  const [familyId, typeId, variantId] = path;

  if (path.length > 3) {
    return null;
  }

  const family = findFamily(familyId);

  if (!family) {
    const product = path.length === 1 ? findProductBySlug(familyId) : undefined;
    return product ? ({ kind: "product", product } as const) : null;
  }

  if (path.length === 1) {
    return { kind: "family", family } as const;
  }

  const type = findType(family, typeId);

  if (!type) {
    return null;
  }

  if (path.length === 2) {
    return { kind: "type", family, type } as const;
  }

  const variant = findVariant(type, variantId);

  return variant ? ({ kind: "variant", family, type, variant } as const) : null;
};

export function generateStaticParams() {
  return [
    ...cataloguePaths().map((path) => ({ path })),
    ...SHAFT_COLLARS.map((product) => ({ path: [slugify(product.name)] })),
  ];
}

export function generateMetadata({ params }: CataloguePageProps): Metadata {
  const resolved = resolve(params.path);

  if (!resolved) {
    return { title: `Not found | ${TITLE_SUFFIX}` };
  }

  if (resolved.kind === "product") {
    return { title: `${resolved.product.name} | ${TITLE_SUFFIX}` };
  }

  const trail =
    resolved.kind === "family"
      ? resolved.family.name
      : resolved.kind === "type"
        ? `${resolved.type.name} - ${resolved.family.name}`
        : `${resolved.variant.name} - ${resolved.type.name}`;

  return {
    title: `${trail} | ${TITLE_SUFFIX}`,
    description: `Industrial Spares product catalogue: ${trail}.`,
  };
}

export default function CataloguePage({ params }: CataloguePageProps) {
  const resolved = resolve(params.path);

  if (!resolved) {
    notFound();
  }

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />

      <div className="flex-1">
        {resolved.kind === "product" && <ProductDetail product={resolved.product} />}

        {resolved.kind === "family" &&
          (resolved.family.types.length > 0 ? (
            <FamilyView family={resolved.family} />
          ) : (
            <OtherCncView family={resolved.family} />
          ))}

        {resolved.kind === "type" && <TypeView family={resolved.family} type={resolved.type} />}

        {resolved.kind === "variant" && (
          <>
            <VariantCatalogueView
              family={resolved.family}
              type={resolved.type}
              variant={resolved.variant}
            />
            <CatalogueCta />
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}
