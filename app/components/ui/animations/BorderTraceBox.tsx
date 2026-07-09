import React from 'react'
import styled, { css } from 'styled-components'
import { AnimationPhase } from '../../../hooks/useAnimationPhase'
import { PHASE1_DURATION, PHASE2_DURATION } from './borderTrace'

const Wrapper = styled.div`
  position: relative;
`

const BorderLine = styled.span<{
  $side: 'top' | 'right' | 'bottom' | 'left'
  $drawn: boolean
  $duration: string
}>`
  position: absolute;
  background-color: ${(props) => props.theme.color.neutral};
  pointer-events: none;
  z-index: 1;
  transition: transform ${(props) => props.$duration} ease-out;

  ${(props) => {
    const scale = props.$drawn ? 1 : 0

    switch (props.$side) {
      case 'top':
        return css`
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          transform-origin: left center;
          transform: scaleX(${scale});
        `
      case 'bottom':
        return css`
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          transform-origin: right center;
          transform: scaleX(${scale});
        `
      case 'left':
        return css`
          top: 0;
          left: 0;
          bottom: 0;
          width: 1px;
          transform-origin: top center;
          transform: scaleY(${scale});
        `
      case 'right':
        return css`
          top: 0;
          right: 0;
          bottom: 0;
          width: 1px;
          transform-origin: bottom center;
          transform: scaleY(${scale});
        `
    }
  }}
`

const PHASE_INDEX: Record<AnimationPhase, number> = {
  idle: 0,
  phase1: 1,
  phase2: 2,
  accentGrow: 3,
  revealBg: 4,
  typing: 5,
  done: 6,
}

const isSideDrawn = (side: 'top' | 'right' | 'bottom' | 'left', phase: AnimationPhase) => {
  const index = PHASE_INDEX[phase]

  if (side === 'top' || side === 'left') {
    return index >= PHASE_INDEX.phase1
  }

  return index >= PHASE_INDEX.phase2
}

interface BorderTraceBoxProps {
  phase: AnimationPhase
  children: React.ReactNode
  className?: string
}

const BorderTraceBox = ({ phase, children, className }: BorderTraceBoxProps) => {
  return (
    <Wrapper className={className}>
      {(['top', 'left', 'right', 'bottom'] as const).map((side) => (
        <BorderLine
          key={side}
          $side={side}
          $drawn={isSideDrawn(side, phase)}
          $duration={side === 'top' || side === 'left' ? PHASE1_DURATION : PHASE2_DURATION}
        />
      ))}
      {children}
    </Wrapper>
  )
}

export default BorderTraceBox
