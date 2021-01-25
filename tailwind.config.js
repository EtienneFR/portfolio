module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['hover', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  purge: {
    enabled: false,
},
}
