'use client';

import { domAnimation, LazyMotion } from 'framer-motion';

import { ThemeProvider } from '@/components/theme-provider';

import MouseProvider from './mouse-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<LazyMotion features={domAnimation} strict>
			<ThemeProvider
				attribute="class"
				// defaultTheme="dark"
				enableSystem
			>
				{children}
			</ThemeProvider>
			<MouseProvider />
		</LazyMotion>
	);
}
