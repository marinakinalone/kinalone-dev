import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { SingleBorderTrace } from '../ui/animations/RevealBackground'
import TypingText from '../ui/animations/TypingText'
import { HEADER_BORDER_DURATION } from '../ui/animations/borderTrace'

const HeaderContainer = styled.header`
  ${(props) => {
    const { spacing } = props.theme
    return `
      border-bottom: none;
      padding: 0 ${spacing.xs};
      margin-bottom: ${spacing.l};
      margin-top: ${spacing.s};
      position: relative;
    `
  }}
`

const HeaderTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.regular.m};
  min-height: 1.5em;
`

const Header = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [borderDrawn, setBorderDrawn] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return

    const frame = requestAnimationFrame(() => setBorderDrawn(true))
    return () => cancelAnimationFrame(frame)
  }, [prefersReducedMotion])

  return (
    <HeaderContainer>
      <HeaderTitle>
        <TypingText text="kinalone.dev" duration={1000} active />
      </HeaderTitle>
      <SingleBorderTrace
        $side="bottom"
        $drawn={borderDrawn}
        $duration={HEADER_BORDER_DURATION}
        $prefersReducedMotion={prefersReducedMotion}
      />
    </HeaderContainer>
  )
}

export default Header
