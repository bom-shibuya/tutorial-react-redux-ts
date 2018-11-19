import { Action, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'

export const visibilityFilter = (
  state = VisibilityFilters.SHOW_ALL,
  action: Action
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
