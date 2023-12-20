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
  ${(props) => {
    const { color, filter, spacing } = props.theme

    return `
    text-align: center;
    min-height: 100px;
    margin-bottom: ${spacing.xl};
    display: flex;
    justify-content: center;
    &:hover {
      .button {
        color: ${color.hover};
        border-color: ${color.hover};
      }
      .icon {
        filter: ${filter.hover};
      }
    }
    &:focus,
    &:active {
      .button {
        border-color: ${color.focus};
        color: ${color.focus};
      }
      .icon {
        filter: ${filter.focus};
      }
    `
  }}
`

const SwitchContainer = styled.li`
  display: flex;
  justify-content: center;
`

const Button = styled.a`
  ${(props) => {
    const { color } = props.theme

    return `
    width: 80px;
    height: 80px;
    text-decoration: none;
    position: absolute;
    margin: 0 auto;
    border-radius: 50%;
    background-color: ${color.neutral};
    border: 3px solid ${color.neutral};
    `
  }}
`

const Icon = styled.img`
  display: inline;
  width: 50px;
  margin-top: 15px;
  margin-bottom: 18px;
  filter: ${({ theme }) => theme.filter.primary};
`

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        {navigationData.map((item) => {
          const { id } = item

          return (
            <NavigationItem key={id}>
              <Button className="button" href={`#${id}`}>
                <Icon
                  className="icon"
                  src={`./icons/navigation/${id}.svg`}
                  alt={`go to '${id}' section`}
                />
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
