import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProductDetail } from "@/components/products/ProductDetail";
import { findProductBySlug, slugify } from "@/lib/constants";
import { SHAFT_COLLARS } from "@/lib/product-catalogue";

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return SHAFT_COLLARS.map((product) => ({ slug: slugify(product.name) }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = findProductBySlug(params.slug);

  if (!product) {
    return { title: "Product not found | Industrial Spares Manufacturing Company" };
  }

  return {
    title: `${product.name} | Industrial Spares Manufacturing Company`,
    description: `${product.name} - ${product.configuration} shaft collar in ${product.finish}, clamped by ${product.clamping.toLowerCase()}. Manufactured to your bore, outer diameter and width in Kolkata, India.`,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = findProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />
      <div className="flex-1">
        <ProductDetail product={product} />
      </div>
      <Footer />
    </main>
  );
}
