import styled from 'styled-components'

const StaggeredFadeIn = styled.div<{
  $active: boolean
  $delay: number
  $variant?: 'fade' | 'slide' | 'slideDown'
  $prefersReducedMotion?: boolean
}>`
  opacity: ${(props) => (props.$active || props.$prefersReducedMotion ? 1 : 0)};
  transform: translate(
    ${(props) => {
      if (props.$active || props.$prefersReducedMotion) return '0, 0'
      if (props.$variant === 'slide') return '1rem, 0'
      if (props.$variant === 'slideDown') return '0, -1rem'
      return '0, 0'
    }}
  );
  transition:
    opacity 0.5s ease-out ${(props) => props.$delay}ms,
    transform 0.5s ease-out ${(props) => props.$delay}ms;
`

export default StaggeredFadeIn
