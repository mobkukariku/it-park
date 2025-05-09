/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{html,js,jsx,ts,tsx}', // Добавьте путь к вашему проекту
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'serif'],
			},
		},
	},
	plugins: [],
}
