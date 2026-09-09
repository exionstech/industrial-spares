import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AllProductsView } from "@/components/products/AllProductsView";

export const metadata: Metadata = {
  title: "Product Catalogue | Industrial Spares Manufacturing Company",
  description:
    "Browse the Industrial Spares catalogue by category, configuration and material - shaft collars, couplings and other CNC products manufactured in Kolkata, India.",
};

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Navbar />

      <div className="flex-1">
        <AllProductsView />
      </div>

      <Footer />
    </main>
  );
}
