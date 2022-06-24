module.exports = {
  stories: ["*.stories.@(tsx|mdx)", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  staticDirs: ["./assets"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  // framework: "@storybook/react",
  // core: {
  //   builder: "@storybook/builder-webpack5",
  // },
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
