"use client";

import { useMemo, useState } from "react";

type SectionKey =
  | "English"
  | "Quant"
  | "Reasoning"
  | "GA"
  | "Computer";

type SectionStats = {
  prelimsScore: number;
  mainsScore: number;
  completion: number;
};

type SectionState = {
  [K in SectionKey]: SectionStats;
};

const SECTIONS: SectionKey[] = [
  "English",
  "Quant",
  "Reasoning",
  "GA",
  "Computer",
];

const createInitialSections = (): SectionState => ({
  English: { prelimsScore: 0, mainsScore: 0, completion: 0 },
  Quant: { prelimsScore: 0, mainsScore: 0, completion: 0 },
  Reasoning: { prelimsScore: 0, mainsScore: 0, completion: 0 },
  GA: { prelimsScore: 0, mainsScore: 0, completion: 0 },
  Computer: { prelimsScore: 0, mainsScore: 0, completion: 0 },
});

const getStatusText = (value: number) => {
  if (value >= 75) return "Strong";
  if (value >= 50) return "Okay";
  return "Needs work";
};

export default function AnalyticsPage() {
  const [sections, setSections] = useState<SectionState>(() =>
    createInitialSections()
  );

  const handleChange = (
    key: SectionKey,
    field: keyof SectionStats,
    raw: string
  ) => {
    const value = Number(raw.replace(/[^0-9.]/g, ""));
    if (Number.isNaN(value)) return;

    setSections((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value,
      },
    }));
  };

  const summary = useMemo(() => {
    let prelimsSum = 0;
    let mainsSum = 0;
    let completionSum = 0;

    SECTIONS.forEach((key) => {
      prelimsSum += sections[key].prelimsScore;
      mainsSum += sections[key].mainsScore;
      completionSum += sections[key].completion;
    });

    const count = SECTIONS.length || 1;

    const avgPrelims = prelimsSum / count;
    const avgMains = mainsSum / count;
    const avgCompletion = completionSum / count;

    return {
      avgPrelims,
      avgMains,
      avgCompletion,
      prelimsStatus: getStatusText(avgPrelims),
      mainsStatus: getStatusText(avgMains),
      completionStatus: getStatusText(avgCompletion),
    };
  }, [sections]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/15 via-emerald-500/10 to-cyan-500/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-10">
          <header className="mb-8 border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-semibold tracking-tight">
              Prep Analytics – SBI PO
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Track your mock scores and section-wise completion. This dashboard
              summarizes your prelims, mains, and overall coverage so you can see
              where to focus next.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-[2fr,1fr]">
            <div className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <h2 className="text-sm font-semibold text-slate-200">
                Section-wise inputs
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Enter average mock scores and approximate completion percentage
                for each section.
              </p>

              <div className="space-y-3">
                {SECTIONS.map((key) => {
                  const stats = sections[key];
                  return (
                    <div
                      key={key}
                      className="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">
                          {key}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          Status: {getStatusText(stats.prelimsScore)}
                        </span>
                      </div>

                      <div className="mt-2 grid gap-3 md:grid-cols-3">
                        <div className="space-y-1">
                          <label className="text-[11px] text-slate-400">
                            Avg prelims score
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={100}
                            value={
                              Number.isNaN(stats.prelimsScore)
                                ? ""
                                : stats.prelimsScore
                            }
                            onChange={(e) =>
                              handleChange(key, "prelimsScore", e.target.value)
                            }
                            className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-200 outline-none focus:border-sky-500/70"
                            placeholder="0–100"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] text-slate-400">
                            Avg mains score
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={100}
                            value={
                              Number.isNaN(stats.mainsScore)
                                ? ""
                                : stats.mainsScore
                            }
                            onChange={(e) =>
                              handleChange(key, "mainsScore", e.target.value)
                            }
                            className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-200 outline-none focus:border-emerald-500/70"
                            placeholder="0–100"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] text-slate-400">
                            Completion %
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={100}
                            value={
                              Number.isNaN(stats.completion)
                                ? ""
                                : stats.completion
                            }
                            onChange={(e) =>
                              handleChange(key, "completion", e.target.value)
                            }
                            className="w-full rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-200 outline-none focus:border-cyan-500/70"
                            placeholder="0–100"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <h2 className="text-sm font-semibold text-slate-200">
                  Overall snapshot
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Simple averages and status labels based on your inputs.
                </p>
                <div className="mt-3 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between rounded-lg bg-slate-950/80 px-3 py-2">
                    <span>Avg prelims score</span>
                    <span className="font-semibold text-sky-300">
                      {summary.avgPrelims.toFixed(1)} / 100
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-950/80 px-3 py-2">
                    <span>Avg mains score</span>
                    <span className="font-semibold text-emerald-300">
                      {summary.avgMains.toFixed(1)} / 100
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-950/80 px-3 py-2">
                    <span>Avg completion</span>
                    <span className="font-semibold text-cyan-300">
                      {summary.avgCompletion.toFixed(1)} %
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <h2 className="text-sm font-semibold text-slate-200">
                  Status tags
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Use these quick labels when talking to recruiters about your
                  analytics page.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  <li>
                    • Prelims: {summary.prelimsStatus} (
                    {summary.avgPrelims.toFixed(1)} / 100)
                  </li>
                  <li>
                    • Mains: {summary.mainsStatus} (
                    {summary.avgMains.toFixed(1)} / 100)
                  </li>
                  <li>
                    • Coverage: {summary.completionStatus} (
                    {summary.avgCompletion.toFixed(1)} %)
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}