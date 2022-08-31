const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [2, "always", ["release"]],
  },
};

module.exports = config;
