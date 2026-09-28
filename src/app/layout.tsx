import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ScrollProgress } from "@/components/ui";
import { BUSINESS } from "@/data/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAHADEV ENTERPRISES | Best Electronics & Electrical Store in Mirzapur",
  description: "Mahadev Enterprises, Tahsil Road Mirzapur — LED TVs, Refrigerators, Washing Machines, ACs, Fans, Inverters, Batteries, LED Lights, Wires & Switches. 5000+ happy customers, 25+ brands.",
  keywords: ["electronics Mirzapur", "electrical store Mirzapur", "LED TV Mirzapur", "Mahadev Enterprises", "inverter battery Mirzapur", "Havells dealer Mirzapur"],
  openGraph: {
    title: "MAHADEV ENTERPRISES — Powering Homes, Lighting Businesses",
    description: "Mirzapur's premium electronics & electrical destination. Genuine products, best prices, warranty support.",
    type: "website",
    locale: "en_IN",
  },
  metadataBase: new URL("https://mahadev-enterprises-mirzapur.in"),
  icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tahsil Road",
    addressLocality: "Mirzapur",
    addressRegion: "Uttar Pradesh",
    postalCode: "231001",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 09:30-21:00",
  priceRange: "₹₹",
  url: "https://mahadev-enterprises-mirzapur.in",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#05070f] text-slate-100">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
