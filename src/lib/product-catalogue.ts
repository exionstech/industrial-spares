/* Product catalogue configuration. Update product records here to change catalogue data. */

export const CATALOGUE_CATEGORIES = [
  "Shaft Collars",
  "Couplings",
  "CNC Components",
  "Sprockets",
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
    image: "/assets/products/collar-solid-zinc.jpg",
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
    image: "/assets/products/collar-solid-aluminium.jpg",
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
    image: "/assets/products/collar-solid-black-oxide.jpg",
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
    image: "/assets/products/collar-solid-stainless.jpg",
    configuration: "Solid",
    material: "Stainless Steel",
    finish: "Stainless steel 304",
    clamping: "Set screw",
  },
  {
    id: "single-split-aluminium",
    name: "Single Split Shaft Collar Aluminium",
    category: "Shaft Collars",
    image: "/assets/products/collar-single-split-aluminium.jpg",
    configuration: "Single Split",
    material: "Aluminium",
    finish: "Plain aluminium",
    clamping: "Single clamp screw",
  },
  {
    id: "single-split-black-oxide",
    name: "Single Split Shaft Collar Black Oxide",
    category: "Shaft Collars",
    image: "/assets/products/collar-single-split-black-oxide.jpg",
    configuration: "Single Split",
    material: "Black Oxide",
    finish: "Black oxide steel",
    clamping: "Single clamp screw",
  },
  {
    id: "single-split-stainless",
    name: "Single Split Shaft Collar Stainless Steel",
    category: "Shaft Collars",
    image: "/assets/products/collar-single-split-stainless.jpg",
    configuration: "Single Split",
    material: "Stainless Steel",
    finish: "Stainless steel 304",
    clamping: "Single clamp screw",
  },
  {
    id: "double-split-aluminium",
    name: "Double Split Shaft Collar Aluminium",
    category: "Shaft Collars",
    image: "/assets/products/collar-double-split-aluminium.jpg",
    configuration: "Double Split",
    material: "Aluminium",
    finish: "Plain aluminium",
    clamping: "Two clamp screws",
  },
  {
    id: "double-split-black-oxide",
    name: "Double Split Shaft Collar Black Oxide",
    category: "Shaft Collars",
    image: "/assets/products/collar-double-split-black-oxide.jpg",
    configuration: "Double Split",
    material: "Black Oxide",
    finish: "Black oxide steel",
    clamping: "Two clamp screws",
  },
  {
    id: "double-split-stainless",
    name: "Double Split Shaft Collar Stainless Steel",
    category: "Shaft Collars",
    image: "/assets/products/collar-double-split-stainless.jpg",
    media: [
      { type: "image", src: "/assets/products/collar-double-split-stainless.jpg" },
      { type: "image", src: "/assets/products/collar-double-split-aluminium.jpg" },
      {
        type: "video",
        src: "/assets/about/placeholder-cnc.mp4",
        poster: "/assets/products/collar-double-split-stainless.jpg",
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

export const FOOTER_PRODUCT_LINKS = CATALOGUE_CATEGORIES;

export const MATERIALS = ["Black Oxide", "Mild Steel", "Stainless Steel", "Aluminium", "Plastic"];

export const CORE_PRODUCTS = [
  {
    id: "shaft-collars",
    title: "Shaft Collars",
    description:
      "Precision engineered shaft collars manufactured to exact tolerances. Available in solid/set, single split, and double split configurations - in multiple materials and surface finishes.",
    image: "/assets/products/shaft-collars.jpg",
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
    image: "/assets/products/couplings.jpg",
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
    image: "/assets/products/cnc-components.jpg",
    description: "High-precision CNC turned and milled components to custom prints.",
  },
  {
    id: "sprockets",
    title: "Sprockets",
    image: "/assets/products/sprockets.jpg",
    description: "Industrial drive sprockets with induction hardened teeth.",
  },
  {
    id: "valves",
    title: "Valves",
    image: "/assets/products/valves.jpg",
    description: "Heavy-duty industrial valve bodies and precision sub-assemblies.",
  },
  {
    id: "other",
    title: "Other Machine Parts",
    image: "/assets/products/other-machine-parts.jpg",
    description: "Custom machined industrial spares, bushings, and power transmission parts.",
  },
] as const;

export const OTHER_PRODUCT_FAMILIES = [
  {
    id: "single-double-split-collar",
    title: "Single & Double Split Collar",
    image: "/assets/products/single-double-split-collar.jpg",
    category: "Shaft Collars",
  },
  {
    id: "rigid-coupling",
    title: "Rigid Coupling",
    image: "/assets/products/rigid-coupling.jpg",
    category: "Couplings",
  },
  {
    id: "split-coupling",
    title: "Split Coupling",
    image: "/assets/products/split-coupling.jpg",
    category: "Couplings",
  },
] as const;
