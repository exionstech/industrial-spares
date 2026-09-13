import type { MetadataRoute } from "next";
import { cataloguePaths } from "@/lib/catalogue-tree";
import { SITE_URL, slugify } from "@/lib/constants";
import { SHAFT_COLLARS } from "@/lib/product-catalogue";

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: "/", changeFrequency: "monthly", priority: 1 },
  { url: "/about", changeFrequency: "monthly", priority: 0.8 },
  { url: "/products", changeFrequency: "weekly", priority: 0.9 },
  { url: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { url: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const cataloguePages: MetadataRoute.Sitemap = cataloguePaths().map((path) => ({
    url: `/products/${path.join("/")}`,
    changeFrequency: "monthly",
    priority: path.length === 1 ? 0.8 : path.length === 2 ? 0.7 : 0.6,
  }));

  const productPages: MetadataRoute.Sitemap = SHAFT_COLLARS.map((product) => ({
    url: `/products/${slugify(product.name)}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...STATIC_ROUTES, ...cataloguePages, ...productPages].map((entry) => ({
    ...entry,
    url: `${SITE_URL}${entry.url}`,
  }));
}
