/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				landing: ['Open Sans', 'sans-serif'],
				landingCourses: ['Poppins', 'sans-serif'],
				landingIntructors: ['Inter', 'sans-serif']
			},
			colors: {
				landingPrimary: '#0F756B',
				landingSecondary: '#3B7586',
				landingTertiary: '#1B353D'
			}
		}
	},
	plugins: []
};
