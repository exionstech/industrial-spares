/*
 * The catalogue hierarchy behind /products: family -> type -> variant -> catalogue.
 * Every level is a real route, so any level can be linked to or shared directly.
 * Structure only - no descriptions, no part numbers, no invented variants.
 */

import { PRODUCTS_ROUTE } from "@/lib/constants";

export interface CatalogueVariant {
  id: string;
  name: string;
  /* Client-supplied product photo. Absent where no photo was supplied. */
  image?: string;
}

export interface CatalogueType {
  id: string;
  name: string;
  variants: readonly CatalogueVariant[];
}

export interface CatalogueFamily {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  /* Empty for made-to-order families, which stop at a product list. */
  types: readonly CatalogueType[];
  products?: readonly string[];
  note?: string;
}

/*
 * Client product photography. Filenames arrive with spaces, so they are encoded
 * at the point of use rather than renamed - the delivered folder stays untouched.
 */
const PHOTO_DIR = "/assets/products/Product Images";

const photo = (file: string) => `${PHOTO_DIR}/${file}.png`;

/*
 * Ten photos cover three finishes per configuration. Grade (304 / 316) and
 * metric sizing do not change what a collar looks like, so a finish's photo
 * represents every variant sharing that finish and configuration.
 */
const SOLID_VARIANTS = [
  { id: "zinc-plated", name: "Zinc Plated", image: photo("Zinc Plated Solid Collar") },
  { id: "aluminium", name: "Aluminium", image: photo("Solid Collar Aluminium") },
  {
    id: "stainless-steel-304",
    name: "Stainless Steel (304)",
    image: photo("Solid Collar Stainless Steel (304)"),
  },
  {
    id: "stainless-steel-316",
    name: "Stainless Steel (316)",
    image: photo("Solid Collar Stainless Steel (304)"),
  },
  {
    id: "black-oxide-metric",
    name: "Black Oxide Metric",
    image: photo("Solid Collar Black Oxide"),
  },
  {
    id: "stainless-steel-metric",
    name: "Stainless Steel Metric",
    image: photo("Solid Collar Stainless Steel (304)"),
  },
] as const;

const splitCollarVariants = (blackOxide: string, aluminium: string, stainless: string) =>
  [
    { id: "black-oxide", name: "Black Oxide", image: blackOxide },
    { id: "aluminium", name: "Aluminium", image: aluminium },
    { id: "stainless-steel-304", name: "Stainless Steel (304)", image: stainless },
    { id: "stainless-steel-316", name: "Stainless Steel (316)", image: stainless },
    { id: "black-oxide-metric", name: "Black Oxide Metric", image: blackOxide },
    { id: "stainless-steel-metric", name: "Stainless Steel Metric", image: stainless },
  ] as const;

const SINGLE_SPLIT_VARIANTS = splitCollarVariants(
  photo("Single Split Shaft Collar Black Oxide"),
  photo("Single Split Shaft Collar Aluminium"),
  /* Delivered as "Shaf" - referenced as supplied so the file resolves. */
  photo("Single Split Shaf Collar Stainless Steel"),
);

const DOUBLE_SPLIT_VARIANTS = splitCollarVariants(
  photo("Double Split Shaft Collar Black Oxide"),
  photo("Double Split Shaft Collar Aluminium"),
  photo("Double Split Shaft Collar Stainless Steel"),
);

/* Threaded bore collars and rigid couplings share two variants but not their photos. */
const THREADED_BORE_VARIANTS = [
  {
    id: "black-oxide",
    name: "Black Oxide",
    image: photo("Threaded bore shaft collar BLACK OXIDE"),
  },
  {
    id: "stainless-steel",
    name: "Stainless Steel",
    image: photo("Threaded bore shaft collar stainless steel"),
  },
] as const;

