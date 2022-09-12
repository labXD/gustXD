const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
const config = {
  plugins: [require("@tailwindcss/forms")],
  safelist: [
    {
      pattern: /bg-*-*/,
    },
  ],
  theme: {
    fontFamily: {
      sans: ["Red Hat Text", "sans-serif"],
      display: ["Red Hat Display", "sans-serif"],
    },
    extend: {
      colors: {
        "xd-purple": {
          50: "#FAF8FB",
          100: "#F2EBF9",
          200: "#E0C0FD",
          300: "#C793FA",
          400: "#9B64FF",
          500: "#873AFF",
          600: "#7832EB",
          700: "#6023C6",
          800: "#45119C",
          900: "#1B008B",
        },
        "xd-red": {
          50: "#FDFCFB",
          100: "#FCEFEF",
          200: "#F9CBDE",
          300: "#F19CBD",
          400: "#F06B99",
          500: "#F03A6B",
          600: "#D32F59",
          700: "#AE2341",
          800: "#82192A",
          900: "#511016",
        },
        "xd-primary": {
          100: "#F6F0FF",
          700: "#782FED",
          800: "#641DD6",
          900: "#551EAE",
        },
        "xd-danger": {
          700: "#E02D3C",
          800: "#BA2532",
          900: "#981B25",
        },
        "xd-text-primary": {
          white: colors.white,
          black: "#1D2433",
        },
        xd: {
          bg: "#F6F0FF",
          "text-primary": "#1D2433",
          "purple-primary": "#782FED",
          "purple-secondary": "#641DD6",
          "red-primary": "#F75480",
          "red-secondary": "#DE3562",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        zip: {
          "0%": { left: "-400px" },
          "50%, 75%": { left: "50%", transform: "translateX(-50%)" },
          "100%": { left: "calc(100% + 400px)" },
        },
        xdspin: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(72deg)" },
          "20%": { transform: "rotate(144deg)" },
          "30%": { transform: "rotate(216deg)" },
          "40%": { transform: "rotate(288deg)" },
          "50%": { transform: "rotate(360deg)" },
          "60%": { transform: "rotate(450deg)" },
          "70%": { transform: "rotate(480deg)" },
          "80%": { transform: "rotate(540deg)" },
          "90%": { transform: "rotate(630deg)" },
          "100%": { transform: "rotate(720deg)" },
        },
      },
      animation: {
        zip: "zip 8s ease-in-out infinite",
        slow: "xdspin 8s linear infinite",
      },
    },
  },
}

module.exports = config
