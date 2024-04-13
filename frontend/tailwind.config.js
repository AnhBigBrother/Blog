/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        book: "#e9e6e4"
      }
    },
  },
  plugins: [],
}