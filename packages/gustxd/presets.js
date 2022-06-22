/** @type {import('tailwindcss').Config} */
const config = {
  plugins: [require("@tailwindcss/forms")],
  safelist: [
    {
      pattern: /bg-*-*/,
    },
  ],
};

module.exports = config;
