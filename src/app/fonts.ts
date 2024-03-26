import {
	DM_Serif_Display as Heading,
	Rethink_Sans as Sans,
	Instrument_Serif as Serif,
} from 'next/font/google';

import { cn } from '@/lib/utils';

const fontSans = Sans({
	preload: true,
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
	fallback: ['system-ui'],
	// weight: ['300', '400', '500', '700', '800'],
});
const fontHeading = Heading({
	preload: true,
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
	style: ['normal', 'italic'],
	variable: '--font-heading',
	fallback: ['serif'],
});
const fontSerif = Serif({
	preload: true,
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
	style: ['normal', 'italic'],
	variable: '--font-serif',
	fallback: ['serif'],
});

const fontClassNames = cn(
	fontSans.variable,
	fontHeading.variable,
	fontSerif.variable
);

export default fontClassNames;
