import React, { createContext, ReactNode, useState } from 'react'

interface IScrollContext {
  currentSection: string
  updateSection: (newSection: string, ref: React.MutableRefObject<null>) => void
}

export const ScrollContext = createContext<IScrollContext | null>(null)

const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState('')

  const updateSection = (newSection: string, ref: React.MutableRefObject<null>) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(newSection)
          if (newSection === 'intro') {
            window.history.replaceState(null, '', '/')
            return
          }

          window.history.replaceState(null, '', `/#${newSection}`)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }

  return (
    <ScrollContext.Provider value={{ currentSection, updateSection }}>
      {children}
    </ScrollContext.Provider>
  )
}
export default ScrollProvider
