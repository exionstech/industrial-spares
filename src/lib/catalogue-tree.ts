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
 * Grade (304 / 316) and metric sizing do not change what a collar looks like, so
 * a finish's photo represents every variant sharing that finish and configuration.
 * Variants without an image are awaiting client photography.
 */
const SOLID_BLACK_OXIDE = photo("Solid Collar Black Oxide");
const SOLID_STAINLESS = photo("Solid Collar Stainless Steel (304)");

const SOLID_VARIANTS = [
  { id: "zinc-imperial", name: "Zinc Imperial", image: photo("Zinc Plated Solid Collar") },
  {
    id: "stainless-steel-304-imperial",
    name: "Stainless Steel 304 Imperial",
    image: SOLID_STAINLESS,
  },
  {
    id: "stainless-steel-316-imperial",
    name: "Stainless Steel 316 Imperial",
    image: SOLID_STAINLESS,
  },
  { id: "aluminium", name: "Aluminium", image: photo("Solid Collar Aluminium") },
  {
    id: "black-oxide-imperial",
    name: "Black Oxide Imperial",
    image: photo("Solid Collars_ Black Oxide Imperial"),
  },
  { id: "black-oxide-metric", name: "Black Oxide Metric", image: SOLID_BLACK_OXIDE },
  { id: "stainless-steel-metric", name: "Stainless Steel Metric", image: SOLID_STAINLESS },
] as const;

const SINGLE_SPLIT_BLACK_OXIDE = photo("Single Split Shaft Collar Black Oxide");
/* Delivered as "Shaf" - referenced as supplied so the file resolves. */
const SINGLE_SPLIT_STAINLESS = photo("Single Split Shaf Collar Stainless Steel");

/* Not offered in zinc. */
const SINGLE_SPLIT_VARIANTS = [
  {
    id: "stainless-steel-304-imperial",
    name: "Stainless Steel 304 Imperial",
    image: SINGLE_SPLIT_STAINLESS,
  },
  {
    id: "stainless-steel-316-imperial",
    name: "Stainless Steel 316 Imperial",
    image: SINGLE_SPLIT_STAINLESS,
  },
  { id: "black-oxide-metric", name: "Black Oxide Metric", image: SINGLE_SPLIT_BLACK_OXIDE },
  { id: "stainless-steel-metric", name: "Stainless Steel Metric", image: SINGLE_SPLIT_STAINLESS },
  { id: "aluminium", name: "Aluminium", image: photo("Single Split Shaft Collar Aluminium") },
] as const;

const DOUBLE_SPLIT_BLACK_OXIDE = photo("Double Split Shaft Collar Black Oxide");
const DOUBLE_SPLIT_STAINLESS = photo("Double Split Shaft Collar Stainless Steel");

/* Not offered in zinc. */
const DOUBLE_SPLIT_VARIANTS = [
  {
    id: "stainless-steel-304-imperial",
    name: "Stainless Steel 304 Imperial",
    image: DOUBLE_SPLIT_STAINLESS,
  },
  {
    id: "stainless-steel-316-imperial",
    name: "Stainless Steel 316 Imperial",
    image: DOUBLE_SPLIT_STAINLESS,
  },
  { id: "black-oxide-imperial", name: "Black Oxide Imperial", image: DOUBLE_SPLIT_BLACK_OXIDE },
  { id: "aluminium", name: "Aluminium", image: photo("Double Split Shaft Collar Aluminium") },
  { id: "black-oxide-metric", name: "Black Oxide Metric", image: DOUBLE_SPLIT_BLACK_OXIDE },
] as const;

const THREADED_BORE_VARIANTS = [
  {
    id: "black-oxide-imperial",
    name: "Black Oxide Imperial",
    image: photo("Threaded bore shaft collar BLACK OXIDE"),
  },
  {
    id: "stainless-steel-304-imperial",
    name: "Stainless Steel 304 Imperial",
    image: photo("Threaded bore shaft collar stainless steel"),
  },
  {
    id: "stainless-steel-316-imperial",
    name: "Stainless Steel 316 Imperial",
    image: photo("Stainless Steel Imperial Threaded Bore"),
  },
  {
    id: "aluminium-imperial",
    name: "Aluminium Imperial",
    image: photo("Threaded Bore_ Aluminium Imperial"),
  },
] as const;

