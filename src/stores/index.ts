import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
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

const store = createStore(todoApps, applyMiddleware(thunk))

export default store
