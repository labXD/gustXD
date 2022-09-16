const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")
const { spacing } = defaultTheme

const [smFontSize, { lineHeight: smLineHeight }] = defaultTheme.fontSize.sm
const xdColors = require("../colors")

const XDButtons = plugin(function ({ addComponents }) {
  addComponents({
    ".button-primary": {
      color: "#fff",
      "background-color": xdColors["xd-primary"]["purple-700"],
      "&:not(:disabled):hover": {
        "background-color": xdColors["xd-primary"]["purple-800"],
      },
      "&:not(:disabled):focus, &:not(:disabled):active": {
        "background-color": xdColors["xd-primary"]["purple-900"],
      },
      "&:disabled": {
        "background-color": xdColors["xd-neutral"][200],
        color: xdColors["xd-disabled-black"].rgba,
        cursor: "not-allowed",
      },
    },
    ".button-danger": {
      color: xdColors["xd-primary"].white,
      "background-color": xdColors["xd-danger"][700],
      "&:not(:disabled):hover": {
        "background-color": xdColors["xd-danger"][800],
      },
      "&:not(:disabled):focus, &:not(:disabled):active": {
        "background-color": xdColors["xd-danger"][900],
      },
      "&:disabled": {
        "background-color": xdColors["xd-neutral"][200],
        color: xdColors["xd-disabled-black"].rgba,
        cursor: "not-allowed",
      },
    },
    ".button-outline": {
      color: xdColors["xd-primary"].black,
      "background-color": xdColors["xd-primary"].white,
      "--tw-ring-inset": "inset",
      "--tw-ring-offset-width": "0px",
      "--tw-ring-offset-color": xdColors["xd-primary"].white,
      "--tw-ring-color": xdColors["xd-neutral"][300],
      "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
      "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      "box-shadow": `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
      "&:not(:disabled):hover": {
        "background-color": xdColors["xd-neutral"][200],
      },
      "&:not(:disabled):focus, &:not(:disabled):active": {
        "background-color": xdColors["xd-neutral"][300],
      },
      "&:disabled": {
        "background-color": xdColors["xd-neutral"][200],
        color: xdColors["xd-disabled-black"].rgba,
        cursor: "not-allowed",
      },
    },
    ".button-sm": {
      "padding-left": spacing[3],
      "padding-right": spacing[3],
      "padding-top": "10px",
      "padding-bottom": "10px",
      "font-size": smFontSize,
      "line-height": smLineHeight,
    },
  })
})

module.exports = XDButtons
