const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const tailwindcss = require("tailwindcss");

const tailwindConfig = require("./tailwind.config.js");
const path = require("path");

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        // TODO: explore using css modules locally
        // modules: true,
        plugins: [tailwindcss(tailwindConfig), autoprefixer()],
        inject: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );

    return config;
  },
};
