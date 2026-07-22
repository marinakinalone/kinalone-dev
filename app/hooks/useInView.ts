import { RefObject, useEffect, useState } from 'react'
import usePrefersReducedMotion from './usePrefersReducedMotion'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

const useInView = (
  ref: RefObject<HTMLElement | null>,
  {
    threshold = 0.15,
    rootMargin = '0px 0px -10% 0px',
    triggerOnce = true,
  }: UseInViewOptions = {},
) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [prefersReducedMotion, ref, rootMargin, threshold, triggerOnce])

  return prefersReducedMotion || isInView
}

export default useInView