/*
 * Every coupling type comes in two finishes, each available with or without
 * keyways - four variants, and the client supplied a photo for each.
 */
interface CouplingPhotos {
  blackOxideKeyed: string;
  blackOxidePlain: string;
  stainlessKeyed: string;
  stainlessPlain: string;
}

const couplingVariants = (photos: CouplingPhotos) =>
  [
    {
      id: "black-oxide-with-keyways",
      name: "Black Oxide With Keyways",
      image: photos.blackOxideKeyed,
    },
    {
      id: "black-oxide-without-keyways",
      name: "Black Oxide Without Keyways",
      image: photos.blackOxidePlain,
    },
    {
      id: "stainless-steel-with-keyways",
      name: "Stainless Steel With Keyways",
      image: photos.stainlessKeyed,
    },
    {
      id: "stainless-steel-without-keyways",
      name: "Stainless Steel Without Keyways",
      image: photos.stainlessPlain,
    },
  ] as const;

const RIGID_COUPLING_VARIANTS = couplingVariants({
  blackOxideKeyed: photo("Rigid coupling black oxide with keyway"),
  blackOxidePlain: photo("Black oxide rigid coupling"),
  stainlessKeyed: photo("Rigid coupling stainless steel with keyway"),
  stainlessPlain: photo("Rigid Coupling stainless steel without keyway"),
});

/* Single and double split couplings each have their own four photos. */
const SINGLE_SPLIT_COUPLING_VARIANTS = couplingVariants({
  blackOxideKeyed: photo("SINGLE SPLIT COUPLING WITH KEYWAY BLACK OXIDE"),
  blackOxidePlain: photo("SINGLE SPLIT COUPLING WITHOUT KEYWAY BLACK OXIDE"),
  stainlessKeyed: photo("SINGLE SPLIT COUPLING WITH KEYWAY STAINLESS STEEL"),
  stainlessPlain: photo("SINGLE SPLIT COUPLING WITHOUT KEYWAY STAINLESS STEEL"),
});

const DOUBLE_SPLIT_COUPLING_VARIANTS = couplingVariants({
  blackOxideKeyed: photo("DOUBLE SPLIT COUPLING WITH KEYWAY BLACK OXIDE"),
  blackOxidePlain: photo("DOUBLE SPLIT COUPLING WITHOUT KEYWAY BLACK OXIDE (HEAVY)"),
  stainlessKeyed: photo("DOUBLE SPLIT COUPLING WITH KEYWAY STAINLESS STEEL (HEAVY)"),
  stainlessPlain: photo("DOUBLE SPLIT COUPLING WITHOUT KEYWAY STAINLESS STEEL (HEAVY)"),
});

export const CATALOGUE_FAMILIES: readonly CatalogueFamily[] = [
  {
    id: "shaft-collars",
    name: "Shaft Collar",
    image: "/assets/products/shaft-collars.jpg",
    imageAlt: "Precision machined shaft collars",
    types: [
      { id: "solid", name: "Solid Collars", variants: SOLID_VARIANTS },
      { id: "single-split", name: "Single Split", variants: SINGLE_SPLIT_VARIANTS },
      { id: "double-split", name: "Double Split", variants: DOUBLE_SPLIT_VARIANTS },
      { id: "threaded-bore", name: "Threaded Bore", variants: THREADED_BORE_VARIANTS },
    ],
  },
  {
    id: "couplings",
    name: "Couplings",
    image: "/assets/products/couplings.jpg",
    imageAlt: "Precision machined couplings",
    types: [
      { id: "rigid", name: "Rigid Coupling", variants: RIGID_COUPLING_VARIANTS },
      {
        id: "single-split-heavy",
        name: "Single Split (Heavy)",
        variants: SINGLE_SPLIT_COUPLING_VARIANTS,
      },
      {
        id: "double-split-heavy",
        name: "Double Split (Heavy)",
        variants: DOUBLE_SPLIT_COUPLING_VARIANTS,
      },
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
