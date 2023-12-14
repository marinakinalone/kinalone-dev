import React from 'react'
import styled from 'styled-components'

interface ITextLinkProps {
  href: string
  target?: string
  rel?: string
  children: React.ReactNode
}

//TODO change color to theme
const Link = styled.a``

const TextLink = ({
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  children,
}: ITextLinkProps) => {
  return (
    <Link href={href} target={target} rel={rel}>
      {children}
    </Link>
  )
}

export default TextLink
