import React from 'react'
import styled, { css } from 'styled-components'

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Shaft = styled.span`
  background-color: ${(props) => props.theme.color.neutral};
  display: block;
  height: ${(props) => props.theme.arrow.shaftThickness}px;
  position: relative;
  transition: all 0.2s;
  transition-delay: 0;
  will-change: transform;

  &:before,
  &:after {
    background-color: ${(props) => props.theme.color.secondary};
    content: '';
    display: block;
    height: ${(props) => props.theme.arrow.headThickness}px;
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
`

const Arrow = styled.span`
  width: ${(props) => props.theme.arrow.width}px;
  transition: all 0.2s;

  &.-left {
    position: absolute;
    top: 60%;
    left: 0;

    ${Shaft} {
      width: 0;
      background-color: ${(props) => props.theme.color.neutral};

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

  &.-right {
    top: 1px;

    ${Shaft} {
      width: ${(props) => props.theme.arrow.newShaftWidth}px;
      transition-delay: 0.2s;

      &:before,
      &:after {
        width: ${(props) => props.theme.arrow.arrowHeadWidth}px;
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
`

const AnimatedArrow = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.color.neutral};
  position: relative;
  transition: all 0.2s;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    ${Arrow}.-left {
      ${Shaft} {
        width: ${(props) => props.theme.arrow.newShaftWidth}px;
        transition-delay: 0.1s;
        &:before,
        &:after {
          width: ${(props) => props.theme.arrow.headWidth}px;
          transition-delay: 0.1s;
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
      color: ${(props) => props.theme.color.neutral};
      outline: none;
      ${Arrow}.-left {
        ${Shaft} {
          background-color: ${(props) => props.theme.color.neutral};

          &:before,
          &:after {
            background-color: ${(props) => props.theme.color.neutral};
          }
        }
      }
    }

    ${Container} > .main {
      transform: translateX(
        ${(props) => props.theme.arrow.shaftWidth + props.theme.arrow.textArrowSpace}px
      );
      transform: translateX(
        ${(props) => props.theme.arrow.newShaftWidth + props.theme.arrow.textArrowSpace}px
      );

      ${Arrow}.-right > ${Shaft} {
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

  > .main {
    display: flex;
    align-items: center;
    transition: all 0.2s;

    > .text {
      margin: 0 ${(props) => props.theme.arrow.textArrowSpace}px 0 0;
      line-height: 1;
    }

    ${Arrow} {
      position: relative;
    }
  }
`

// Example Component
const MyComponent = ({ message, link }) => {
  return (
    <div>
      <AnimatedArrow href="https://github.com/marinakinalone?tab=repositories">
        <Arrow className="the-arrow -left">
          <Shaft className="shaft"></Shaft>
        </Arrow>
        <div className="main">
          <span className="text">{message}</span>
          <Arrow className="the-arrow -right">
            <Shaft className="shaft"></Shaft>
          </Arrow>
        </div>
      </AnimatedArrow>
    </div>
  )
}

export default MyComponent
