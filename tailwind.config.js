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
				sans: ['Space Mono', ...fontFamily.sans],
				display: ['Nikea'],
				mono: ['Space Mono', 'monospace'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
