const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

const [smFontSize, { lineHeight: smLineHeight }] = defaultTheme.fontSize.sm
const xdColors = require("../colors")
const { spacing, borderRadius, fontWeight } = defaultTheme

const [baseFontSize, { lineHeight: baseLineHeight }] =
  defaultTheme.fontSize.base

const XDButtons = plugin(function ({ addComponents }) {
  addComponents({
    "@media (min-width: 1280px)": {
      ".page-max-xl": {
        "max-width": "1280px",
        "margin-left": "auto",
        "margin-right": "auto",
      },
    },
    // #region Button
    ".button": {
      cursor: "pointer",
      display: "flex",
      "font-size": baseFontSize,
      "line-height": baseLineHeight,
      "align-items": "center",
      "justify-content": "center",
      "font-weight": fontWeight["semibold"],
      "padding-top": spacing[3],
      "padding-right": spacing[4],
      "padding-bottom": spacing[3],
      "padding-left": spacing[4],
      "border-radius": borderRadius["sm"],
      "border-style": "inset",
      transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
    ".button-sm": {
      "padding-left": spacing[3],
      "padding-right": spacing[3],
      "padding-top": "10px",
      "padding-bottom": "10px",
      "font-size": smFontSize,
      "line-height": smLineHeight,
    },
    ".button-primary": {
      color: xdColors["xd-primary"].white,
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
    ".button-link": {
      position: "relative",
      color: xdColors["xd-primary"]["purple-700"],
      "background-color": "transparent",
      "&::after": {
        content: "''",
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        height: "1px",
        width: "0",
        "background-color": xdColors["xd-primary"]["purple-700"],
        "transition-property": "width",
        "transition-duration": "150ms",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      "&:hover": {
        "&::after": {
          width: "100%",
        },
      },
    },
    ".button-red": {
      color: xdColors["xd-primary"].white,
      "background-color": xdColors["xd-secondary"]["red-700"],
      "&:not(:disabled):hover": {
        "background-color": xdColors["xd-secondary"]["red-800"],
      },
      "&:not(:disabled):focus, &:not(:disabled):active": {
        "background-color": xdColors["xd-secondary"]["red-900"],
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
    ".button-ghost": {
      color: xdColors["xd-disabled-black"].rgb,
      "background-color": "transparent",
    },
    ".button-icon-ghost": {
      color: xdColors["xd-secondary-black"].rgb,
      "background-color": "transparent",
      "&:not(:disabled):hover": {
        color: xdColors["xd-primary"]["purple-700"],
      },
      "&:not(:disabled):focus, &:not(:disabled):active": {
        color: xdColors["xd-primary"]["purple-800"],
      },
      "&:disabled": {
        "background-color": "transparent",
        color: xdColors["xd-disabled-black"].rgba,
        cursor: "not-allowed",
      },
    },
    // #endregion Button
  })
})

module.exports = XDButtons
