import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion'
import {
  GhostBlock,
  GhostText,
  OverlayBlock,
  OverlayText,
  ReservedBlock,
  ReservedLine,
} from './ReservedText'

const TypedOverlay = styled(OverlayText)<{
  $duration: number
  $charCount: number
  $started: boolean
}>`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  max-width: ${(props) => (props.$started ? `${props.$charCount}ch` : '0')};
  transition: ${(props) =>
    `max-width ${props.$duration}ms steps(${Math.max(props.$charCount, 1)}, end)`};
`

const ClipOverlay = styled(OverlayBlock)<{ $duration: number; $started: boolean }>`
  overflow: hidden;
  clip-path: inset(0 ${(props) => (props.$started ? 0 : 100)}% 0 0);
  transition: clip-path ${(props) => props.$duration}ms linear;
`

interface TypingTextProps {
  text: React.ReactNode
  duration?: number
  active?: boolean
  onComplete?: () => void
  className?: string
  wrap?: boolean
}

const TypingText = ({
  text,
  duration = 1000,
  active = true,
  onComplete,
  className,
  wrap = false,
}: TypingTextProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion && active) {
      const timer = setTimeout(() => onComplete?.(), 0)
      return () => clearTimeout(timer)
    }
  }, [prefersReducedMotion, active, onComplete])

  useEffect(() => {
    if (!active || prefersReducedMotion) return

    const startFrame = requestAnimationFrame(() => setStarted(true))
    const doneTimer = setTimeout(() => {
      setFinished(true)
      onComplete?.()
    }, duration)

    return () => {
      cancelAnimationFrame(startFrame)
      clearTimeout(doneTimer)
    }
  }, [active, duration, onComplete, prefersReducedMotion])

  if (prefersReducedMotion || finished) {
    return <span className={className}>{text}</span>
  }

  if (wrap) {
    return (
      <ReservedBlock className={className}>
        <GhostBlock aria-hidden="true">{text}</GhostBlock>
        {active && (
          <ClipOverlay $duration={duration} $started={started}>
            {text}
          </ClipOverlay>
        )}
      </ReservedBlock>
    )
  }

  const charCount = typeof text === 'string' ? text.length : 1

  return (
    <ReservedLine className={className}>
      <GhostText aria-hidden="true">{text}</GhostText>
      {active && (
        <TypedOverlay $duration={duration} $charCount={charCount} $started={started}>
          {text}
        </TypedOverlay>
      )}
    </ReservedLine>
  )
}

export default TypingText
