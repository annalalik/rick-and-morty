module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/3' : '30%',
      }
    },
    fontSize: {
      'base': '11px',
      'small': '9px',
      'medium': '13px',
      'large': '15px',
      'xlarge': 'x-large',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
