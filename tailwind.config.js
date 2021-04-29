const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pinky: {
        light: "#fd4e8a",
        dark: "#fc8060",
      },
      blueming: {
        light: "#2c78e3",
        dark: "#2fb5ed",
      },
      blue: {
        light: "#4aa7eb",
        dark: "#132645",
      },
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
