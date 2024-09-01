/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        videoText: ["Roboto Condensed", 'sans-serif'],
        cardText: ["Gupter", 'serif'],
      }
    },
  },
  plugins: [],
}