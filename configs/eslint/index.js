require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: ["simple-import-sort", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended", // Make sure this is always the last element in the array.
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
  },
};
