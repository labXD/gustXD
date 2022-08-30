/** @type {import('tailwindcss').Config} */
const config = {
  presets: [require("./presets")],
  content: ["./src/**/*.{html,js,tsx,jsx}", ".storybook/introduction.tsx"],
}

module.exports = config
