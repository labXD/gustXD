/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["*.md"],
      extends: "plugin:markdown/recommended",
    },
    {
      files: ["*.mdx"],
      extends: "plugin:mdx/recommended",
    },
  ],
};
