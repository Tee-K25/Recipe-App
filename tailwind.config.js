/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand1: {
          light: "#eaeaea",
          default: "#e8dab2",
          dark: "#dd6e42",
        },
      },
    },
    fontFamily: {
      cartoon: ["Chewy", "serif"],
      poppins: ["Poppins", "serif"],
    },
    screens: {
      xxsm: "350px",
      xsm: "440",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  plugins: [],
};
