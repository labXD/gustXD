/** @type {import('tailwindcss').Config} */
const config = {
  presets: [require("./presets")],
  content: ["./src/**/*.{html,js,tsx,jsx,mdx}", ".storybook/introduction.tsx"],
}

module.exports = config
