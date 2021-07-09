module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      'base': '11px',
      'small': '9px',
      'medium': '13px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
