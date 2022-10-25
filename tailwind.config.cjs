/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,css}",
    // TODO: list all the slave libs below (using the same pattern)
    "../vite-vue-starter-slave/src/**/*.{vue,css}",
  ],
  theme: {
    extend: {
      colors: {
        master: "#63df65",
      },
    },
  },
  plugins: [],
};
