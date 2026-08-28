"use client";

import { CheckCircle, Send } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BRAND_INFO } from "@/lib/constants";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultProduct = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: defaultProduct || "Shaft Collars",
    quantity: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0 max-w-2xl overflow-hidden border border-border">
        {/* Header */}
        <div className="bg-brand-dark text-white p-6">
          <DialogHeader>
            <span className="text-brand-red font-bold text-xs uppercase tracking-widest block mb-1">
              {BRAND_INFO.iso}
            </span>
            <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Request A Quote (RFQ)
            </DialogTitle>
            <DialogDescription className="text-gray-400 text-xs sm:text-sm mt-0.5">
              Direct manufacturing pricing &amp; specification support
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-2">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Inquiry Submitted Successfully!</h4>
              <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
                Thank you for reaching out to {BRAND_INFO.fullName}. Our technical sales team in
                Kolkata will review your specification and get back to you within 24 business hours.
              </p>
              <div className="pt-4">
                <Button type="button" onClick={handleReset} variant="primary" showArrow={false}>
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="rfq-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="rfq-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="rfq-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                  >
                    Work Email *
                  </label>
                  <Input
                    id="rfq-email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="rfq-company"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                  >
                    Company Name
                  </label>
                  <Input
                    id="rfq-company"
                    type="text"
                    placeholder="Acme Industrial Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="rfq-phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                  >
                    Phone / WhatsApp
                  </label>
                  <Input
                    id="rfq-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="rfq-product"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                  >
                    Product Interest *
                  </label>
                  <select
                    id="rfq-product"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="flex h-11 w-full border border-input bg-gray-50 px-3.5 py-2.5 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                  >
                    <option value="Shaft Collars">Shaft Collars</option>
                    <option value="Couplings">Couplings</option>
                    <option value="CNC Components">CNC Components</option>
                    <option value="Sprockets">Sprockets</option>
                    <option value="Valves">Valves</option>
                    <option value="Custom Spares">Custom Spares</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="rfq-quantity"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                  >
                    Estimated Quantity
                  </label>
                  <Input
                    id="rfq-quantity"
                    type="text"
                    placeholder="e.g. 500 pcs / Month"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="rfq-notes"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                >
                  Specification Details / Notes
                </label>
                <Textarea
                  id="rfq-notes"
                  rows={3}
                  placeholder="Specify dimensions, material preferences (Mild Steel, SS304, Aluminium, Black Oxide), or drawing details..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  showArrow={false}
                  onClick={onClose}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  showArrow={false}
                  className="inline-flex items-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Submit RFQ</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
