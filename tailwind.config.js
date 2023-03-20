/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      be: ["Be Vietnam Pro", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      fz: ["FzPhotograph", "sans-serif"],
    },

    screens: {
      xs: "374px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1920px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        xs: "24px",
        sm: "24px",
        md: "56px",
        lg: "64px",
        xl: "72px",
        "2xl": "80px",
        "3xl": "240px",
      },
    },

    extend: {},
  },
  plugins: [],
};
