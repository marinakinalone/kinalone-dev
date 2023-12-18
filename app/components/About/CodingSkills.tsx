import React from 'react'
import styled from 'styled-components'
import Subtitle from '../ui/Subtitle'
import Container from '../ui/Container'

// const Container = styled.div`
//   padding: 0;
//   margin-bottom: ${(props) => props.theme.spacing.xl};
// `

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
