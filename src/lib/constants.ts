export const BRAND_INFO = {
  name: "INDUSTRIAL SPARES",
  fullName: "INDUSTRIAL SPARES MANUFACTURING COMPANY",
  tagline: "MANUFACTURING CO.",
  est: "EST. 1993 - KOLKATA, INDIA",
  location: "Kolkata, West Bengal, India",
  email: "info@industrialsparesfromindia.com",
  phone: "+91 33 2234 5678",
  iso: "ISO 9001:2015 CERTIFIED",
  exportExp: "Over 30 years of export experience",
};

export const IMAGES = {
  logo: "https://framerusercontent.com/images/89Bw1SUJN6l6dCYPaK2kgonGcY.png",
  heroBg: "https://framerusercontent.com/images/WvGdIGyATWIlEz7kZUiQLgQ1U.png",
  cert1: "https://framerusercontent.com/images/Ai3HZn7GbIZ0RccOeeLvy7QDq1I.png",
  cert2: "https://framerusercontent.com/images/u3WkuxjeJSdVqlav0VVymBPxUYA.png",
  cert3: "https://framerusercontent.com/images/4lsaKj9dacZrVZ6wxPJtKuJPSI.png",
  shaftCollars: "https://framerusercontent.com/images/7NK8fGuyqF3aF57JhRu3voq3as.jpg",
  couplings: "https://framerusercontent.com/images/2Z9NNE37lFh4DbRfaqWXEtpLg.jpg",
  cncComponents: "https://framerusercontent.com/images/wB1KiLMHIYo09P80qNe31sCC3Ok.jpg",
  sprockets: "https://framerusercontent.com/images/YXBuRm7MJWyhtTHo8eowKlJN3Y.jpg",
  valves: "https://framerusercontent.com/images/DPBbZ84YG3OVXfnNsR7VjWX7WL0.jpg",
  otherMachineParts: "https://framerusercontent.com/images/t19XdPCjkGMjuCR75bZgJuyUSnY.jpg",
  contactEngineer: "https://framerusercontent.com/images/ctUfi20e5c3UghihvWBXApxVG6c.png",
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Quality", href: "#quality" },
];

export const CORE_PRODUCTS = [
  {
    id: "shaft-collars",
    title: "Shaft Collars",
    description:
      "Precision engineered shaft collars manufactured to exact tolerances. Available in solid/set, single split, and double split configurations - in multiple materials and surface finishes.",
    image: IMAGES.shaftCollars,
    badges: ["Set Collar", "Single Split", "Double Split"],
    features: [
      {
        title: "Set / Solid Collar",
        desc: "Single-piece, tightened by set screw",
      },
      {
        title: "Single Split Collar",
        desc: "Two-bolt split for quick installation",
      },
      {
        title: "Double Split Collar",
        desc: "Heavy-duty two-piece design",
      },
    ],
    ctaText: "EXPLORE SHAFT COLLARS",
  },
  {
    id: "couplings",
    title: "Couplings",
    description:
      "Precision machined couplings designed for reliable power transmission. Rigid and split coupling designs for varied industrial applications.",
    image: IMAGES.couplings,
    badges: ["Rigid Coupling", "Split Coupling"],
    features: [
      {
        title: "Rigid Coupling",
        desc: "Fixed connection for aligned shafts",
      },
      {
        title: "Split Coupling",
        desc: "Easy installation without shaft removal",
      },
    ],
    ctaText: "EXPLORE COUPLINGS",
  },
];

export const OTHER_PRODUCTS = [
  {
    id: "cnc",
    title: "CNC Components",
    image: IMAGES.cncComponents,
    description: "High-precision CNC turned and milled components to custom prints.",
  },
  {
    id: "sprockets",
    title: "Sprockets",
    image: IMAGES.sprockets,
    description: "Industrial drive sprockets with induction hardened teeth.",
  },
  {
    id: "valves",
    title: "Valves",
    image: IMAGES.valves,
    description: "Heavy-duty industrial valve bodies and precision sub-assemblies.",
  },
  {
    id: "other",
    title: "Other Machine Parts",
    image: IMAGES.otherMachineParts,
    description: "Custom machined industrial spares, bushings, and power transmission parts.",
  },
];

export const MATERIALS = ["Black Oxide", "Mild Steel", "Stainless Steel", "Aluminium", "Plastic"];

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
