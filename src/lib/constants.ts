import type { CollarConfiguration, ShaftCollar } from "@/lib/product-catalogue";
import { SHAFT_COLLARS } from "@/lib/product-catalogue";

export const BRAND_INFO = {
  name: "INDUSTRIAL SPARES",
  fullName: "INDUSTRIAL SPARES MANUFACTURING COMPANY",
  tagline: "MANUFACTURING CO.",
  est: "EST. 1993 - KOLKATA, INDIA",
  location: "Kolkata, West Bengal, India",
  addressLines: ["Kolkata, West Bengal", "India"],
  email: "jp190157@gmail.com",
  iso: "ISO 9001:2015 CERTIFIED",
  exportExp: "Over 30 years of export experience",
};

export const IMAGES = {
  logo: "/assets/brand/logo.png",
  cert1: "/assets/brand/cert-iso-1.png",
  cert2: "/assets/brand/cert-iso-2.png",
  cert3: "/assets/brand/cert-iso-3.png",
  contactWelder: "/assets/team/contact-welder.jpg",
};

/* Hero carousel - full-bleed rounded photo band directly under the navbar. */
export const HERO_SLIDES = [
  {
    id: "shop-floor",
    image: "/assets/hero/hero-1.jpg",
    alt: "Machinists working a press on the Industrial Spares shop floor",
  },
  {
    id: "plant",
    image: "/assets/hero/hero-2.jpg",
    alt: "Production line running on the manufacturing plant floor",
  },
  {
    id: "export",
    image: "/assets/hero/hero-3.jpg",
    alt: "Containers being loaded at port for export shipment",
  },
];

/* Every RFQ call to action lands on the contact page. */
export const CONTACT_ROUTE = "/contact";

export const ABOUT_ROUTE = "/about";
export const PRODUCTS_ROUTE = "/products";

/* The quality story lives in a section of the about page. */
export const QUALITY_ANCHOR = `${ABOUT_ROUTE}#quality`;

/* Prefills the contact form's "Product / Requirement" field. */
export const contactRouteFor = (product: string) =>
  `${CONTACT_ROUTE}?product=${encodeURIComponent(product)}`;

/*
 * Root-relative so the anchors also resolve from other routes. `match` marks
 * the links that own a page - anchor-only links never take a selected state.
 */
export const NAV_LINKS = [
  { name: "Home", href: "/", match: "/" },
  { name: "About us", href: ABOUT_ROUTE, match: ABOUT_ROUTE },
  { name: "Products", href: PRODUCTS_ROUTE, match: PRODUCTS_ROUTE },
  { name: "Quality", href: QUALITY_ANCHOR },
];

export const FOOTER_COMPANY_LINKS = [
  { name: "About", href: ABOUT_ROUTE },
  { name: "Products", href: PRODUCTS_ROUTE },
  { name: "Quality", href: QUALITY_ANCHOR },
  { name: "Contact", href: CONTACT_ROUTE },
];

/* Filters the catalogue. */
export const categoryRouteFor = (category: string) =>
  `${PRODUCTS_ROUTE}?category=${encodeURIComponent(category)}`;

/* Scrolls the catalogue to a product family without filtering it. */
export const catalogueScrollRouteFor = (category: string) =>
  `${PRODUCTS_ROUTE}?scrollTo=${encodeURIComponent(category)}`;

export const LEGAL_LINKS = [{ name: "Privacy Policy", href: "/privacy-policy" }];

/* Build credit shown in the footer's bottom bar. */
export const DEVELOPER = {
  name: "Exions Tech",
  url: "https://exionstech.online",
};

export const VALUE_PROPOSITIONS = [
  {
    title: "Consistent Quality",
    description:
      "Every part is inspected and tested against specifications. Our quality management system ensures repeatable precision across production runs.",
  },
  {
    title: "On-Time Delivery",
    description:
      "We understand that downtime costs money. Our manufacturing processes are optimized for reliable lead times you can plan around.",
  },
  {
    title: "Imported Fasteners",
    description:
      "We use high-grade imported fasteners in our shaft collars and couplings for superior clamping force and long service life.",
  },
  {
    title: "Laser Marking & Customization",
    description:
      "Custom part numbers, logos, and specifications laser-marked directly on your components for easy identification and traceability.",
  },
];

/* ---------------------------------------------------------------- Contact */

export const CONTACT_BENEFITS = [
  "ISO 9001 Quality Management System",
  "Customised machined components manufactured to customer-specific requirements.",
];

