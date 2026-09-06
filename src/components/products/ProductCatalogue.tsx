"use client";

import { ArrowRight, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CONTACT_ROUTE, productRouteFor, slugify } from "@/lib/constants";
import {
  CATALOGUE_CATEGORIES,
  type CatalogueCategory,
  SHAFT_COLLARS,
} from "@/lib/product-catalogue";

const asCategory = (value: string | null): CatalogueCategory | null =>
  CATALOGUE_CATEGORIES.find((option) => option === value) ?? null;

export const ProductCatalogue: React.FC = () => {
  const searchParams = useSearchParams();
  /* ?category= filters the grid; ?scrollTo= only scrolls to that family. */
  const categoryParam = searchParams.get("category");
  const scrollToParam = searchParams.get("scrollTo");

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CatalogueCategory | null>(() =>
    asCategory(categoryParam),
  );
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return SHAFT_COLLARS.filter((product) => {
      const matchesQuery =
        needle === "" ||
        [product.name, product.material, product.configuration, product.finish, product.id]
          .join(" ")
          .toLowerCase()
          .includes(needle);
      const matchesCategory = category === null || product.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  /* Categories we manufacture but have not listed parts for yet. */
  const categoryIsUnlisted =
    category !== null && !SHAFT_COLLARS.some((product) => product.category === category);

  useEffect(() => {
    setCategory(asCategory(categoryParam));
  }, [categoryParam]);

  useEffect(() => {
    const closeCategory = (event: MouseEvent) => {
      if (!categoryRef.current?.contains(event.target as Node)) {
        setCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", closeCategory);
    return () => document.removeEventListener("mousedown", closeCategory);
  }, []);

  useEffect(() => {
    if (!scrollToParam) {
      return;
    }

    /* Scroll to the family without touching the filters. */
    const scroll = () => {
      const first = SHAFT_COLLARS.find((product) => product.category === scrollToParam);
      const target = first
        ? document.getElementById(slugify(first.name))
        : document.getElementById("catalogue");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    /* Wait for the grid to lay out before measuring. */
    const raf = requestAnimationFrame(() => requestAnimationFrame(scroll));
    const timer = setTimeout(scroll, 350);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [scrollToParam]);

  const isFiltered = query !== "" || category !== null;

  const clearAll = () => {
    setQuery("");
    setCategory(null);
  };

  return (
    <section
      className="scroll-mt-[68px] lg:scroll-mt-[92px] bg-white pt-16 pb-20 lg:pt-[120px] lg:pb-[120px]"
      id="catalogue"
    >
      <div className="mx-auto max-w-shell px-4 sm:px-8">
        {/* Header + search */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_580px] lg:items-end lg:gap-16">
          <div className="text-center lg:text-left">
            <SectionEyebrow className="justify-center lg:justify-start">Catalogue</SectionEyebrow>
            <h2 className="mt-3 font-medium text-[30px] text-brand-dark tracking-tight sm:text-4xl">
              Explore our products
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-brand-muted text-base leading-[1.65] lg:mx-0">
              Select a product category to explore configurations, materials, part numbers and
              technical specifications.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-4 h-[18px] w-[18px] text-brand-muted" />
              <input
                aria-label="Search products or part numbers"
                className="h-14 w-full border border-brand-line bg-white px-12 text-base text-brand-dark placeholder:text-[#9ca3af] focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products"
                type="search"
                value={query}
              />
            </div>

            <div className="relative lg:w-[200px]" ref={categoryRef}>
              <button
                aria-expanded={categoryOpen}
                aria-haspopup="listbox"
                className="flex h-14 w-full items-center justify-between border border-brand-line bg-white px-4 text-left text-base text-brand-dark transition-colors hover:border-brand-red focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                onClick={() => setCategoryOpen((open) => !open)}
                type="button"
              >
                <span>{category ?? "All categories"}</span>
                <ChevronDown
                  className={`h-4 w-4 text-brand-muted transition-transform ${categoryOpen ? "rotate-180" : ""}`}
                />
              </button>

              {categoryOpen && (
                <div
                  aria-label="Product categories"
                  className="absolute z-30 mt-2 w-full border border-brand-line bg-white p-1 shadow-[0_8px_24px_rgba(17,17,17,0.10)]"
                  role="listbox"
                >
                  {[null, ...CATALOGUE_CATEGORIES].map((option) => {
                    const active = category === option;
                    return (
                      <button
                        aria-selected={active}
                        className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-sm transition-colors ${
                          active
                            ? "bg-brand-red text-white"
                            : "text-brand-dark hover:bg-brand-bg-light"
                        }`}
                        key={option ?? "all-categories"}
                        onClick={() => {
                          setCategory(option);
                          setCategoryOpen(false);
                        }}
                        role="option"
                        type="button"
                      >
                        <span>{option ?? "All categories"}</span>
                        {active && <span aria-hidden="true">&#10003;</span>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-brand-line border-y py-5 sm:mt-12 sm:py-6">
          <p aria-live="polite" className="text-brand-muted text-xs sm:text-sm">
            Showing <span className="text-brand-dark">{results.length}</span> of{" "}
            {SHAFT_COLLARS.length} products
          </p>
          {isFiltered && (
            <button
              className="text-brand-red text-xs underline-offset-4 hover:underline sm:text-sm"
              onClick={clearAll}
              type="button"
            >
              Clear filters
            </button>
          )}
        </div>

        <p className="mt-10 text-brand-red text-[0.68rem] uppercase tracking-[0.16em] sm:mt-12 sm:text-sm">
          Explore {category ?? "Collars"}
        </p>

        {/* Grid */}
        {results.length > 0 ? (
          <div
            className="mt-5 grid grid-cols-1 gap-5 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
            ref={gridRef}
          >
            {results.map((product) => (
              <Link
                className="group flex scroll-mt-[88px] lg:scroll-mt-[120px] flex-col overflow-hidden border border-brand-line bg-white text-left transition-colors hover:border-brand-red sm:rounded-none"
                href={productRouteFor(product)}
                id={slugify(product.name)}
                key={product.id}
              >
                <div className="relative aspect-square w-full overflow-hidden bg-[#fafafa] sm:aspect-[4/3]">
                  <Image
                    alt={product.name}
                    className="object-contain p-8 transition-transform duration-300 group-hover:scale-105 sm:p-6"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={product.image}
                    unoptimized
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="border border-brand-line px-2 py-0.5 text-brand-muted text-[12px] sm:text-xs">
                      {product.configuration}
                    </span>
                    <span className="border border-brand-line px-2 py-0.5 text-brand-muted text-[12px] sm:text-xs">
                      {product.material}
                    </span>
                  </div>

                  <h3 className="mt-4 font-medium text-brand-dark text-base leading-[1.3] sm:text-lg">
                    {product.name}
                  </h3>

                  <span className="mt-auto flex items-center gap-2 pt-5 text-brand-red text-[10px] uppercase tracking-[0.08em] sm:pt-6 sm:text-sm">
                    View Specifications
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-6 border border-brand-line bg-brand-bg-light px-8 py-16 text-center">
            <h3 className="font-medium text-brand-dark text-xl">
              {categoryIsUnlisted
                ? `${category} are made to order.`
                : "No products match that search."}
            </h3>
            <p className="mx-auto mt-3 max-w-[480px] text-brand-muted text-sm leading-[1.65]">
              {categoryIsUnlisted
                ? `We manufacture ${category?.toLowerCase()} to customer drawings and specification. Individual listings are still being added \u2013 send us your requirement and we will come back with options and pricing.`
                : "We manufacture to customer specification, so the part you need may not be listed. Clear the filters to see the full range, or tell us what you are looking for."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                onClick={clearAll}
                showArrow={false}
                size="cta"
                type="button"
                variant="secondary"
              >
                {categoryIsUnlisted ? "Back to All Products" : "Clear Filters"}
              </Button>
              <Button
                href={
                  categoryIsUnlisted && category
                    ? `${CONTACT_ROUTE}?product=${encodeURIComponent(category)}`
                    : CONTACT_ROUTE
                }
                size="cta"
                variant="primary"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
