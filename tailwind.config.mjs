/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dropstars-blue': '#0A234E',
				'dropstars-red': '#CA3939'
			},
			dropShadow: {
				'dropstar-shadow': ['-6px 4px 0 #0A234E', '-3px 3px 0 #CA3939']
			}
		},
	},
	plugins: [
		require("tailwindcss-animate"),
	],
}
