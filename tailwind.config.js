/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy:   "#0D1B42",
        cream:  "#DDC4B6",
        beige:  "#F8F4F0",
        coffee: "#847474",
        orange: "#C88A5C",
      }
    },
  },
  plugins: [],
}