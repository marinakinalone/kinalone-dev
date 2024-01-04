import React from 'react'
import styled, { keyframes } from 'styled-components'

const changeColor = keyframes`
  0% {
    color: #F0D19C;
  }
  20% {
    color: #F0968D;
  }
  40% {
    color: #B968EF;
  }
  60% {
    color: #69ABF0;
  }
  60% {
    color: #78F0AD;
  }
  100% {
    color: #F0D19C;
  }
`

const AnimatedLetter = styled.span`
  display: inline-block;
  animation: ${changeColor} 1s infinite;
`

const RainbowText = ({ word }: { word: string }) => {
  return (
    <span>
      {word.split('').map((letter, index) => (
        <AnimatedLetter key={index} style={{ animationDelay: `${index * 0.2}s` }}>
          {letter}
        </AnimatedLetter>
      ))}
    </span>
  )
}

export default RainbowText
