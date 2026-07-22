import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { SECTIONS } from '../../constants/sections'
import {
  aboutClosing,
  aboutDifferent,
  aboutIntro,
  aboutLinks,
  aboutOutside,
  aboutPhilosophy,
} from '../../data/aboutCopy'
import interpolate from '../../helpers/interpolate'
import useAnimationPhase from '../../hooks/useAnimationPhase'
import useInView from '../../hooks/useInView'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import useScroll from '../../hooks/useScroll'
import useSectionAnimation from '../../hooks/useSectionAnimation'
import { device } from '../../styles/breakpoints'
import StormyCat from '../Oneko/StormyCat'
import Container from '../ui/Container'
import HoverImage from '../ui/HoverImage'
import Subtitle from '../ui/Subtitle'
import TextLink from '../ui/TextLink'
import AnimatedTitleSection from '../ui/animations/AnimatedTitleSection'
import BorderTraceBox from '../ui/animations/BorderTraceBox'
import SectionSpinner from '../ui/animations/SectionSpinner'
import StaggeredFadeIn from '../ui/animations/StaggeredFadeIn'
import TypingText from '../ui/animations/TypingText'
import { RevealContent } from '../ui/animations/animationHelpers'

const STRINGS = {
  title: 'about',
  subtitle:
    "Hi there! I'm Marina Kinalone - software developer with a UX driven approach.",
}

const MainContainer = styled(Container)`
  margin-bottom: ${(props) => props.theme.spacing.xxxl};
`

const bodyTextStyles = css`
  margin: ${(props) => props.theme.spacing.xs} auto;
  line-height: 1.5rem;
`

const Paragraph = styled.div`
  ${bodyTextStyles}
  margin-top: ${(props) => props.theme.spacing.m};
`

const Quote = styled.div`
  ${bodyTextStyles}
  margin-top: ${(props) => props.theme.spacing.m};
  font-style: italic;
`

const InnerContainer = styled(Container)<{
  $revealed: boolean
  $prefersReducedMotion?: boolean
}>`
  background-color: ${(props) =>
    props.$revealed || props.$prefersReducedMotion
      ? props.theme.color.secondary
      : 'transparent'};
  transition: background-color
    ${(props) => (props.$prefersReducedMotion ? '0s' : '0.3s')} ease-out;
  border-color: transparent;
  overflow: hidden;
  ${(props) => {
    const { spacing, fontSize } = props.theme

    return `
      padding: ${spacing.m} ${spacing.s};

      @media ${device.tabletMinWidth} {
        padding: ${spacing.m} ${spacing.xl};
      }

      @media ${device.mobileMaxWidth} {
        h3 {
          font-size: ${fontSize.mobile.m};
        }

        p,
        ${Paragraph},
        ${Quote},
        li {
          font-size: ${fontSize.mobile.s};
        }
      }
    `
  }}
`

const SectionTitle = styled(Subtitle)`
  margin-top: ${(props) => props.theme.spacing.l};
`

const List = styled.ul`
  margin-top: ${(props) => props.theme.spacing.m};
  line-height: 1.5rem;
  padding-left: ${(props) => props.theme.spacing.l};
`

const ListItem = styled.li`
  margin-bottom: ${(props) => props.theme.spacing.xs};
`

const Portrait = styled.img`
  ${(props) => {
    const { spacing, border } = props.theme
    return `
      margin: ${spacing.xs};
      border: ${border.regular};
      width: 100%;
      max-width: 300px;
      height: auto;
      display: block;
      box-sizing: border-box;
     `
  }}
`

const BODY_STAGGER = 70
const BODY_ANIM_DURATION = 500

