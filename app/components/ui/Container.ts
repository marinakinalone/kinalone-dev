import styled from 'styled-components'

const Container = styled.section`
  ${(props) => {
    const { border, color, spacing } = props.theme

    return `    
    background: ${color.secondary};
    border: ${border.regular};
    padding: ${spacing.s};
    margin: -1px;
    `
  }}
`

export default Container
