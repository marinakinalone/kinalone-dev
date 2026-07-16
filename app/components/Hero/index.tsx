import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SECTIONS } from '../../constants/sections'
import interpolate from '../../helpers/interpolate'
import useAnimationPhase from '../../hooks/useAnimationPhase'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import useScroll from '../../hooks/useScroll'
import useSectionAnimation from '../../hooks/useSectionAnimation'
import { device } from '../../styles/breakpoints'
import Container from '../ui/Container'
import SmallText from '../ui/SmallText'
import Subtitle from '../ui/Subtitle'
import Text from '../ui/Text'
import TextLink from '../ui/TextLink'
import Title from '../ui/Title'
import BorderTraceBox from '../ui/animations/BorderTraceBox'
import { MiddleBorderTrace } from '../ui/animations/RevealBackground'
import TypingText from '../ui/animations/TypingText'
import { FadeInImage, RevealContent } from '../ui/animations/animationHelpers'

const STRINGS = {
  title: 'Marina Kinalone Simonnet',
  subtitle: 'Software Engineer | UX-informed developer',
  description1:
    'Driving {{bold}}frontend architecture decisions{{/bold}} while keeping {{bold}}users at the center{{/bold}}.',
  description2: 'Currently managing legacy-to-modern migration at {{bold}}Trustly{{/bold}}.',
  description3: 'Based in {{bold}}Lisbon, Portugal{{/bold}}.',
  copyright: 'p.s.: drawing is from ',
  copyrightLink: 'amazing artist Lu Lo',
}

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: ${(props) => props.theme.spacing.m};
`

const DescriptionContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.l};
`

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`

const ImageContainer = styled.div<{
  $grown: boolean
  $prefersReducedMotion?: boolean
}>`
  padding: 0;
  display: flex;
  background-color: ${(props) => props.theme.color.highlight};
  border-left: 1rem solid
    ${(props) =>
      props.$grown || props.$prefersReducedMotion ? props.theme.color.neutral : 'transparent'};
  transition: border-color ${(props) => (props.$prefersReducedMotion ? '0s' : '200ms')} ease-out;
`

const Portrait = styled(FadeInImage)`
  max-height: 70vh;
  max-width: 100%;
  object-fit: contain;
  margin-left: auto;
`

const TextContainer = styled(Container)<{
  $revealed: boolean
  $prefersReducedMotion?: boolean
}>`
  position: relative;
  padding: ${(props) => props.theme.spacing.s};
  background-color: ${(props) =>
    props.$revealed || props.$prefersReducedMotion ? props.theme.color.secondary : 'transparent'};
  transition: background-color ${(props) => (props.$prefersReducedMotion ? '0s' : '200ms')} ease-out;
  border-color: transparent;
  ${(props) => {
    const { spacing, fontSize } = props.theme

    return `
      @media ${device.mobileMaxWidth} {
        padding: ${spacing.xs} ${spacing.s};

        h2 {
          font-size: ${fontSize.mobile.l};
        }

        h3 {
          font-size: ${fontSize.mobile.m};
        }

        p {
          font-size: ${fontSize.mobile.s};
        }
      }
    `
  }}
`

interface HeroProps {
  onComplete?: () => void
}

const Hero = ({ onComplete }: HeroProps) => {
  const { updateSection } = useScroll()
  const ref = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { canAnimate, isSkipped, isComplete } = useSectionAnimation('intro')

  useEffect(() => {
    return updateSection(SECTIONS.INTRO, ref)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const shouldRun = canAnimate || isSkipped || isComplete
  const { phase, isPhaseAtLeast } = useAnimationPhase(shouldRun)
  const [typingStep, setTypingStep] = useState(0)
  const showFinal = isSkipped || prefersReducedMotion || isComplete
  const canType = showFinal || isPhaseAtLeast('revealBg')
  const resolvedPhase = showFinal ? 'done' : phase

  useEffect(() => {
    if (showFinal) {
      onComplete?.()
      return
    }
    if (typingStep >= 6) {
      onComplete?.()
    }
  }, [showFinal, typingStep, onComplete])

  return (
    <MainContainer id={SECTIONS.INTRO} ref={ref} $transparentBg $hideBorder>
      <BorderTraceBox phase={resolvedPhase}>
        <ImageContainer
          $grown={showFinal || isPhaseAtLeast('accentGrow')}
          $prefersReducedMotion={prefersReducedMotion}
        >
          <Portrait
            id="marinakinalone"
            src="./portrait_parlulo.png"
            alt="drawn portrait of Marina by artist Lu Lo"
            $active={showFinal || isPhaseAtLeast('phase1')}
            $prefersReducedMotion={prefersReducedMotion}
          />
        </ImageContainer>
        <TextContainer
          $revealed={showFinal || isPhaseAtLeast('revealBg')}
          $prefersReducedMotion={prefersReducedMotion}
          $transparentBg
        >
          <MiddleBorderTrace
            $drawn={showFinal || isPhaseAtLeast('phase1')}
            $prefersReducedMotion={prefersReducedMotion}
          />
          <RevealContent $visible={canType} $prefersReducedMotion={prefersReducedMotion}>
            <Title>
              <TypingText
                text={STRINGS.title}
                duration={200}
                active={canType && typingStep === 0}
                onComplete={() => setTypingStep(1)}
                wrap
              />
            </Title>
            <StyledSubtitle>
              <TypingText
                text={STRINGS.subtitle}
                duration={200}
                active={canType && typingStep === 1}
                onComplete={() => setTypingStep(2)}
                wrap
              />
            </StyledSubtitle>
            <DescriptionContainer>
              <Text>
                <TypingText
                  text={interpolate(STRINGS.description1)}
                  duration={200}
                  active={canType && typingStep === 2}
                  onComplete={() => setTypingStep(3)}
                  wrap
                />
              </Text>
              <Text>
                <TypingText
                  text={interpolate(STRINGS.description2)}
                  duration={200}
                  active={canType && typingStep === 3}
                  onComplete={() => setTypingStep(4)}
                  wrap
                />
              </Text>
              <Text>
                <TypingText
                  text={interpolate(STRINGS.description3)}
                  duration={200}
                  active={canType && typingStep === 4}
                  onComplete={() => setTypingStep(5)}
                  wrap
                />
              </Text>
            </DescriptionContainer>
            <SmallText>
              <TypingText
                text={STRINGS.copyright}
                duration={200}
                active={canType && typingStep === 5}
                onComplete={() => setTypingStep(6)}
              />
              {typingStep >= 6 ? (
                <TextLink href="https://www.instagram.com/lulu.xalo/">
                  {STRINGS.copyrightLink}
                </TextLink>
              ) : (
                <span aria-hidden="true" style={{ visibility: 'hidden' }}>
                  {STRINGS.copyrightLink}
                </span>
              )}
            </SmallText>
          </RevealContent>
        </TextContainer>
      </BorderTraceBox>
    </MainContainer>
  )
}

export default Hero
