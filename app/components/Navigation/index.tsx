import React from 'react'
import styled from 'styled-components'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { device } from '../../styles/breakpoints'
import StaggeredFadeIn from '../ui/animations/StaggeredFadeIn'
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

const STAGGER_DELAY = 300

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
    }
    `
  }}
`

const SwitchContainer = styled.li`
  text-align: center;
  min-height: 70px;
  display: flex;

  @media ${device.tabletMinWidth} {
    min-height: 80px;
  }

  @media ${device.desktopMinWidth} {
    min-height: 100px;
  }
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

interface NavigationProps {
  active?: boolean
  skipped?: boolean
}

const Navigation = ({ active = false, skipped = false }: NavigationProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const showItems = active || skipped || prefersReducedMotion

  return (
    <NavigationContainer aria-label="Section navigation">
      <NavigationList>
        {navigationData.map((item, index) => {
          const { id } = item

          return (
            <NavigationItem key={id}>
              <StaggeredFadeIn
                $active={showItems}
                $delay={index * STAGGER_DELAY}
                $variant="slideDown"
                $prefersReducedMotion={prefersReducedMotion || skipped}
              >
                <Button className="button" href={`#${id}`} aria-label={`go to '${id}' section`}>
                  <Icon className="icon" src={`./icons/navigation/${id}.svg`} alt="" aria-hidden="true" />
                  {item.id}
                </Button>
              </StaggeredFadeIn>
            </NavigationItem>
          )
        })}
        <SwitchContainer>
          <StaggeredFadeIn
            $active={showItems}
            $delay={navigationData.length * STAGGER_DELAY}
            $variant="slideDown"
            $prefersReducedMotion={prefersReducedMotion || skipped}
          >
            <Lightswitch />
          </StaggeredFadeIn>
        </SwitchContainer>
      </NavigationList>
    </NavigationContainer>
  )
}

export default Navigation
