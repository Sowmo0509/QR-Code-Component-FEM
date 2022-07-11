/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit",
      },
      colors: {
        lgray: "#d6e2f0",
        gblue: "#7b879d",
        dblue: "#1f3251",
      },
    },
  },
  plugins: [],
};
