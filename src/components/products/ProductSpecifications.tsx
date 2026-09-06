"use client";

import type React from "react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import {
  AWAITING_DATA,
  DIMENSION_COLUMNS,
  DIMENSION_PLACEHOLDER_ROWS,
  type ShaftCollar,
} from "@/lib/constants";

interface ProductSpecificationsProps {
  product: ShaftCollar;
  /* Null when the product has no bore variants. */
  bore: string | null;
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ product, bore }) => {
  const combination = bore ? `${product.material} - ${bore}` : product.material;

  const rows = [
    { label: "Material", value: product.material },
    { label: "Bore", value: bore ?? "-" },
    { label: "Part Number", value: AWAITING_DATA },
    { label: "Screw / Fastener", value: AWAITING_DATA },
  ];

  return (
    <>
      {/* Product Specifications */}
      <section className="bg-white py-16 lg:py-[76px]">
        <div className="mx-auto max-w-shell px-4 sm:px-8">
          <SectionEyebrow>Product Data</SectionEyebrow>
          <h2 className="mt-3 font-medium text-[30px] text-brand-dark tracking-tight">
            Product Specifications
          </h2>

          <div className="mt-10 border border-brand-line p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-brand-muted text-sm uppercase tracking-[0.1em]">
                Selected combination
              </span>
              <span className="border border-brand-line bg-brand-bg-light px-3 py-1 text-brand-dark text-sm uppercase tracking-[0.06em]">
                {combination}
              </span>
            </div>

            <dl className="mt-6">
              {rows.map((row) => (
                <div className="flex items-baseline justify-between gap-6 py-2" key={row.label}>
                  <dt className="text-brand-muted text-sm">{row.label}</dt>
                  <dd className="text-right text-brand-dark text-sm">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-brand-muted text-sm">
              Part numbers and fastener specifications vary by material and bore configuration.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Dimensions */}
      <section className="border-brand-line border-y bg-brand-bg-light py-16 lg:py-20">
        <div className="mx-auto max-w-shell px-4 sm:px-8">
          <SectionEyebrow>Dimensional Specifications</SectionEyebrow>
          <h2 className="mt-3 font-medium text-[30px] text-brand-dark tracking-tight">
            Technical Dimensions
          </h2>
          <p className="mt-4 text-brand-muted text-base">Showing dimensions for: {combination}</p>

          <div className="mt-9 overflow-x-auto border border-brand-line bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-[#f9fafb]">
                  {DIMENSION_COLUMNS.map((column) => (
                    <th
                      className="border-brand-line border-b px-6 py-4 font-normal text-brand-dark text-sm"
                      key={column}
                      scope="col"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: DIMENSION_PLACEHOLDER_ROWS }, (_, rowIndex) => (
                  <tr
                    className="border-brand-line border-b last:border-b-0"
                    key={`dimension-row-${rowIndex + 1}`}
                  >
                    {DIMENSION_COLUMNS.map((column) => (
                      <td className="px-6 py-4 text-brand-muted text-sm" key={column}>
                        -
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-brand-muted text-sm">
            Technical data shown according to the selected product variation. Contact us for
            additional sizes or variations.
          </p>
        </div>
      </section>
    </>
  );
};
