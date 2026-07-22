"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.06);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020817] via-[#020b1a] to-[#020817] text-white">
      {/* Aurora background */}
      <div className="aurora-bg animate-aurora" />
      {/* Floating blobs */}
      <div className="blob w-64 h-64 bg-emerald-500/35 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-sky-500/35 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-teal-400/35 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 flex flex-col gap-12">
        {/* Hero */}
        <section
          className="flex flex-col gap-6 max-w-3xl"
          style={{ transform: `translateY(${offset * -0.6}px)` }}
        >
          <p className="text-xs text-emerald-300 uppercase tracking-[0.25em]">
            SBI PO · Personal Prep Hub
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            One place for your{" "}
            <span className="text-emerald-300">SBI PO prelims & mains</span>{" "}
            preparation.
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            SBI PO Prep Hub organizes your subject notes, mocks, practice
            questions and doubt‑solving into clear sections, so you can focus on
            studying instead of managing links.
          </p>
          <div className="flex flex-wrap gap-3 mt-2 text-xs">
            <a
              href="/english"
              className="rounded-full px-5 py-2 bg-emerald-500 hover:bg-emerald-400 font-semibold transition-colors"
            >
              Go to English workspace
            </a>
            <a
              href="/mocks"
              className="rounded-full px-5 py-2 bg-sky-500 hover:bg-sky-400 font-semibold transition-colors"
            >
              Open mocks hub
            </a>
            <a
              href="/doubts"
              className="rounded-full px-5 py-2 border border-emerald-400/70 hover:border-emerald-300 font-semibold transition-colors"
            >
              AI doubt solver
            </a>
          </div>
        </section>

        {/* Basic exam overview */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">SBI PO prelims overview</h2>
          <p className="text-sm text-gray-300 max-w-2xl">
            These are the core sections you&apos;ll prepare inside the app. Each
            has its own dedicated page with notes, key points and practice
            links.
          </p>
          <div className="grid gap-4 md:grid-cols-5 text-xs">
            <div className="card">
              <p className="font-semibold mb-1">English</p>
              <p className="text-gray-300">30–40 questions</p>
              <p className="text-gray-400 mt-1">RC, grammar, vocab</p>
            </div>
            <div className="card">
              <p className="font-semibold mb-1">Reasoning</p>
              <p className="text-gray-300">30–35 questions</p>
              <p className="text-gray-400 mt-1">Puzzles, seating, logic</p>
            </div>
            <div className="card">
              <p className="font-semibold mb-1">Quant</p>
              <p className="text-gray-300">30–35 questions</p>
              <p className="text-gray-400 mt-1">Arithmetic, DI, speed</p>
            </div>
            <div className="card">
              <p className="font-semibold mb-1">General awareness</p>
              <p className="text-gray-300">Mains focused</p>
              <p className="text-gray-400 mt-1">Current affairs, banking</p>
            </div>
            <div className="card">
              <p className="font-semibold mb-1">Computer awareness</p>
              <p className="text-gray-300">Mains/support</p>
              <p className="text-gray-400 mt-1">Basics, security, MS Office</p>
            </div>
          </div>
        </section>

        {/* App features overview */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">What you can do here</h2>
          <p className="text-sm text-gray-300 max-w-2xl">
            The detailed plans, notes and links live on their own pages.
            Homepage is just your entry point into the app.
          </p>
          <div className="grid gap-4 md:grid-cols-4 text-xs">
            <div className="card">
              <p className="font-semibold mb-1">Subject workspaces</p>
              <p className="text-gray-300 mb-2">
                Separate pages for English, Reasoning, Quant, GA and Computer.
              </p>
              <a
                href="/english"
                className="inline-block mt-1 text-emerald-300 hover:text-emerald-200 underline underline-offset-2"
              >
                View English page
              </a>
            </div>
            <div className="card">
              <p className="font-semibold mb-1">Mocks & PYQs hub</p>
              <p className="text-gray-300 mb-2">
                All your mock test and PYQ links gathered in one place.
              </p>
              <a
                href="/mocks"
                className="inline-block mt-1 text-emerald-300 hover:text-emerald-200 underline underline-offset-2"
              >
                Open mocks hub
              </a>
            </div>
            <div className="card">
              <p className="font-semibold mb-1">AI doubt solver</p>
              <p className="text-gray-300 mb-2">
                Ask doubts from mocks and practice sets using an AI assistant.
              </p>
              <a
                href="/doubts"
                className="inline-block mt-1 text-emerald-300 hover:text-emerald-200 underline underline-offset-2"
              >
                Go to doubt solver
              </a>
            </div>
            <div className="card">
              <p className="font-semibold mb-1">Dashboard & plans</p>
              <p className="text-gray-300 mb-2">
                Track mocks, note scores and follow a crash plan (on the
                dashboard page).
              </p>
              <span className="inline-block mt-1 text-gray-400">
                You can add a dedicated /dashboard page later.
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}