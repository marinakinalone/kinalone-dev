import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

const SmallText = styled.p`
  font-size: ${(props) => props.theme.fontSize.regular.xs};
  @media ${device.desktopMinWidth} {
    font-size: ${(props) => props.theme.fontSize.desktop.xs};
  }
`

export default SmallText
