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
import { findProductBySlug, SITE_URL, slugify } from "@/lib/constants";
import { SHAFT_COLLARS } from "@/lib/product-catalogue";

const canonicalPath = (path: string[]) => `/products/${path.join("/")}`;
const SITE_NAME = "Industrial Spares Manufacturing Company";

interface CataloguePageProps {
  params: { path: string[] };
}

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
  const canonical = canonicalPath(params.path);

  if (!resolved) {
    return { title: "Not found" };
  }

  if (resolved.kind === "product") {
    const { product } = resolved;
    const title = product.name;
    const description = `${product.name}: ${product.material} finish, ${product.configuration.toLowerCase()} configuration. Precision manufactured by Industrial Spares in Kolkata, India.`;

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title: `${title} | ${SITE_NAME}`,
        description,
        url: canonical,
        images: [{ url: product.image }],
      },
    };
  }

  const trail =
    resolved.kind === "family"
      ? resolved.family.name
      : resolved.kind === "type"
        ? `${resolved.type.name} - ${resolved.family.name}`
        : `${resolved.variant.name} - ${resolved.type.name}`;

  const description = `Industrial Spares product catalogue: ${trail}.`;
  const image =
    resolved.kind === "family"
      ? resolved.family.image
      : resolved.kind === "variant" && resolved.variant.image
        ? resolved.variant.image
        : resolved.family.image;

  return {
    title: trail,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${trail} | ${SITE_NAME}`,
      description,
      url: canonical,
      images: [{ url: image }],
    },
  };
}

/* BreadcrumbList structured data mirrors the CatalogueNav trail each view already renders. */
const breadcrumbTrail = (resolved: NonNullable<ReturnType<typeof resolve>>, path: string[]) => {
  if (resolved.kind === "product") {
    return [{ name: resolved.product.name, path }];
  }

  const items = [{ name: resolved.family.name, path: [path[0]] }];

  if (resolved.kind === "type" || resolved.kind === "variant") {
    items.push({ name: resolved.type.name, path: [path[0], path[1]] });
  }
  if (resolved.kind === "variant") {
    items.push({ name: resolved.variant.name, path });
  }

  return items;
};

export default function CataloguePage({ params }: CataloguePageProps) {
  const resolved = resolve(params.path);

  if (!resolved) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      ...breadcrumbTrail(resolved, params.path).map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 3,
        name: crumb.name,
        item: `${SITE_URL}${canonicalPath(crumb.path)}`,
      })),
    ],
  };

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
