/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,css}"],
  theme: {
    extend: {
      colors: {
        "custom-500": "#9244ff",
      },
    },
  },
  plugins: [],
};
