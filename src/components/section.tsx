'use client'

import type { ComponentProps } from 'react'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { $currentSection } from '@/app/store'
import { cn } from '@/lib/utils'

export default function Section({ children, className, ...props }: ComponentProps<'section'>) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '-20% 0px -60%',
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView && props.id) {
      $currentSection.set(props.id)
    }
  }, [inView, props.id])

  return (
    <section ref={ref} className={cn(className)} {...props}>
      {children}
    </section>
  )
}
