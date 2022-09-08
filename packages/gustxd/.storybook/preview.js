import "../src/styles/globals.css"
import { xdLight, xdDark } from "./xd-theme"
import { addParameters } from "@storybook/react"

addParameters({
  previewTabs: {
    canvas: {
      title: "Prototype",
    },
  },
})

export const parameters = {
  options: {
    storySort: {
      order: ["Getting Started"],
    },
  },
  actions: { argTypesRegex: "^on.*" },
  darkMode: {
    current: "light",
    // Apply the dark/light class to the <body> element of the preview iframe. This can be configured with the classTarget parameter. The value will be passed to a querySelector() inside the iframe.
    classTarget: "html",
    stylePreview: true,
    darkClass: "xd--dark-mode",
    lightClass: "xd--light-mode",
    dark: { ...xdDark },
    light: { ...xdLight },
  },
}
