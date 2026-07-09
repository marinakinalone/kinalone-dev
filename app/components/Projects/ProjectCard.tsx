import React from 'react'
import styled from 'styled-components'
import { getImageName } from '../../helpers/getImageName'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { device } from '../../styles/breakpoints'
import StaggeredFadeIn from '../ui/animations/StaggeredFadeIn'

interface IProjectCardProps {
  title: string
  description: string
  link: string
  animationIndex?: number
  parentActive?: boolean
  staggerDelay?: number
}

const CardSlot = styled(StaggeredFadeIn)`
  display: flex;
  flex: 0 0 88%;
  max-width: 88%;
  margin: 1% auto;

  @media ${device.tabletMinWidth} {
    flex: 0 0 44%;
    max-width: 44%;
  }
`

const Card = styled.a`
  ${(props) => {
    const { border, color, spacing } = props.theme

    return `
    text-decoration: none;
    border: ${border.regular};
    background: ${color.secondary};
    padding: 0 ${spacing.xs};
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    @media ${device.desktopMinWidth} {
      padding: ${spacing.xs} ${spacing.s};
    }
    transition: transform 0.3s, box-shadow 0.4s;
    &:hover {
        color: ${color.neutral};
        box-shadow: -6px 6px 0px 0px;
        transform: translate(4px, -4px);
      }
    &:focus {
        box-shadow: -6px 6px 0px 0px;
        transform: translate(4px, -4px);
        outline: none;
        color: ${color.neutral};
    }
    `
  }}
`

const CardCover = styled.img`
  ${(props) => {
    const { border, spacing } = props.theme

    return `
    border: ${border.regular};
    margin-top: ${spacing.s};
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    box-sizing: border-box;
    `
  }}
`

const CardTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 0;
  margin-top: ${(props) => props.theme.spacing.s};
`

const CardDescription = styled.p`
  ${(props) => {
    const { fontSize, spacing } = props.theme

    return `
    margin-top: ${spacing.xs};
    margin-bottom: ${spacing.m};
    font-size: ${fontSize.regular.s};
    `
  }}
`

const ProjectCard = ({
  title,
  description,
  link,
  animationIndex = 0,
  parentActive = true,
  staggerDelay = 50,
}: IProjectCardProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const imageSource = './projects/' + getImageName(title) + '.png'

  return (
    <CardSlot
      $active={parentActive}
      $delay={animationIndex * staggerDelay}
      $variant="fade"
      $prefersReducedMotion={prefersReducedMotion}
    >
      <Card href={link} target="_blank" rel="noopener noreferrer">
        <CardCover src={imageSource} alt={'cover: ' + title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Card>
    </CardSlot>
  )
}

export default ProjectCard
