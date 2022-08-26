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
  plugins: ["simple-import-sort"],
  extends: ["eslint:recommended"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": ["off"],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "no-unused-vars": ["error", { ignoreRestSiblings: true }],
      },
    },
  ],
};
