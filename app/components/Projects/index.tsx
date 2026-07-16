import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SECTIONS } from '../../constants/sections'
import { projects } from '../../data/projects'
import useInView from '../../hooks/useInView'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import useScroll from '../../hooks/useScroll'
import useSectionAnimation from '../../hooks/useSectionAnimation'
import Title from '../ui/Title'
import AnimatedTitleSection from '../ui/animations/AnimatedTitleSection'
import RainbowText from '../ui/animations/RainbowText'
import SectionSpinner from '../ui/animations/SectionSpinner'
import TypingText from '../ui/animations/TypingText'
import MoreProjects from './MoreProjects'
import ProjectCard from './ProjectCard'
import { STRINGS } from './strings'


const SectionWrapper = styled.section``

const TitleContainer = styled.div`
  margin: -1px;
  margin-bottom: ${(props) => props.theme.spacing.s};
`

const CtaContainer = styled.div`
  margin: -1px;
  margin-bottom: ${(props) => props.theme.spacing.xxxl};
  margin-top: ${(props) => props.theme.spacing.s};
`

const ProjectCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CARD_STAGGER = 0
const CARD_ANIM_DURATION = 500

const Projects = () => {
  const { updateSection } = useScroll()
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { canAnimate, isSkipped, isComplete, isEntrySection, markComplete } =
    useSectionAnimation('projects')
  const reached = useInView(sectionRef)
  const active = (canAnimate && (reached || isEntrySection)) || isSkipped || isComplete
  const showSpinner = canAnimate && !active && !isComplete && !isSkipped
  const [titleDone, setTitleDone] = useState(prefersReducedMotion || isSkipped)
  const [showRainbow, setShowRainbow] = useState(prefersReducedMotion || isSkipped)
  const [ctaTypingDone, setCtaTypingDone] = useState(prefersReducedMotion || isSkipped)
  const cardsActive = titleDone || prefersReducedMotion || isSkipped

  useEffect(() => {
    return updateSection(SECTIONS.PROJECTS, sectionRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isSkipped) {
      markComplete()
    }
  }, [isSkipped, markComplete])

  useEffect(() => {
    if (!ctaTypingDone || isSkipped || prefersReducedMotion) return

    const timer = setTimeout(
      () => markComplete(),
      projects.length * CARD_STAGGER + CARD_ANIM_DURATION,
    )
    return () => clearTimeout(timer)
  }, [ctaTypingDone, isSkipped, prefersReducedMotion, markComplete])

  return (
    <SectionWrapper ref={sectionRef} id={SECTIONS.PROJECTS} aria-label="Projects">
      {active && (
        <>
      <TitleContainer>
        <AnimatedTitleSection
          title={`${STRINGS.animatedTitle}${STRINGS.title}`}
          thickSide="top"
          canAnimate={active}
          forceComplete={isSkipped || isComplete}
          ignoreInView
          onTypingComplete={() => {
            setTitleDone(true)
            setShowRainbow(true)
          }}
          renderTitle={(_title, canType, onComplete) => (
            <Title>
              {showRainbow ? (
                <>
                  <RainbowText word={STRINGS.animatedTitle} />
                  {STRINGS.title}
                </>
              ) : (
                <TypingText
                  text={`${STRINGS.animatedTitle}${STRINGS.title}`}
                  duration={600}
                  active={canType}
                  onComplete={onComplete}
                />
              )}
            </Title>
          )}
        />
      </TitleContainer>
      <ProjectCardsContainer>
        {projects.map((project, index) => {
          const { id, title, description, link } = project
          return (
            <ProjectCard
              key={id}
              title={title}
              description={description}
              link={link}
              animationIndex={index}
              parentActive={cardsActive}
              staggerDelay={CARD_STAGGER}
            />
          )
        })}
      </ProjectCardsContainer>
      <CtaContainer>
        <AnimatedTitleSection
          title={STRINGS.cta}
          thickSide="right"
          rightWidth="6rem"
          rightWidthDesktop="20rem"
          canAnimate={active && titleDone}
          forceComplete={isSkipped || isComplete}
          ignoreInView
          renderTitle={(_title, canType, onComplete) => (
            <MoreProjects
              active={canType && !ctaTypingDone}
              onComplete={() => {
                setCtaTypingDone(true)
                onComplete()
              }}
              showLink={ctaTypingDone || prefersReducedMotion || isSkipped}
            />
          )}
        />
      </CtaContainer>
        </>
      )}
      {showSpinner && <SectionSpinner />}
    </SectionWrapper>
  )
}

export default Projects
