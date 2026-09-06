import Image from "next/image";
import type React from "react";
import { Button } from "@/components/ui/button";
import { HashLink } from "@/components/ui/hash-link";
import {
  BRAND_INFO,
  CONTACT_ROUTE,
  categoryRouteFor,
  DEVELOPER,
  FOOTER_COMPANY_LINKS,
  IMAGES,
  LEGAL_LINKS,
} from "@/lib/constants";
import { FOOTER_PRODUCT_LINKS } from "@/lib/product-catalogue";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark pt-[50px] pb-9 text-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 pb-[45px] sm:grid-cols-2 lg:grid-cols-[1.55fr_0.9fr_0.9fr_1fr] lg:gap-x-12 xl:gap-x-16">
          {/* Brand column */}
          <div className="lg:max-w-[420px]">
            <div className="flex items-center gap-2">
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image
                  src={IMAGES.logo}
                  alt={BRAND_INFO.fullName}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div>
                <p className="whitespace-nowrap text-sm text-white tracking-[0.16em]">
                  {BRAND_INFO.name}
                </p>
                <p className="whitespace-nowrap text-brand-muted text-sm tracking-[0.16em]">
                  {BRAND_INFO.tagline}
                </p>
              </div>
            </div>
            <p className="mt-2 max-w-[300px] text-[#9b9b9b] text-sm leading-[1.65]">
              Manufacturer and exporter of mechanical power transmission products and precision CNC
              machined components from India.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 flex-shrink-0 bg-brand-red" />
              <span className="text-[#9b9b9b] text-sm tracking-[0.08em]">{BRAND_INFO.est}</span>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-brand-muted text-sm uppercase tracking-[0.18em]">Company</h4>
            <ul className="mt-4 space-y-2">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <HashLink
                    className="text-[#d0d0d0] text-sm transition-colors hover:text-white"
                    href={link.href}
                  >
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-brand-muted text-sm uppercase tracking-[0.18em]">Products</h4>
            <ul className="mt-4 space-y-2">
              {FOOTER_PRODUCT_LINKS.map((product) => (
                <li key={product}>
                  <HashLink
                    className="text-[#d0d0d0] text-sm transition-colors hover:text-white"
                    href={categoryRouteFor(product)}
                  >
                    {product}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column - Address and Email head their own blocks */}
          <div className="lg:justify-self-end">
            <h4 className="text-brand-muted text-sm uppercase tracking-[0.18em]">Address</h4>
            <address className="mt-4 text-[#d0d0d0] text-base not-italic leading-[1.55]">
              {BRAND_INFO.location}
            </address>

            <h4 className="mt-7 text-brand-muted text-sm uppercase tracking-[0.18em]">Email</h4>
            <a
              className="mt-4 block break-all text-[#d0d0d0] text-base transition-colors hover:text-white"
              href={`mailto:${BRAND_INFO.email}`}
            >
              {BRAND_INFO.email}
            </a>

            <Button
              className="mt-7 h-11 w-full tracking-[0.14em]"
              href={CONTACT_ROUTE}
              showArrow={false}
              size="compact"
              variant="primary"
            >
              Request A Quote
            </Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="grid grid-cols-1 gap-4 border-[#2a2a2a] border-t pt-7 text-center sm:grid-cols-3 sm:items-center sm:text-left">
          <p className="text-brand-muted text-sm">© {new Date().getFullYear()}</p>

          <p className="text-brand-muted text-sm sm:text-center">
            Developed &amp; Maintained by{" "}
            <a
              className="text-brand-red underline-offset-4 transition-colors hover:underline"
              href={DEVELOPER.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {DEVELOPER.name}
            </a>
          </p>

          <div className="flex items-center justify-center gap-6 sm:justify-end">
            {LEGAL_LINKS.map((link) => (
              <a
                className="text-brand-muted text-sm transition-colors hover:text-white"
                href={link.href}
                key={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
