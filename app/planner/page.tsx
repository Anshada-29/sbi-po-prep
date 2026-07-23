"use client";

import { useState } from "react";

type Day =
  | "Mon"
  | "Tue"
  | "Wed"
  | "Thu"
  | "Fri"
  | "Sat"
  | "Sun";

type SubjectKey =
  | "English"
  | "Quant"
  | "Reasoning"
  | "GA"
  | "Computer"
  | "Mocks";

const DAYS: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const SUBJECTS: SubjectKey[] = [
  "English",
  "Quant",
  "Reasoning",
  "GA",
  "Computer",
  "Mocks",
];

type CellPlan = {
  planned: boolean;
};

type NoteMap = {
  [K in Day]: string;
};

type PlannerState = {
  [K in Day]: {
    [S in SubjectKey]: CellPlan;
  };
};

const createInitialPlanner = (): PlannerState => {
  const state: Partial<PlannerState> = {};
  DAYS.forEach((day) => {
    const subjects: Partial<{ [S in SubjectKey]: CellPlan }> = {};
    SUBJECTS.forEach((subject) => {
      subjects[subject] = { planned: false };
    });
    state[day] = subjects as { [S in SubjectKey]: CellPlan };
  });
  return state as PlannerState;
};

const createInitialNotes = (): NoteMap => {
  const notes: Partial<NoteMap> = {};
  DAYS.forEach((day) => {
    notes[day] = "";
  });
  return notes as NoteMap;
};

export default function PlannerPage() {
  const [planner, setPlanner] = useState<PlannerState>(() =>
    createInitialPlanner()
  );
  const [notes, setNotes] = useState<NoteMap>(() => createInitialNotes());

  const toggleCell = (day: Day, subject: SubjectKey) => {
    setPlanner((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [subject]: {
          planned: !prev[day][subject].planned,
        },
      },
    }));
  };

  const handleNoteChange = (day: Day, value: string) => {
    setNotes((prev) => ({
      ...prev,
      [day]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-sky-500/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-10">
          <header className="mb-8 border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-semibold tracking-tight">
              Study Planner – SBI PO
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Plan your week across English, Quant, Reasoning, GA, Computer, and
              Mock tests. Click cells to mark planned study and add a short note
              for each day.
            </p>
          </header>

          <section className="space-y-8">
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="min-w-[720px]">
                <div className="grid grid-cols-[120px_repeat(7,1fr)] gap-2 text-xs font-medium text-slate-300">
                  <div className="px-2 py-2">Subject</div>
                  {DAYS.map((day) => (
                    <div
                      key={day}
                      className="rounded-md bg-slate-800/60 px-2 py-2 text-center"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {SUBJECTS.map((subject) => (
                  <div
                    key={subject}
                    className="mt-1 grid grid-cols-[120px_repeat(7,1fr)] gap-2 text-xs"
                  >
                    <div className="px-2 py-2 font-semibold text-slate-200">
                      {subject}
                    </div>
                    {DAYS.map((day) => {
                      const cell = planner[day][subject];
                      const active = cell.planned;
                      return (
                        <button
                          key={day}
                          onClick={() => toggleCell(day, subject)}
                          className={[
                            "rounded-md border px-2 py-2 text-center transition-colors",
                            active
                              ? "border-emerald-500/70 bg-emerald-500/20 text-emerald-200"
                              : "border-slate-800 bg-slate-900/80 text-slate-400 hover:bg-slate-800/80",
                          ].join(" ")}
                          type="button"
                        >
                          {active ? "Planned" : "Free"}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <h2 className="text-sm font-semibold text-slate-200">
                  Daily notes
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Write a short focus note for each day (e.g., “Revise puzzles +
                  1 mock”).
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {DAYS.map((day) => (
                    <div key={day} className="space-y-1">
                      <span className="text-[11px] font-medium text-slate-300">
                        {day}
                      </span>
                      <textarea
                        value={notes[day]}
                        onChange={(e) => handleNoteChange(day, e.target.value)}
                        className="h-16 w-full rounded-md border border-slate-700 bg-slate-950/90 px-2 py-1 text-xs text-slate-200 outline-none focus:border-emerald-500/60"
                        placeholder="Today's focus..."
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <h2 className="text-sm font-semibold text-slate-200">
                  Quick summary (local only)
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  This planner runs entirely in your browser. It does not save to
                  any backend yet, but is perfect for showing recruiters an
                  interactive planning tool.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  <li>• Click cells to mark planned study slots.</li>
                  <li>• Use daily notes to set clear goals.</li>
                  <li>• Pair this with the Analytics page for score tracking.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}