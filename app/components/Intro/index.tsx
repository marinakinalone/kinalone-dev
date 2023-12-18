import React from 'react'
import styled from 'styled-components'
import Hero from '../Hero'
import Navigation from '../Navigation'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`

const HeroContainer = styled.div`
  flex: 7;
  max-width: 70%;
`

const NavigationContainer = styled.div`
  flex: 3;
`

const Intro = () => {
  return (
    <Container>
      <HeroContainer>
        <Hero />
      </HeroContainer>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Container>
  )
}

export default Intro
