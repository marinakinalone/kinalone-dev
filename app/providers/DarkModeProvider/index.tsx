'use client'

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react'
import {
  applyThemeToDocument,
  readStoredPreference,
  resolveIsDark,
  setStoredPreference,
} from '../../lib/theme'

const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)

  const onStorage = (event: StorageEvent) => {
    if (event.key === 'theme' || event.key === 'darkMode') {
      listener()
    }
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const onSystemChange = () => {
    if (readStoredPreference() === null) {
      listener()
    }
  }

  window.addEventListener('storage', onStorage)
  mediaQuery.addEventListener('change', onSystemChange)

  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
    mediaQuery.removeEventListener('change', onSystemChange)
  }
}

function getSnapshot() {
  return resolveIsDark()
}

function getServerSnapshot() {
  return false
}

function setDarkMode(value: boolean) {
  setStoredPreference(value)
  listeners.forEach((listener) => listener())
}

type DarkModeContextValue = {
  value: boolean
  toggle: () => void
}

const DarkModeContext = createContext<DarkModeContextValue | null>(null)

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const toggle = useCallback(() => setDarkMode(!getSnapshot()), [])

  useEffect(() => {
    applyThemeToDocument(value)
  }, [value])

  const contextValue = useMemo(() => ({ value, toggle }), [value, toggle])

  return <DarkModeContext.Provider value={contextValue}>{children}</DarkModeContext.Provider>
}

export function useDarkMode() {
  const context = useContext(DarkModeContext)

  if (!context) {
    throw new Error('useDarkMode must be used within DarkModeProvider')
  }

  return context
}
