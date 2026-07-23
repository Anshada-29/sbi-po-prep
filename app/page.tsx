"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Hero */}
        <section className="border border-white/10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/70 mb-2">
            SBI PO Prep Hub
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            SBI PO Prelims & Mains – one place to organise your preparation
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mb-4">
            Understand the exam pattern and selection process, plan your daily
            study, track your progress, and jump directly into subject workspaces
            and mocks.
          </p>

          {/* Quick actions */}
          <div className="flex flex-wrap gap-3 mt-2 text-xs">
            <Link
              href="/planner"
              className="rounded-full px-5 py-2 bg-emerald-500 hover:bg-emerald-400 font-semibold transition-colors"
            >
              Start with planner
            </Link>
            <Link
              href="/mocks"
              className="rounded-full px-5 py-2 bg-sky-500 hover:bg-sky-400 font-semibold transition-colors"
            >
              Open mocks hub
            </Link>
            <Link
              href="/english"
              className="rounded-full px-5 py-2 border border-emerald-400/70 hover:border-emerald-300 font-semibold transition-colors"
            >
              English workspace
            </Link>
            <Link
              href="/analytics"
              className="rounded-full px-5 py-2 border border-sky-400/70 hover:border-sky-300 font-semibold transition-colors"
            >
              View prep analytics
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Tip: Use the planner and analytics every day so this homepage becomes
            your snapshot of where you stand for SBI PO.
          </p>
        </section>

        {/* Overview + daily record */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* SBI PO overview & selection process */}
          <div className="border border-white/10 rounded-2xl bg-slate-950 p-5 space-y-3">
            <h2 className="text-lg font-semibold">SBI PO exam & selection process</h2>
            <p className="text-sm text-gray-300">
              SBI PO selection has three phases – Prelims, Mains (objective +
              descriptive) and Phase III with psychometric test, group exercises
              and interview. 
            </p>
            <ul className="text-xs text-gray-200 space-y-1 list-disc list-inside">
              <li>
                Phase I – Preliminary Exam: online objective, qualifying only,
                used to shortlist candidates for mains. 
              </li>
              <li>
                Phase II – Main Exam: objective test plus descriptive paper; marks
                are counted towards the final merit list. 
              </li>
              <li>
                Phase III – Psychometric Test, Group Exercises and Interview;
                combined with mains for final selection.
              </li>
            </ul>
          </div>

          {/* Daily track record */}
          <div className="border border-white/10 rounded-2xl bg-slate-950 p-5 space-y-3">
            <h2 className="text-lg font-semibold">Daily track record</h2>
            <p className="text-sm text-gray-300">
              Use the planner to log what you study each day and the analytics
              dashboard to record your recent section scores and mock tests so you
              always know your current level.
            </p>
            <div className="space-y-2 text-xs text-gray-200">
              <p className="font-semibold">How to use it daily:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Mark completed topics or sections in the Planner after each session.</li>
                <li>Enter your latest mock scores and section performance in Analytics.</li>
                <li>Revisit this homepage weekly to compare progress and adjust targets.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-3 text-xs">
              <Link
                href="/planner"
                className="px-4 py-1.5 rounded-full bg-sky-500 hover:bg-sky-400 font-semibold transition-colors"
              >
                Open Planner
              </Link>
              <Link
                href="/analytics"
                className="px-4 py-1.5 rounded-full bg-emerald-500/70 hover:bg-emerald-500 font-semibold transition-colors"
              >
                Open Analytics
              </Link>
            </div>
          </div>
        </section>

        {/* Paper pattern + how the site helps */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* Prelims & mains paper pattern */}
          <div className="border border-white/10 rounded-2xl bg-slate-950 p-5 space-y-3">
            <h2 className="text-lg font-semibold">
              Paper pattern – Prelims & Mains
            </h2>

            <div className="space-y-2 text-xs text-gray-200">
              <p className="font-semibold">Prelims (Phase I)</p>
              <p className="text-gray-300">
                Online objective test with 3 sections – English Language,
                Quantitative Aptitude and Reasoning Ability – totalling 100
                questions, 100 marks and 60 minutes, with 1/4 negative marking per
                wrong answer. [web:85][web:49][web:88][web:59][web:171]
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Sectional timing is around 20 minutes per section. [web:85][web:88][web:171]</li>
                <li>Prelims is qualifying; marks are not used in final merit. [web:85][web:49][web:88][web:59][web:171]</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs text-gray-200 mt-3">
              <p className="font-semibold">Mains (Phase II)</p>
              <p className="text-gray-300">
                Objective test with 4 sections (Reasoning & Computer Aptitude, Data
                Analysis & Interpretation, General/Economy/Banking Awareness,
                English Language) for 200 marks with sectional timing, followed by a
                descriptive test (letter and essay) of 30 marks in 30 minutes.
                [web:85][web:49][web:88][web:59][web:171]
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Objective + descriptive marks form the mains score. [web:85][web:49][web:88][web:171]</li>
                <li>Mains score has higher weight than interview for final merit. [web:85][web:49][web:88][web:171]</li>
              </ul>
            </div>
          </div>

          {/* How to use this site for selection */}
          <div className="border border-white/10 rounded-2xl bg-slate-950 p-5 space-y-3">
            <h2 className="text-lg font-semibold">
              Using this site for SBI PO selection
            </h2>
            <p className="text-sm text-gray-300">
              The navbar gives you quick access to everything you need – subjects,
              planner, mocks, analytics and about – so you can prepare in line with
              the SBI PO pattern and selection process.
            </p>
            <ul className="text-xs text-gray-200 space-y-1 list-disc list-inside">
              <li>
                Use the Subjects dropdown to focus on English, Quant, Reasoning, GA
                and Computer according to prelims and mains weightage. [web:49][web:59][web:171]
              </li>
              <li>
                Use Mocks to simulate the full prelims and mains pattern under timed
                conditions, then log results in Analytics.
              </li>
              <li>
                Track daily study plans in Planner and revisit About to remind
                yourself how to use the hub effectively.
              </li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link
                href="/mocks"
                className="px-4 py-1.5 rounded-full bg-sky-500 hover:bg-sky-400 font-semibold transition-colors"
              >
                Go to Mocks
              </Link>
              <Link
                href="/about"
                className="px-4 py-1.5 rounded-full border border-white/20 hover:border-white/40 font-semibold transition-colors"
              >
                Learn how to use this site
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}