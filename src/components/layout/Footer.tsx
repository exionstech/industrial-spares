import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { BRAND_INFO, IMAGES, NAV_LINKS, OTHER_PRODUCTS } from "@/lib/constants";

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-24 h-16 flex-shrink-0">
                <Image
                  src={IMAGES.logo}
                  alt={BRAND_INFO.fullName}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-wider text-white">{BRAND_INFO.name}</h4>
                <p className="text-[11px] font-medium text-gray-400 tracking-widest uppercase">
                  {BRAND_INFO.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed pt-2">
              Manufacturer and exporter of mechanical power transmission products and precision CNC
              machined components from India.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 pt-1">
              <span className="w-2 h-2 rounded-full bg-brand-red"></span>
              <span>{BRAND_INFO.est}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wider uppercase border-b border-gray-800 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-150 flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-red" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products Directory */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wider uppercase border-b border-gray-800 pb-2">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Shaft Collars
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Couplings
                </a>
              </li>
              {OTHER_PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <a href="#products" className="hover:text-white transition-colors">
                    {prod.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info & Action */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white tracking-wider uppercase border-b border-gray-800 pb-2">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full bg-brand-red text-white py-3 px-4 text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors text-center block"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {BRAND_INFO.fullName}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
