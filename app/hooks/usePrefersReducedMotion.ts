import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

const subscribe = (callback: () => void) => {
  const mediaQuery = window.matchMedia(QUERY)
  mediaQuery.addEventListener('change', callback)
  return () => mediaQuery.removeEventListener('change', callback)
}

const getSnapshot = () => window.matchMedia(QUERY).matches

const getServerSnapshot = () => false

const usePrefersReducedMotion = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

export default usePrefersReducedMotion
