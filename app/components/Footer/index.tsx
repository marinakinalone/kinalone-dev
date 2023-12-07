import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/breakpoints'
import heartIcon from '../../../public/icons/heart_dark.svg'

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
  const isDesktop = true // TODO implement isDesktop

  return (
    <FooterContainter>
      <FooterContent>
        {isDesktop && (
          <>
            Made with <FooterIcon src={'./icons/heart_dark.svg'} alt="love" /> between Nantes &
            Sthlm
          </>
        )}
        {/* <FooterText>
          <FooterIcon src={heartIcon} alt="love" />
          <FooterTextSpan>between Nantes & Sthlm</FooterTextSpan>
        </FooterText>
        <FooterText>
          <FooterTextSpan>© mks 2022 | </FooterTextSpan>
          <FooterLink
            href=" */}
      </FooterContent>
    </FooterContainter>
  )
}

export default Footer