export const CONTACT_CHANNELS = [
  {
    id: "email",
    icon: "mail",
    label: "Email",
    value: "jp190157@gmail.com",
    href: "mailto:jp190157@gmail.com",
  },
  {
    id: "telephone",
    icon: "headset",
    label: "Telephone",
    value: "+91-33-2424 3118",
    href: "tel:+913324243118",
  },
  {
    id: "mobile",
    icon: "phone",
    label: "Mobile",
    value: "+91 98310 06168",
    href: "tel:+919831006168",
  },
  { id: "fax", icon: "printer", label: "Fax", value: "+91-33-2424 3120", href: null },
] as const;

export const CONTACT_LOCATIONS = [
  {
    id: "head-office",
    name: "Head Office",
    addressLines: ["51, Purna Chandra Mitra Lane, 2/F,", "Kolkata - 700 033. INDIA"],
  },
  {
    id: "facility",
    name: "Manufacturing Facility",
    addressLines: [
      "E25/26, RIC Industrial Estate,",
      "Behala 780 Upendra Nath Banerjee Road,",
      "Kolkata - 700 060. INDIA",
    ],
  },
];

export const MAP_CARD = {
  label: "Manufacturing Hub",
  name: "Industrial Spares",
  addressLines: [
    "E25/26, RIC Industrial Estate,",
    "Behala 780 Upendra Nath Banerjee Road,",
    "Kolkata - 700 060. INDIA",
  ],
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.I.C+Compound+Kolkata+West+Bengal+India",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.783416192533!2d88.300884475656!3d22.51230783517661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b451e4d74cd%3A0x67f9d90b74facb44!2sR.I.C%20Compound!5e0!3m2!1sen!2sin!4v1788690092546!5m2!1sen!2sin",
};

export const FOUNDER = {
  initials: "JP",
  name: "Janardan Paul",
  role: "Founder & Managing Director",
  note: "Direct Manufacturer Consultation",
};

/* ------------------------------------------------------------------ About */

export const MILESTONES = [
  { year: "1993", title: ["Merchant", "Exporter"] },
  { year: "2004", title: ["Manufacturing", "Capability"] },
  { year: "2012", title: ["Precision", "Engineering"] },
  { year: "2026", title: ["International", "Markets"] },
];

/*
 * videoUrl points at self-hosted placeholder clips - swap the files in
 * public/assets/about/ for the real facility footage before launch.
 */
export const FACILITY_MEDIA = [
  {
    id: "cnc",
    image: "/assets/about/cnc-floor.jpg",
    videoUrl: "/assets/about/placeholder-cnc.mp4",
    title: "CNC Machining & Turning Floor",
    description: "A look at our automated turning centres producing high-tolerance shaft collars.",
  },
  {
    id: "inspection",
    image: "/assets/about/inspection.jpg",
    videoUrl: "/assets/about/placeholder-inspection.mp4",
    title: "Quality Inspection & Dimensional Testing",
    description:
      "Our quality team performing rigorous micrometric and laser testing on exported couplings.",
  },
];

export const CAPABILITIES = [
  {
    icon: "settings",
    title: "CNC-Controlled Turning Machines",
    description: "Our manufacturing facility is equipped with CNC-controlled turning machines.",
  },
  {
    icon: "sliders",
    title: "Vertical Machining Centres (VMCs)",
    description: "Our manufacturing facility is equipped with Vertical Machining Centres (VMCs).",
  },
  {
    icon: "toolbox",
    title: "Conventional Machining Equipment",
    description: "Our manufacturing facility is equipped with conventional machining equipment.",
  },
  {
    icon: "activity",
    title: "Precision Measuring Instruments",
    description: "Our manufacturing facility is equipped with precision measuring instruments.",
  },
] as const;

export const EXPERIENCE_STATS = [
  { value: "30+", label: "Years" },
  { value: "Export", label: "Experience" },
  { value: "Kolkata", label: "India" },
];

