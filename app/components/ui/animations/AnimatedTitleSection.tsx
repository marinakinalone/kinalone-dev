import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useAnimationPhase from '../../../hooks/useAnimationPhase'
import useInView from '../../../hooks/useInView'
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion'
import { device } from '../../../styles/breakpoints'
import Container from '../Container'
import Title from '../Title'
import BorderTraceBox from './BorderTraceBox'
import TypingText from './TypingText'

type ThickSide = 'top' | 'right' | 'none'

const SectionWrapper = styled.div`
  position: relative;
`

const TitleBlock = styled(Container)<{
  
  $revealed: boolean
  $prefersReducedMotion?: boolean
  $hasBody?: boolean
}>`
  padding: ${(props) => props.theme.spacing.s};
  background-color: ${(props) =>
    props.$revealed || props.$prefersReducedMotion
      ? props.theme.color.secondary
      : 'transparent'};
  transition: background-color
    ${(props) => (props.$prefersReducedMotion ? '0s' : '200ms')} ease-out;
  border-color: transparent;
`

const BodyBlock = styled(Container)<{
  $revealed: boolean
  $prefersReducedMotion?: boolean
}>`
  background-color: ${(props) =>
    props.$revealed || props.$prefersReducedMotion
      ? props.theme.color.secondary
      : 'transparent'};
  transition: background-color
      ${(props) => (props.$prefersReducedMotion ? '0s' : '200ms')} ease-out,
    border-color ${(props) => (props.$prefersReducedMotion ? '0s' : '200ms')} ease-out;
  border-color: transparent;
  /* Divider between title and body. Lives on the body's top edge so the body's
     own background can't paint over it (Container's -1px margin overlaps them). */
  border-top: 1px solid
    ${(props) =>
      props.$revealed || props.$prefersReducedMotion
        ? props.theme.color.neutral
        : 'transparent'};
  border-bottom: 1px solid
    ${(props) =>
      props.$revealed || props.$prefersReducedMotion
        ? props.theme.color.neutral
        : 'transparent'};
  margin-bottom: 0;
`

const AccentWrapper = styled.div<{
  $side: ThickSide
  $grown: boolean
  $prefersReducedMotion?: boolean
  $rightWidth?: string
  $rightWidthDesktop?: string
}>`
  ${(props) => {
    if (props.$side === 'none') return ''
    const { theme, $grown, $prefersReducedMotion, $rightWidth, $rightWidthDesktop } = props
    const duration = $prefersReducedMotion ? '0s' : '0.4s'
    const grown = $grown || $prefersReducedMotion
    const borderColor = grown ? theme.color.neutral : 'transparent'

    if (props.$side === 'top') {
      return `
        border-top: 1rem solid ${borderColor};
        transition: border-color ${duration} ease-out;
      `
    }

    if (props.$side === 'right') {
      const target = $rightWidth ?? '20rem'
      const targetDesktop = $rightWidthDesktop ?? target
      return `
        border-right: ${target} solid ${borderColor};
        transition: border-color ${duration} ease-out;

        @media ${device.desktopMinWidth} {
          border-right-width: ${targetDesktop};
        }
      `
    }

    return ''
  }}
`

interface AnimatedTitleSectionProps {
  title: string
  thickSide?: ThickSide
  rightWidth?: string
  rightWidthDesktop?: string
  children?: React.ReactNode
  className?: string
  canAnimate?: boolean
  forceComplete?: boolean
  ignoreInView?: boolean
  onTypingComplete?: () => void
  renderTitle?: (text: string, canType: boolean, onComplete: () => void) => React.ReactNode
  body?: React.ReactNode
}

const AnimatedTitleSection = ({
  title,
  thickSide = 'top',
  rightWidth,
  rightWidthDesktop,
  children,
  className,
  canAnimate = true,
  forceComplete = false,
  ignoreInView = false,
  onTypingComplete,
  renderTitle,
  body,
}: AnimatedTitleSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const prefersReducedMotion = usePrefersReducedMotion()
  const shouldRun = canAnimate && (isInView || forceComplete || ignoreInView)
  const { phase, isPhaseAtLeast } = useAnimationPhase(shouldRun)
  const [typingDone, setTypingDone] = useState(false)
  const showFinal = forceComplete || prefersReducedMotion
  const canType = showFinal || isPhaseAtLeast('revealBg')
  const isRevealed = showFinal || isPhaseAtLeast('revealBg')

  const handleTypingComplete = () => {
    setTypingDone(true)
    onTypingComplete?.()
  }

  const resolvedPhase = showFinal ? 'done' : phase

  return (
    <SectionWrapper ref={ref} className={className}>
      <BorderTraceBox phase={resolvedPhase}>
        <AccentWrapper
          $side={thickSide}
          $grown={showFinal || isPhaseAtLeast('accentGrow')}
          $prefersReducedMotion={prefersReducedMotion}
          $rightWidth={rightWidth}
          $rightWidthDesktop={rightWidthDesktop}
        >
          <TitleBlock
            $revealed={isRevealed}
            $hasBody={Boolean(body)}
            $prefersReducedMotion={prefersReducedMotion}
            $transparentBg
          >
            {renderTitle ? (
              renderTitle(title, canType, handleTypingComplete)
            ) : (
              <Title>
                <TypingText
                  text={title}
                  duration={450}
                  active={canType && !typingDone}
                  onComplete={handleTypingComplete}
                />
              </Title>
            )}
            {children}
          </TitleBlock>
        </AccentWrapper>
        {body && (
          <BodyBlock
            $revealed={isRevealed}
            $prefersReducedMotion={prefersReducedMotion}
            $transparentBg
          >
            {body}
          </BodyBlock>
        )}
      </BorderTraceBox>
    </SectionWrapper>
  )
}

export default AnimatedTitleSection
