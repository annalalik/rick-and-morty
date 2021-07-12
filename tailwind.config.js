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
      'large': '17px',
      'xlarge': 'x-large',
      'xxxlarge': '100px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
