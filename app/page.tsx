'use client'

import { useSyncExternalStore } from 'react'
import { ThemeProvider } from 'styled-components'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import { DarkModeProvider, useDarkMode } from './providers/DarkModeProvider'
import ScrollProvider from './providers/ScrollProvider'
import { GlobalStyles } from './styles/globalStyles'
import { darkTheme, lightTheme } from './styles/themes'

const subscribe = () => () => {}

function ThemedMain() {
  const isAppMounted = useSyncExternalStore(subscribe, () => true, () => false)
  const { value: isDark } = useDarkMode()
  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isAppMounted && (
        <main>
          <Header />
          <Intro />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </main>
      )}
    </ThemeProvider>
  )
}

export default function Home() {
  return (
    <ScrollProvider>
      <DarkModeProvider>
        <ThemedMain />
      </DarkModeProvider>
    </ScrollProvider>
  )
}
