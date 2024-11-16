/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-gradient': 'radial-gradient(ellipse at bottom, #234d54, #0b4650, #06292f)',
			},
			colors: {
				main: '#e6ff2b',
			},
		},
	},
	plugins: [],
}