const RIGID_COUPLING_VARIANTS = [
  { id: "black-oxide", name: "Black Oxide", image: photo("Black oxide rigid coupling") },
  { id: "stainless-steel", name: "Stainless Steel", image: photo("Rigid coupling stainless") },
] as const;

/* One split coupling photo per finish, so both split types share their finish's photo. */
const SPLIT_COUPLING_BLACK_OXIDE = photo("Split coupling black oxide");
const SPLIT_COUPLING_STAINLESS = photo("Split coupling stainless steel");

const SPLIT_COUPLING_VARIANTS = [
  {
    id: "black-oxide-single-split",
    name: "Black Oxide — Single Split",
    image: SPLIT_COUPLING_BLACK_OXIDE,
  },
  {
    id: "black-oxide-double-split",
    name: "Black Oxide — Double Split",
    image: SPLIT_COUPLING_BLACK_OXIDE,
  },
  {
    id: "stainless-steel-single-split",
    name: "Stainless Steel — Single Split",
    image: SPLIT_COUPLING_STAINLESS,
  },
  {
    id: "stainless-steel-double-split",
    name: "Stainless Steel — Double Split",
    image: SPLIT_COUPLING_STAINLESS,
  },
] as const;

export const CATALOGUE_FAMILIES: readonly CatalogueFamily[] = [
  {
    id: "shaft-collars",
    name: "Shaft Collars",
    image: "/assets/products/shaft-collars.jpg",
    imageAlt: "Precision machined shaft collars",
    types: [
      { id: "solid-set", name: "Solid / Set Collars", variants: SOLID_VARIANTS },
      { id: "single-split", name: "Single Split Collars", variants: SINGLE_SPLIT_VARIANTS },
      { id: "double-split", name: "Double Split Collars", variants: DOUBLE_SPLIT_VARIANTS },
      { id: "threaded-bore", name: "Threaded Bore Collars", variants: THREADED_BORE_VARIANTS },
    ],
  },
  {
    id: "couplings",
    name: "Couplings",
    image: "/assets/products/couplings.jpg",
    imageAlt: "Precision machined couplings",
    types: [
      { id: "rigid", name: "Rigid Couplings", variants: RIGID_COUPLING_VARIANTS },
      { id: "split", name: "Split Couplings", variants: SPLIT_COUPLING_VARIANTS },
    ],
  },
  {
    id: "other-cnc-products",
    name: "Other CNC Products",
    image: "/assets/products/cnc-components.jpg",
    imageAlt: "CNC machined industrial components",
    types: [],
    products: ["Pneumatic Actuators", "Leveling Valves", "Nozzles", "Valves"],
    note: "Manufactured according to customer specifications and technical drawings.",
  },
];

export const findFamily = (familyId: string): CatalogueFamily | undefined =>
  CATALOGUE_FAMILIES.find((family) => family.id === familyId);

export const findType = (family: CatalogueFamily, typeId: string): CatalogueType | undefined =>
  family.types.find((type) => type.id === typeId);

export const findVariant = (type: CatalogueType, variantId: string): CatalogueVariant | undefined =>
  type.variants.find((variant) => variant.id === variantId);

export const familyRoute = (familyId: string) => `${PRODUCTS_ROUTE}/${familyId}`;

export const typeRoute = (familyId: string, typeId: string) =>
  `${PRODUCTS_ROUTE}/${familyId}/${typeId}`;

export const variantRoute = (familyId: string, typeId: string, variantId: string) =>
  `${PRODUCTS_ROUTE}/${familyId}/${typeId}/${variantId}`;

/* Every catalogue level, as path segments, for static generation. */
export const cataloguePaths = (): string[][] => {
  const paths: string[][] = [];

  for (const family of CATALOGUE_FAMILIES) {
    paths.push([family.id]);

    for (const type of family.types) {
      paths.push([family.id, type.id]);

      for (const variant of type.variants) {
        paths.push([family.id, type.id, variant.id]);
      }
    }
  }

  return paths;
};
