# `@labXD/gustXD`

## Setup

```sh

npm install @labxd/gustxd

```

Add the preset and directory path to `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@labxd/gustxd/tailwind')],
  content: [
    'node_modules/@labxd/gustxd/dist/**/*.{js,ts,jsx,tsx}',
    ...
  ],
};

```
