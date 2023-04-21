const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./content/**/*.mdx',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Work Sans', ...fontFamily.sans],
				display: ['Nikea'],
			},
		},
	},
	plugins: [],
};
