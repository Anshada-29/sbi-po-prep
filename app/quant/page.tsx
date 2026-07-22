"use client";

export default function QuantPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#02091a] to-[#020617] text-white">
      <div className="aurora-bg animate-aurora" />
      <div className="blob w-64 h-64 bg-purple-500/40 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-blue-500/40 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-cyan-400/40 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs text-blue-300 uppercase tracking-[0.2em]">
            SBI PO · Quantitative Aptitude
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Quantitative Aptitude – SBI PO
          </h1>
          <p className="text-sm text-gray-300 max-w-xl">
            Topics, notes, key points, practice and PYQs for Quant section.
          </p>
        </header>

        {/* Overview */}
        <section className="grid gap-4 md:grid-cols-3 text-xs">
          <div className="card">
            <p className="font-semibold mb-1">Prelims pattern</p>
            <p className="text-gray-300">30 questions · 30 marks · 60 minutes total exam.</p>
          </div>
          <div className="card">
            <p className="font-semibold mb-1">Main topics</p>
            <p className="text-gray-300">
              Arithmetic (percentages, ratio, time & work, interest), DI, simplification/approximation,
              number series.
            </p>
          </div>
          <div className="card">
            <p className="font-semibold mb-1">Goal</p>
            <p className="text-gray-300">
              Improve calculation speed and accuracy, manage DI within time.
            </p>
          </div>
        </section>

        {/* Notes */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Notes – Key topics</h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Revise formulas for percentages, profit & loss, ratio & proportion.</li>
            <li>
              Cover time & work, time & distance, simple and compound interest basics.
            </li>
            <li>
              Practise simple DI sets (tables, bar graphs, line charts) regularly.
            </li>
            <li>
              Use simplification/approximation sets daily to warm up.
            </li>
          </ul>
        </section>

        {/* Key Points */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Key Points – Exam strategy</h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              Start Quant with 15–20 simplification questions to build confidence.
            </li>
            <li>
              For DI, quickly interpret the chart and identify easy questions first.
            </li>
            <li>
              Avoid long arithmetic questions if they look too time‑consuming initially.
            </li>
            <li>
              Use approximation when exact value is not necessary for the answer.
            </li>
          </ul>
        </section>

        {/* Practice & Mocks */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Practice – Daily routine</h2>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>15–20 simplification/approximation questions.</li>
              <li>2–3 arithmetic topics per day (e.g., Percentages + P&L).</li>
              <li>1 DI set (5 questions) from mocks or PYQs.</li>
              <li>Revise formulas at the end of each session.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Mocks & resources</h2>
            <p className="text-xs text-gray-300 mb-2">
              Use full prelims mocks and Quant‑specific practice sets.
            </p>
            <ul className="text-xs text-gray-200 list-disc list-inside space-y-1 mb-2">
              <li>Quant sections from Testbook SBI PO mocks.</li>
              <li>Oliveboard Quant practice sets.</li>
              <li>Search &quot;SBI PO Quant speed tricks&quot; on YouTube for tips.</li>
            </ul>
          </div>
        </section>

        {/* PYQs */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Previous Year Questions (PYQs)</h2>
          <p className="text-xs text-gray-300 mb-2">
            PYQs show which topics are asked more often and how DI sets are framed.
          </p>
          <ul className="text-xs text-gray-200 list-disc list-inside space-y-1">
            <li>
              Solve topic‑wise PYQs for arithmetic and DI to see recurring patterns.
            </li>
            <li>
              Note down common tricky question types and revise them before exam.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}