import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import TodoList from '../components/TodoList'
import { IStore } from '../stores'
import { ITodo, toggleTodo } from '../stores/todos'
import {
  IVisibilityFilters,
  VisibilityFilters
} from '../stores/visibilityFilter'

const getVisibleTodos = (todos: ITodo[], filter: keyof IVisibilityFilters) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.complete)
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.complete)
    default:
      return todos
  }
}

interface IOwnProps {
  store?: unknown
}

const mapStateToProps = (state: IStore, {  }: IOwnProps) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick(index: number) {
    dispatch(toggleTodo(index))
  }
})

export interface IProps {
  todos: ITodo[]
  onClick: (index: number) => void
}

const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default Todos
