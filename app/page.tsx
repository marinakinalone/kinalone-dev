'use client'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from './themes/ThemeConfig'
import useDarkMode from 'use-dark-mode'
import React, { useEffect, useState } from 'react'

//TODO: add providers: translation, scroll, game?
export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(false)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isMounted && (
        <main>
          <button onClick={darkmode.toggle}>Switch Mode</button>
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
