import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ITodo, toggleTodo } from 'src/stores/todos'
import {
  IVisibilityFilters,
  VisibilityFilters
} from 'src/stores/visibilityFilter'
import TodoList from '../components/TodoList'
import { IState } from '../stores'

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

const mapStateToProps = (state: IState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick(id: number) {
    dispatch(toggleTodo(id))
  }
})

const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default Todos
