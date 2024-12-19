const { resolveProjectPath } = require('wasp/dev');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    resolveProjectPath('./src/**/*.{js,jsx,ts,tsx}'),
  ],
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
}


