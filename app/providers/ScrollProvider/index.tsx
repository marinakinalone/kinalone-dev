import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useAnimationSequence } from '../AnimationSequenceProvider'

interface IScrollContext {
  currentSection: string
  updateSection: (
    newSection: string,
    ref: React.RefObject<HTMLElement | null>,
  ) => () => void
}

export const ScrollContext = createContext<IScrollContext | null>(null)

// Dense thresholds so tall sections (projects) and short ones (contact) both
// report meaningful ratios as you scroll.
const HASH_THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20)

const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState('')
  const { isIntroComplete } = useAnimationSequence()
  const introCompleteRef = useRef(isIntroComplete)
  const ratiosRef = useRef(new Map<string, number>())
  const sectionIdsRef = useRef(new Map<Element, string>())
  const currentSectionRef = useRef('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    introCompleteRef.current = isIntroComplete
  }, [isIntroComplete])

  const applyActiveSection = useCallback(() => {
    let bestId = ''
    let bestRatio = 0

    ratiosRef.current.forEach((ratio, id) => {
      if (ratio > bestRatio) {
        bestRatio = ratio
        bestId = id
      }
    })

    if (!bestId || bestRatio <= 0) return
    if (bestId !== 'intro' && !introCompleteRef.current) return
    if (bestId === currentSectionRef.current) return

    currentSectionRef.current = bestId
    setCurrentSection(bestId)

    if (bestId === 'intro') {
      window.history.replaceState(null, '', '/')
      return
    }

    window.history.replaceState(null, '', `/#${bestId}`)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = sectionIdsRef.current.get(entry.target)
          if (!id) continue
          ratiosRef.current.set(
            id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          )
        }
        applyActiveSection()
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: HASH_THRESHOLDS,
      },
    )

    return () => {
      observerRef.current?.disconnect()
      observerRef.current = null
    }
  }, [applyActiveSection])

  // Once the intro finishes, re-score so the visible section can take the hash.
  useEffect(() => {
    if (isIntroComplete) {
      applyActiveSection()
    }
  }, [isIntroComplete, applyActiveSection])

  const updateSection = useCallback(
    (newSection: string, ref: React.RefObject<HTMLElement | null>) => {
      const element = ref.current
      const observer = observerRef.current
      if (!element || !observer) return () => {}

      sectionIdsRef.current.set(element, newSection)
      observer.observe(element)

      return () => {
        observer.unobserve(element)
        sectionIdsRef.current.delete(element)
        ratiosRef.current.delete(newSection)
      }
    },
    [],
  )

  return (
    <ScrollContext.Provider value={{ currentSection, updateSection }}>
      {children}
    </ScrollContext.Provider>
  )
}
export default ScrollProvider
