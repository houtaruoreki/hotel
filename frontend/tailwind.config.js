/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        customFont: ['"Helvetica"', "Arial", "sans-serif"],
      },
      colors: {
        mwvane: "#227B5D",
        buttonColor: "#A8EBBD",
        buttonText: "#003E29",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
