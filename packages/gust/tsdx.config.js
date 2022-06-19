const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

const tailwindConfig = require('./tailwind.config.js');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        plugins: [
          tailwindcss(tailwindConfig),
          autoprefixer(),
          cssnano({
            preset: [
              'default',
              { normalizeWhitespace: false, discardComments: true },
            ],
          }),
        ],
        inject: true,
        extract: true,
      })
    );

    return config;
  },
};
