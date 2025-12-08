import type { CSSProperties } from 'react'

import { useMotionTemplate, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

type UseMousePositionProps = {
  target: React.RefObject<HTMLElement>
  includeTouch?: boolean
}

export default function useMousePosition({ target, includeTouch = false }: UseMousePositionProps) {
  const motionX = useMotionValue<number | null>(null)
  const motionY = useMotionValue<number | null>(null)

  useEffect(() => {
    const element = target.current
    if (!element)
      return

    const updateMousePosition = (ev: MouseEvent | TouchEvent) => {
      let x: number, y: number
      if ('touches' in ev) {
        const touch = ev.touches[0];
        [x, y] = [touch.clientX, touch.clientY]
      }
      else {
        [x, y] = [ev.clientX, ev.clientY]
      }
      motionX.set(x)
      motionY.set(y)
    }

    element.addEventListener('mousemove', updateMousePosition)
    if (includeTouch) {
      element.addEventListener('touchmove', updateMousePosition)
    }

    return () => {
      element.removeEventListener('mousemove', updateMousePosition)
      if (includeTouch) {
        element.removeEventListener('touchmove', updateMousePosition)
      }
    }
  }, [target, includeTouch, motionX, motionY])

  return {
    x: motionX,
    y: motionY,
    styles: {
      '--mx': useMotionTemplate`${motionX}px`,
      '--my': useMotionTemplate`${motionY}px`,
    } as CSSProperties,
  }
}
