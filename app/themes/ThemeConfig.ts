import { createGlobalStyle } from 'styled-components'

const defaultTheme = {
  color: {
    hightlight: '#c8dbda',
    hover: '#287773',
    focus: '#da2f8d',
  },
}

export const lightTheme = {
  ...defaultTheme,
  color: {
    background: '#ffe8e2',
    neutral: '#303030',
  },
}

export const darkTheme = {
  ...defaultTheme,
  color: {
    background: '#11001f',
    neutral: '#f5f5f5',
  },
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.neutral};
        font-family: 'Fira Code', monospace;
        transition: all 0.50s linear;
    }
`
