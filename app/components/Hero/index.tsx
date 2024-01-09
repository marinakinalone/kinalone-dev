import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SECTIONS } from '../../constants/sections'
import interpolate from '../../helpers/interpolate'
import useScroll from '../../hooks/useScroll'
import Container from '../ui/Container'
import SmallText from '../ui/SmallText'
import Subtitle from '../ui/Subtitle'
import Text from '../ui/Text'
import TextLink from '../ui/TextLink'
import Title from '../ui/Title'
import RainbowText from '../ui/animations/RainbowText'

const STRINGS = {
  title: 'Marina Kinalone Simonnet',
  animatedSubtitle: 'joyful',
  subtitle: ' frontend developer',
  description:
    '{{bold}}Enthusiastic developer{{/bold}} with a {{bold}}focus on user experience{{/bold}}. Eager learner and researcher, I grow fast in the projects I’m involved with.',
  copyright: 'p.s.: drawing is from ',
  copyrightLink: 'amazing artist Lu Lo',
}

const MainContainer = styled(Container)`
  padding: 0;
  display: flex;
  flex-direction: column;
`
const ImageContainer = styled(Container)`
  padding: 0;
  display: flex;
  ${(props) => {
    const { theme } = props
    return `
      background-color: ${theme.color.highlight};
      border-left: ${theme.border.highlight};
    `
  }};
`

const Portrait = styled.img`
  max-height: 70vh;
  max-width: 100%;
  object-fit: contain;
  margin-left: auto;
`
const TextContainer = styled(Container)``

//TODO highlight words in description
const Hero = () => {
  const { updateSection } = useScroll()
  const ref = useRef(null)

  useEffect(() => {
    updateSection(SECTIONS.INTRO, ref)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainContainer id={SECTIONS.INTRO} ref={ref}>
      <ImageContainer>
        <Portrait
          id="marinakinalone"
          src="./portrait_parlulo.png"
          alt="drawn portrait of Marina by artist Lu Lo"
        />
      </ImageContainer>
      <TextContainer>
        <Title>{STRINGS.title}</Title>
        <Subtitle>
          <RainbowText word={STRINGS.animatedSubtitle} />
          {STRINGS.subtitle}
        </Subtitle>
        <Text>{interpolate(STRINGS.description)}</Text>
        <SmallText>
          {STRINGS.copyright}
          <TextLink href="https://www.instagram.com/lulu.xalo/">{STRINGS.copyrightLink}</TextLink>
        </SmallText>
      </TextContainer>
    </MainContainer>
  )
}

export default Hero
