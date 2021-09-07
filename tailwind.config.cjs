const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			white: colors.white,
			gray: colors.coolGray,
			blue: colors.sky,
			teal: colors.emerald,
			black: colors.black
		},

		extend: {}
	},
	variants: {
		backgroundColor: ['hover', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
		textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder']
	},
	plugins: [require('tailwindcss-dark-mode')()],
	purge: ['./src/**/*.{html,js,svelte,ts}']
};
