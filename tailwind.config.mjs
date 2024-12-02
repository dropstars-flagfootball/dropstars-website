/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dropstars-blue': '#0A234E',
				'dropstars-red': '#CA3939'
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
	],
}
