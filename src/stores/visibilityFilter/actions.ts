export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const SHOW_ACTIVE = 'SHOW_ACTIVE'
const SHOW_ALL = 'SHOW_ALL'
const SHOW_COMPLETED = 'SHOW_COMPLETED'

export interface IVisibilityFilters {
  SHOW_ACTIVE: typeof SHOW_ACTIVE
  SHOW_ALL: typeof SHOW_ALL
  SHOW_COMPLETED: typeof SHOW_COMPLETED
}

export const VisibilityFilters: IVisibilityFilters = {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED
}

export const setVisibilityFilter = (filter: keyof IVisibilityFilters) => ({
  filter,
  type: SET_VISIBILITY_FILTER
})

export type Action = ReturnType<typeof setVisibilityFilter>
