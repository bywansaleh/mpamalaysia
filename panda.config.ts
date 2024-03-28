import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	// Whether to use css reset
	preflight: false,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	patterns: {
		extend: {
			container: {
				defaultValues: {
					maxWidth: '84rem',
					px: 4,
				},
			},
		},
	},

	// The output directory for your css system
	outdir: 'styled-system',

	hash: true,
});
