# `@labXD/gustXD`

gustXD is a react UI component library that utilizes Tailwind CSS.

## Installation

```sh

npm install @labxd/gustxd

```

Add our preset `@labxd/gustxd/tailwind` will provide the tailwind configurations
that Add the preset and directory path to `tailwind.config.js`

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
