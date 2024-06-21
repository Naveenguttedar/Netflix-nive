/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        netRed: "#E50914",
      },
      fontFamily: {
        "Bebas Neue": ["Bebas Neue"],
      },
      backgroundImage: {
        gradient_1:
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/images/header-image.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
