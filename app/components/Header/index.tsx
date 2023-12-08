import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  ${(props) => {
    const { theme } = props
    return `
      border-bottom: ${theme.border.regular};
      padding: 0 0.5rem;
      margin-bottom: ${theme.spacing.l}; 
      margin-top: ${theme.spacing.s};
    `
  }}
`

const HeaderTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.regular.m};
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>kinalone.dev</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
