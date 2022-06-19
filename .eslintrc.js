/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    "./configs/eslint/react.js",
    "./configs/eslint/markdown.js",
    "./configs/eslint/index.js",
  ],
};

module.exports = config;
