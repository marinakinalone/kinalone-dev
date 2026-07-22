import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useSectionAnimation from '../../hooks/useSectionAnimation'
import { useAnimationSequence } from '../../providers/AnimationSequenceProvider'
import { device } from '../../styles/breakpoints'
import Hero from '../Hero'
import Navigation from '../Navigation'
import SectionSpinner from '../ui/animations/SectionSpinner'

const NAV_STAGGER = 100
const NAV_ITEM_COUNT = 4
const NAV_ANIM_DURATION = 200

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`

const HeroContainer = styled.div`
  flex: 8;
  max-width: 78%;

  @media ${device.tabletMinWidth} {
    flex: 7;
    max-width: 70%;
  }
`

const NavigationContainer = styled.div`
  flex: 2;

  @media ${device.tabletMinWidth} {
    flex: 3;
  }
`

const Intro = () => {
  const { isSkipped, markComplete } = useSectionAnimation('intro')
  const { isIntroComplete } = useAnimationSequence()
  const [heroComplete, setHeroComplete] = useState(false)
  const navRevealed = heroComplete || isSkipped

  useEffect(() => {
    if (isSkipped) {
      markComplete()
    }
  }, [isSkipped, markComplete])

  useEffect(() => {
    if (!navRevealed || isSkipped) return

    const timer = setTimeout(
      () => markComplete(),
      NAV_ITEM_COUNT * NAV_STAGGER + NAV_ANIM_DURATION,
    )
    return () => clearTimeout(timer)
  }, [navRevealed, isSkipped, markComplete])

  return (
    <>
    <Container>
      <HeroContainer>
        <Hero onComplete={() => setHeroComplete(true)} />
      </HeroContainer>
      <NavigationContainer>
        <Navigation active={navRevealed} skipped={isSkipped} />
      </NavigationContainer>
    </Container>
    {!isIntroComplete && !isSkipped && <SectionSpinner />}
    </>
  )
}

export default Intro
