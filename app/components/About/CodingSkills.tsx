import React from 'react'
import styled from 'styled-components'
import Container from '../ui/Container'
import Subtitle from '../ui/Subtitle'
import Text from '../ui/Text'
import ArrowLink from '../ui/animations/ArrowLink'

const SubContainer = styled(Container)`
  border-left: ${(props) => props.theme.border.highlight};
  border-top: none;
`
const LinkContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing.m};
  margin-bottom: ${(props) => props.theme.spacing.s};
`

const STRINGS = {
  title: 'technical skills',
  technicalSkills:
    'coding skills: JavaScript, TypeScript, React, Node.js, NextJS,  CSS (+ SASS), MongoDB, PostgreSQL',
  generalSkills:
    'general development tools: UX design, design thinking, CI/CD, Test Driven Development, Figma, Adobe XD',
  cta: 'see my resume',
}

//TODO: add resume link
const CodingSkills = () => {
  return (
    <SubContainer>
      <Subtitle>{STRINGS.title}</Subtitle>
      <Text>{STRINGS.technicalSkills}</Text>
      <Text>{STRINGS.generalSkills}</Text>
      <LinkContainer>
        <ArrowLink href={'resume'} label={STRINGS.cta} />
      </LinkContainer>
    </SubContainer>
  )
}

export default CodingSkills
