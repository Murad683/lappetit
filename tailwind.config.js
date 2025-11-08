/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy:           "#0D1B42", // primary text / brand
        cream:          "#F8F4F0", // main background
        line:           "#CFCAC3", // borders, subtle text
        accent:         "#E7D8C4", // soft accent (chips, icon bg)
        primaryBtn:     "#1A2C55", // primary button
        primaryBtnHover:"#2E3E6E", // primary button hover
      }
    },
  },
  plugins: [],
}
