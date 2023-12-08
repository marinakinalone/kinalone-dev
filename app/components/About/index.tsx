import React from 'react'
import styled from 'styled-components'
import Container from '../ui/Container'
import Title from '../ui/Title'

const STRINGS = {
  title: 'about',
}

const MainContainer = styled(Container)`
  padding: 0;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`

const TitleContainer = styled(Container)`
  ${(props) => {
    const { theme } = props
    return `
    border-top: ${theme.border.highlight};
    `
  }}
`

const About = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>{STRINGS.title}</Title>
      </TitleContainer>
    </MainContainer>
  )
}

export default About
