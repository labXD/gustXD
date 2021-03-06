// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const rootPkgJson = require("./package.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "labXD",
  tagline: rootPkgJson.description,
  url: "https://www.labxd.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-16.png",
  organizationName: "labXD", // Usually your GitHub org/user name.
  projectName: "gustXD",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          path: "docs/gust",
          routeBasePath: "gustxd",
          sidebarPath: require.resolve("./sidebars.js"),
          tagsBasePath: "tags",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/styles/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "support_us",
        content:
          "UI Infrastructure is our mission. Feedback <span style=font-style:italic>(github issues or discord)</span> is greatly appreciated!",
        backgroundColor: "rgb(250 204 21)",
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      navbar: {
        style: "dark",
        title: "labXD",
        logo: {
          alt: "labXD logo",
          // src: "img/logo.svg",
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
        },
        items: [
          {
            to: "gustxd",
            label: "gustXD",
            position: "left",
            className: "sneak-peek",
          },
          {
            href: "https://github.com/labXD/gustXD",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://discord.gg/5cp3rQVgGu",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Join our discord",
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
