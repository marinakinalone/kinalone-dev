import styled from 'styled-components'

const Container = styled.section`
  background: ${(props) => props.theme.color.secondary};
  border: ${(props) => props.theme.border.regular};
  padding: ${(props) => props.theme.spacing.s};
  margin: -1px;
`

export default Container
