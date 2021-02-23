// default configuration
// https://unpkg.com/browse/tailwindcss@2.0.3/stubs/defaultConfig.stub.js

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: {
          DEFAULT: '#AAA',
          1: '#F2F3F6',
          2: '#E6E9ED',
        },
        white: '#FFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
