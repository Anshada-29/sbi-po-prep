"use client";

export default function MocksPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020817] via-[#020b1a] to-[#020817] text-white">
      {/* Aurora + blobs */}
      <div className="aurora-bg animate-aurora" />
      <div className="blob w-64 h-64 bg-emerald-500/35 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-sky-500/35 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-teal-400/35 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs text-emerald-300 uppercase tracking-[0.2em]">
            SBI PO · Mocks & Practice
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Mocks & Practice Questions Hub
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl">
            All your SBI PO prelims mock tests, sectional tests and practice
            links collected in one place so you don&apos;t search every time.
          </p>
        </header>

        {/* How to use mocks effectively */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">
            How to use mocks effectively
          </h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Attempt mocks in exam‑like conditions with a 60‑minute timer.</li>
            <li>
              After each mock, spend more time analysing mistakes than taking a
              new test.
            </li>
            <li>
              Track your scores (overall and section‑wise) and note 2–3 weak
              topics from each mock.
            </li>
            <li>
              Use sectional tests when you want to focus on one area like
              English or Quant.
            </li>
          </ul>
        </section>

        {/* Mock platforms */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Full‑length mock platforms</h2>
          <p className="text-sm text-gray-300 max-w-2xl">
            Start with a few free mocks on each platform and then stick to 1–2
            that match the real exam level for you.
          </p>

          <div className="grid gap-4 md:grid-cols-3 text-xs">
            <div className="card">
              <h3 className="font-semibold mb-1">Testbook</h3>
              <p className="text-gray-300 mb-2">
                SBI PO prelims test series with detailed solutions and analysis.
              </p>
              <a
                href="https://testbook.com/sbi-po/test-series"
                target="_blank"
                className="inline-block rounded-full px-4 py-2 bg-emerald-500 hover:bg-emerald-400 font-semibold transition-colors"
              >
                Open Testbook mocks
              </a>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-1">Oliveboard</h3>
              <p className="text-gray-300 mb-2">
                High‑level SBI PO mocks with detailed reasoning and Quant
                analysis.
              </p>
              <a
                href="https://www.oliveboard.in/sbi-po-mock-test/"
                target="_blank"
                className="inline-block rounded-full px-4 py-2 bg-sky-500 hover:bg-sky-400 font-semibold transition-colors"
              >
                Open Oliveboard mocks
              </a>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-1">Other free mocks</h3>
              <p className="text-gray-300 mb-2">
                Extra practice to build confidence after you are comfortable
                with main platforms.
              </p>
              <a
                href="https://www.ixambee.com/free-mock-tests/sbi-po-pre"
                target="_blank"
                className="inline-block rounded-full px-4 py-2 border border-emerald-400/70 hover:border-emerald-300 font-semibold transition-colors"
              >
                ixamBee prelims
              </a>
              <a
                href="https://sarkariexam.center/sbi-po-mock-test/"
                target="_blank"
                className="mt-2 inline-block rounded-full px-4 py-2 border border-emerald-400/70 hover:border-emerald-300 font-semibold transition-colors"
              >
                Sarkariexam mocks
              </a>
            </div>
          </div>
        </section>

        {/* Sectional & topic-wise practice */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">
              Sectional & topic‑wise practice
            </h2>
            <p className="text-sm text-gray-300 mb-2">
              Use sectional tests when a particular subject is weak.
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>English: RC, error spotting, Cloze tests, para jumbles.</li>
              <li>Quant: simplification, arithmetic topics, DI sets.</li>
              <li>
                Reasoning: puzzles, seating arrangement, inequalities,
                syllogism.
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold mb-2">
              Mock analysis checklist
            </h2>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Note overall score and section‑wise scores.</li>
              <li>Mark questions you guessed and got wrong.</li>
              <li>Identify topics where you lost most time.</li>
              <li>
                Write 2–3 action points for the next mock (e.g., &quot;skip long
                DI first&quot;).
              </li>
            </ul>
          </div>
          <a
  href="/mocks/offline"
  className="inline-block mt-2 text-emerald-300 hover:text-emerald-200 underline underline-offset-2 text-xs"
>
  Try built‑in mini mock
</a>
        </section>
      </div>
    </main>
  );
}