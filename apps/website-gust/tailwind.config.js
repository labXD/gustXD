/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@labxd/gust/tailwind')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/@labxd/gust/dist/**/*.{js,ts,jsx,tsx}',
  ],
};
