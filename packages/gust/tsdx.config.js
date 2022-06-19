const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

const tailwindConfig = require('./tailwind.config.js');
const path = require('path');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [tailwindcss(tailwindConfig), autoprefixer()],
        inject: true,
        extract: true,
      })
    );

    return config;
  },
};
