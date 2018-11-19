import { 
  Action,
  ADD_TODO,
  IVisibilityFilters,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  VisibilityFilters,
 } from './actions';

import { combineReducers } from 'redux';

export interface ITodo {
  text: string;
  complete: boolean;
}

export interface IState {
  visibilityFilter: keyof IVisibilityFilters;
  todos: ITodo[];
}

// const initialState: IState = {
//   todos: [],
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
// }

export const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: Action): keyof IVisibilityFilters => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER: 
      return action.filter
    default: 
      return state
  }
}

export const todos = (state: ITodo[] = [], action: Action): ITodo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          complete: false,
          text: action.text,
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, i) => {
        if (i === action.index) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    default:
      return state
  }
}

const todoApps = combineReducers({
  todos,
  visibilityFilter,
})

export default todoApps
