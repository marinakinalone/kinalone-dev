import styled, { css } from 'styled-components'

const Container = styled.section<{ $transparentBg?: boolean; $hideBorder?: boolean }>`
  ${(props) => {
    const { border, color } = props.theme

    return css`
      background: ${props.$transparentBg ? 'transparent' : color.secondary};
      border: ${props.$hideBorder ? '1px solid transparent' : border.regular};
      padding: 0;
      margin: -1px;
    `
  }}
`

export default Container
