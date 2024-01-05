import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SECTIONS } from '../../constants/sections'
import { contactInfo } from '../../data/contactInfo'
import useScroll from '../../hooks/useScroll'
import { device } from '../../styles/breakpoints'
import Container from '../ui/Container'
import Title from '../ui/Title'

const STRINGS = {
  title: 'contact',
}

const MainContainer = styled(Container)`
  padding: 0;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`
const TitleContainer = styled(Container)`
  ${(props) => {
    const { color } = props.theme

    return `
    border-right: 10rem solid ${color.neutral};
    @media ${device.desktopMinWidth} {
      border-right-width: 30rem;
    }
    `
  }}
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
  const ref = useRef(null)

  useEffect(() => {
    updateSection(SECTIONS.CONTACT, ref)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <MainContainer id={SECTIONS.CONTACT} ref={ref}>
      <TitleContainer>
        <Title>{STRINGS.title}</Title>
      </TitleContainer>
      <ContactListContainer>
        {contactInfo.map((contact) => {
          const { id, title, icon, link } = contact
          return (
            <ContactListItem key={id}>
              <ContactLink href={link} target="_blank" rel="noopener noreferrer">
                <ContactIcon src={`./icons/contact/${icon}`} alt={id} />
                {title}
              </ContactLink>
            </ContactListItem>
          )
        })}
      </ContactListContainer>
    </MainContainer>
  )
}

export default Contact
