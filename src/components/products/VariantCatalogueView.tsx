import Image from "next/image";
import type React from "react";
import { CatalogueLevelHeader } from "@/components/products/CatalogueLevelHeader";
import { CatalogueNav } from "@/components/products/CatalogueNav";
import { pendingColumnsFor } from "@/lib/catalogue-pending";
import { type CatalogueTable, tableFor } from "@/lib/catalogue-tables";
import {
  type CatalogueFamily,
  type CatalogueType,
  type CatalogueVariant,
  familyRoute,
  typeRoute,
} from "@/lib/catalogue-tree";
import {
  AWAITING_DATA,
  DIMENSION_COLUMNS,
  DIMENSION_PLACEHOLDER_ROWS,
  PRODUCTS_ROUTE,
} from "@/lib/constants";

interface VariantCatalogueViewProps {
  family: CatalogueFamily;
  type: CatalogueType;
  variant: CatalogueVariant;
}

const TABLE_FRAME = "mt-6 overflow-auto border border-brand-line bg-white";
const HEAD_CELL =
  "border-brand-line border-b bg-[#f9fafb] px-6 py-4 text-left font-normal text-brand-dark text-sm";

/*
 * The client's tables run to 63 sizes, so the frame scrolls with the header
 * pinned - the size columns stay labelled however far down the list you are.
 */
const DimensionTable: React.FC<{ table: CatalogueTable }> = ({ table }) => (
  <div className={`${TABLE_FRAME} max-h-[70vh]`}>
    <table className="w-full min-w-[720px] border-collapse">
      <thead className="sticky top-0">
        <tr>
          {table.columns.map((column) => (
            <th className={HEAD_CELL} key={column} scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr className="border-brand-line border-b last:border-b-0 even:bg-[#fcfcfd]" key={row[0]}>
            {row.map((cell, index) => (
              <td
                className={`px-6 py-3.5 text-sm tabular-nums ${
                  index === 0 ? "text-brand-dark" : "text-brand-muted"
                }`}
                key={table.columns[index]}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/*
 * Variants the client has not sent a catalogue for yet: the real columns for that
 * kind of collar, with blank rows. No dimensions are invented.
 */
const AwaitingTable: React.FC<{ columns: readonly string[] }> = ({ columns }) => (
  <>
    <div className={TABLE_FRAME}>
      <table className="w-full min-w-[720px] border-collapse">
        <thead>
          <tr>
            {columns.map((column) => (
              <th className={HEAD_CELL} key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: DIMENSION_PLACEHOLDER_ROWS }, (_, rowIndex) => (
            <tr
              className="border-brand-line border-b last:border-b-0"
              key={`catalogue-row-${rowIndex + 1}`}
            >
              {columns.map((column) => (
                <td className="px-6 py-4 text-brand-muted text-sm" key={column}>
                  -
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="mt-5 text-brand-muted text-sm">
      Catalogue data for this variant has not been published yet.
    </p>
  </>
);

/* Level 4, the end of the hierarchy: the catalogue for one variant. */
export const VariantCatalogueView: React.FC<VariantCatalogueViewProps> = ({
  family,
  type,
  variant,
}) => {
  const table = tableFor(family.id, type.id, variant.id);

  const selection = [
    { label: "Family", value: family.name },
    { label: "Configuration", value: type.name },
    { label: "Variant", value: variant.name },
    {
      label: "Catalogue data",
      value: table ? `${table.rows.length} sizes` : AWAITING_DATA,
    },
  ];

  return (
    <>
      <CatalogueNav
        back={{ name: type.name, href: typeRoute(family.id, type.id) }}
        crumbs={[
          { name: "All Products", href: PRODUCTS_ROUTE },
          { name: family.name, href: familyRoute(family.id) },
          { name: type.name, href: typeRoute(family.id, type.id) },
          { name: variant.name },
        ]}
      />

      <CatalogueLevelHeader eyebrow="Catalogue" title={variant.name} />

      <div className="mx-auto max-w-shell px-4 pb-20 sm:px-8 lg:pb-[120px]">
        {variant.image && (
          <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-[420px_1fr] lg:items-start">
            <div className="relative aspect-square w-full border border-brand-line bg-white">
              <Image
                alt={`${variant.name} ${type.name.toLowerCase()}`}
                className="object-contain object-center p-6"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                src={encodeURI(variant.image)}
              />
            </div>
          </div>
        )}

        {/* Selected path, restated as data */}
        <dl className="grid grid-cols-1 border border-brand-line sm:grid-cols-2 lg:grid-cols-4">
          {selection.map((row) => (
            <div
              className="border-brand-line border-b p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:p-6"
              key={row.label}
            >
              <dt className="text-brand-muted text-xs uppercase tracking-[0.16em]">{row.label}</dt>
              <dd className="mt-2 text-brand-dark text-sm">{row.value}</dd>
            </div>
          ))}
        </dl>

        {table ? (
          <DimensionTable table={table} />
        ) : (
          <AwaitingTable
            columns={pendingColumnsFor(family.id, type.id, variant.id) ?? DIMENSION_COLUMNS}
          />
        )}

        {/* Material, finish and packing lines, exactly as the client published them. */}
        {table && table.notes.length > 0 && (
          <ul className="mt-5 flex flex-col gap-2">
            {table.notes.map((note) => (
              <li className="flex gap-3 text-brand-muted text-sm leading-[1.6]" key={note}>
                <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 bg-brand-red" />
                {note}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
