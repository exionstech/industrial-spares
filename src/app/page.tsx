"use client";

import React, { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { QuoteModal } from "@/components/modals/QuoteModal";
import { CertificationSection } from "@/components/sections/CertificationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ValuePropositions } from "@/components/sections/ValuePropositions";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOpenQuoteModal = (productName?: string) => {
    if (productName) {
      setSelectedProduct(productName);
    } else {
      setSelectedProduct("");
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Page Content */}
      <div className="flex-1">
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <CertificationSection />
        <ProductsSection onOpenQuoteModal={handleOpenQuoteModal} />
        <ValuePropositions />
        <ContactSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </div>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* RFQ Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultProduct={selectedProduct}
      />
    </main>
  );
}
