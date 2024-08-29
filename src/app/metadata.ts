import { Metadata, Viewport } from 'next';

import { baseUrl, siteDescription, siteTitle } from '@/lib/config';

import { bgDark, bgLight } from '@/styles/colors';

// const siteImage = '/opengraph';
// const siteImage = `${baseUrl}/opengraph`;

// const openGraphMetadata = ({
// 	title = siteTitle,
// 	description = siteDescription,
// 	imageUrl = siteImage,
// }: {
// 	title?: string;
// 	description?: string;
// 	imageUrl?: string;
// } = {}) => ({
// 	title,
// 	description,
// 	type: 'website',
// 	url: baseUrl,
// 	images: [
// 		{
// 			url: imageUrl,
// 			width: 1200,
// 			height: 675,
// 			alt: siteTitle,
// 			type: 'image/png',
// 		},
// 	],
// });
// const twitterMetadata = ({
// 	title = siteTitle,
// 	description = siteDescription,
// 	imageUrl = siteImage,
// }: {
// 	title?: string;
// 	description?: string;
// 	imageUrl?: string;
// } = {}) => ({
// 	card: 'summary_large_image',
// 	title,
// 	description,
// 	creator: '@wansaleh',
// 	images: [imageUrl],
// });

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),

	title: {
		default: siteTitle,
		template: `${siteTitle} — %s`,
	},
	robots: {
		index: true,
		follow: true,
	},
	description: siteDescription,
	keywords: [
		'malaysia',
		'music',
		'publishers',
		'mpa',
		'rights',
		'royalties',
		'copyright',
	],
	// icons: [
	// 	{ media: '(prefers-color-scheme: light)', url: '/icon-dark.svg' },
	// 	{ media: '(prefers-color-scheme: dark)', url: '/icon-light.svg' },
	// ],
	authors: [
		{
			name: 'Wan Saleh',
			url: 'https://wansaleh.com',
		},
	],

	// openGraph: openGraphMetadata(),
	// twitter: twitterMetadata(),
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: bgLight },
		{ media: '(prefers-color-scheme: dark)', color: bgDark },
	],
};
