import React from 'react'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'

const Wrapper = styled.label`
  position: absolute;
  width: 70px;
  height: 35px;
  margin-top: ${(props) => props.theme.spacing.xs};
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
        transform: translateX(34px);
        background-color: ${color.neutral};
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
    transition: 0.4s;
    &:before {
      position: absolute;
      content: '';
      height: 27px;
      width: 27px;
      left: 4px;
      bottom: 4px;
      background-color: ${color.neutral};
      transition: 0.4s;
    `
  }}
  }
`

const SwitchIcon = styled.img`
  position: absolute;
  max-height: 30px;
  bottom: 3px;
`

const MoonIcon = styled(SwitchIcon)`
  left: 35px;
`
const SunIcon = styled(SwitchIcon)`
  display: inline;
  left: 4px;
`

const LIGHTSWITCH = 'lightswitch'

const Lightswitch = () => {
  const darkmode = useDarkMode()
  const theme = darkmode.value ? 'dark' : 'light'

  return (
    <Wrapper htmlFor={LIGHTSWITCH}>
      <Switch
        type="checkbox"
        id={LIGHTSWITCH}
        name={LIGHTSWITCH}
        onClick={darkmode.toggle}
        checked={darkmode.value}
      />
      <Slider className="slider" />
      {theme === 'light' ? (
        <MoonIcon alt="" src={'./icons/moon.svg'} />
      ) : (
        <SunIcon alt="" src={'./icons/sun.svg'} />
      )}
    </Wrapper>
  )
}

export default Lightswitch
