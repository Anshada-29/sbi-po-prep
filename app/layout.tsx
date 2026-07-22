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
        <header className="border-b border-white/10 bg-[#020617]/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl bg-white/10 flex items-center justify-center text-[10px] font-bold">
                SBI
              </div>
              <div>
                <p className="text-[11px] text-gray-300">SBI PO Prep Hub</p>
                <p className="text-[11px] text-gray-400">
                  Personal dashboard for prelims & mains
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-2">
              <Link
                href="/"
                className="px-3 py-1 rounded-full bg-white/10 border border-white/20"
              >
                Home
              </Link>
              <Link
                href="/english"
                className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
              >
                English
              </Link>
              <Link
                href="/quant"
                className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
              >
                Quant
              </Link>
              <Link
                href="/reasoning"
                className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
              >
                Reasoning
              </Link>
              <Link
                href="/ga"
                className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
              >
                General Awareness
              </Link>
              <Link
                href="/computer"
                className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
              >
                Computer
              </Link>
              <Link
                href="/mocks"
                className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
              >
                Mocks
              </Link>
              <Link
                href="/doubts"
                className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
              >
                AI Doubt Solver
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}