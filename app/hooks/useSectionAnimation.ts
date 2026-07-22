import {
  AnimationSectionId,
  useAnimationSequence,
} from '../providers/AnimationSequenceProvider'

const useSectionAnimation = (sectionId: AnimationSectionId) => {
  const { canAnimate, isSkipped, isComplete, isWaiting, isEntrySection, markComplete } =
    useAnimationSequence()

  return {
    canAnimate: canAnimate(sectionId),
    isSkipped: isSkipped(sectionId),
    isComplete: isComplete(sectionId),
    isWaiting: isWaiting(sectionId),
    isEntrySection: isEntrySection(sectionId),
    markComplete: () => markComplete(sectionId),
  }
}

export default useSectionAnimation
