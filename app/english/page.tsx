"use client";

export default function EnglishPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#02091a] to-[#020617] text-white">
      <div className="aurora-bg animate-aurora" />
      <div className="blob w-64 h-64 bg-purple-500/40 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-blue-500/40 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-cyan-400/40 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs text-blue-300 uppercase tracking-[0.2em]">
            SBI PO · English Language
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            English – SBI PO Prelims & Mains
          </h1>
          <p className="text-sm text-gray-300 max-w-xl">
            Overview of topics, notes, key points, practice links and previous
            year questions for English section.
          </p>
        </header>

        {/* Overview */}
        <section className="grid gap-4 md:grid-cols-3 text-xs">
          <div className="card">
            <p className="font-semibold mb-1">Prelims pattern</p>
            <p className="text-gray-300">40 questions · 40 marks · 60 minutes total exam.</p>
          </div>
          <div className="card">
            <p className="font-semibold mb-1">Main topics</p>
            <p className="text-gray-300">
              Reading Comprehension, Cloze tests, error spotting, para jumbles,
              fillers, vocabulary.
            </p>
          </div>
          <div className="card">
            <p className="font-semibold mb-1">Goal</p>
            <p className="text-gray-300">
              Build accuracy in RC and grammar, maintain speed and simple
              vocabulary retention.
            </p>
          </div>
        </section>

        {/* Notes */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Notes – What to cover</h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Practice short and long Reading Comprehension sets regularly.</li>
            <li>
              Revise basic grammar rules: tenses, subject–verb agreement,
              articles, prepositions.
            </li>
            <li>
              Learn common vocabulary from mocks and maintain a small notebook.
            </li>
            <li>
              Solve Cloze tests and para jumbles with focus on context, not only
              rules.
            </li>
          </ul>
        </section>

        {/* Key Points */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Key Points – Exam strategy</h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              For RC, skim the passage once, then read questions and return to
              relevant parts.
            </li>
            <li>
              In error spotting, always re-read the sentence fully after
              selecting an option.
            </li>
            <li>
              Avoid spending too long on one tough RC; move on and return later
              if time permits.
            </li>
            <li>
              Use elimination in Cloze tests: remove grammatically impossible
              options first.
            </li>
          </ul>
        </section>

        {/* Practice & Mocks */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Practice – Daily routine</h2>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>2 RC sets (from mocks/PYQs) with full analysis daily.</li>
              <li>10–15 error spotting questions every day.</li>
              <li>1 Cloze test or para jumble set each day.</li>
              <li>10 new vocabulary words from recent practice or tests.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Mocks & resources</h2>
            <p className="text-xs text-gray-300 mb-2">
              Use full mocks and English‑specific practice to improve speed and
              accuracy.
            </p>
            <ul className="text-xs text-gray-200 list-disc list-inside space-y-1 mb-2">
              <li>Testbook English sections in SBI PO mocks.</li>
              <li>Oliveboard English practice sets.</li>
              <li>Search &quot;SBI PO English RC practice&quot; on YouTube for RC sets.</li>
            </ul>
          </div>
        </section>

        {/* PYQs */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Previous Year Questions (PYQs)</h2>
          <p className="text-xs text-gray-300 mb-2">
            PYQs help you understand the exact difficulty level and question
            style used in SBI PO exams.
          </p>
          <ul className="text-xs text-gray-200 list-disc list-inside space-y-1">
            <li>
              Use online SBI PO English PYQ PDFs to solve RCs and grammar sets.
            </li>
            <li>
              Maintain a list of common grammar errors you see in PYQs and revise
              them before exam.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}