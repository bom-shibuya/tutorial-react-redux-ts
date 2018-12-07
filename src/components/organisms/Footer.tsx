import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../styles'

const StyledFooter = styled.footer`
  padding: 4rem 1.6rem;
`

const FooterNav = styled.ul`
  display: flex;
  justify-content: center;
`

const FooterNavItem = styled.li`
  &:not(:last-child) {
    margin-right: 1.6rem;
  }
  a {
    color: ${color.logo};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.font.weight.bold};

    &.active {
      text-decoration: line-through;
    }
  }
`

export const Footer = () => (
  <StyledFooter>
    <FooterNav>
      <FooterNavItem>
        <NavLink exact={true} to="/">
          HOME
        </NavLink>
      </FooterNavItem>
      <FooterNavItem>
        <NavLink to="/todo">TODO</NavLink>
      </FooterNavItem>
      <FooterNavItem>
        <NavLink to="/counter">COUNTER</NavLink>
      </FooterNavItem>
    </FooterNav>
  </StyledFooter>
)
