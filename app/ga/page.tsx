"use client";

export default function GeneralAwarenessPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#02091a] to-[#020617] text-white">
      <div className="aurora-bg animate-aurora" />
      <div className="blob w-64 h-64 bg-purple-500/40 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-blue-500/40 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-cyan-400/40 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs text-blue-300 uppercase tracking-[0.2em]">
            SBI PO · General Awareness
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            General Awareness – SBI PO
          </h1>
          <p className="text-sm text-gray-300 max-w-xl">
            Current affairs, banking awareness and static GK for SBI PO mains
            and overall preparation.
          </p>
        </header>

        {/* Overview */}
        <section className="grid gap-4 md:grid-cols-3 text-xs">
          <div className="card">
            <p className="font-semibold mb-1">Main areas</p>
            <p className="text-gray-300">
              Current affairs, economy & banking awareness, static GK.
            </p>
          </div>
          <div className="card">
            <p className="font-semibold mb-1">Focus period</p>
            <p className="text-gray-300">
              Last 6–8 months of current affairs and important banking events.
            </p>
          </div>
          <div className="card">
            <p className="font-semibold mb-1">Goal</p>
            <p className="text-gray-300">
              Regular revision to avoid cramming just before exam.
            </p>
          </div>
        </section>

        {/* Notes */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Notes – What to cover</h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Monthly current affairs (PDFs or online capsules).</li>
            <li>Banking terms, RBI and SBI related news, important committees.</li>
            <li>Static GK such as capitals, currencies, important days, national parks.</li>
          </ul>
        </section>

        {/* Key Points */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Key Points – Strategy</h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              Do not try to cover everything in one day; divide months over
              weeks.
            </li>
            <li>
              Maintain short notes for banking awareness and revise them multiple
              times.
            </li>
            <li>
              Use quizzes to test recall of current affairs regularly.
            </li>
          </ul>
        </section>

        {/* Practice & Resources */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Practice – Daily/Weekly</h2>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Daily: 10–20 GA questions from any quiz platform.</li>
              <li>Weekly: revise 1 month of current affairs.</li>
              <li>Keep a separate notebook for banking awareness notes.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Resources</h2>
            <p className="text-xs text-gray-300 mb-2">
              Use trusted GA sources and banking awareness capsules.
            </p>
            <ul className="text-xs text-gray-200 list-disc list-inside space-y-1">
              <li>Monthly current affairs PDFs.</li>
              <li>Banking awareness PDFs for SBI PO.</li>
              <li>Online quizzes focused on SBI PO GA.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}