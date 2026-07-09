import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SECTIONS } from '../../constants/sections'
import interpolate from '../../helpers/interpolate'
import useScroll from '../../hooks/useScroll'
import { device } from '../../styles/breakpoints'
import Container from '../ui/Container'
import SmallText from '../ui/SmallText'
import Subtitle from '../ui/Subtitle'
import Text from '../ui/Text'
import TextLink from '../ui/TextLink'
import Title from '../ui/Title'

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
const TextContainer = styled(Container)`
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
        <StyledSubtitle>
          {STRINGS.subtitle}
        </StyledSubtitle>
        <DescriptionContainer>

        <Text>{interpolate(STRINGS.description1)}</Text>
        <Text>{interpolate(STRINGS.description2)}</Text>
        <Text>{interpolate(STRINGS.description3)}</Text>
        </DescriptionContainer>
        <SmallText>
          {STRINGS.copyright}
          <TextLink href="https://www.instagram.com/lulu.xalo/">{STRINGS.copyrightLink}</TextLink>
        </SmallText>
      </TextContainer>
    </MainContainer>
  )
}

export default Hero
