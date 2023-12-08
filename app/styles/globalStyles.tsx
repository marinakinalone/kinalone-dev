import { createGlobalStyle } from 'styled-components'
import { device } from './breakpoints'
import fontsCss from './fonts.module.css'

const styled = { createGlobalStyle }

export const GlobalStyles = styled.createGlobalStyle`
  ${fontsCss}

  html {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.neutral};
    transition: all 0.5s linear;
  }

  a {
    color: ${({ theme }) => theme.color.neutral};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.regular.s};
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
    @media ${device.desktopMinWidth} {
      font-size: ${(props) => props.theme.fontSize.desktop.xs};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.regular.l};
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 300;
    @media ${device.desktopMinWidth} {
      font-size: ${(props) => props.theme.fontSize.desktop.l};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.regular.m};
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 600;
    @media ${device.desktopMinWidth} {
      font-size: ${(props) => props.theme.fontSize.desktop.m};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.regular.s};
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
    @media ${device.desktopMinWidth} {
      font-size: ${(props) => props.theme.fontSize.desktop.s};
    }
  }
`
