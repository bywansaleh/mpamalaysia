'use client';

import { ThemeProvider } from '@/components/theme-provider';

import MouseProvider from './mouse-provider';
import { LazyMotion, domMax } from 'framer-motion';
import { Provider } from 'react-wrap-balancer';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      <ThemeProvider
        attribute='class'
        // defaultTheme="dark"
        enableSystem>
        <Provider>{children}</Provider>
      </ThemeProvider>
      <MouseProvider />
    </LazyMotion>
  );
}
