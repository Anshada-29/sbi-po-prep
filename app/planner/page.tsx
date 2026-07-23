"use client";

export default function PlannerPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <section className="border border-white/10 rounded-3xl bg-slate-950 p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            SBI PO study planner
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mb-4">
            Plan your daily schedule for prelims and mains – decide which subjects,
            topics and mocks you will cover and track completion.
          </p>
        </section>
      </div>
    </main>
  );
}