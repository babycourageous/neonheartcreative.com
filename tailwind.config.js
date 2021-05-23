module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      alt: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#E4E844',
        'primary-dark': '#74762F',
        secondary: '#F4E9D8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
