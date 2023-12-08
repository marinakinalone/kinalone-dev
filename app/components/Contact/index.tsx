import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/breakpoints'
import Container from '../ui/Container'
import Title from '../ui/Title'

const STRINGS = {
  title: 'contact',
}

const MainContainer = styled(Container)`
  padding: 0;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`
const TitleContainer = styled(Container)`
  ${(props) => {
    const { theme } = props
    return `
    border-right: 10rem solid ${theme.color.neutral};
    @media ${device.desktopMinWidth} {
      border-right-width: 30rem;
    }
    `
  }}
`

const Contact = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>{STRINGS.title}</Title>
      </TitleContainer>
    </MainContainer>
  )
}

export default Contact
