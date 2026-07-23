"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <section className="border border-white/10 rounded-3xl bg-slate-950 p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            About this SBI PO Prep Hub
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mb-4">
            This is your personal SBI PO preparation space – combining subject
            workspaces, mocks, planner and analytics around the official exam
            pattern and selection process. [web:85][web:49][web:88][web:59][web:171]
          </p>
        </section>
      </div>
    </main>
  );
}