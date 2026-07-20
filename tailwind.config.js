/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        aurora: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "50% 40%" },
          "100%": { backgroundPosition: "100% 80%" },
        },
      },
      animation: {
        aurora: "aurora 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};