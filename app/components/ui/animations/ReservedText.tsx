import styled from 'styled-components'

export const ReservedLine = styled.span`
  position: relative;
  display: inline-block;
`

export const GhostText = styled.span`
  visibility: hidden;
  user-select: none;
`

export const OverlayText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  white-space: pre-wrap;
`

export const ReservedBlock = styled.span`
  position: relative;
  display: block;
`

export const GhostBlock = styled.span`
  display: block;
  visibility: hidden;
  user-select: none;
`

export const OverlayBlock = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: block;
`
