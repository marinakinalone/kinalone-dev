import React from 'react'
import styled from 'styled-components'
import Container from '../ui/Container'
import Title from '../ui/Title'
import CodingSkills from './CodingSkills'
import Subtitle from '../ui/Subtitle'

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
  return (
    <MainContainer id="about">
      <TitleContainer>
        <Title>{STRINGS.title}</Title>
      </TitleContainer>
      <InnerContainer>
        <Portrait
          src="./portrait_marina_stormy.png"
          alt="portrait of Marina Kinalone Simonnet with her cat, Stormy"
        />
        <Subtitle>frontend developer with a background in research and education</Subtitle>

        <p>Hi! I&apos;m Marina Kinalone. add about here!</p>
      </InnerContainer>
      <CodingSkills />
    </MainContainer>
  )
}

export default About
