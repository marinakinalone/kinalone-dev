import React from 'react'
import styled from 'styled-components'
import { useDarkMode } from '../../providers/DarkModeProvider'
import { device } from '../../styles/breakpoints'

const Wrapper = styled.label`
  position: absolute;
  display: block;
  width: 56px;
  height: 32px;
  margin: 0 auto;

  @media ${device.tabletMinWidth} {
    width: 60px;
    height: 34px;
  }

  @media ${device.desktopMinWidth} {
    width: 70px;
    height: 38px;
    transform: translateX(5px);
  }
`

const Switch = styled.input`
  ${(props) => {
    const { color } = props.theme

    return `
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .slider {
        background-color: ${color.background};
        box-shadow: inset 0 0 0 1px ${color.neutral};
      }
      &:checked + .slider::before {
        transform: translateX(20px);
        background-color: ${color.neutral};
      }
      &:focus-visible + .slider {
        outline: 2px dashed ${color.focus};
        outline-offset: 2px;
      }
      @media ${device.tabletMinWidth} {
        &:checked + .slider::before {
          transform: translateX(24px);
        }
      }
      @media ${device.desktopMinWidth} {
        &:checked + .slider::before {
          transform: translateX(30px);
        }
      }
    `
  }}
`

const Slider = styled.span`
  ${(props) => {
    const { color } = props.theme

    return `
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${color.secondary};
    box-shadow: inset 0 0 0 1px ${color.neutral};
    border-radius: 36px;
    transition: 0.4s;
    &:before {
      position: absolute;
      content: '';
      height: 24px;
      width: 24px;
      left: 7px;
      bottom: 4px;
      background-color: ${color.neutral};
      border-radius: 50%;
      transition: 0.4s;
    }
    @media ${device.tabletMinWidth} {
      &:before {
      left: 5px;
        height: 26px;
        width: 26px;
      }
    }
         @media ${device.desktopMinWidth} {
      &:before {
      left: 5px;
        height: 30px;
        width: 30px;
      }
    }
    `
  }}
`

const SwitchIcon = styled.img`
  position: absolute;
  max-height: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  @media ${device.tabletMinWidth} {
    max-height: 24px;
  }
`

const MoonIcon = styled(SwitchIcon)`
  right: 6px;
  left: auto;

  @media ${device.tabletMinWidth} {
    right: 6px;
  }

  @media ${device.desktopMinWidth} {
    right: 8px;
  }
`

const SunIcon = styled(SwitchIcon)`
  left: 7px;

  @media ${device.tabletMinWidth} {
    left: 7px;
  }

  @media ${device.desktopMinWidth} {
    left: 10px;
  }
`

const LIGHTSWITCH = 'lightswitch'

const Lightswitch = () => {
  const { value: isDark, toggle } = useDarkMode()

  return (
    <Wrapper htmlFor={LIGHTSWITCH}>
      <Switch
        type="checkbox"
        id={LIGHTSWITCH}
        name={LIGHTSWITCH}
        onChange={toggle}
        checked={isDark}
        aria-label="Toggle dark mode"
      />
      <Slider className="slider" />
      {isDark ? (
        <SunIcon alt="" src={'./icons/sun.svg'} />
      ) : (
        <MoonIcon alt="" src={'./icons/moon.svg'} />
      )}
    </Wrapper>
  )
}

export default Lightswitch
