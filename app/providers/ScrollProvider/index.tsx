import React, { createContext, ReactNode, useState } from 'react'

interface IScrollContext {
  currentSection: string
  updateSection: (newSection: string) => void
}

export const ScrollContext = createContext<IScrollContext | null>(null)

const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState('')

  const updateSection = (newSection: string) => {
    setCurrentSection(newSection)

    window.history.replaceState(null, '', `/#${newSection}`)
  }

  return (
    <ScrollContext.Provider value={{ currentSection, updateSection }}>
      {children}
    </ScrollContext.Provider>
  )
}
export default ScrollProvider
