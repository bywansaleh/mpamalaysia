'use client';

import { domAnimation, LazyMotion } from 'framer-motion';
import { Provider } from 'react-wrap-balancer';

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
				<Provider>{children}</Provider>
			</ThemeProvider>
			<MouseProvider />
		</LazyMotion>
	);
}
