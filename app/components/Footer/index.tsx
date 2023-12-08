import React from 'react'
import styled from 'styled-components'
import { device, screenSize } from '../../styles/breakpoints'
import TextLink from '../ui/TextLink'

const FooterContainter = styled.footer`
  border-top: ${(props) => props.theme.border.regular};
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize.regular.xs};
  @media ${device.desktopMinWidth} {
    font-size: ${(props) => props.theme.fontSize.desktop.xs};
  }
`

const FooterContent = styled.p``

const FooterIcon = styled.img`
  max-height: ${(props) => props.theme.fontSize.regular.xs};
  margin-bottom: -0.1rem;
  @media ${device.desktopMinWidth} {
    max-height: ${(props) => props.theme.fontSize.desktop.xs};
  }
`

const Footer = () => {
  const isDesktop = window.innerWidth > 600
  return (
    <FooterContainter>
      <FooterContent>
        {isDesktop && (
          <>
            Made with <FooterIcon src={'./icons/heart_dark.svg'} alt="love" /> between Nantes &
            Sthlm
          </>
        )}{' '}
        © mks 2022 |{' '}
        <TextLink href="https://github.com/marinakinalone/kinalone-dev/blob/main/LICENSE.txt">
          License
        </TextLink>
      </FooterContent>
    </FooterContainter>
  )
}

export default Footer
