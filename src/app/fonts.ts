import {
  // Montserrat as Brand,
  DM_Serif_Display as Heading,
  // Manrope as Sans,
  // Rethink_Sans as Sans,
  Fraunces as Serif
} from 'next/font/google';

import { cn } from '@/lib/utils';

import { GeistSans } from 'geist/font/sans';

// const fontSans = Sans({
// 	preload: true,
// 	subsets: ['latin'],
// 	display: 'swap',
// 	variable: '--font-sans',
// 	fallback: ['system-ui'],
// 	// weight: ['300', '400', '500', '700', '800'],
// });
const fontHeading = Heading({
  preload: true,
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  fallback: ['serif']
});
const fontSerif = Serif({
  preload: true,
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal'],
  variable: '--font-serif',
  fallback: ['serif']
});
// const fontBrand = Brand({
// 	preload: true,
// 	subsets: ['latin'],
// 	display: 'swap',
// 	style: ['normal', 'italic'],
// 	variable: '--font-brand',
// 	fallback: ['serif'],
// });

const fontClassNames = cn(
  GeistSans.variable,
  // fontSans.variable,
  fontHeading.variable,
  fontSerif.variable
  // fontBrand.variable
);

export default fontClassNames;
