import { create } from "@storybook/theming";

const global = {
  brandImage: "labxd-sb.png",
  brandTitle: "gustXD",
  fontBase: "'Poppins', sans-serif",
};

const light = create({
  ...global,
  base: "light",
});

const dark = create({
  ...global,
  base: "dark",
});

export { light, dark };
