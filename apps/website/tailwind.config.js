/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@labxd/gustxd/tailwind")],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@labxd/gustxd/dist/**/*.{js,ts,jsx,tsx}",
  ],
};
