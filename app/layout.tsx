import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavera — Real-World Evidence Platform",
  description: "Longitudinal ICU and device data. Federated. Query-ready.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
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
