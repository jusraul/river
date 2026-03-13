
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lower Withlacoochee River Keeper | Estuary Stewardship",
  description:
    "Our nonprofit exists to protect and restore the Lower Withlacoochee River and surrounding estuarine systems through measurable field-based action. We organize community cleanups, support habitat restoration and shoreline resilience efforts, build environmental awareness through public education and monitoring, and create inclusive stewardship opportunities for the public, including veterans and people with disabilities. Operating primarily from the Withlacoochee Gulf Preserve and strategically integrating nearby controlled sites such as Tide Over Island, we are building a portable, scalable coastal stewardship model for Florida’s Nature Coast that combines environmental impact, public benefit, and long-term conservation strategy.",
  openGraph: {
    title: "Lower Withlacoochee River Keeper | Estuary Stewardship",
    description:
      "Our nonprofit exists to protect and restore the Lower Withlacoochee River and surrounding estuarine systems through measurable field-based action. We organize community cleanups, support habitat restoration and shoreline resilience efforts, build environmental awareness through public education and monitoring, and create inclusive stewardship opportunities for the public, including veterans and people with disabilities. Operating primarily from the Withlacoochee Gulf Preserve and strategically integrating nearby controlled sites such as Tide Over Island, we are building a portable, scalable coastal stewardship model for Florida’s Nature Coast that combines environmental impact, public benefit, and long-term conservation strategy.",
    type: "website",
    url: "https://lowerwithlacoocheekeeper.org",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lower Withlacoochee River Keeper",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-stone-50 text-slate-900`}>
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
