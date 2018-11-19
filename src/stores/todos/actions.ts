// action types
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// action creators
export interface IAddTodo {
  type: typeof ADD_TODO
  text: string
}

export const addTodo = (text: IAddTodo['text']): IAddTodo => ({
  text,
  type: ADD_TODO
})

export interface IToggleTodo {
  type: typeof TOGGLE_TODO
  index: number
}

export const toggleTodo = (index: IToggleTodo['index']): IToggleTodo => ({
  index,
  type: TOGGLE_TODO
})

export type Action = IAddTodo | IToggleTodo
