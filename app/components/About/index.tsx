import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
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
import useScroll from '../../hooks/useScroll'
import BolderText from '../ui/BolderText'
import Container from '../ui/Container'
import Subtitle from '../ui/Subtitle'
import Text from '../ui/Text'
import TextLink from '../ui/TextLink'
import Title from '../ui/Title'

const STRINGS = {
  title: 'about',
  subtitle:
    "Hi there! I'm Marina Kinalone - software developer with a UX driven approach.",
}

const MainContainer = styled(Container)`
  padding: 0;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`

const TitleContainer = styled(Container)`
  border-top: ${(props) => props.theme.border.highlight};
`

const InnerContainer = styled(Container)`
  padding: ${(props) => `${props.theme.spacing.m} ${props.theme.spacing.xl}`};
`

const Paragraph = styled(Text)`
  margin-top: ${(props) => props.theme.spacing.m};
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

const Quote = styled(Text)`
  margin-top: ${(props) => props.theme.spacing.m};
  font-style: italic;
`

const Portrait = styled.img`
  ${(props) => {
    const { spacing, border } = props.theme
    return `
      margin: ${spacing.xs};
      border: ${border.regular};
      width: 300px;
     `
  }}
`

const About = () => {
  const { updateSection } = useScroll()
  const ref = useRef(null)

  useEffect(() => {
    updateSection(SECTIONS.ABOUT, ref)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainContainer id={SECTIONS.ABOUT}>
      <TitleContainer>
        <Title>{STRINGS.title}</Title>
      </TitleContainer>
      <InnerContainer ref={ref}>
        <Portrait
          src="./portrait_marinakinalone.jpg"
          alt="portrait of Marina Kinalone Simonnet with her cat, Stormy"
        />
        <Subtitle>{STRINGS.subtitle}</Subtitle>
        <Paragraph>{interpolate(aboutIntro)}</Paragraph>

        <SectionTitle>{aboutPhilosophy.title}</SectionTitle>
        {aboutPhilosophy.items.map((item) => (
          <Paragraph key={item.lead}>
            <BolderText>{item.lead}</BolderText> {item.body}
          </Paragraph>
        ))}

        <SectionTitle>{aboutDifferent.title}</SectionTitle>
        {aboutDifferent.paragraphs.map((paragraph) => (
          <Paragraph key={paragraph.slice(0, 40)}>{interpolate(paragraph)}</Paragraph>
        ))}

        <SectionTitle>{aboutOutside.title}</SectionTitle>
        <Paragraph>{interpolate(aboutOutside.intro)}</Paragraph>
        <List>
          {aboutOutside.activities.map((activity, index) => (
            <ListItem key={index}>
              {typeof activity === 'string' ? (
                activity
              ) : (
                <>
                  {activity.beforeLink}
                  <TextLink href={aboutLinks[activity.link]}>
                    {activity.linkLabel}
                  </TextLink>
                  {activity.afterLink}
                </>
              )}
            </ListItem>
          ))}
        </List>

        <Paragraph>{aboutClosing.stormy}</Paragraph>
        <Paragraph>
          {aboutClosing.blogPrefix}
          <TextLink href={aboutLinks.astroniste}>{aboutClosing.blogLabel}</TextLink>.
        </Paragraph>
        <Quote>{interpolate(aboutClosing.quote)}</Quote>
      </InnerContainer>
    </MainContainer>
  )
}

export default About
