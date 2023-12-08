import React from 'react'
import styled from 'styled-components'
import { projects } from '../../data/projects'
import { device } from '../../styles/breakpoints'
import Container from '../ui/Container'
import Text from '../ui/Text'
import Title from '../ui/Title'
import ProjectCard from './ProjectCard'
import MyComponent from './MoreProjects'

const STRINGS = {
  title: 'highlighted projects',
  cta: 'more projects',
}

const TitleContainer = styled(Container)`
  ${(props) => {
    const { theme } = props
    return `
    border-top: ${theme.border.highlight};
    margin-bottom: ${theme.spacing.s};
    `
  }}
`
const CtaContainer = styled(Container)`
  ${(props) => {
    const { theme } = props
    return `
    margin-bottom: ${theme.spacing.xl};
    margin-top: ${theme.spacing.s};
    border-right: 6rem solid ${theme.color.neutral};
    @media ${device.desktopMinWidth} {
      border-right-width: 20rem;
    }
    `
  }}
`

const ProjectCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Projects = () => {
  return (
    <>
      <TitleContainer>
        <Title>{STRINGS.title}</Title>
      </TitleContainer>
      <ProjectCardsContainer>
        {projects.map((project) => {
          const { id, title, description } = project
          return <ProjectCard key={id} title={title} description={description} />
        })}
      </ProjectCardsContainer>
      <CtaContainer>
        {/* <Text>{STRINGS.cta}</Text> */}
        <MyComponent message={STRINGS.cta} />
      </CtaContainer>
    </>
  )
}

export default Projects
