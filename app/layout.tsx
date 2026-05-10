import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavera — Real-World Data Source for Pharma RWE",
  description: "Kavera is a primary real-world data source for pharma RWE studies. Longitudinal ICU, device, and PDMS data from acute care units. Federated architecture — no data movement. US and ex-US markets.",
  keywords: ["real-world data source", "RWD source", "pharma RWE", "ICU real-world data", "acute care RWD", "federated real-world evidence", "OMOP CDM", "device-level RWD", "hospital-sourced RWD", "ex-US real-world data"],
  openGraph: {
    title: "Kavera — Real-World Data Source for Pharma RWE",
    description: "Primary real-world data source for pharma RWE. ICU and device-level data. Federated, no data movement. US and ex-US.",
    type: "website",
    url: "https://pulse-rwe-web.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "Kavera",
                "description": "Primary real-world data source for pharma RWE studies. Longitudinal ICU, device, and PDMS data from acute care units under a federated architecture.",
                "url": "https://pulse-rwe-web.vercel.app",
                "sameAs": [],
                "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": "English" }
              },
              {
                "@type": "SoftwareApplication",
                "name": "Kavera RWD Platform",
                "applicationCategory": "HealthApplication",
                "description": "Federated real-world data platform for pharma RWE. ICU and device-level data, OMOP CDM, no data movement to buyer.",
                "offers": [
                  { "@type": "Offer", "name": "Bronze Discovery Subscription", "price": "40000", "priceCurrency": "USD", "priceSpecification": { "@type": "UnitPriceSpecification", "referenceQuantity": { "@type": "QuantitativeValue", "value": 1, "unitCode": "ANN" } } },
                  { "@type": "Offer", "name": "Silver Discovery Subscription", "price": "150000", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Gold Discovery Subscription", "price": "400000", "priceCurrency": "USD" }
                ]
              }
            ]
          }) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50">
        {/* Nav */}
        <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
            <Link href="/" className="text-white font-semibold tracking-tight">
              Kavera
            </Link>
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <Link href="/how-it-works" className="hover:text-white transition-colors">How it works</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/demo" className="hover:text-white transition-colors">Demo</Link>
              <Link href="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-1.5 rounded transition-colors font-medium">
                Request access
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-slate-400 text-sm text-center">
              <a href="/trust" className="hover:text-slate-200 underline underline-offset-2">Trust</a>
              {" · "}Demo environment. Production platform forthcoming. No real patient data on this site.
            </p>
            <p className="text-slate-600 text-xs text-center mt-2">
              © 2026 Kavera. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
