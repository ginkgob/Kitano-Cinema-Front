/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': '0 3px 10px rgba(255, 255, 255, 0.7)',
      }
    },
  },
  plugins: [],
}
