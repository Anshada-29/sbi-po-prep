"use client";

export default function ReasoningPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#02091a] to-[#020617] text-white">
      <div className="aurora-bg animate-aurora" />
      <div className="blob w-64 h-64 bg-purple-500/40 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-blue-500/40 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-cyan-400/40 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs text-blue-300 uppercase tracking-[0.2em]">
            SBI PO · Reasoning Ability
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Reasoning – SBI PO
          </h1>
          <p className="text-sm text-gray-300 max-w-xl">
            Topics, notes, key points, practice and PYQs for Reasoning section.
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
              Puzzles, seating arrangement, inequalities, syllogism, coding-
              decoding, blood relations, directions.
            </p>
          </div>
          <div className="card">
            <p className="font-semibold mb-1">Goal</p>
            <p className="text-gray-300">
              Build confidence with puzzles, manage time, and improve accuracy in logic questions.
            </p>
          </div>
        </section>

        {/* Notes */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Notes – Key topics</h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Puzzles and seating arrangements: linear, circular, floor‑based.</li>
            <li>
              Logic topics: inequalities, syllogism, blood relations, directions.
            </li>
            <li>
              Basic practice for coding‑decoding and miscellaneous reasoning questions.
            </li>
          </ul>
        </section>

        {/* Key Points */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Key Points – Exam strategy</h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              Always draw clear diagrams for puzzles; do not attempt them fully in mind.
            </li>
            <li>
              Start with familiar puzzle types to avoid getting stuck early.
            </li>
            <li>
              Use standard rules for syllogism (All, Some, No) and diagram them if needed.
            </li>
            <li>
              For inequalities, follow each sign step‑by‑step and use shortcut patterns.
            </li>
          </ul>
        </section>

        {/* Practice & Mocks */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Practice – Daily routine</h2>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>1 puzzle or seating arrangement set every day.</li>
              <li>10–15 questions of inequalities / syllogism / blood relations.</li>
              <li>Mixed reasoning sets for 20 minutes to simulate exam.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Mocks & resources</h2>
            <p className="text-xs text-gray-300 mb-2">
              Use full mocks and reasoning practice sets.
            </p>
            <ul className="text-xs text-gray-200 list-disc list-inside space-y-1 mb-2">
              <li>Reasoning sections from Testbook and Oliveboard SBI PO mocks.</li>
              <li>
                Search &quot;SBI PO reasoning puzzles&quot; on YouTube for step‑by‑step
                solutions.
              </li>
            </ul>
          </div>
        </section>

        {/* PYQs */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Previous Year Questions (PYQs)</h2>
          <p className="text-xs text-gray-300 mb-2">
            PYQs for puzzles and logical questions show exact difficulty level.
          </p>
          <ul className="text-xs text-gray-200 list-disc list-inside space-y-1">
            <li>
              Solve puzzle PYQs from past SBI PO papers to see common patterns.
            </li>
            <li>
              Revise logic questions (inequalities, syllogism) from PYQs near exam.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}