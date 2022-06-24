import "../src/styles/globals.css";
import { light, dark } from "./xd-theme";

import { addParameters } from "@storybook/react";

addParameters({
  previewTabs: {
    canvas: {
      title: "Prototype",
    },
  },
});

export const parameters = {
  options: {
    storySort: {
      order: ["Welcome", "Getting Started"],
    },
  },
  actions: { argTypesRegex: "^on.*" },
  darkMode: {
    darkClass: "xd--dark-mode",
    lightClass: "xd--light-mode",
    dark: {
      ...dark,
    },
    light: { ...light },
  },
};
