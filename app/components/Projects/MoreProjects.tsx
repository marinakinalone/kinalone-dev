import ArrowLink from '../ui/animations/ArrowLink'
import TypingText from '../ui/animations/TypingText'
import { STRINGS } from './strings'

interface MoreProjectsProps {
  active?: boolean
  onComplete?: () => void
  showLink?: boolean
}

const MoreProjects = ({ active = true, onComplete, showLink = true }: MoreProjectsProps) => {
  if (showLink) {
    return (
      <ArrowLink href="https://github.com/marinakinalone?tab=repositories" label={STRINGS.cta} />
    )
  }

  return (
    <TypingText text={STRINGS.cta} duration={800} active={active} onComplete={onComplete} />
  )
}

export default MoreProjects
