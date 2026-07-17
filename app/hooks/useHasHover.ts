import { useSyncExternalStore } from 'react'

const QUERY = '(hover: hover) and (pointer: fine)'

const subscribe = (callback: () => void) => {
  const mediaQuery = window.matchMedia(QUERY)
  mediaQuery.addEventListener('change', callback)
  return () => mediaQuery.removeEventListener('change', callback)
}

const getSnapshot = () => window.matchMedia(QUERY).matches

const getServerSnapshot = () => false

const useHasHover = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

export default useHasHover
