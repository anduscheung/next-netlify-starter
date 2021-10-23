module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      black: "#000000",
      white: "#FFFFFF",
      grey: "#F4F4F4",
      grey2: "#828282",
      grey3: "#262626",
      lightgrey: "#9E9D9D",
      darkSilver: "#C4C4C4",
      charcoal: "#464646",
    }),
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      "2sm": { max: "500px" },
    },
    extend: {
      width: {
        "5/24": "20.8333333",
        "7/24": "29.1666667%",
        "9/24": "37.5%",
        "11/24": "45.8333333%",
        "13/24": "45.1666667%",
        "15/24": "62.5%",
      },
      fontSize: {
        "5cxl": "2.9rem",
      },
      padding: {
        "2%": "2%",
        "3%": "3%",
        "4%": "4%",
        "5%": "5%",
        "5%": "5%",
        "6%": "6%",
        "7%": "7%",
        "8%": "8%",
        "9%": "9%",
        "10%": "10%",
        "11%": "11%",
        "12%": "12%",
        "13%": "13%",
        "14%": "14%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
      },
      inset: {
        "1/10": "10%",
        "1/5": "20%",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
      },
      fontFamily: {
        playfair: ["sans-serif", "Playfair Display"],
        roboto: ["sans-serif", "Roboto"],
        quicksand: ["sans-serif", "Quicksand"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
