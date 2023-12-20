import React from 'react'
import styled from 'styled-components'
import { projects } from '../../data/projects'
import { device } from '../../styles/breakpoints'
import Container from '../ui/Container'
import Title from '../ui/Title'
import MoreProjects from './MoreProjects'
import ProjectCard from './ProjectCard'

export const STRINGS = {
  title: 'highlighted projects',
  cta: 'more projects',
}

const TitleContainer = styled(Container)`
  ${(props) => {
    const { border, spacing } = props.theme

    return `
    border-top: ${border.highlight};
    margin-bottom: ${spacing.s};
    `
  }}
`

const CtaContainer = styled(Container)`
  ${(props) => {
    const { color, spacing } = props.theme

    return `
    margin-bottom: ${spacing.xl};
    margin-top: ${spacing.s};
    border-right: 6rem solid ${color.neutral};
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
      <TitleContainer id="projects">
        <Title>{STRINGS.title}</Title>
      </TitleContainer>
      <ProjectCardsContainer>
        {projects.map((project) => {
          const { id, title, description } = project
          return <ProjectCard key={id} title={title} description={description} />
        })}
      </ProjectCardsContainer>
      <CtaContainer>
        <MoreProjects />
      </CtaContainer>
    </>
  )
}

export default Projects