export const APPLICATIONS = [
  {
    icon: "conveyor",
    title: "Conveyor Systems",
    description: "For secure shaft locating on material rollers.",
  },
  {
    icon: "package",
    title: "Packaging Machinery",
    description: "Precise alignment of automated guide rails.",
  },
  {
    icon: "food",
    title: "Food Processing",
    description: "Corrosion-resistant grades for hygiene lines.",
  },
  {
    icon: "forklift",
    title: "Material Handling",
    description: "High axial load hold for heavy machinery.",
  },
  {
    icon: "tractor",
    title: "Agricultural Machinery",
    description: "Rugged protection against soil and debris.",
  },
  {
    icon: "cpu",
    title: "Industrial Automation",
    description: "Exact micro-positioning of sensors.",
  },
  {
    icon: "robot",
    title: "Robotics",
    description: "Ultra-precise shaft stops for multi-joint arms.",
  },
  {
    icon: "wrench",
    title: "CNC & Machine Tools",
    description: "Withstands aggressive cooling fluids and high RPM.",
  },
  {
    icon: "linear",
    title: "Linear Motion Systems",
    description: "Dependable carriage stops on guide shafts.",
  },
  { icon: "cog", title: "Power Transmission", description: "Sprocket and pulley axial securing." },
  {
    icon: "chain",
    title: "Chain & Sprocket Systems",
    description: "Prevents axial drift on drive chains.",
  },
  {
    icon: "droplets",
    title: "Pumps & Fluid Handling",
    description: "Secures impellers under high pressures.",
  },
  {
    icon: "textile",
    title: "Textile Machinery",
    description: "Smooth finish prevents yarn snagging.",
  },
  {
    icon: "printer",
    title: "Printing Machinery",
    description: "Ensures micrometer drum alignment.",
  },
  {
    icon: "bottle",
    title: "Bottling & Beverage",
    description: "Washdown safe materials for wet zones.",
  },
  {
    icon: "custom",
    title: "Custom Machinery",
    description: "Tailored metallurgy to bespoke design prints.",
  },
] as const;

export const APPROACH_PILLARS = [
  {
    number: "01",
    title: "Customised Components",
    description:
      "From customised components and small-batch requirements to repeat production orders.",
  },
  {
    number: "02",
    title: "Small-Batch Requirements",
    description: "We focus on understanding the application and meeting specifications accurately.",
  },
  {
    number: "03",
    title: "Repeat Production Orders",
    description: "Our objective is simple: to deliver products that meet expectations.",
  },
  {
    number: "04",
    title: "Dependable Service",
    description:
      "Providing dependable service throughout the process and building relationships that last.",
  },
];

export const VISION_PILLARS = [
  {
    title: "Kolkata → Global",
    description:
      "Our mission is to keep building meaningful connections with importers and businesses around the world.",
  },
  {
    title: "Direct Relationships",
    description:
      "Creating direct relationships that reduce middlemen, improve pricing and deliver genuine value.",
  },
  {
    title: "Personal Service",
    description:
      "At the heart of Industrial Spares is a deeply personal approach to business — Janardan Paul remains personally involved with his customers, corresponding with and following up with clients himself, while our growing marketing team continuously develops new international relationships.",
  },
  {
    title: "Competitive Manufacture",
    description:
      "We believe in making connections that last, combining competitive manufacturing with personal service, and taking Kolkata-made engineering to the world.",
  },
];

/* --------------------------------------------------------------- Products */

export type {
  CatalogueCategory,
  CollarConfiguration,
  CollarMaterial,
  ProductMedia,
  ShaftCollar,
} from "@/lib/product-catalogue";
export {
  BORE_OPTIONS,
  CATALOGUE_CATEGORIES,
  COLLAR_CONFIGURATIONS,
  COLLAR_MATERIALS,
  CORE_PRODUCTS,
  FOOTER_PRODUCT_LINKS,
  MATERIALS,
  mediaFor,
  OTHER_PRODUCT_FAMILIES,
  OTHER_PRODUCTS,
  PRODUCT_CATEGORIES,
  SHAFT_COLLARS,
} from "@/lib/product-catalogue";

/* Placeholder the approved design shows wherever catalogue data is pending. */
export const AWAITING_DATA = "TBD - Awaiting catalogue data";

/* The dimensions table renders this many blank rows until data arrives. */
export const DIMENSION_PLACEHOLDER_ROWS = 6;

export const DIMENSION_COLUMNS = [
  "Part Number",
  "Bore Size",
  "Outer Diameter",
  "Width",
  "Screw / Fastener",
] as const;

/* URL-safe slug from a product name, e.g. "solid-collar-stainless-steel-304". */
export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const productRouteFor = (product: ShaftCollar) =>
  `${PRODUCTS_ROUTE}/${slugify(product.name)}`;

export const findProductBySlug = (slug: string) =>
  SHAFT_COLLARS.find((product) => slugify(product.name) === slug);

/* How each configuration is described on the product page. */
export const CONFIGURATION_NOTES: Record<CollarConfiguration, string> = {
  Solid: "Single-piece collar tightened onto the shaft by set screw.",
  "Single Split":
    "Split on one side and closed by a clamp screw, so it locates without marking the shaft and can be removed without dismantling the assembly.",
  "Double Split":
    "Two-piece clamping collar that installs and removes without taking the shaft out of the machine, giving the highest holding power of the three.",
};
