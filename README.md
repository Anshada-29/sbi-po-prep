# SBI PO Prep Hub

A focused exam preparation workspace for the **SBI Probationary Officer (PO)** exam. It organizes subject notes, tips, mock tests, practice questions, and an in‑app AI doubt solver UI into a clean, multi‑page web app built with Next.js App Router. [web:49][web:56][web:59]

## Features

- **Subject workspaces** for English, Quant, Reasoning, General Awareness, and Computer Awareness, each with:
  - Topic‑wise notes.
  - Exam‑oriented tips & tricks.
  - Built‑in mini practice sets (MCQs with explanations).

- **Mocks hub**
  - Links to popular SBI PO mock platforms.
  - An offline mini mock test running entirely in the browser (no backend).

- **In‑app AI doubt solver UI**
  - Chat‑style interface to paste questions from mocks and practice sets.
  - Subject selection and local message state.
  - Ready to be wired to a real AI API via a Next.js API route.

- **Consistent UI & theme**
  - Dark, green‑blue aurora background.
  - Shared layout and navbar across all pages.
  - Reusable “card” sections for notes, tips, and practice content. [web:52][web:54][web:57]

## Tech stack

- **Next.js (App Router)** – multi‑page routing and layout. [web:53][web:57][web:60]
- **React + TypeScript (if enabled)** – client components and state for quizzes/chat.
- **Tailwind CSS** – styling, gradients, and responsive layout. [web:54]
- **Node.js / npm** – development tooling.

## Project structure (key folders)

- `app/layout.tsx` – root layout and navbar.
- `app/page.tsx` – minimal landing page with exam overview.
- `app/english/page.tsx` – English workspace (notes + tips + practice).
- `app/quant/page.tsx` – Quantitative Aptitude workspace.
- `app/reasoning/page.tsx` – Reasoning Ability workspace.
- `app/ga/page.tsx` – General Awareness workspace.
- `app/computer/page.tsx` – Computer Awareness workspace.
- `app/mocks/page.tsx` – mocks & practice hub.
- `app/mocks/offline/page.tsx` – offline mini mock.
- `app/doubts/page.tsx` – AI doubt solver UI.
- `app/about/page.tsx` – project description (optional, recommended for recruiters).

## Getting started

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/sbi-po-prep-hub.git
   cd sbi-po-prep-hub
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open the app**

   Visit `http://localhost:3000` in your browser. [web:53][web:60]

## How it works (high level)

- Subject pages store small question sets as arrays in the component file and use React state to track selected answers and scores, similar to common quiz‑app patterns. [web:58]
- The AI Doubt Solver page keeps a local `messages` array with `user` and `assistant` roles. Currently, the “AI reply” is a placeholder, but it is designed to be replaced by a call to a Next.js API route that invokes a real AI model.
- The UI uses shared card and background patterns for consistency across pages.

## Potential extensions

If you want to extend this project further (and mention roadmap on your resume):

- Connect the AI Doubt Solver UI to an actual AI API (OpenAI, etc.) via `/api/doubts`.
- Persist mock history and scores in a database (Supabase, PlanetScale, etc.).
- Add user authentication so multiple aspirants can use individual dashboards.
- Expand question banks and load them from JSON or a backend instead of in‑file arrays.

## Why this project is relevant

The SBI PO exam covers **English, Quant, Reasoning, GA, and Computer Awareness**, along with mock practice and analysis. This project mirrors the real exam structure and demonstrates:

- Ability to design and implement a multi‑page frontend product. [web:52]
- Use of modern web tools (Next.js App Router, Tailwind, React state).
- Thoughtful UX for exam preparation (notes, tips, practice, AI assistance).

---

## 2. Final small UX checks

Before you share the repo link with recruiters, run through this checklist:

- **Navigation**
  - Home page loads correctly and links to all main sections.
  - Navbar links work: Home, English, Quant, Reasoning, GA, Computer, Mocks, Doubts, About.
  - “Back / next section” buttons at the bottom of subject pages point to real routes.

- **Practice sets**
  - On each subject page, selecting options and pressing “Submit answers” shows score and explanations as expected.
  - On `/mocks/offline`, the mini mock scores correctly and shows the right answers for wrong attempts.

- **AI Doubt Solver UI**
  - The form (subject + textarea) works and adds messages to the conversation.
  - The fake AI reply appears below your question, making the UX look complete.
  - No console errors when submitting questions.

- **Visual consistency**
  - All pages use the same green‑blue aurora background and card style.
  - Text sizes and spacing are readable on both desktop and mobile.
  - Buttons and links have clear hover states.

- **Technical sanity**
  - Run `npm run lint` (if you set up ESLint) and fix any obvious warnings.
  - Ensure `git status` is clean before pushing (no stray temp files).

After this, you can:

- Push to GitHub with a concise commit message like:

  ```bash
  git add .
  git commit -m "Finalize SBI PO Prep Hub with subject workspaces, mocks, AI doubt solver, and documentation"
  git push origin main
  ```

- Add the repo link and a one‑line description to your resume/portfolio.
