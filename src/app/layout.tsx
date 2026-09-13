import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { HashScroll } from "@/components/ui/hash-scroll";
import { SITE_URL } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_NAME = "Industrial Spares Manufacturing Company";
const DEFAULT_TITLE = `${SITE_NAME} | Shaft Collars & Couplings Exporter`;
const DEFAULT_DESCRIPTION =
  "ISO 9001:2015 certified manufacturer and exporter of mechanical power transmission products, shaft collars, couplings, and precision CNC components from Kolkata, India since 1993.";
const OG_IMAGE = "/assets/hero/hero-1.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Shaft Collars",
    "Couplings",
    "Rigid Couplings",
    "Split Collars",
    "CNC Machined Components",
    "Nozzles",
    "Pneumatic Actuators",
    "Valves",
    "Industrial Spares India",
    "Power Transmission Parts",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 2400, height: 961, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/assets/brand/Favicon.svg",
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "Industrial Spares",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/brand/logo.webp`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description: DEFAULT_DESCRIPTION,
  foundingDate: "1993",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-33-2424-3118",
    contactType: "sales",
    email: "jp190157@gmail.com",
    areaServed: "Worldwide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable}`}>
      <body className="bg-white text-gray-900 antialiased selection:bg-brand-red selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <HashScroll />
        {children}
      </body>
    </html>
  );
}
