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
      <div className="aurora-bg" />

      {/* Floating blobs */}
      <div className="blob w-64 h-64 bg-purple-500/40 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-blue-500/40 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-cyan-400/40 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 flex flex-col gap-10">
        {/* Top Nav / Dashboard strip */}
        <header className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold">
              SBI
            </div>
            <div>
              <p className="text-xs text-gray-300">Personal Prep Platform</p>
              <h1 className="text-lg font-semibold">SBI PO Prelims Dashboard</h1>
            </div>
          </div>
          <nav className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
              Tricks & Tips
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15">
              Dashboard Home
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15">
              Performance Log
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15">
              Analytics (Coming Soon)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15">
              Mocks & PYQs
            </span>
          </nav>
        </header>

        {/* Hero + Today panel */}
        <section className="grid gap-6 md:grid-cols-[2fr,1.3fr] items-start">
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
              This homepage is your mini dashboard: exam info, daily tasks,
              tricks, mocks, and a 7-day crash plan, all built for you.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <button className="rounded-full px-5 py-2 bg-blue-500 hover:bg-blue-400 text-xs font-semibold transition-colors">
                Go to English Tasks
              </button>
              <button className="rounded-full px-5 py-2 bg-purple-500 hover:bg-purple-400 text-xs font-semibold transition-colors">
                Go to Quant Tasks
              </button>
              <button className="rounded-full px-5 py-2 border border-blue-500/60 hover:border-blue-400 text-xs font-semibold transition-colors">
                Go to Reasoning Tasks
              </button>
            </div>
          </div>

          {/* Today’s Task Panel */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Today&apos;s Task</h3>
            <p className="text-xs text-gray-300 mb-2">
              Simple checklist for today so you don&apos;t have to think too
              much.
            </p>
            <ul className="text-xs text-gray-200 list-disc list-inside space-y-1">
              <li>Attempt 1 full prelims mock or 3 sectional tests.</li>
              <li>English: 2 RCs + 10 error-spotting questions.</li>
              <li>Quant: 20 simplification + 1 DI set (5 Q).</li>
              <li>Reasoning: 1 puzzle or seating + 10 easy logic questions.</li>
              <li>Write down 3 mistakes you made and how you&apos;ll avoid them.</li>
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

        {/* Tricks & Tips / Resources */}
        <section className="grid gap-6 md:grid-cols-[1.7fr,1.3fr]">
          {/* Tricks & Tips */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Simple Tricks & Tips</h3>
            <ul className="text-xs text-gray-200 list-disc list-inside space-y-1">
              <li>
                Don&apos;t get stuck: if a question feels heavy after 45 seconds,
                mark and move.
              </li>
              <li>
                English: read options first for RC to know what to look for while
                reading.
              </li>
              <li>
                Quant: round numbers smartly for approximation (e.g., 99.8 ≈
                100).
              </li>
              <li>
                Reasoning: always draw simple diagrams; don&apos;t solve in your
                head.
              </li>
              <li>
                During mocks, track attempted vs. correct — high attempts but low
                accuracy means slow down.
              </li>
            </ul>
          </div>

          {/* Resources & Videos */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">
              Resources & Videos (YouTube)
            </h3>
            <p className="text-xs text-gray-300 mb-2">
              Use these channels/search terms for topic-wise free video lessons.
            </p>
            <ul className="text-xs text-gray-200 list-disc list-inside space-y-1">
              <li>
                Search: &quot;SBI PO English strategy&quot; and focus on RC +
                grammar playlists.
              </li>
              <li>
                Search: &quot;SBI PO Quant speed tricks&quot; for arithmetic and
                DI shortcuts.
              </li>
              <li>
                Search: &quot;SBI PO Reasoning puzzles&quot; for seating and
                floor puzzles.
              </li>
              <li>
                Bookmark 1–2 teachers you like and stick to them until exam.
              </li>
            </ul>
          </div>
        </section>

        {/* Subject Overview Cards */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">English Overview</h2>
            <p className="text-sm text-gray-200">
              Focus: RC, error spotting, cloze, and basic vocab. Build speed by
              reading daily and solving PYQs.
            </p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Quant Overview</h2>
            <p className="text-sm text-gray-200">
              Focus: simplification, arithmetic (percentages, ratio, time &
              work), and simple DI charts.
            </p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Reasoning Overview</h2>
            <p className="text-sm text-gray-200">
              Focus: puzzles, seating, inequalities, syllogism, and basic
              directions/blood relations.
            </p>
          </div>
        </section>

        {/* Mock Tests & PYQs */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Mock Tests & PYQs</h2>
          <p className="text-sm text-gray-300 max-w-xl">
            Use free platforms to attempt full-length SBI PO prelims mocks and
            previous year question sets in exam-like timing.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card">
              <h3 className="font-semibold mb-1">Mock Tests</h3>
              <p className="text-xs text-gray-300 mb-2">
                Full-length SBI PO prelims mock tests with detailed solutions.
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
                Topic-wise and full paper PYQs to understand question patterns.
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
              <h3 className="font-semibold mb-1">More Free Mocks</h3>
              <p className="text-xs text-gray-300 mb-2">
                Extra practice from other free mock platforms.
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

        {/* Subject Wise Prep */}
        <section className="flex flex-col gap-6 mt-8">
          <h2 className="text-xl font-semibold">Subject Wise Prep</h2>
          <p className="text-sm text-gray-300 max-w-xl">
            Use these as your mini dashboards for each subject in the last few
            days.
          </p>

          {/* English plan */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">
              English – Last Few Days Plan
            </h3>
            <p className="text-sm text-gray-200 mb-2">
              Goal: get comfortable with Reading Comprehension, error spotting,
              and basic vocabulary.
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Every day, read 2 short RCs and answer all questions.</li>
              <li>Practice 10–15 error spotting questions from PYQs.</li>
              <li>Learn 10 new words daily from the mocks you attempt.</li>
              <li>
                Time yourself: try to finish one English section in 18–20
                minutes.
              </li>
            </ul>
          </div>

          {/* Quant plan */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">
              Quant – Last Few Days Plan
            </h3>
            <p className="text-sm text-gray-200 mb-2">
              Goal: get fast at simplification, arithmetic, and basic DI.
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>
                Warm-up: 15–20 simplification/approximation questions every day.
              </li>
              <li>
                Pick 2 arithmetic topics daily (e.g., Percentage + Profit & Loss,
                or Ratio + Time & Work).
              </li>
              <li>Attempt 1 small DI set (5 questions) from a mock or PYQ.</li>
              <li>
                Time yourself: aim to finish the Quant section in about 20
                minutes with accuracy.
              </li>
            </ul>
          </div>

          {/* Reasoning plan */}
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">
              Reasoning – Last Few Days Plan
            </h3>
            <p className="text-sm text-gray-200 mb-2">
              Goal: build confidence with puzzles, seating arrangements, and
              easy logic questions.
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Do 1 puzzle or seating arrangement set every day.</li>
              <li>
                Practice 10–15 questions of inequalities, syllogism, or blood
                relations.
              </li>
              <li>
                After each puzzle, quickly rewrite the logic so you remember the
                pattern.
              </li>
              <li>
                Time yourself: attempt mixed reasoning sets for 20 minutes to
                simulate the exam.
              </li>
            </ul>
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
          <span>Built by Anshada Wankhede · Pune</span>
          <span>Hosted on Vercel</span>
        </div>
      </footer>
    </main>
  );
}