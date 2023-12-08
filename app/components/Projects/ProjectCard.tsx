import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/breakpoints'

interface IProjectCardProps {
  title: string
  description: string
}

const Card = styled.a`
  ${(props) => {
    const { theme } = props
    return `
    text-decoration: none;
    border: ${theme.border.regular};
    background: ${theme.color.secondary};
    margin: 1% auto;
    padding: 0 ${theme.spacing.xs};
    display: flex;
    flex-direction: column;
    max-width: 88%;
    @media ${device.tabletMinWidth} {
      max-width: 44%;
    }
    @media ${device.desktopMinWidth} {
      padding: 0.5rem 1rem;
    }
    transition: transform 0.3s, box-shadow 0.4s;
    &:hover {
        color: ${theme.color.neutral};
        box-shadow: -6px 6px 0px 0px;
        transform: translate(4px, -4px);
      }
    &:focus {
        box-shadow: -6px 6px 0px 0px;
        transform: translate(4px, -4px);
    }
    `
  }}
`

const CardCover = styled.img`
  border: ${(props) => props.theme.border.regular};
  margin-top: ${(props) => props.theme.spacing.s};
`

const CardTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 0;
  margin-top: ${(props) => props.theme.spacing.s};
`

const CardDescription = styled.p`
  margin-top: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.m};
  font-size: ${(props) => props.theme.fontSize.regular.s};
`

const getImageName = (imageTitle: string) => imageTitle.toLowerCase().replace(/\s+/g, '_')

const ProjectCard = ({ title, description }: IProjectCardProps) => {
  //TODO create helper function to get image from title
  const imageSource = './projects/' + getImageName(title) + '.png'

  return (
    <Card href={''}>
      <CardCover src={imageSource} alt={'cover: ' + title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  )
}

export default ProjectCard
