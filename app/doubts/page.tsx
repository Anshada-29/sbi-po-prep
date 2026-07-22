"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
  subject?: string;
};

export default function DoubtsPage() {
  const [subject, setSubject] = useState("Quant");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: question.trim(),
      subject,
    };

    // Add user message
    setMessages((prev) => [...prev, userMessage]);

    // Simple dummy AI reply (replace this later with real API call)
    const aiContent =
      "This is a sample AI explanation. In a real version, this reply would come from an AI API based on your question and subject. You can implement it using a Next.js API route and a model like OpenAI.";

    const aiMessage: Message = {
      role: "assistant",
      content: aiContent,
      subject,
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setQuestion("");
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020817] via-[#020b1a] to-[#020817] text-white">
      {/* Aurora + blobs */}
      <div className="aurora-bg animate-aurora" />
      <div className="blob w-64 h-64 bg-emerald-500/35 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-sky-500/35 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-teal-400/35 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs text-emerald-300 uppercase tracking-[0.2em]">
            SBI PO · AI Doubt Solver
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            In‑built AI Doubt Solver
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl">
            Paste questions from your mocks or practice sets, choose the
            subject, and get step‑by‑step explanations. This page already has
            the UI and state logic; you can connect it to a real AI API later.
          </p>
        </header>

        {/* Input form */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-3">Ask a new doubt</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3 text-xs">
              <label className="flex items-center gap-2">
                <span className="text-gray-300">Subject</span>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-black/30 border border-emerald-500/40 rounded-full px-3 py-1 text-xs outline-none"
                >
                  <option>English</option>
                  <option>Quant</option>
                  <option>Reasoning</option>
                  <option>General Awareness</option>
                  <option>Computer</option>
                </select>
              </label>
            </div>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Paste the full question (with options if needed) and briefly describe where you got stuck..."
              className="mt-1 w-full min-h-[120px] text-sm bg-black/30 border border-white/15 rounded-xl px-3 py-2 outline-none resize-vertical"
            />
            <div className="flex justify-between items-center gap-3 text-xs">
              <p className="text-gray-400">
                Tip: Explain your thinking so the AI can correct your approach,
                not just give the final answer.
              </p>
              <button
                type="submit"
                className="rounded-full px-5 py-2 bg-emerald-500 hover:bg-emerald-400 font-semibold transition-colors"
              >
                Ask AI
              </button>
            </div>
          </form>
        </section>

        {/* Chat window */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-3">Conversation history</h2>
          {messages.length === 0 ? (
            <p className="text-sm text-gray-400">
              You haven&apos;t asked any questions yet. Use the form above to
              start a conversation.
            </p>
          ) : (
            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-1 text-sm ${
                    m.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl px-3 py-2 ${
                      m.role === "user"
                        ? "bg-emerald-500/80 text-white"
                        : "bg-white/5 text-gray-100 border border-white/10"
                    }`}
                  >
                    <p className="text-[11px] text-gray-200/80 mb-1">
                      {m.role === "user" ? "You" : "AI"} · {m.subject}
                    </p>
                    <p className="whitespace-pre-line">{m.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Implementation note (for you / recruiter) */}
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">
            Implementation note (for future API)
          </h2>
          <p className="text-sm text-gray-300">
            This UI already manages messages in local state. To connect a real
            AI model, replace the dummy reply in the submit handler with a call
            to a Next.js API route (for example, &quot;/api/doubts&quot;) that
            uses an AI provider and returns the explanation. This shows you have
            the structure ready for a production‑style integration.
          </p>
        </section>
      </div>
    </main>
  );
}