import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SECTIONS } from '../../constants/sections'
import useScroll from '../../hooks/useScroll'
import Container from '../ui/Container'
import Subtitle from '../ui/Subtitle'
import Title from '../ui/Title'
import CodingSkills from './CodingSkills'

const STRINGS = {
  title: 'about',
}

const MainContainer = styled(Container)`
  padding: 0;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`

const TitleContainer = styled(Container)`
  border-top: ${(props) => props.theme.border.highlight};
`

const InnerContainer = styled(Container)`
  padding: ${(props) => props.theme.spacing.m};
`

const Portrait = styled.img`
  ${(props) => {
    const { spacing, border } = props.theme
    return `
      margin: ${spacing.xs};
      border: ${border.regular};
      width: 300px;
     `
  }}
`

const About = () => {
  const { updateSection } = useScroll()
  const ref = useRef(null)

  useEffect(() => {
    updateSection(SECTIONS.ABOUT, ref)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainContainer id={SECTIONS.ABOUT} ref={ref}>
      <TitleContainer>
        <Title>{STRINGS.title}</Title>
      </TitleContainer>
      <InnerContainer>
        <Portrait
          src="./portrait_marina_stormy.png"
          alt="portrait of Marina Kinalone Simonnet with her cat, Stormy"
        />
        <Subtitle>
          Hi, I&apos;m Marina Kinalone, frontend developer with a background in research and
          education.
        </Subtitle>

        <p> add about here!</p>
      </InnerContainer>
      <CodingSkills />
    </MainContainer>
  )
}

export default About
