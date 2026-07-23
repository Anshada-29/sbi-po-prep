import type { Metadata } from "next";
import "./globals.css";
import Cursor from "./Cursor";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SBI PO Prep Hub",
  description: "Personal SBI PO Prelims prep website with notes, mocks & PYQs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white">
        <Cursor />

        {/* Global navbar */}
        <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo / title */}
            <Link
              href="/"
              className="text-sm md:text-base font-semibold text-white"
            >
              SBI PO Prep Hub
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-4 text-xs md:text-sm text-gray-300">
              <Link
                href="/"
                className="hover:text-emerald-300 transition-colors"
              >
                Home
              </Link>

             {/* Subjects dropdown */}
<div className="relative group">
  <button
    className="flex items-center gap-1 hover:text-emerald-300 transition-colors"
    type="button"
  >
    <span>Subjects</span>
    <span className="text-[10px]">▼</span>
  </button>
  <div className="absolute left-0 mt-2 w-40 bg-[#020817] border border-white/15 rounded-lg shadow-lg hidden group-hover:block z-50">
    <Link
      href="/english"
      className="block px-3 py-2 hover:bg-white/10"
    >
      English
    </Link>
    <Link
      href="/ga"
      className="block px-3 py-2 hover:bg-white/10"
    >
      GA
    </Link>
    <Link
      href="/computer"
      className="block px-3 py-2 hover:bg-white/10"
    >
      Computer
    </Link>
    <Link
      href="/reasoning"
      className="block px-3 py-2 hover:bg-white/10"
    >
      Reasoning
    </Link>
    <Link
      href="/quant"
      className="block px-3 py-2 hover:bg-white/10"
    >
      Quants
    </Link>
  </div>
</div> 

              <Link
                href="/planner"
                className="hover:text-emerald-300 transition-colors"
              >
                Planner
              </Link>
              <Link
                href="/mocks"
                className="hover:text-emerald-300 transition-colors"
              >
                Mocks
              </Link>
              <Link
                href="/analytics"
                className="hover:text-emerald-300 transition-colors"
              >
                Analytics
              </Link>
              <Link
                href="/about"
                className="hover:text-emerald-300 transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}