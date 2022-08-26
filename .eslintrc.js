require("@rushstack/eslint-patch/modern-module-resolution")

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: [
    "./configs/eslint/typescript.js",
    "./configs/eslint/react.js",
    "./configs/eslint/index.js",
    "plugin:prettier/recommended",
  ],
}

module.exports = config
