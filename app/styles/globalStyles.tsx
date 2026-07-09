import { createGlobalStyle } from 'styled-components'
import { device } from './breakpoints'

const styled = { createGlobalStyle }

// We use styled with GlobalStyles so ESLint can lint the CSS
export const GlobalStyles = styled.createGlobalStyle`
  ${(props) => {
    const { color, fontFamily, fontSize } = props.theme
    return `
    html {
      box-sizing: border-box;
    }
  
    *::before,
    *::after {
      box-sizing: inherit;
    }
  
    body {
      background: ${color.background};
      color: ${color.neutral};
      font-family: ${fontFamily};
      transition: all 0.5s linear;
    }
  
    main {
      @media ${device.mobileMaxWidth} {
        margin: 0 0.25rem;
      }
      @media ${device.tabletMinWidth} {
        margin: 0 7%;
      }
      @media ${device.desktopMinWidth} {
        margin: 0 15%;
      }
      @media ${device.largeDesktopMinWidth} {
        margin: 0 30%;
      }
    }

    a {
      font-family: ${fontFamily};
      font-size: ${fontSize.regular.s};
      color: ${color.neutral};
      &:hover {
        color: ${color.hover};
      }
      
      &:focus {
        color: ${color.focus};
        outline: 2px dashed ${color.focus};
        outline-offset: 0.2rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  
    h1 {
      font-size: ${fontSize.regular.s};
      font-family: ${fontFamily};
      font-weight: 400;
      @media ${device.desktopMinWidth} {
        font-size: ${fontSize.desktop.xs};
      }
    }
  
    h2 {
      font-size: ${fontSize.regular.l};
      font-family: ${fontFamily};
      font-weight: 300;
      @media ${device.desktopMinWidth} {
        font-size: ${fontSize.desktop.l};
      }
    }
  
    h3 {
      font-size: ${fontSize.regular.m};
      font-family: ${fontFamily};
      font-weight: 600;
      @media ${device.desktopMinWidth} {
        font-size: ${fontSize.desktop.m};
      }
    }
  
    p {
      font-size: ${fontSize.regular.s};
      font-family: ${fontFamily};
      font-weight: 400;
      @media ${device.desktopMinWidth} {
        font-size: ${fontSize.desktop.s};
      }
    }
      `
  }}
`
