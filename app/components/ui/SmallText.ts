import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

const SmallText = styled.p`
  ${(props) => {
    const { fontSize } = props.theme

    return `
    font-size: ${fontSize.regular.xs};
    @media ${device.desktopMinWidth} {
      font-size: ${fontSize.desktop.xs};
    }
    `
  }}
`

export default SmallText
