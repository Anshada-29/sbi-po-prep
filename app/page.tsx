"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.08);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#02091a] to-[#020617] text-white">
      {/* Animated aurora background */}
      <div className="aurora-bg animate-aurora" />

      {/* Floating blobs */}
      <div className="blob w-64 h-64 bg-purple-500/40 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-blue-500/40 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-cyan-400/40 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 flex flex-col gap-10">
        {/* Top Nav / Startup-style header */}
        <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold">
              SBI
            </div>
            <div>
              <p className="text-xs text-gray-300">Personal Prep Platform</p>
              <h1 className="text-lg font-semibold">SBI PO Prelims Prep</h1>
            </div>
          </div>
          <nav className="flex flex-wrap gap-2 text-xs">
            <a
              href="#home"
              className="px-3 py-1 rounded-full bg-white/10 border border-white/20"
            >
              Home
            </a>
            <a
              href="#study"
              className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
            >
              Study Material
            </a>
            <a
              href="#mocks"
              className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
            >
              Mocks & Practice
            </a>
            <a
              href="#doubts"
              className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
            >
              AI Doubt Solver
            </a>
            <a
              href="#dashboard"
              className="px-3 py-1 rounded-full bg-white/5 border border-white/15"
            >
              Dashboard
            </a>
          </nav>
        </header>

        {/* Hero + Today panel */}
        <section
          id="home"
          className="grid gap-6 md:grid-cols-[2fr,1.3fr] items-start"
        >
          {/* Hero Section */}
          <div
            className="flex flex-col gap-6 transition-transform duration-500"
            style={{ transform: `translateY(${offset * -0.5}px)` }}
          >
            <p className="text-xs text-blue-300 uppercase tracking-[0.2em]">
              Exam · SBI PO Prelims · 100 Q · 60 min
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Crack SBI PO Prelims with{" "}
              <span className="text-purple-300">smart free prep</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-xl">
              All your SBI PO prelims study material, mocks, and progress in one
              simple dashboard so you don&apos;t have to jump between apps.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="rounded-full px-5 py-2 bg-blue-500 hover:bg-blue-400 text-xs font-semibold transition-colors">
                View Study Material
              </button>
              <button className="rounded-full px-5 py-2 bg-purple-500 hover:bg-purple-400 text-xs font-semibold transition-colors">
                Open Mocks Hub
              </button>
              <button className="rounded-full px-5 py-2 border border-blue-500/60 hover:border-blue-400 text-xs font-semibold transition-colors">
                Check Dashboard
              </button>
            </div>
          </div>

          {/* Today’s Task Panel */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Today&apos;s Task</h3>
            <p className="text-xs text-gray-300 mb-2">
              Simple checklist for today so you don&apos;t overthink.
            </p>
            <ul className="text-xs text-gray-200 list-disc list-inside space-y-1">
              <li>Attempt 1 full prelims mock or 3 sectional tests.</li>
              <li>English: 2 RCs + 10 error-spotting questions.</li>
              <li>Quant: 20 simplification + 1 DI set (5 Q).</li>
              <li>Reasoning: 1 puzzle or seating + 10 easy logic questions.</li>
              <li>Write down 3 mistakes and 3 improvements for the next mock.</li>
            </ul>
          </div>
        </section>

        {/* Quick Exam Stats */}
        <section className="grid gap-4 md:grid-cols-4 text-xs">
          <div className="card">
            <p className="font-semibold">English</p>
            <p className="text-gray-300">40 questions · 40 marks</p>
          </div>
          <div className="card">
            <p className="font-semibold">Quant</p>
            <p className="text-gray-300">30 questions · 30 marks</p>
          </div>
          <div className="card">
            <p className="font-semibold">Reasoning</p>
            <p className="text-gray-300">30 questions · 30 marks</p>
          </div>
          <div className="card">
            <p className="font-semibold">Total</p>
            <p className="text-gray-300">100 questions · 60 minutes</p>
          </div>
        </section>

        {/* Dashboard – Progress + Performance + History */}
        <section id="dashboard" className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Dashboard · Progress</h2>
          <p className="text-sm text-gray-300 max-w-xl">
            Quick view of how your preparation is going. You can manually update
            these cards as you attempt more mocks.
          </p>

          {/* Progress summary cards */}
          <div className="grid gap-4 md:grid-cols-3 text-xs">
            <div className="card">
              <p className="font-semibold mb-1">Mocks attempted</p>
              <p className="text-2xl font-bold text-blue-400">5</p>
              <p className="text-gray-300 mt-1">
                Edit this number in code whenever you finish new tests.
              </p>
            </div>
            <div className="card">
              <p className="font-semibold mb-1">Average score</p>
              <p className="text-2xl font-bold text-purple-400">62%</p>
              <p className="text-gray-300 mt-1">
                Rough average from your recent SBI PO prelims mocks.
              </p>
            </div>
            <div className="card">
              <p className="font-semibold mb-1">Focus area</p>
              <p className="text-sm text-gray-200">
                Example: Quant arithmetic + puzzles. Change this as your weak
                topics improve.
              </p>
            </div>
          </div>

          {/* Performance Log + Mock History grid */}
          <div className="grid gap-6 md:grid-cols-[1.4fr,1.6fr]">
            {/* Performance Log card */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Performance Log</h3>
              <p className="text-xs text-gray-300 mb-2">
                Use this log to track important details from each mock. You can
                rewrite these lines after every attempt.
              </p>
              <ul className="text-xs text-gray-200 list-disc list-inside space-y-1">
                <li>
                  Mock: Testbook Free Mock 1 · Score: 54/100 · Main issue: RC
                  accuracy.
                </li>
                <li>
                  Mock: Oliveboard Prelims 1 · Score: 58/100 · Main issue: DI
                  speed.
                </li>
                <li>
                  Mock: ixamBee Free Test · Score: 60/100 · Main issue: puzzle
                  setup.
                </li>
                <li>
                  Plan: extra RC practice, timed DI sets, 1 puzzle every day.
                </li>
              </ul>
              <p className="text-[11px] text-gray-400 mt-3">
                Tip: Just overwrite these lines with your real scores so this
                becomes a simple analytics log.
              </p>
            </div>

            {/* Mock History list */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Mock History</h3>
              <p className="text-xs text-gray-300 mb-2">
                Short history of mocks attempted. Edit rows manually in the
                code.
              </p>
              <div className="text-[11px] text-gray-200">
                <div className="flex justify-between border-b border-white/10 pb-1 mb-1">
                  <span className="font-semibold">Date · Platform</span>
                  <span className="font-semibold">Score</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>20 Jul · Testbook Prelims 1</span>
                  <span>54/100</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>21 Jul · Oliveboard Prelims 1</span>
                  <span>58/100</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>22 Jul · ixamBee Free Test</span>
                  <span>60/100</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>23 Jul · Sarkariexam Mock</span>
                  <span>61/100</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 mt-3">
                Add more rows as you keep giving mocks. This can later become a
                proper chart.
              </p>
            </div>
          </div>
        </section>

        {/* Study Material – Notes + Key Points */}
        <section id="study" className="flex flex-col gap-6 mt-8">
          <h2 className="text-xl font-semibold">Study Material</h2>
          <p className="text-sm text-gray-300 max-w-xl">
            Notes and key exam points for English, Quant, and Reasoning in one
            place.
          </p>

          {/* English */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">English – Notes</h3>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>RC: identify main idea, tone, and keywords quickly.</li>
              <li>
                Error spotting: focus on subject–verb agreement, tenses, and
                prepositions.
              </li>
              <li>Vocabulary: learn words from mocks and revise daily.</li>
            </ul>
            <h4 className="text-sm font-semibold mt-3 mb-1">Key Points</h4>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Read options before RC to know what to look for.</li>
              <li>
                In error spotting, re-read the full sentence after choosing the
                answer.
              </li>
            </ul>
          </div>

          {/* Quant */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Quant – Notes</h3>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>
                Core topics: percentages, ratio & proportion, time & work,
                simple/compound interest.
              </li>
              <li>
                Practise simplification/approximation daily to improve speed.
              </li>
              <li>DI: focus on simple tables, bar graphs, and line charts.</li>
            </ul>
            <h4 className="text-sm font-semibold mt-3 mb-1">Key Points</h4>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Round numbers smartly for approximation (e.g., 99.8 ≈ 100).</li>
              <li>Skip heavy calculations if they look time-consuming initially.</li>
            </ul>
          </div>

          {/* Reasoning */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Reasoning – Notes</h3>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Puzzles: always draw simple, clean diagrams.</li>
              <li>Common topics: seating, inequalities, syllogism, blood relations.</li>
              <li>Practice mixed sets to simulate exam pattern.</li>
            </ul>
            <h4 className="text-sm font-semibold mt-3 mb-1">Key Points</h4>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Never try to solve complex puzzles fully in your head.</li>
              <li>
                After solving a puzzle, rewrite the logic briefly so you remember
                the pattern.
              </li>
            </ul>
          </div>
        </section>

        {/* Mocks & Practice Questions */}
        <section id="mocks" className="flex flex-col gap-4 mt-8">
          <h2 className="text-xl font-semibold">Mocks & Practice Questions</h2>
          <p className="text-sm text-gray-300 max-w-xl">
            All your mock test platforms and practice question sources in one
            hub.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card">
              <h3 className="font-semibold mb-1">Full-Length Mocks</h3>
              <p className="text-xs text-gray-300 mb-2">
                SBI PO prelims mocks with detailed solutions.
              </p>
              <a
                href="https://testbook.com/sbi-po/test-series"
                target="_blank"
                className="inline-block rounded-full px-4 py-2 bg-blue-500 hover:bg-blue-400 text-xs font-semibold transition-colors"
              >
                Testbook Free Mocks
              </a>
              <a
                href="https://www.oliveboard.in/sbi-po-mock-test/"
                target="_blank"
                className="mt-2 inline-block rounded-full px-4 py-2 bg-blue-500/70 hover:bg-blue-400 text-xs font-semibold transition-colors"
              >
                Oliveboard Series
              </a>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-1">Previous Year Questions</h3>
              <p className="text-xs text-gray-300 mb-2">
                Topic-wise and full paper PYQs to understand patterns.
              </p>
              <a
                href="https://www.studiestoday.com/sarkari-exams/banking"
                target="_blank"
                className="inline-block rounded-full px-4 py-2 bg-purple-500 hover:bg-purple-400 text-xs font-semibold transition-colors"
              >
                Studiestoday Banking PYQs
              </a>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-1">More Practice</h3>
              <p className="text-xs text-gray-300 mb-2">
                Extra prelims practice from other free platforms.
              </p>
              <a
                href="https://www.ixambee.com/free-mock-tests/sbi-po-pre"
                target="_blank"
                className="inline-block rounded-full px-4 py-2 border border-blue-500/60 text-xs font-semibold hover:border-blue-400 transition-colors"
              >
                ixamBee Prelims
              </a>
              <a
                href="https://sarkariexam.center/sbi-po-mock-test/"
                target="_blank"
                className="mt-2 inline-block rounded-full px-4 py-2 border border-blue-500/60 text-xs font-semibold hover:border-blue-400 transition-colors"
              >
                Sarkariexam Free Tests
              </a>
            </div>
          </div>
        </section>

        {/* AI Doubt Solver (concept) */}
        <section id="doubts" className="flex flex-col gap-4 mt-8">
          <h2 className="text-xl font-semibold">AI Doubt Solver</h2>
          <div className="card">
            <p className="text-sm text-gray-200 mb-2">
              Ask your SBI PO doubts in English, Quant, or Reasoning and get
              instant explanations. This section can later connect to a real AI
              API.
            </p>
            <p className="text-xs text-gray-300 mb-3">
              For now, click below to open your AI assistant in a new tab and
              paste questions from your mocks or practice sets.
            </p>
            <a
              href="https://www.perplexity.ai"
              target="_blank"
              className="inline-block rounded-full px-5 py-2 bg-blue-500 hover:bg-blue-400 text-xs font-semibold transition-colors"
            >
              Open AI Doubt Solver
            </a>
          </div>
        </section>

        {/* 7-Day Crash Plan */}
        <section className="flex flex-col gap-6 mt-8">
          <h2 className="text-xl font-semibold">7-Day Crash Plan</h2>
          <p className="text-sm text-gray-300 max-w-xl">
            Use this simple plan to combine mocks and focused practice in the
            last few days before SBI PO Prelims.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Day 1–2</h3>
              <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
                <li>
                  Attempt 1 full prelims mock (Testbook or Oliveboard) on each
                  day.
                </li>
                <li>
                  Review English mistakes: note RC and error spotting patterns.
                </li>
                <li>
                  For Quant, list topics where you lost time (e.g., DI, Time &
                  Work).
                </li>
                <li>
                  For Reasoning, note which puzzle types felt confusing and mark
                  them to revisit.
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Day 3–4</h3>
              <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
                <li>Focus on weak areas from your mock analysis.</li>
                <li>
                  English: extra RC + error spotting sets from PYQs or mocks.
                </li>
                <li>
                  Quant: 2–3 targeted topic drills (like Percentages, Ratio,
                  SI/CI).
                </li>
                <li>
                  Reasoning: 2 puzzles or seating sets per day, plus basics like
                  inequalities.
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Day 5</h3>
              <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
                <li>Attempt another full-length prelims mock.</li>
                <li>
                  Compare your scores with Day 1–2 and check improvement in
                  speed.
                </li>
                <li>
                  Revise formulas and shortcuts for your main Quant topics.
                </li>
                <li>
                  Revisit 1–2 tricky puzzles and solve them from scratch again.
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Day 6–7</h3>
              <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
                <li>
                  Light revision: quick English, Quant, and Reasoning drills
                  (no heavy new topics).
                </li>
                <li>
                  One more mock (optional) or sectional tests for English/Quant/
                  Reasoning.
                </li>
                <li>
                  Sleep properly, keep anxiety low, and review only your own
                  notes and marked questions.
                </li>
                <li>
                  On the last day, avoid full mocks; stick to small timed
                  practice and relaxation.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-400 flex justify-between">
          <span>Built by Anshada Wankhede</span>
          <span>Hosted on Vercel</span>
        </div>
      </footer>
    </main>
  );
}