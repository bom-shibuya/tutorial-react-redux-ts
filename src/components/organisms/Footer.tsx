import * as React from 'react'
import { FilterLink } from '../../containers'
import { VisibilityFilters } from '../../stores/visibilityFilter'

export const Footer = () => (
  <footer>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </footer>
)
