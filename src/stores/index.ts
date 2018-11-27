import { combineReducers, createStore } from 'redux'
import { ITodo, todos } from './todos'
import { IVisibilityFilters, visibilityFilter } from './visibilityFilter'

export interface IStore {
  todos: ITodo[]
  visibilityFilter: keyof IVisibilityFilters
}

const todoApps = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(todoApps)

export default store
