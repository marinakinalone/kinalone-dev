'use client'

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from 'react'

const STORAGE_KEY = 'darkMode'

const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)

  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      listener()
    }
  }

  window.addEventListener('storage', onStorage)

  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

function getSnapshot() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored !== null) {
    return stored === 'true'
  }

  return false
}

function getServerSnapshot() {
  return false
}

function setDarkMode(value: boolean) {
  localStorage.setItem(STORAGE_KEY, String(value))
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
