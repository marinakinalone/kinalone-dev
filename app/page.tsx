'use client'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import ScrollProvider from './providers/ScrollProvider'
import { GlobalStyles } from './styles/globalStyles'
import { darkTheme, lightTheme } from './styles/themes'

export default function Home() {
  const [isAppMounted, setIsAppMounted] = useState(false)
  const darkmode = useDarkMode(false)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsAppMounted(true)
  }, [])

  return (
    <ScrollProvider>
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
    </ScrollProvider>
  )
}
