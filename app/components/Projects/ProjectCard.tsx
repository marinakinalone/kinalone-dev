import React from 'react'
import styled from 'styled-components'
import { getImageName } from '../../helpers/getImageName'
import { device } from '../../styles/breakpoints'

interface IProjectCardProps {
  title: string
  description: string
  link: string
}

const Card = styled.a`
  ${(props) => {
    const { border, color, spacing } = props.theme

    return `
    text-decoration: none;
    border: ${border.regular};
    background: ${color.secondary};
    margin: 1% auto;
    padding: 0 ${spacing.xs};
    display: flex;
    flex-direction: column;
    max-width: 88%;
    @media ${device.tabletMinWidth} {
      max-width: 44%;
    }
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

const ProjectCard = ({ title, description, link }: IProjectCardProps) => {
  const imageSource = './projects/' + getImageName(title) + '.png'

  return (
    <Card href={link} target="_blank" rel="noopener noreferrer">
      <CardCover src={imageSource} alt={'cover: ' + title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  )
}

export default ProjectCard
