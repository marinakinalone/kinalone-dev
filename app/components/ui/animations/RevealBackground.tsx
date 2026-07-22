import styled from 'styled-components'

export const SingleBorderTrace = styled.span<{
  $drawn: boolean
  $duration: string
  $side: 'top' | 'bottom'
  $prefersReducedMotion?: boolean
}>`
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: ${(props) => props.theme.color.neutral};
  transform-origin: left center;
  transform: scaleX(${(props) => (props.$drawn || props.$prefersReducedMotion ? 1 : 0)});
  transition: transform
    ${(props) => (props.$prefersReducedMotion ? '0s' : props.$duration)} ease-out;
  ${(props) => (props.$side === 'top' ? 'top: 0;' : 'bottom: 0;')}
`

export const MiddleBorderTrace = styled.span<{
  $drawn: boolean
  $prefersReducedMotion?: boolean
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: ${(props) => props.theme.color.neutral};
  transform-origin: left center;
  transform: scaleX(${(props) => (props.$drawn || props.$prefersReducedMotion ? 1 : 0)});
  transition: transform ${(props) => (props.$prefersReducedMotion ? '0s' : '500ms')} ease-out;
`
