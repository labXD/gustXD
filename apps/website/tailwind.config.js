/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@labxd/gustxd/tailwind")],
  content: [
    "./{src,docs}/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@labxd/gustxd/dist/**/*.{js,ts,jsx,tsx}",
  ],
};
