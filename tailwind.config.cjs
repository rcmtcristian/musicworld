/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html', './client/src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['CascadiaCodePL', 'system-ui']
    }
  },
  plugins: []
}
