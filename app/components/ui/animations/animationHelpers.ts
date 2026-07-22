import styled from 'styled-components'
import { IMAGE_FADE_DURATION } from './borderTrace'

export const FadeInImage = styled.img<{
  $active: boolean
  $prefersReducedMotion?: boolean
}>`
  opacity: ${(props) => (props.$active || props.$prefersReducedMotion ? 1 : 0)};
  transition: opacity
    ${(props) => (props.$prefersReducedMotion ? '0s' : IMAGE_FADE_DURATION)} ease-in;
`

export const RevealContent = styled.div<{
  $visible: boolean
  $prefersReducedMotion?: boolean
}>`
  opacity: ${(props) => (props.$visible || props.$prefersReducedMotion ? 1 : 0)};
  transition: opacity
    ${(props) => (props.$prefersReducedMotion ? '0s' : '0.3s')} ease-out;
`
