const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			white: colors.white,
			gray: colors.gray,
			blue: colors.sky,
			teal: colors.emerald,
			black: colors.black
		}
	},
	content: ['./src/**/*.{html,js,svelte,ts}']
};
