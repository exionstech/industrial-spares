"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BRAND_INFO, CONTACT_ROUTE, IMAGES, NAV_LINKS } from "@/lib/constants";

/*
 * The nav points at real routes, so the selected item comes from the current
 * path. "About us" and "Quality" share /about, separated by the hash.
 */
const resolveActive = (pathname: string, hash: string): string | null => {
  if (pathname === "/") {
    return "Home";
  }
  if (pathname === "/about") {
    return hash === "#quality" ? "Quality" : "About us";
  }
  if (pathname === "/products" || pathname.startsWith("/products/")) {
    return "Products";
  }
  return null;
};

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  /*
   * The path is known during render, so the selected item is right on the
   * server too; only the hash has to wait for the client.
   */
  useEffect(() => {
    const sync = () => setHash(window.location.hash);

    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  const activeName = resolveActive(pathname, hash);

  /* Hold the page still behind the drawer, and let Escape close it. */
  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 z-50 w-full border-brand-line border-b bg-white">
      <div className="relative mx-auto flex h-[68px] w-full max-w-page items-center justify-between px-4 sm:px-5 lg:h-[96px]">
        <Link className="flex-shrink-0" href="/#home">
          <div className="relative h-[50px] w-[68px] lg:h-[80px] lg:w-[108px]">
            <Image
              alt={BRAND_INFO.fullName}
              className="object-contain"
              fill
              priority
              src={IMAGES.logo}
              unoptimized
            />
          </div>
        </Link>

        <div className="hidden items-center lg:flex">
          <nav className="flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = activeName === link.name;

              return (
                <Link
                  className={`relative pb-1 font-bold text-[15px] transition-colors duration-150 ${
                    isActive ? "text-brand-red" : "text-brand-dark hover:text-brand-red"
                  }`}
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute right-0 left-0 -bottom-1 h-[2px] rounded-full bg-brand-red" />
                  )}
                </Link>
              );
            })}
          </nav>

          <Button
            className="ml-12 h-[52px] w-[205px] justify-between rounded-none font-medium text-base"
            href={CONTACT_ROUTE}
            size="nav"
            variant="primary"
          >
            Request A Quote
          </Button>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          aria-label="Open navigation menu"
          className="p-2 text-brand-dark hover:text-brand-red lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
          type="button"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer - slides in over the page from the left */}
      <div
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-50 lg:hidden ${mobileMenuOpen ? "" : "pointer-events-none"}`}
      >
        <button
          aria-label="Close navigation menu"
          className={`absolute inset-0 h-full w-full bg-brand-dark/50 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          tabIndex={mobileMenuOpen ? 0 : -1}
          type="button"
        />

        <div
          className={`absolute inset-y-0 left-0 flex w-[82%] max-w-[360px] flex-col bg-white transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          id="mobile-menu"
        >
          <div className="flex items-start justify-between px-6 pt-5">
            <Link
              className="relative block h-[68px] w-[68px] flex-shrink-0"
              href="/#home"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                alt={BRAND_INFO.fullName}
                className="object-contain"
                fill
                src={IMAGES.logo}
                unoptimized
              />
            </Link>

            <button
              aria-label="Close navigation menu"
              className="mt-2 flex h-9 w-9 items-center justify-center border border-brand-line text-brand-dark transition-colors hover:border-brand-red hover:text-brand-red"
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeName === link.name;

              return (
                <Link
                  className={`py-3.5 font-bold text-sm transition-colors ${
                    isActive
                      ? "text-brand-red underline decoration-brand-red underline-offset-[6px]"
                      : "text-brand-dark hover:text-brand-red"
                  }`}
                  href={link.href}
                  key={link.name}
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  {link.name}
                </Link>
              );
            })}

            <Button
              className="mt-8 w-full justify-center rounded-none"
              href={CONTACT_ROUTE}
              onClick={() => setMobileMenuOpen(false)}
              showArrow={false}
              size="nav"
              variant="primary"
            >
              Request A Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
