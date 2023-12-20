import React from 'react'
import styled from 'styled-components'
import Container from '../ui/Container'
import Subtitle from '../ui/Subtitle'

const SubContainer = styled(Container)`
  border-left: ${(props) => props.theme.border.highlight};
  border-top: none;
`

const CodingSkills = () => {
  return (
    <SubContainer>
      <Subtitle>coding skills</Subtitle>
      <p>add coding skills here!</p>
    </SubContainer>
  )
}

export default CodingSkills
