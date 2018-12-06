import * as React from 'react'
import styled from 'styled-components'
import { FilterLink } from '../../containers'
import { VisibilityFilters } from '../../stores/visibilityFilter'

const StyledFooter = styled.footer`
  text-align: center;
`

export const Footer = () => (
  <StyledFooter>
    Show 👀 => <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </StyledFooter>
)
