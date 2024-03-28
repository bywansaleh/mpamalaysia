import Providers from './providers';

import '../styles/globals.css';

import { CSSProperties } from 'react';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import { TailwindIndicator } from '@/components/tailwind-indicator';

import { bgDark, bgLight, hue } from '@/styles/colors';

import fontClassNames from './fonts';
import StyledJsxRegistry from './registry';

export * from './metadata';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={fontClassNames}
			suppressHydrationWarning
			style={
				{
					'--hue': hue,
					'--bg-light': bgLight,
					'--bg-dark': bgDark,
				} as CSSProperties
			}
		>
			<head>
				<link rel="preconnect" href="https://rsms.me/" />
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</head>
			<body>
				<StyledJsxRegistry>
					<Providers>
						<div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
							<Nav />
							<main>{children}</main>
							<Footer />
						</div>
						<TailwindIndicator />
					</Providers>
				</StyledJsxRegistry>
			</body>
		</html>
	);
}
