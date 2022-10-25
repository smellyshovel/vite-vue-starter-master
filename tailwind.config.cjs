/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,css}"],
  safelist: ["bg-master"], // TODO: configure
  theme: {
    extend: {
      colors: {
        master: "#63df65",
      },
    },
  },
  plugins: [],
};
