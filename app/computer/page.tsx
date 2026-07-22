"use client";

export default function ComputerAwarenessPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#02091a] to-[#020617] text-white">
      <div className="aurora-bg animate-aurora" />
      <div className="blob w-64 h-64 bg-purple-500/40 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-blue-500/40 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-cyan-400/40 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs text-blue-300 uppercase tracking-[0.2em]">
            SBI PO · Computer Awareness
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Computer Awareness – SBI PO
          </h1>
          <p className="text-sm text-gray-300 max-w-xl">
            Basic computer concepts and banking‑related computer awareness.
          </p>
        </header>

        {/* Overview */}
        <section className="grid gap-4 md:grid-cols-3 text-xs">
          <div className="card">
            <p className="font-semibold mb-1">Main topics</p>
            <p className="text-gray-300">
              Computer basics, MS Office, internet & networking, security, banking software.
            </p>
          </div>
          <div className="card">
            <p className="font-semibold mb-1">Goal</p>
            <p className="text-gray-300">
              Understand basic terms and applications used in banks.
            </p>
          </div>
          <div className="card">
            <p className="font-semibold mb-1">Approach</p>
            <p className="text-gray-300">
              Read concise notes and practise objective questions.
            </p>
          </div>
        </section>

        {/* Notes */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Notes – Key concepts</h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Basics: hardware, software, operating systems.</li>
            <li>MS Office: Word, Excel, PowerPoint basics.</li>
            <li>Internet: browsers, email, basic networking terms.</li>
            <li>Security: viruses, firewalls, safe online practices.</li>
          </ul>
        </section>

        {/* Key Points */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Key Points – Exam strategy</h2>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Focus on understanding terms, not deep technical details.</li>
            <li>Revise definitions of common acronyms (HTTP, LAN, WAN, etc.).</li>
            <li>
              Practise MCQs from computer awareness booklets or online quizzes.
            </li>
          </ul>
        </section>

        {/* Practice & Resources */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Practice</h2>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Daily: 10–20 computer awareness MCQs.</li>
              <li>Weekly: revise key definitions and acronyms.</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Resources</h2>
            <p className="text-xs text-gray-300 mb-2">
              Use short computer awareness PDFs and quizzes.
            </p>
            <ul className="text-xs text-gray-200 list-disc list-inside space-y-1">
              <li>Computer awareness PDFs for banking exams.</li>
              <li>Online quizzes focused on computer basics.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}