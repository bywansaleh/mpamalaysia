import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import { type Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				// sm: '1rem',
			},
			screens: {
				'2xl': '86rem',
			},
		},
		extend: {
			fontFamily: {
				sans: [
					// 'var(--font-sans)',
					'var(--font-geist-sans)',
					'InterVariable',
					...defaultTheme.fontFamily.sans,
				],
				serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
				heading: ['var(--font-heading)', ...defaultTheme.fontFamily.serif],
				brand: ['var(--font-brand)', ...defaultTheme.fontFamily.serif],
			},

			colors: {
				brand: {
					DEFAULT: 'hsl(var(--brand))',
					foreground: 'hsl(var(--brand-foreground))',
					lighter: 'color-mix(in hsl, hsl(var(--brand)), #fff 10%)',
					darker: 'color-mix(in hsl, hsl(var(--brand)), #000 10%)',
				},
				gray: colors.stone,
				border: 'hsl(var(--border))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			fontSize: {
				'3xs': '0.575rem',
				'2xs': '0.625rem',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				marquee: {
					from: {
						transform: 'translateX(0)',
					},
					to: {
						transform: 'translateX(-100%)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				marquee: 'marquee 120s linear infinite',
			},
			boxShadow: {
				huge: '0 20px 40px 1px rgba(0,0,0,.12), inset 0 -10px 20px -5px rgba(0,0,0,.3), 0 150px 100px -80px rgba(0,0,0,.4), inset 0 1px 4px hsla(0,0%,100%,.6), inset 0 -1px 1px 1px rgba(0,0,0,.2)',
			},
			dropShadow: {
				vivid: [
					'0 20px 13px rgb(0 0 0 / 0.03))',
					'0 8px 5px rgb(0 0 0 / 0.08))',
					'0 1px 2px rgb(0 0 0 / 0.08))',
				],
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
		require('tailwindcss-easing'),
		require('tailwindcss-mixins'),

		plugin(function ({ addVariant, matchUtilities, theme }) {
			addVariant('firefox', '@supports (-moz-appearance: none)');
			addVariant('safari', '@supports (background: -webkit-named-image(i))');
			addVariant('chrome', '@supports (-webkit-app-region: inherit)');

			matchUtilities(
				{
					'p-mask': (value) => ({
						mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
						'-webkit-mask-composite': 'xor',
						'mask-composite': 'exclude',
						padding: value,
					}),
				},
				{ values: theme('spacing') }
			);
		}),
	],
} satisfies Config;
