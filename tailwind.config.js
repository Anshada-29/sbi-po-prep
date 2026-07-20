/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a1f44",   // dark navy
        ivory: "#fffff0",  // off-white
        purple: "#7c3aed", // violet accent
        cyan: "#06b6d4",   // cyan accent
      },
    },
  },
  plugins: [],
}
