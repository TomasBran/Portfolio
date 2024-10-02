/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				light: {
					html: '#E34F26',
					css: '#1572B6',
					js: '#F7DF1E',
					ts: '#3178C6',
					react: '#61DAFB',
					tailwind: '#38B2AC',
					next: '#000000',
				},

				dark: {
					html: '#D65A31',
					css: '#1E3A8A',
					js: '#F4B500',
					ts: '#2A5B9F',
					react: '#2D9CDB',
					tailwind: '#2C7A7B',
					next: '#F4F4F4',
				},
				custom: {
					lightBg: '#f7fafc',
					lightBorder: '#cbd5e0',
					darkBg: '#2d3748',
					darkBorder: '#1a202c',
					hoverBlue: '#3182ce',
				},
			},
		},
		fontFamily: {
			main: ['Montserrat', 'sans-serif'],
		},
	},
	plugins: [],
};
