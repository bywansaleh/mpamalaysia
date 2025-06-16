'use client';

import { Variants, m } from 'framer-motion';

export function RevealFade({
  delay = 0.25,
  once = true,
  amount = 0.25,
  sliding = true,
  children,
  ...props
}: {
  delay?: number;
  once?: boolean;
  amount?: number | 'some' | 'all' | undefined;
  sliding?: boolean;
  children: React.ReactNode;
} & React.ComponentProps<typeof m.div>) {
  const variants: Variants = {
    initial: {
      opacity: 0,
      // x: sliding ? -20 : 0,
      y: sliding ? 20 : 0
      // scale: sliding ? 0.95 : 1,
    },
    reveal: {
      opacity: 1,
      x: 0,
      y: 0,
      // scale: 1,
      transition: {
        delay,
        type: 'spring',
        damping: 30,
        stiffness: 100
      }
    }
  };

  return (
    <m.div
      variants={variants}
      initial='initial'
      whileInView='reveal'
      viewport={{
        amount,
        once
      }}
      {...props}>
      {children}
    </m.div>
  );
}
