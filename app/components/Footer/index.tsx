import React from 'react'
import styled from 'styled-components'
import SmallText from '../ui/SmallText'
import TextLink from '../ui/TextLink'

const FooterContainter = styled.footer`
  border-top: ${(props) => props.theme.border.regular};
  display: flex;
  justify-content: center;
`



const Footer = () => {
  return (
    <FooterContainter>
      <SmallText>
         mks 2026 🐈‍⬛🌙 |{' '}
        <TextLink href="https://github.com/marinakinalone/kinalone-dev/blob/main/LICENSE.txt">
          License
        </TextLink>
      </SmallText>
    </FooterContainter>
  )
}

export default Footer
