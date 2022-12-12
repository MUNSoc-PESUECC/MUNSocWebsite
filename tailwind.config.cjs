/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			'munsoc-gold': '#C0A960',
			'navbar-slate': '#151B24',
			'body-slate': '#232C3A',
			white: '#ffffff'
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	]
};
