import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    "Sprockets",
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
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-white text-gray-900 font-sans antialiased selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
