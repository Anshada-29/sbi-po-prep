"use client";

import { useState } from "react";

type Question = {
  id: number;
  subject: "English" | "Quant" | "Reasoning";
  text: string;
  options: string[];
  correctIndex: number;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "English",
    text: "Choose the option that best completes the sentence: The manager, along with his team members, _____ present in the meeting.",
    options: ["were", "are", "is", "have been"],
    correctIndex: 2,
  },
  {
    id: 2,
    subject: "Quant",
    text: "A sum of ₹5,000 is invested at 10% simple interest per annum. What will be the interest after 2 years?",
    options: ["₹500", "₹1,000", "₹1,200", "₹2,000"],
    correctIndex: 1,
  },
  {
    id: 3,
    subject: "Reasoning",
    text: "If A is the brother of B, B is the sister of C, and C is the father of D, then how is A related to D?",
    options: ["Father", "Uncle", "Brother", "Cousin"],
    correctIndex: 1,
  },
  {
    id: 4,
    subject: "Quant",
    text: "The ratio of two numbers is 3 : 5 and their sum is 40. What is the larger number?",
    options: ["15", "20", "25", "30"],
    correctIndex: 2,
  },
  {
    id: 5,
    subject: "English",
    text: "Identify the part of the sentence which has an error: She did not knew that the meeting was postponed.",
    options: ["She did not", "knew that", "the meeting", "was postponed"],
    correctIndex: 1,
  },
];

export default function OfflineMocksPage() {
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (qId: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  };

  const handleSubmit = () => {
    if (submitted) return;
    setSubmitted(true);
  };

  const totalQuestions = QUESTIONS.length;

  const correctCount = QUESTIONS.reduce((acc, q) => {
    if (answers[q.id] === q.correctIndex) return acc + 1;
    return acc;
  }, 0);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#020817] via-[#020b1a] to-[#020817] text-white">
      <div className="aurora-bg animate-aurora" />
      <div className="blob w-64 h-64 bg-emerald-500/35 -top-24 -left-24" />
      <div className="blob w-80 h-80 bg-sky-500/35 top-40 -right-36" />
      <div className="blob w-64 h-64 bg-teal-400/35 bottom-0 left-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs text-emerald-300 uppercase tracking-[0.2em]">
            SBI PO · Offline Mini Mock
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Offline Practice – Mini Mock Test
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl">
            A small built‑in mock with English, Quant and Reasoning questions.
            Everything runs directly in your browser, without any external
            platform.
          </p>
        </header>

        {/* Score summary */}
        <section className="card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-1">Your result</h2>
            {submitted ? (
              <p className="text-sm text-gray-200">
                You scored{" "}
                <span className="text-emerald-300 font-semibold">
                  {correctCount}
                </span>{" "}
                out of{" "}
                <span className="font-semibold">{totalQuestions}</span>.
              </p>
            ) : (
              <p className="text-sm text-gray-300">
                Answer all questions and click &quot;Submit&quot; to see your
                score.
              </p>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="rounded-full px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-xs font-semibold transition-colors"
          >
            Submit mini mock
          </button>
        </section>

        {/* Questions */}
        <section className="flex flex-col gap-4">
          {QUESTIONS.map((q, idx) => {
            const selected = answers[q.id];
            const isCorrect = submitted && selected === q.correctIndex;
            const isWrong =
              submitted &&
              selected !== null &&
              selected !== undefined &&
              selected !== q.correctIndex;

            return (
              <div key={q.id} className="card text-sm">
                <div className="flex justify-between items-center mb-2 text-xs text-gray-400">
                  <span>
                    Q{idx + 1} · {q.subject}
                  </span>
                  {submitted && (
                    <span
                      className={
                        isCorrect
                          ? "text-emerald-300 font-semibold"
                          : isWrong
                          ? "text-red-400 font-semibold"
                          : "text-gray-400"
                      }
                    >
                      {isCorrect
                        ? "Correct"
                        : isWrong
                        ? "Incorrect"
                        : "Not attempted"}
                    </span>
                  )}
                </div>
                <p className="mb-2 text-gray-100">{q.text}</p>
                <div className="flex flex-col gap-1">
                  {q.options.map((opt, i) => {
                    const isSelected = selected === i;
                    const isRightOption = submitted && i === q.correctIndex;

                    return (
                      <label
                        key={i}
                        className={`flex items-center gap-2 rounded-lg px-2 py-1 cursor-pointer border ${
                          isSelected
                            ? "border-emerald-400/80 bg-emerald-500/15"
                            : "border-white/10 bg-white/5 hover:border-emerald-400/60"
                        } ${
                          submitted && isRightOption
                            ? "border-emerald-400/90 bg-emerald-500/20"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          value={i}
                          checked={isSelected || false}
                          onChange={() => handleChange(q.id, i)}
                          className="accent-emerald-500"
                        />
                        <span>{opt}</span>
                      </label>
                    );
                  })}
                </div>
                {submitted && isWrong && (
                  <p className="mt-2 text-xs text-gray-300">
                    Correct answer:{" "}
                    <span className="text-emerald-300">
                      {q.options[q.correctIndex]}
                    </span>
                  </p>
                )}
              </div>
            );
          })}
        </section>

        <section className="card">
          <h2 className="text-lg font-semibold mb-1">
            How this offline mock works
          </h2>
          <p className="text-sm text-gray-300">
            Questions are stored as a simple array in this page and evaluated in
            the browser using React state. You can extend this idea by adding
            more questions, separate mocks for each subject, or even loading
            them from a JSON file or API.
          </p>
        </section>
      </div>
    </main>
  );
}