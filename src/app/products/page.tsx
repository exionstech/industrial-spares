import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CatalogueCta } from "@/components/products/CatalogueCta";
import { ProductCatalogue } from "@/components/products/ProductCatalogue";
import { ProductsClosingCta } from "@/components/products/ProductsClosingCta";
import { ProductsHero } from "@/components/products/ProductsHero";
import { SecondaryCapabilities } from "@/components/products/SecondaryCapabilities";

export const metadata: Metadata = {
  title: "Products | Industrial Spares Manufacturing Company",
  description:
    "Shaft collars in solid, single split and double split configurations - zinc plated, aluminium, black oxide and stainless steel 304 - plus precision CNC machined components made to drawing.",
};

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />

      <div className="flex-1">
        <ProductsHero />
        <Suspense fallback={<div className="min-h-[900px]" />}>
          <ProductCatalogue />
        </Suspense>
        <CatalogueCta />
        <SecondaryCapabilities />
        <ProductsClosingCta />
      </div>

      <Footer />
    </main>
  );
}
