import { Action, MINUS_NUMBER, PLUS_NUMBER } from './actions'

const initialState = 0

export const counter = (state = initialState, action: Action) => {
  switch (action.type) {
    case PLUS_NUMBER:
      return state + action.num
    case MINUS_NUMBER:
      return state - action.num
    default:
      return state
  }
}
