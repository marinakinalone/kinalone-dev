import { useEffect, useRef, useState } from 'react'
import {
  parseDurationMs,
  PHASE1_DURATION,
  PHASE2_DURATION,
} from '../components/ui/animations/borderTrace'
import usePrefersReducedMotion from './usePrefersReducedMotion'

export type AnimationPhase =
  'idle' | 'phase1' | 'phase2' | 'accentGrow' | 'revealBg' | 'typing' | 'done'

interface PhaseTimings {
  phase1?: number
  phase2?: number
  accentGrow?: number
  revealBg?: number
}

const DEFAULT_TIMINGS: Required<PhaseTimings> = {
  phase1: parseDurationMs(PHASE1_DURATION),
  phase2: parseDurationMs(PHASE2_DURATION),
  accentGrow: 350,
  revealBg: 250,
}

// Each phase starts before the previous one has fully finished so the border
// trace, accent grow and background reveal visually overlap. The CSS
// transitions keep the motion smooth; this just controls when each kicks off.
const PHASE_OVERLAP = 0.5

const PHASE_ORDER: AnimationPhase[] = [
  'idle',
  'phase1',
  'phase2',
  'accentGrow',
  'revealBg',
  'typing',
  'done',
]

const useAnimationPhase = (active: boolean, timings: PhaseTimings = {}) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [phase, setPhase] = useState<AnimationPhase>('idle')
  const settledRef = useRef(false)

  const phase1 = timings.phase1 ?? DEFAULT_TIMINGS.phase1
  const phase2 = timings.phase2 ?? DEFAULT_TIMINGS.phase2
  const accentGrow = timings.accentGrow ?? DEFAULT_TIMINGS.accentGrow
  const revealBg = timings.revealBg ?? DEFAULT_TIMINGS.revealBg

  useEffect(() => {
    if (!active || prefersReducedMotion) return
    // Once the sequence has played through, never restart it: a re-run would
    // reset the phase and make already-drawn borders/content retract.
    if (settledRef.current) return

    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []

    const schedule = (next: AnimationPhase, delay: number) => {
      timers.push(
        setTimeout(() => {
          if (cancelled) return
          if (next === 'typing') settledRef.current = true
          setPhase(next)
        }, delay),
      )
    }

    schedule('phase1', 0)

    let elapsed = phase1 * PHASE_OVERLAP
    schedule('phase2', elapsed)

    elapsed += phase2 * PHASE_OVERLAP
    schedule('accentGrow', elapsed)

    elapsed += accentGrow * PHASE_OVERLAP
    schedule('revealBg', elapsed)

    elapsed += revealBg * PHASE_OVERLAP
    schedule('typing', elapsed)

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [active, prefersReducedMotion, phase1, phase2, accentGrow, revealBg])

  const resolvedPhase = prefersReducedMotion ? 'done' : phase

  const isPhaseAtLeast = (target: AnimationPhase) => {
    if (prefersReducedMotion) return true
    return PHASE_ORDER.indexOf(resolvedPhase) >= PHASE_ORDER.indexOf(target)
  }

  return { phase: resolvedPhase, isPhaseAtLeast, prefersReducedMotion }
}

export default useAnimationPhase
