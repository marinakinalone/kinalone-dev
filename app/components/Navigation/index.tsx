import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/breakpoints'
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
  padding-left: ${(props) => props.theme.spacing.s};

  @media ${device.tabletMinWidth} {
    padding-left: ${(props) => props.theme.spacing.m};
  }

  @media ${device.desktopMinWidth} {
    padding-left: ${(props) => props.theme.spacing.l};
  }
`

const NavigationItem = styled.li`
  ${(props) => {
    const { color, filter, spacing } = props.theme

    return `
    text-align: center;
    min-height: 70px;
    margin-bottom: ${spacing.l};
    display: flex;

    @media ${device.tabletMinWidth} {
      min-height: 80px;
    }

    @media ${device.desktopMinWidth} {
      min-height: 100px;
      margin-bottom: ${spacing.xl};
    }
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
    const { color, fontSize } = props.theme

    return `
    width: 56px;
    height: 56px;
    text-decoration: none;
    position: absolute;
    margin: 0 auto;
    border-radius: 50%;
    background-color: ${color.neutral};
    border: 2px solid ${color.neutral};
        font-size: ${fontSize.regular.xs};

    
    @media ${device.tabletMinWidth} {
      width: 64px;
      height: 64px;
      }
      
      @media ${device.desktopMinWidth} {
        font-size: ${fontSize.desktop.s};
      width: 80px;
      height: 80px;
    }
    `
  }}
`

const Icon = styled.img`
  display: inline;
  width: 28px;
  margin-top: calc(28px / 2.2);
  margin-bottom: calc(28px / 1.5);
  filter: ${({ theme }) => theme.filter.primary};

  @media ${device.tabletMinWidth} {
    width: 32px;
    margin-top: calc(32px / 2.2);
    margin-bottom: calc(32px / 1.5);
  }

  @media ${device.desktopMinWidth} {
    width: 40px;
    margin-top: calc(40px / 2.2);
    margin-bottom: calc(40px / 1.5);
  }
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
