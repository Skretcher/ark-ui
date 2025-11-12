/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../css/tailwind.config.js')], // Inherit from the base config
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scan only React files
  ],
};
