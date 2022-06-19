# `@labxd/gust`

## Setup

```sh

npm install @labxd/gust

```

Add the preset and directory path to `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@labxd/gust/tailwind')],
  content: [
    'node_modules/@labxd/gust/dist/**/*.{js,ts,jsx,tsx}',
    ...
  ],
};

```
