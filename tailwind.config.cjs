/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			'munsoc-gold': '#C0A960',
			'navbar-slate': '#f1ede7',
			'body-slate': '#f1ede7',
			white: '#ffffff',
			black: '#000000'
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
