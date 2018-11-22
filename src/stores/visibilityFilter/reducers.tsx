import { Action, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'

export const initialState = VisibilityFilters.SHOW_ALL

export const visibilityFilter = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
