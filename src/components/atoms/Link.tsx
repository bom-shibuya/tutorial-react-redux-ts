import * as React from 'react'
import styled, { css } from 'styled-components'
import { Theme } from '../../styles/theme'
import { color } from '../../styles/variables'

const baseStyle = css`
  font-weight: ${({ theme }: { theme: Theme }) => theme.font.weight.bold};
`

const ActiveLink = styled.span`
  ${baseStyle}
  text-decoration: line-through
`

const StyledLink = styled.a`
  ${baseStyle}
  color: ${color.accent}
`

interface IProps {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}

export const Link: React.SFC<IProps> = ({
  active,
  children,
  onClick
}: IProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick()
  }

  const activeLink = () => <ActiveLink>{children}</ActiveLink>

  const inactiveLink = () => (
    <StyledLink href="" onClick={handleClick}>
      {children}
    </StyledLink>
  )

  return active ? activeLink() : inactiveLink()
}
