import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SECTIONS } from '../../constants/sections'
import { contactInfo } from '../../data/contactInfo'
import useInView from '../../hooks/useInView'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import useScroll from '../../hooks/useScroll'
import useSectionAnimation from '../../hooks/useSectionAnimation'
import Container from '../ui/Container'
import AnimatedTitleSection from '../ui/animations/AnimatedTitleSection'
import SectionSpinner from '../ui/animations/SectionSpinner'
import StaggeredFadeIn from '../ui/animations/StaggeredFadeIn'

const STRINGS = {
  title: 'contact',
}

const LIST_STAGGER = 100
const LIST_ANIM_DURATION = 200

const MainContainer = styled(Container)`
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`

const ContactListContainer = styled.ul`
  line-height: 2rem;
  list-style-type: none;
`

const ContactListItem = styled.li`
  margin: ${(props) => props.theme.spacing.s} 0rem;
`

const ContactLink = styled.a`
  margin-left: -${(props) => props.theme.spacing.s};
`

const ContactIcon = styled.img`
  max-height: 1.25rem;
  padding-right: ${(props) => props.theme.spacing.s};
  vertical-align: middle;
  filter: ${(props) => props.theme.filter.secondary};
`

const Contact = () => {
  const { updateSection } = useScroll()
  const ref = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { canAnimate, isSkipped, isComplete, isEntrySection, markComplete } =
    useSectionAnimation('contact')
  const reached = useInView(ref)
  const active = (canAnimate && (reached || isEntrySection)) || isSkipped || isComplete
  const showSpinner = canAnimate && !active && !isComplete && !isSkipped
  const [titleDone, setTitleDone] = useState(isSkipped || prefersReducedMotion)
  const listActive = titleDone || isSkipped || prefersReducedMotion

  useEffect(() => {
    return updateSection(SECTIONS.CONTACT, ref)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isSkipped) {
      markComplete()
    }
  }, [isSkipped, markComplete])

  useEffect(() => {
    if (!listActive || isSkipped || prefersReducedMotion) return

    const timer = setTimeout(
      () => markComplete(),
      contactInfo.length * LIST_STAGGER + LIST_ANIM_DURATION,
    )
    return () => clearTimeout(timer)
  }, [listActive, isSkipped, prefersReducedMotion, markComplete])

  return (
    <MainContainer id={SECTIONS.CONTACT} ref={ref} aria-label="Contact" $transparentBg $hideBorder>
      {active && (
        <AnimatedTitleSection
        title={STRINGS.title}
        thickSide="right"
        rightWidth="10rem"
        rightWidthDesktop="30rem"
        canAnimate={active}
        forceComplete={isSkipped || isComplete}
        ignoreInView
        onTypingComplete={() => setTitleDone(true)}
        body={
          <ContactListContainer>
            {contactInfo.map((contact, index) => {
              const { id, title, icon, link } = contact
              return (
                <ContactListItem key={id}>
                  <StaggeredFadeIn
                    $active={listActive}
                    $delay={index * LIST_STAGGER}
                    $variant="slide"
                    $prefersReducedMotion={prefersReducedMotion || isSkipped}
                  >
                    <ContactLink href={link} target="_blank" rel="noopener noreferrer">
                      <ContactIcon src={`./icons/contact/${icon}`} alt="" aria-hidden="true" />
                      {title}
                    </ContactLink>
                  </StaggeredFadeIn>
                </ContactListItem>
              )
            })}
          </ContactListContainer>
        }
      />
      )}
      {showSpinner && <SectionSpinner />}
    </MainContainer>
  )
}

export default Contact
