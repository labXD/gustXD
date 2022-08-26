module.exports = {
  printWidth: 80,
  semi: false,
  singleQuote: false,
  jsxSingleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  overrides: [
    {
      files: ["*.md", "*.mdx"],
      options: {
        proseWrap: "always",
      },
    },
  ],
};
