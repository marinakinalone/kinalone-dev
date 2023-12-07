import { createGlobalStyle } from 'styled-components'
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
    font-size: ${({ theme }) => theme.fontSize.regular.l};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
  }
`
