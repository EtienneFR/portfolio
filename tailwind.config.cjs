const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	darkMode: 'class',
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
	purge: ['./src/**/*.{html,js,svelte,ts}']
};
