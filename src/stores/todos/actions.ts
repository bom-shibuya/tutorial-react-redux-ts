// action types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// action creators
export interface IAddTodo {
  type: typeof ADD_TODO;
  text: string;
}

export const addTodo = (text: IAddTodo['text']): IAddTodo =>({
  text,
  type: ADD_TODO,
})

export interface IToggleTodo {
  type: typeof TOGGLE_TODO;
  index: number
}

export const toggleTodo = (index: IToggleTodo['index']): IToggleTodo =>({
  index,
  type: TOGGLE_TODO,
})

export interface IVisibilityFilters {
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}

export const VisibilityFilters: IVisibilityFilters = {
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}


export interface ISetVisibilityFilter {
  filter: keyof IVisibilityFilters;
  type: typeof SET_VISIBILITY_FILTER;
}

export const setVisibilityFilter = (filter: ISetVisibilityFilter['filter']): ISetVisibilityFilter => ({
  filter,
  type: SET_VISIBILITY_FILTER,
})

export type Action = ISetVisibilityFilter | IAddTodo | IToggleTodo;