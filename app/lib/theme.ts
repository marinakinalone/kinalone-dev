export const THEME_STORAGE_KEY = 'theme'
const LEGACY_STORAGE_KEY = 'darkMode'

export type ThemePreference = 'light' | 'dark'

export function getSystemPreference(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function readStoredPreference(): ThemePreference | null {
  const theme = localStorage.getItem(THEME_STORAGE_KEY)
  if (theme === 'light' || theme === 'dark') {
    return theme
  }

  if (localStorage.getItem(LEGACY_STORAGE_KEY) !== null) {
    localStorage.removeItem(LEGACY_STORAGE_KEY)
  }

  return null
}

export function resolveIsDark(): boolean {
  const preference = readStoredPreference()

  if (preference === 'dark') {
    return true
  }

  if (preference === 'light') {
    return false
  }

  return getSystemPreference()
}

export function applyThemeToDocument(isDark: boolean) {
  const theme = isDark ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function setStoredPreference(isDark: boolean) {
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light')
  applyThemeToDocument(isDark)
}

export const themeInitScript = `
(function () {
  try {
    var legacy = localStorage.getItem('${LEGACY_STORAGE_KEY}');
    if (legacy !== null) localStorage.removeItem('${LEGACY_STORAGE_KEY}');
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var isDark =
      stored === 'dark'
        ? true
        : stored === 'light'
          ? false
          : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  } catch (e) {}
})();
`
