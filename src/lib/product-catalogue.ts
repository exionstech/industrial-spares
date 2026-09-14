/* Product catalogue configuration. Update product records here to change catalogue data. */

export const CATALOGUE_CATEGORIES = [
  "Shaft Collars",
  "Couplings",
  "CNC Components",
  "Nozzles",
  "Pneumatic Actuators",
  "Valves",
] as const;

export const COLLAR_CONFIGURATIONS = ["Solid", "Single Split", "Double Split"] as const;

export const COLLAR_MATERIALS = [
  "Zinc Plated",
  "Aluminium",
  "Black Oxide",
  "Stainless Steel",
] as const;

export type CatalogueCategory = (typeof CATALOGUE_CATEGORIES)[number];
export type CollarConfiguration = (typeof COLLAR_CONFIGURATIONS)[number];
export type CollarMaterial = (typeof COLLAR_MATERIALS)[number];

export interface ProductMedia {
  type: "image" | "video";
  src: string;
  poster?: string;
}

export const BORE_OPTIONS = ["Round Bore", "Square Bore"] as const;

/* Client product photography, delivered with spaces in the filenames - encoded at the point of use. */
const productPhoto = (file: string) => `/assets/products/Product Images/${file}.webp`;

export interface ShaftCollar {
  id: string;
  name: string;
  image: string;
  media?: ProductMedia[];
  bores?: readonly string[];
  category: CatalogueCategory;
  configuration: CollarConfiguration;
  material: CollarMaterial;
  finish: string;
  clamping: string;
}

export const SHAFT_COLLARS: ShaftCollar[] = [
  {
    id: "solid-zinc",
    bores: BORE_OPTIONS,
    name: "Zinc Plated Solid Collar",
    category: "Shaft Collars",
    image: productPhoto("Zinc Plated Solid Collar"),
    configuration: "Solid",
    material: "Zinc Plated",
    finish: "Zinc plated steel",
    clamping: "Set screw",
  },
  {
    id: "solid-aluminium",
    bores: BORE_OPTIONS,
    name: "Solid Collar Aluminium",
    category: "Shaft Collars",
    image: productPhoto("Solid Collar Aluminium"),
    configuration: "Solid",
    material: "Aluminium",
    finish: "Plain aluminium",
    clamping: "Set screw",
  },
  {
    id: "solid-black-oxide",
    bores: BORE_OPTIONS,
    name: "Solid Collar Black Oxide",
    category: "Shaft Collars",
    image: productPhoto("Solid Collar Black Oxide"),
    configuration: "Solid",
    material: "Black Oxide",
    finish: "Black oxide steel",
    clamping: "Set screw",
  },
  {
    id: "solid-stainless",
    bores: BORE_OPTIONS,
    name: "Solid Collar Stainless Steel (304)",
    category: "Shaft Collars",
    image: productPhoto("Solid Collar Stainless Steel (304)"),
    configuration: "Solid",
    material: "Stainless Steel",
    finish: "Stainless steel 304",
    clamping: "Set screw",
  },
  {
    id: "single-split-aluminium",
    name: "Single Split Shaft Collar Aluminium",
    category: "Shaft Collars",
    image: productPhoto("Single Split Shaft Collar Aluminium"),
    configuration: "Single Split",
    material: "Aluminium",
    finish: "Plain aluminium",
    clamping: "Single clamp screw",
  },
  {
    id: "single-split-black-oxide",
    name: "Single Split Shaft Collar Black Oxide",
    category: "Shaft Collars",
    image: productPhoto("Single Split Shaft Collar Black Oxide"),
    configuration: "Single Split",
    material: "Black Oxide",
    finish: "Black oxide steel",
    clamping: "Single clamp screw",
  },
  {
    id: "single-split-stainless",
    name: "Single Split Shaft Collar Stainless Steel",
    category: "Shaft Collars",
    /* Delivered as "Shaf" - referenced as supplied so the file resolves. */
    image: productPhoto("Single Split Shaf Collar Stainless Steel"),
    configuration: "Single Split",
    material: "Stainless Steel",
    finish: "Stainless steel 304",
    clamping: "Single clamp screw",
  },
  {
    id: "double-split-aluminium",
    name: "Double Split Shaft Collar Aluminium",
    category: "Shaft Collars",
    image: productPhoto("Double Split Shaft Collar Aluminium"),
    configuration: "Double Split",
    material: "Aluminium",
    finish: "Plain aluminium",
    clamping: "Two clamp screws",
  },
  {
    id: "double-split-black-oxide",
    name: "Double Split Shaft Collar Black Oxide",
    category: "Shaft Collars",
    image: productPhoto("Double Split Shaft Collar Black Oxide"),
    configuration: "Double Split",
    material: "Black Oxide",
    finish: "Black oxide steel",
    clamping: "Two clamp screws",
  },
  {
    id: "double-split-stainless",
    name: "Double Split Shaft Collar Stainless Steel",
    category: "Shaft Collars",
    image: productPhoto("Double Split Shaft Collar Stainless Steel"),
    media: [
      { type: "image", src: productPhoto("Double Split Shaft Collar Stainless Steel") },
      { type: "image", src: productPhoto("Double Split Shaft Collar Aluminium") },
      {
        type: "video",
        src: "/assets/about/placeholder-cnc.mp4",
        poster: productPhoto("Double Split Shaft Collar Stainless Steel"),
      },
    ],
    configuration: "Double Split",
    material: "Stainless Steel",
    finish: "Stainless steel 304",
    clamping: "Two clamp screws",
  },
];

