"use client";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <section className="border border-white/10 rounded-3xl bg-slate-950 p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            Prep analytics dashboard
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mb-4">
            Snapshot of your latest scores and activity so you can see whether you
            are prelims‑ready and how your mains preparation is evolving.
          </p>
        </section>
      </div>
    </main>
  );
}