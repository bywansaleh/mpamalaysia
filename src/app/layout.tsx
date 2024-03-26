import globalMetadata from './metadata';
import Providers from './providers';

import '../styles/globals.css';

import { Viewport } from 'next';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import { TailwindIndicator } from '@/components/tailwind-indicator';

import fontClassNames from './fonts';

export const metadata = globalMetadata;
export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#fff' },
		{ media: '(prefers-color-scheme: dark)', color: '#000' },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={fontClassNames} suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://rsms.me/" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</head>
			<body>
				<Providers>
					<div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
						<Nav />
						<main>{children}</main>
						<Footer />
					</div>
					<TailwindIndicator />
				</Providers>
			</body>
		</html>
	);
}
