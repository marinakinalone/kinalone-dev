import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.xl} 0;
  min-height: 6rem;
`

const SpinnerRing = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${(props) => props.theme.color.neutral};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

const SectionSpinner = () => (
  <SpinnerWrapper aria-label="Loading section" role="status">
    <SpinnerRing />
  </SpinnerWrapper>
)

export default SectionSpinner
