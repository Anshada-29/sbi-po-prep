export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#02091a] to-[#020617] text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col gap-12">
        {/* Hero Section */}
        <section className="flex flex-col gap-6">
          <p className="text-sm text-blue-400 uppercase tracking-[0.2em]">
            SBI PO Prelims · Personal Prep Hub
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Crack SBI PO Prelims with{" "}
            <span className="text-purple-400">free smart prep</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-xl">
            Notes, PYQs, mock tests, and simple tips & tricks for English, Quant,
            and Reasoning — all in one place, built just for you.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="rounded-full px-6 py-2 bg-blue-500 hover:bg-blue-400 text-sm font-semibold">
              Start English
            </button>
            <button className="rounded-full px-6 py-2 bg-purple-500 hover:bg-purple-400 text-sm font-semibold">
              Start Quant
            </button>
            <button className="rounded-full px-6 py-2 border border-blue-500/60 text-sm font-semibold">
              Start Reasoning
            </button>
          </div>
        </section>

        {/* Quick Exam Stats */}
        <section className="grid gap-4 md:grid-cols-4 text-sm">
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

        {/* Subject Overview Cards */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">English</h2>
            <p className="text-sm text-gray-200">
              Practice RC, error spotting, and vocabulary with short notes and
              previous year questions focused on SBI PO prelims.
            </p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Quant</h2>
            <p className="text-sm text-gray-200">
              Focus on simplification, arithmetic, and data interpretation with
              exam-oriented tricks to save time.
            </p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Reasoning</h2>
            <p className="text-sm text-gray-200">
              Puzzles, seating, and logical questions with structured
              step-by-step solutions to build accuracy.
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
                className="inline-block rounded-full px-4 py-2 bg-blue-500 hover:bg-blue-400 text-xs font-semibold"
              >
                Testbook Free Mocks
              </a>
              <a
                href="https://www.oliveboard.in/sbi-po-mock-test/"
                target="_blank"
                className="mt-2 inline-block rounded-full px-4 py-2 bg-blue-500/70 hover:bg-blue-400 text-xs font-semibold"
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
                className="inline-block rounded-full px-4 py-2 bg-purple-500 hover:bg-purple-400 text-xs font-semibold"
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
                className="inline-block rounded-full px-4 py-2 border border-blue-500/60 text-xs font-semibold"
              >
                ixamBee Prelims
              </a>
              <a
                href="https://sarkariexam.center/sbi-po-mock-test/"
                target="_blank"
                className="mt-2 inline-block rounded-full px-4 py-2 border border-blue-500/60 text-xs font-semibold"
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
            Below you can add your own notes, shortcuts, and links for each
            subject so this becomes your personal crash prep guide.
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
    </main>
  );
}