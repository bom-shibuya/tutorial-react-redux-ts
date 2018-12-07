import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { counter } from './counter'
import { ITodo, todos } from './todos'
import { IVisibilityFilters, visibilityFilter } from './visibilityFilter'

export interface IStore {
  todos: ITodo[]
  visibilityFilter: keyof IVisibilityFilters
  counter: number
}

const apps = combineReducers({
  counter,
  todos,
  visibilityFilter
})

const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(apps, composeEnhancer(applyMiddleware(thunk)))

export default store
