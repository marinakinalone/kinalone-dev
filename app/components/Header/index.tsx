import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  border-bottom: ${(props) => props.theme.border.regular};
  padding: 0 0.5rem;
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
