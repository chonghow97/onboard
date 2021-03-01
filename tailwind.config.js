const color = require("./app/theme/color.ts");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...color
      }
    },
    minHeight: {
      0: "0%",
      "3/10": "30%",
      full: "100%"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
