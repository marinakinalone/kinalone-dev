import React, { createContext, ReactNode, useEffect, useRef, useState } from 'react'
import { useAnimationSequence } from '../AnimationSequenceProvider'

interface IScrollContext {
  currentSection: string
  updateSection: (newSection: string, ref: React.RefObject<HTMLElement | null>) => void
}

export const ScrollContext = createContext<IScrollContext | null>(null)

const HASH_THRESHOLD = 0.45
const HASH_ROOT_MARGIN = '-15% 0px -30% 0px'

const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState('')
  const { isIntroComplete } = useAnimationSequence()
  const introCompleteRef = useRef(isIntroComplete)

  useEffect(() => {
    introCompleteRef.current = isIntroComplete
  }, [isIntroComplete])

  const updateSection = (newSection: string, ref: React.RefObject<HTMLElement | null>) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        if (newSection !== 'intro' && !introCompleteRef.current) return

        setCurrentSection(newSection)
        if (newSection === 'intro') {
          window.history.replaceState(null, '', '/')
          return
        }

        window.history.replaceState(null, '', `/#${newSection}`)
      },
      {
        root: null,
        rootMargin: HASH_ROOT_MARGIN,
        threshold: HASH_THRESHOLD,
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
