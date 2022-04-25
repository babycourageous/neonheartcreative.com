module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
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
        neonheart: {
          DEFAULT: '#E4E844',
          50: '#FCFCE7',
          100: '#F9FAD5',
          200: '#F4F5B1',
          300: '#EEF18D',
          400: '#E9EC68',
          500: '#E4E844',
          600: '#D5D91B',
          700: '#A4A715',
          800: '#73750E',
          900: '#424308',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
