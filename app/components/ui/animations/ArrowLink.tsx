import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

const TEXT_ARROW_SPACE = 16
const SHAFT_WIDTH = 1
const NEWSHAFT_WIDTH = 64
const SHAFT_THICKNESS = 1
const ARROW_HEAD_WIDTH = 8
const ARROW_HEAD_THICKNESS = SHAFT_THICKNESS

const Container = styled.div``
const ArrowShaft = styled.span``
const ArrowMain = styled.span``
const ArrowText = styled.span``

const AnimatedArrow = styled.a<{ theme: DefaultTheme }>`
  ${(props) => {
    const { color } = props.theme

    return `
      text-decoration: none;
      display: inline-block;
      color: ${color.neutral};
      position: relative;
      transition: all 0.2s;
    
      &:hover,
      &:focus,
      &:active {
        > .arrowleft {
          > .shaft {
            background-color: ${color.hover};
            width: ${NEWSHAFT_WIDTH}px;
            transition-delay: 0.1s;

            &:before,
            &:after {
              width: ${ARROW_HEAD_WIDTH}px;
              transition-delay: 0.1s;
              background-color: ${color.hover};

            }
    
            &:before {
              transform: rotate(40deg);
            }
    
            &:after {
              transform: rotate(-40deg);
            }
          }
        }
        &:focus,
        &:active {
          color: ${color.focus};
          outline: none;
          > .arrowleft {
            > .shaft {
              background-color: ${color.focus};
    
              &:before,
              &:after {
                background-color: ${color.focus};
              }
            }
          }
        }
    
        > .main {
          transform: translateX(${NEWSHAFT_WIDTH + TEXT_ARROW_SPACE}px);
    
          > .arrowright {
            > .shaft {
              width: 0;
              transform: translateX(200%);
              transition-delay: 0;
    
              &:before,
              &:after {
                width: 0;
                transition-delay: 0;
                transition: all 0.1s;
              }
    
              &:before {
                transform: rotate(0);
              }
    
              &:after {
                transform: rotate(0);
              }
            }
          }
        }
      }
    
      > .main {
        display: flex;
        align-items: center;
        transition: all 0.2s;
        > .text {
          margin: 0 ${TEXT_ARROW_SPACE}px 0 0;
          line-height: 1px;
        }
    
        > .arrowleft {
          position: relative;
        }
        > .arrowright {
          position: relative;
        }
      }
    
  `
  }}
`

const Arrow = styled.span<{ theme: DefaultTheme }>`
  ${(props) => {
    const { color } = props.theme

    return `
      width: ${SHAFT_WIDTH}px;
      transition: all 0.2s;
    
      &.arrowleft {
        position: absolute;
        top: 60%;
        left: 0;
    
        > .shaft {
          width: 0;
          background-color: ${color.neutral};
    
          &:before,
          &:after {
            width: 0;
          }
    
          &:before {
            transform: rotate(0);
          }
    
          &:after {
            transform: rotate(0);
          }
        }
      }
    
      &.arrowright {
        top: 1px;
    
        > .shaft {
          width: ${SHAFT_WIDTH}px;
          transition-delay: 0.2s;
    
          &:before,
          &:after {
            width: ${ARROW_HEAD_WIDTH}px;
            transition-delay: 0.3s;
            transition: all 0.5s;
          }
    
          &:before {
            transform: rotate(40deg);
          }
    
          &:after {
            transform: rotate(-40deg);
          }
        }
      }
    
      > .shaft {
        background-color: ${color.neutral};
        display: block;
        height: ${SHAFT_THICKNESS}px;
        position: relative;
        transition: all 0.2s;
        transition-delay: 0;
        will-change: transform;
    
        &:before,
        &:after {
          background-color: ${color.neutral};
          content: '';
          display: block;
          height: ${ARROW_HEAD_THICKNESS}px;
          position: absolute;
          top: 0;
          right: 0;
          transition: all 0.2s;
          transition-delay: 0;
        }
    
        &:before {
          transform-origin: top right;
        }
    
        &:after {
          transform-origin: bottom right;
        }
      }
    
    
    `
  }}
`

interface IArrowLink {
  href: string
  label: string
}

const ArrowLink = ({ href, label }: IArrowLink) => {
  return (
    <Container>
      <AnimatedArrow
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="animated-arrow"
      >
        <Arrow className="arrowleft">
          <ArrowShaft className="shaft"></ArrowShaft>
        </Arrow>
        <ArrowMain className="main">
          <ArrowText className="text">{label}</ArrowText>
          <Arrow className="arrowright">
            <ArrowShaft className="shaft"></ArrowShaft>
          </Arrow>
        </ArrowMain>
      </AnimatedArrow>
    </Container>
  )
}

export default ArrowLink
