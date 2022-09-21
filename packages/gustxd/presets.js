const xdColors = require("./src/colors")
/** @type {import('tailwindcss').Config} */
const config = {
  plugins: [require("./src/plugin"), require("./src/plugin/component-classes")],
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
        ...xdColors,
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
        "spin-slow": "xdspin 8s linear infinite",
      },
    },
  },
}

module.exports = config
