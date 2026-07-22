import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

const ANIMATION_SECTIONS = ['intro', 'projects', 'about', 'contact', 'footer'] as const
export type AnimationSectionId = (typeof ANIMATION_SECTIONS)[number]

type SectionState = 'pending' | 'animating' | 'complete' | 'skipped'

interface AnimationSequenceContextValue {
  canAnimate: (id: AnimationSectionId) => boolean
  isSkipped: (id: AnimationSectionId) => boolean
  isComplete: (id: AnimationSectionId) => boolean
  isWaiting: (id: AnimationSectionId) => boolean
  isEntrySection: (id: AnimationSectionId) => boolean
  markComplete: (id: AnimationSectionId) => void
  isIntroComplete: boolean
}

const AnimationSequenceContext = createContext<AnimationSequenceContextValue | null>(null)

const getHashSection = (): AnimationSectionId | null => {
  if (typeof window === 'undefined') return null
  const hash = window.location.hash.replace('#', '')
  if (!hash) return null
  return ANIMATION_SECTIONS.includes(hash as AnimationSectionId)
    ? (hash as AnimationSectionId)
    : null
}

const buildInitialStates = (prefersReducedMotion: boolean): Record<AnimationSectionId, SectionState> => {
  const states = Object.fromEntries(
    ANIMATION_SECTIONS.map((id) => [id, 'pending']),
  ) as Record<AnimationSectionId, SectionState>

  if (prefersReducedMotion) {
    ANIMATION_SECTIONS.forEach((id) => {
      states[id] = 'skipped'
    })
    return states
  }

  const hashSection = getHashSection()
  if (!hashSection) return states

  const hashIndex = ANIMATION_SECTIONS.indexOf(hashSection)
  ANIMATION_SECTIONS.forEach((id, index) => {
    if (index < hashIndex) {
      states[id] = 'skipped'
    }
  })

  return states
}

const AnimationSequenceProvider = ({ children }: { children: ReactNode }) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [sectionStates, setSectionStates] = useState<Record<AnimationSectionId, SectionState>>(() =>
    buildInitialStates(false),
  )
  // The section we land on (deep-link hash, or intro by default). It must
  // reveal immediately rather than waiting to scroll into view, because a
  // direct navigation already scrolled to it and async layout shifts above it
  // can otherwise push it out of view and strand it behind a spinner.
  const [entrySection] = useState<AnimationSectionId>(() => getHashSection() ?? 'intro')

  const resolvedStates = useMemo(() => {
    if (!prefersReducedMotion) return sectionStates
    return Object.fromEntries(
      ANIMATION_SECTIONS.map((id) => [id, 'skipped']),
    ) as Record<AnimationSectionId, SectionState>
  }, [prefersReducedMotion, sectionStates])

  const markComplete = useCallback((id: AnimationSectionId) => {
    setSectionStates((prev) => {
      if (prev[id] === 'complete' || prev[id] === 'skipped') return prev
      return { ...prev, [id]: 'complete' }
    })
  }, [])

  const isComplete = useCallback(
    (id: AnimationSectionId) =>
      resolvedStates[id] === 'complete' || resolvedStates[id] === 'skipped',
    [resolvedStates],
  )

  const isSkipped = useCallback(
    (id: AnimationSectionId) => resolvedStates[id] === 'skipped',
    [resolvedStates],
  )

  // Sections reveal in order: a section may only start once the previous one
  // has finished (or was skipped). This keeps the reveal from cascading out of
  // order and stranding a spinner between an unfinished section and a later one
  // that already animated. Each section additionally gates on being in view.
  const canAnimate = useCallback(
    (id: AnimationSectionId) => {
      const state = resolvedStates[id]
      if (state === 'skipped') return true
      if (state === 'complete') return false

      const index = ANIMATION_SECTIONS.indexOf(id)
      if (index === 0) return true

      return isComplete(ANIMATION_SECTIONS[index - 1])
    },
    [isComplete, resolvedStates],
  )

  const isWaiting = useCallback(() => false, [])

  const isEntrySection = useCallback(
    (id: AnimationSectionId) => id === entrySection,
    [entrySection],
  )

  const value = useMemo(
    () => ({
      canAnimate,
      isSkipped,
      isComplete,
      isWaiting,
      isEntrySection,
      markComplete,
      isIntroComplete: isComplete('intro'),
    }),
    [canAnimate, isSkipped, isComplete, isWaiting, isEntrySection, markComplete],
  )

  return (
    <AnimationSequenceContext.Provider value={value}>
      {children}
    </AnimationSequenceContext.Provider>
  )
}

export const useAnimationSequence = () => {
  const context = useContext(AnimationSequenceContext)
  if (!context) {
    throw new Error('useAnimationSequence must be used within AnimationSequenceProvider')
  }
  return context
}

export default AnimationSequenceProvider
