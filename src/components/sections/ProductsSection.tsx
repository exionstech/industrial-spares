"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CORE_PRODUCTS, MATERIALS, OTHER_PRODUCTS } from "@/lib/constants";

interface ProductsSectionProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  const handleMaterialClick = (material: string) => {
    if (selectedMaterial === material) {
      setSelectedMaterial(null);
    } else {
      setSelectedMaterial(material);
    }
  };

  return (
    <section id="products" className="bg-brand-bg-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-300">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
              Core Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              What we manufacture
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-md">
            Shaft Collars and Couplings are our primary product families - manufactured to
            international standards since 1993.
          </p>
        </div>

        {/* Feature Product 1: Shaft Collars */}
        <div className="bg-white shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Image & Floating Badges */}
          <div className="relative min-h-[350px] sm:min-h-[420px] bg-brand-dark overflow-hidden group">
            <Image
              src={CORE_PRODUCTS[0].image}
              alt="Precision Machined Shaft Collars"
              fill
              className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
            {/* Floating Tags Overlay */}
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-10">
              {CORE_PRODUCTS[0].badges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          </div>

          {/* Details & Specs */}
          <div className="p-8 lg:p-12 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {CORE_PRODUCTS[0].title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                {CORE_PRODUCTS[0].description}
              </p>

              {/* Bullet Features */}
              <div className="space-y-4 border-t border-gray-100 pt-6">
                {CORE_PRODUCTS[0].features.map((feat) => (
                  <div key={feat.title} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{feat.title}</h4>
                      <p className="text-xs text-gray-500">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button onClick={() => onOpenQuoteModal("Shaft Collars")} variant="primary">
                {CORE_PRODUCTS[0].ctaText}
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Product 2: Couplings */}
        <div className="bg-white shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Details & Specs (Left on desktop) */}
          <div className="p-8 lg:p-12 flex flex-col justify-between space-y-6 order-2 lg:order-1">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {CORE_PRODUCTS[1].title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                {CORE_PRODUCTS[1].description}
              </p>

              {/* Bullet Features */}
              <div className="space-y-4 border-t border-gray-100 pt-6">
                {CORE_PRODUCTS[1].features.map((feat) => (
                  <div key={feat.title} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-red mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{feat.title}</h4>
                      <p className="text-xs text-gray-500">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button onClick={() => onOpenQuoteModal("Couplings")} variant="primary">
                {CORE_PRODUCTS[1].ctaText}
              </Button>
            </div>
          </div>

          {/* Image & Floating Badges (Right on desktop) */}
          <div className="relative min-h-[350px] sm:min-h-[420px] bg-brand-dark overflow-hidden group order-1 lg:order-2">
            <Image
              src={CORE_PRODUCTS[1].image}
              alt="Precision Machined Couplings"
              fill
              className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
            {/* Floating Tags Overlay */}
            <div className="absolute bottom-6 right-6 flex flex-wrap gap-2 z-10">
              {CORE_PRODUCTS[1].badges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Other Machine Parts We Manufacture */}
        <div className="space-y-8 pt-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">
              Other Products
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Other machine parts we manufacture
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OTHER_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                onClick={() => onOpenQuoteModal(prod.title)}
                className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group border border-gray-100 flex flex-col justify-between"
              >
                <div className="relative h-44 bg-brand-dark overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    {prod.title}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2">{prod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materials Available Filter */}
        <div className="bg-white p-6 sm:p-8 shadow-md border border-gray-200 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-900">
              Materials &amp; Finishes Available
            </h4>
            {selectedMaterial && (
              <button
                type="button"
                onClick={() => setSelectedMaterial(null)}
                className="text-xs font-semibold text-brand-red hover:underline"
              >
                Clear Filter
              </button>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {MATERIALS.map((mat) => (
              <Badge
                key={mat}
                variant="pill"
                active={selectedMaterial === mat}
                onClick={() => handleMaterialClick(mat)}
              >
                <span className="flex items-center gap-1.5">
                  {selectedMaterial === mat && <Check className="w-3.5 h-3.5" />}
                  <span>{mat}</span>
                </span>
              </Badge>
            ))}
          </div>
          {selectedMaterial && (
            <p className="text-xs text-gray-500 pt-2 italic">
              Showing availability for{" "}
              <span className="font-semibold text-gray-800">{selectedMaterial}</span> across all
              shaft collars, couplings, and custom CNC parts.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
