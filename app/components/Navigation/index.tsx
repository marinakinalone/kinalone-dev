import React from 'react'
import styled from 'styled-components'
import Lightswitch from './Lightswitch'

const navigationData = [
  {
    id: 'projects',
  },
  {
    id: 'about',
  },
  {
    id: 'contact',
  },
]

const NavigationContainer = styled.nav``

const NavigationList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

const NavigationItem = styled.li`
  text-align: center;
  min-height: 100px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: center;
`

const SwitchContainer = styled.li`
  display: flex;
  justify-content: center;
`

const Button = styled.a`
  width: 80px;
  height: 80px;
  text-decoration: none;
  position: absolute;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.neutral};
  border: 3px solid ${({ theme }) => theme.color.neutral};
`

const Icon = styled.img`
  display: inline;
  width: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
`

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        {navigationData.map((item) => {
          const { id } = item

          return (
            <NavigationItem key={id}>
              <Button href={`#${id}`}>
                <Icon src={`./icons/navigation/${id}.svg`} alt={`go to '${id}' section`} />
                {item.id}
              </Button>
            </NavigationItem>
          )
        })}
        <SwitchContainer>
          <Lightswitch />
        </SwitchContainer>
      </NavigationList>
    </NavigationContainer>
  )
}

export default Navigation
