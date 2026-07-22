import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useInView from '../../hooks/useInView'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import useSectionAnimation from '../../hooks/useSectionAnimation'
import SmallText from '../ui/SmallText'
import TextLink from '../ui/TextLink'
import { SingleBorderTrace } from '../ui/animations/RevealBackground'
import { RevealContent } from '../ui/animations/animationHelpers'
import { HEADER_BORDER_DURATION } from '../ui/animations/borderTrace'

const FooterContainer = styled.footer`
  border-top: none;
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 2rem;
`

const LICENSE_TEXT = 'License'
const FOOTER_PREFIX = 'mks 2026 🐈‍⬛🌙 | '

const Footer = () => {
  const ref = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { canAnimate, isSkipped, isEntrySection, markComplete } = useSectionAnimation('footer')
  const isInView = useInView(ref, { threshold: 0.01, rootMargin: '0px' })
  const shouldAnimate = (canAnimate && (isInView || isEntrySection)) || isSkipped
  const showFinal = prefersReducedMotion || isSkipped
  const [revealed, setRevealed] = useState(showFinal)

  useEffect(() => {
    if (!shouldAnimate || revealed) return

    const frame = requestAnimationFrame(() => setRevealed(true))
    return () => cancelAnimationFrame(frame)
  }, [shouldAnimate, revealed])

  useEffect(() => {
    if (revealed && !isSkipped) {
      markComplete()
    }
  }, [revealed, isSkipped, markComplete])

  return (
    <FooterContainer ref={ref}>
      <SingleBorderTrace
        $side="top"
        $drawn={revealed}
        $duration={HEADER_BORDER_DURATION}
        $prefersReducedMotion={showFinal}
      />
      <RevealContent $visible={revealed} $prefersReducedMotion={prefersReducedMotion}>
        <SmallText>
          {FOOTER_PREFIX}
          <TextLink href="https://github.com/marinakinalone/kinalone-dev/blob/main/LICENSE.txt">
            {LICENSE_TEXT}
          </TextLink>
        </SmallText>
      </RevealContent>
    </FooterContainer>
  )
}

export default Footer
