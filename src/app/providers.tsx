'use client';

import { domMax, LazyMotion } from 'framer-motion';
import { Provider } from 'react-wrap-balancer';

import { ThemeProvider } from '@/components/theme-provider';

import MouseProvider from './mouse-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<LazyMotion features={domMax} strict>
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
