/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  globals: {
    JSX: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".scss", ".css"],
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/accessible-emoji": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
};
