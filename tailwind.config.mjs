/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

let grayColors = colors.neutral;

//grayColors[700] = "#2c2f33"

// Reject modernity, return to AMOLED
grayColors[700] = "#111111"
grayColors[800] = "#000000"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gray: grayColors, //colors.gray //colors.trueGray
				yellow: colors.amber,
			},
		},
	},
	plugins: [],
}
