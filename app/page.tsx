'use client'

import { useEffect, useSyncExternalStore } from 'react'
import { ThemeProvider } from 'styled-components'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import AnimationSequenceProvider from './providers/AnimationSequenceProvider'
import { DarkModeProvider, useDarkMode } from './providers/DarkModeProvider'
import ScrollProvider from './providers/ScrollProvider'
import { GlobalStyles } from './styles/globalStyles'
import { darkTheme, lightTheme } from './styles/themes'

const subscribe = () => () => {}

function ThemedMain() {
  const isAppMounted = useSyncExternalStore(subscribe, () => true, () => false)
  const { value: isDark } = useDarkMode()

  useEffect(() => {
    if (!isAppMounted) return

    const hash = window.location.hash.replace('#', '')
    if (!hash) return

    const scrollToTarget = () => {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ block: 'start' })
    }

    const raf = requestAnimationFrame(() => requestAnimationFrame(scrollToTarget))
    const timer = setTimeout(scrollToTarget, 300)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
    }
  }, [isAppMounted])

  if (!isAppMounted) {
    return null
  }

  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Header />
        <Intro />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default function Home() {
  return (
    <AnimationSequenceProvider>
      <ScrollProvider>
        <DarkModeProvider>
          <ThemedMain />
        </DarkModeProvider>
      </ScrollProvider>
    </AnimationSequenceProvider>
  )
}
