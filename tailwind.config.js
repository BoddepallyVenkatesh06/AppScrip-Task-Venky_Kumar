/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_75": "#00000075" },
        gray: { 300: "#e5e5e5", 800: "#4c4c4c", 900: "#252020" },
        white: { A700: "#ffffff", A700_75: "#ffffff75", A700_7f: "#ffffff7f" },
        pink: { 400: "#eb4c6b" },
        red: { 50: "#fff2f5" },
        light_blue: { 800: "#006fcf" },
        deep_purple: { A400: "#5a31f4" },
        blue_gray: { 200: "#bec7cd", 400: "#878691" },
      },
      boxShadow: { xs: "0px 0px 7px 1px #a2aaae33" },
      fontFamily: {
        simplonnorm: "Simplon Norm",
        adobecaslonpro: "Adobe Caslon Pro",
      },
      opacity: { 0.3: 0.3 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
