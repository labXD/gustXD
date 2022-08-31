const config = {
  "*.{ts,tsx}": ["eslint --fix"],
  "*.{tsx,jsx,css,scss,md}": ["prettier --write"],
};

module.exports = config;