const About = () => {
  const { updateSection } = useScroll()
  const ref = useRef<HTMLElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const { canAnimate, isSkipped, isComplete, isEntrySection, markComplete } =
    useSectionAnimation('about')
  const reached = useInView(ref)
  const active = (canAnimate && (reached || isEntrySection)) || isSkipped || isComplete
  const showSpinner = canAnimate && !active && !isComplete && !isSkipped
  // Body traces/reveals in parallel with the title rather than waiting for the
  // title to finish typing, so the section reads as one quick beat.
  const shouldRunBody = active || isSkipped
  const { phase, isPhaseAtLeast } = useAnimationPhase(shouldRunBody)
  const showFinal = isSkipped || prefersReducedMotion
  const bodyActive = showFinal || isPhaseAtLeast('revealBg')

  useEffect(() => {
    return updateSection(SECTIONS.ABOUT, ref)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isSkipped) {
      markComplete()
    }
  }, [isSkipped, markComplete])

  useEffect(() => {
    if (!bodyActive || isSkipped || prefersReducedMotion) return

    const blockCount = 12
    const timer = setTimeout(
      () => markComplete(),
      blockCount * BODY_STAGGER + BODY_ANIM_DURATION,
    )
    return () => clearTimeout(timer)
  }, [bodyActive, isSkipped, prefersReducedMotion, markComplete])

  const bodyBlocks = [
    {
      key: 'portrait',
      content: (
        <Portrait
          src="./portrait_marinakinalone.jpg"
          alt="portrait of Marina Kinalone Simonnet with her cat, Stormy"
        />
      ),
    },
    {
      key: 'subtitle',
      content: (
        <Subtitle>
          <TypingText text={STRINGS.subtitle} duration={1000} active={bodyActive} wrap />
        </Subtitle>
      ),
    },
    {
      key: 'intro',
      content: (
        <Paragraph>
          <TypingText text={interpolate(aboutIntro)} duration={700} active={bodyActive} wrap />
        </Paragraph>
      ),
    },
    { key: 'philosophy-title', content: <SectionTitle>{aboutPhilosophy.title}</SectionTitle> },
    ...aboutPhilosophy.items.map((item) => ({
      key: item.lead,
      content: (
        <Paragraph>
          <TypingText
            text={interpolate(`{{bold}}${item.lead}{{/bold}}`)}
            duration={350}
            active={bodyActive}
            wrap
          />{' '}
          {item.body}
        </Paragraph>
      ),
    })),
    { key: 'different-title', content: <SectionTitle>{aboutDifferent.title}</SectionTitle> },
    ...aboutDifferent.paragraphs.map((paragraph, index) => ({
      key: `different-${index}`,
      content: (
        <Paragraph>
          <TypingText
            text={interpolate(paragraph)}
            duration={400}
            active={bodyActive}
            wrap
          />
        </Paragraph>
      ),
    })),
    { key: 'outside-title', content: <SectionTitle>{aboutOutside.title}</SectionTitle> },
    { key: 'outside-intro', content: <Paragraph>{interpolate(aboutOutside.intro)}</Paragraph> },
    ...aboutOutside.activities.map((activity, index) => ({
      key: `activity-${index}`,
      content: (
        <List>
          <ListItem>
            {typeof activity === 'string' ? (
              activity
            ) : (
              <>
                {activity.beforeLink}
                <TextLink href={aboutLinks[activity.link]}>{activity.linkLabel}</TextLink>
                {activity.afterLink}
              </>
            )}
          </ListItem>
        </List>
      ),
    })),
    {
      key: 'stormy',
      content: (
        <Paragraph>
          {aboutClosing.stormy.prefix}
          <HoverImage
            src="./stormy_portrait.png"
            alt="Stormy the cat looking at the camera, wearing a pink floral bandana"
          >
            {aboutClosing.stormy.stormyLabel}
          </HoverImage>
          {aboutClosing.stormy.middle}
          <HoverImage
            src="./stormy_standup.png"
            alt="Marina holding Stormy the cat during a morning standup"
          >
            {aboutClosing.stormy.standupLabel}
          </HoverImage>
          {aboutClosing.stormy.suffix}
          {!prefersReducedMotion && <StormyCat />}
        </Paragraph>
      ),
    },
    {
      key: 'blog',
      content: (
        <Paragraph>
          {aboutClosing.blogPrefix}
          <TextLink href={aboutLinks.astroniste}>{aboutClosing.blogLabel}</TextLink>.
        </Paragraph>
      ),
    },
    { key: 'quote', content: <Quote>{interpolate(aboutClosing.quote)}</Quote> },
  ]

  return (
    <MainContainer id={SECTIONS.ABOUT} ref={ref} aria-label="About" $transparentBg $hideBorder>
      {active && (
        <>
      <AnimatedTitleSection
        title={STRINGS.title}
        thickSide="top"
        canAnimate={active}
        forceComplete={isSkipped || isComplete}
        ignoreInView
      />
      <div ref={bodyRef}>
        <BorderTraceBox phase={showFinal ? 'done' : phase}>
          <InnerContainer
            $revealed={showFinal || isPhaseAtLeast('revealBg')}
            $prefersReducedMotion={prefersReducedMotion}
            $transparentBg
          >
            <RevealContent $visible={bodyActive} $prefersReducedMotion={prefersReducedMotion}>
              {bodyBlocks.map((block, index) => (
                <StaggeredFadeIn
                  key={block.key}
                  $active={bodyActive}
                  $delay={index * BODY_STAGGER}
                  $variant="fade"
                  $prefersReducedMotion={prefersReducedMotion || isSkipped}
                >
                  {block.content}
                </StaggeredFadeIn>
              ))}
            </RevealContent>
          </InnerContainer>
        </BorderTraceBox>
      </div>
        </>
      )}
      {showSpinner && <SectionSpinner />}
    </MainContainer>
  )
}

export default About
