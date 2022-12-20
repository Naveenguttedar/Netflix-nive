/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netRed: "#E50914",
      },
      fontFamily: {
        'Bebas Neue': ['Bebas Neue']
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
