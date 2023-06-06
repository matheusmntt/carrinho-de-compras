/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brandColor': '#9333EA',
        'brand-color-light': '#A855F7',
        'brand-color-lighter': '#C084FC',
        'color-primary': '#F9FAFB',
        'color-secondary': '#E4E4E7',
        'close-button-color': '#A1A1AA',
        'stroke-color': '#3F3F46',
        'surface-color': '#18181B',
        'background-color': '#09090B'
      }
    },
  },
  plugins: [],
}
