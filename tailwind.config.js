module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#292929',
          200: '#3d5b57',
          300: "#2b2e2b",
          400: "#c6ccc7",
          500: "#cdd1ce",
          600: "#DADCDA",
          700: "#4b5548",
          800: "#2b2e2b",
        },
        light: {
          100: "#f5f5f4",
          200: "#f2f2ef",
          300: "#e2e6e3",
          400: "#fcfcf9"
        }
      }
    },
    boxShadow: {
      custom1: 'grey 0px 2px 3px -3px'
    },
    fontFamily: {
      display: ["Roboto Condensed", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
