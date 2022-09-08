import { create } from "@storybook/theming"

const global = {
  brandTitle: "gustXD",
  fontBase: "'Red Hat Text', sans-serif",
  brandUrl: "https://www.labxd.com",
  appBorderRadius: 2,
  inputBorderRadius: 2,
}

const xdLight = create({
  ...global,
  brandImage: "labxd-sb.png",
  base: "xdLight",
  appBg: "#ffffff",
  appBorderColor: "rgb(15 23 42/.1)",
  textColor: "#1D2433",
  textMutedColor: "rgba(29,36,51,0.65)",
  colorPrimary: "red",
  colorSecondary: "#782FED",
  barTextColor: "rgba(29,36,51,0.65)",
  barSelectedColor: "#782FED",
  inputBg: "#ffffff",
  inputTextColor: "#1D2433",
  inputBorder: "#d4d4d4",
})

const xdDark = create({
  ...global,
  brandImage: "logo-labxd-gustxd-light.png",
  base: "xdDark",
  textColor: "#94a3b8",
  appBg: "#0f172a",
  appContentBg: "#0f172a",
  textMutedColor: "#f1f5f9",
  colorSecondary: "#c4b5fd",
  barBg: "#1f2937",
  barTextColor: "#f1f5f9",
  barSelectedColor: "#c4b5fd",
  inputBg: "#1e293b",
  inputTextColor: "#94a3b8",
  inputBorder: "#1e293b",
})

export { xdLight, xdDark }
