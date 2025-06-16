import { CSSProperties } from 'react';

import fontClassNames from '@/app/fonts';
import Providers from '@/app/providers';
import Footer from '@/components/footer';
import Nav from '@/components/nav';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { bgDark, bgLight, hue } from '@/styles/colors';
import '@/styles/globals.css';

export * from '@/app/metadata';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={fontClassNames}
      suppressHydrationWarning
      style={
        {
          '--hue': hue,
          '--bg-light': bgLight,
          '--bg-dark': bgDark
        } as CSSProperties
      }>
      <head>
        <link rel='preconnect' href='https://rsms.me/' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        <script defer src='https://umami.wslh.org/script.js' data-website-id='c099fd30-b44e-4766-9717-a1196080c1c0' />
      </head>
      <body>
        <Providers>
          <div className='grid min-h-screen w-screen grid-rows-[auto_1fr_auto] overflow-hidden'>
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
          <TailwindIndicator />
        </Providers>

        {/* <script
					defer
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon='{"token": "ed66009c46354b29a22c9ce5b12c61bd"}'
				/> */}
      </body>
    </html>
  );
}
