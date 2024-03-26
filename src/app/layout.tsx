import { Inter as Sans } from 'next/font/google';

import globalMetadata from './metadata';
import Providers from './providers';

import '../styles/globals.css';

import { Viewport } from 'next';

import { cn } from '@/lib/utils';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import { TailwindIndicator } from '@/components/tailwind-indicator';

export const metadata = globalMetadata;
export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#fff' },
		{ media: '(prefers-color-scheme: dark)', color: '#000' },
	],
};

const fontSans = Sans({
	preload: true,
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={cn(fontSans.variable)} suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://rsms.me/" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</head>
			<body>
				<Providers>
					<Nav />
					<main>{children}</main>
					<Footer />
				</Providers>
				<TailwindIndicator />
			</body>
		</html>
	);
}