export const mediaFor = (product: ShaftCollar): ProductMedia[] =>
  product.media && product.media.length > 0
    ? product.media
    : [{ type: "image", src: product.image }];

export const PRODUCT_CATEGORIES = [...CATALOGUE_CATEGORIES, "Other Machine Parts"] as const;

export const FOOTER_PRODUCT_LINKS = [
  { name: "Shaft Collars", familyId: "shaft-collars" },
  { name: "Couplings", familyId: "couplings" },
  { name: "CNC Components", familyId: "other-cnc-products" },
] as const;

export const MATERIALS = ["Black Oxide", "Mild Steel", "Stainless Steel", "Aluminium", "Plastic"];

export const CORE_PRODUCTS = [
  {
    id: "shaft-collars",
    title: "Shaft Collars",
    description:
      "Precision engineered shaft collars manufactured to exact tolerances. Available in solid/set, single split, and double split configurations - in multiple materials and surface finishes.",
    image: "/assets/products/shaft-collars.webp",
    badges: ["Set Collar", "Single Split", "Double Split"],
    features: [
      { title: "Set / Solid Collar", desc: "Single-piece, tightened by set screw" },
      { title: "Single Split Collar", desc: "Two-bolt split for quick installation" },
      { title: "Double Split Collar", desc: "Heavy-duty two-piece design" },
    ],
    ctaText: "EXPLORE SHAFT COLLARS",
  },
  {
    id: "couplings",
    title: "Couplings",
    description:
      "Precision machined couplings designed for reliable power transmission. Rigid and split coupling designs for varied industrial applications.",
    image: "/assets/products/couplings.webp",
    badges: ["Rigid Coupling", "Split Coupling"],
    features: [
      { title: "Rigid Coupling", desc: "Fixed connection for aligned shafts" },
      { title: "Split Coupling", desc: "Easy installation without shaft removal" },
    ],
    ctaText: "EXPLORE COUPLINGS",
  },
] as const;

export const OTHER_PRODUCTS = [
  {
    id: "cnc",
    title: "CNC Components",
    image: "/assets/products/cnc-components.webp",
    description: "High-precision CNC turned and milled components to custom prints.",
  },
  {
    id: "valves",
    title: "Valves",
    image: "/assets/products/valves.webp",
    description: "Heavy-duty industrial valve bodies and precision sub-assemblies.",
  },
  {
    id: "other",
    title: "Other Machine Parts",
    image: "/assets/products/other-machine-parts.webp",
    description: "Custom machined industrial spares, bushings, and power transmission parts.",
  },
] as const;

/*
 * Homepage product overview. The homepage introduces the three families we
 * manufacture and stops there - type -> material -> catalogue navigation is the
 * Products page's job, so nothing below family level belongs in here.
 */
export const HOME_PRODUCT_FAMILIES = [
  {
    id: "shaft-collars",
    title: "Shaft Collar",
    image: "/assets/products/shaft-collars.webp",
    imageAlt: "Precision machined shaft collars",
    description: "Available in solid, single split, double split and threaded bore configurations.",
    configurations: ["Solid Collars", "Single Split", "Double Split", "Threaded Bore"],
  },
  {
    id: "couplings",
    title: "Couplings",
    image: "/assets/products/couplings.webp",
    imageAlt: "Precision machined couplings",
    description:
      "Available in rigid, single split (heavy) and double split (heavy) configurations.",
    configurations: ["Rigid Coupling", "Single Split (Heavy)", "Double Split (Heavy)"],
  },
] as const;

/* Made to order, so this family is introduced on the homepage without a catalogue CTA. */
export const HOME_OTHER_CNC_PRODUCTS = {
  id: "other-cnc-products",
  title: "Other CNC Products",
  image: "/assets/products/cnc-components.webp",
  imageAlt: "CNC machined industrial components",
  products: ["Pneumatic Actuators", "Leveling Valves", "Nozzles", "Valves"],
  note: "Manufactured according to customer specifications and technical drawings.",
} as const;
