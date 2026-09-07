import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { HashScroll } from "@/components/ui/hash-scroll";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Industrial Spares Manufacturing Company | Shaft Collars & Couplings Exporter",
  description:
    "ISO 9001:2015 certified manufacturer and exporter of mechanical power transmission products, shaft collars, couplings, and precision CNC components from Kolkata, India since 1993.",
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
  authors: [{ name: "Industrial Spares Manufacturing Company" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable}`}>
      <body className="bg-white text-gray-900 antialiased selection:bg-brand-red selection:text-white">
        <HashScroll />
        {children}
      </body>
    </html>
  );
}
