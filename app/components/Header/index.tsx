import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  ${(props) => {
    const { border, spacing } = props.theme
    return `
      border-bottom: ${border.regular};
      padding: 0 ${spacing.ws} ;
      margin-bottom: ${spacing.l}; 
      margin-top: ${spacing.s};
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
