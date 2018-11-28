import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import AddTodoForm from '../components/AddTodoForm'
import { IStore } from '../stores'
import { Action, addTodo, asyncAddTodo } from '../stores/todos'

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, undefined, Action>
) => ({
  onSubmit(value: string) {
    dispatch(addTodo(value))
  },
  onAsyncSubmit(value: string) {
    dispatch(asyncAddTodo(value))
  }
})

export interface IProps {
  onSubmit: (value: string) => void
  onAsyncSubmit: (value: string) => void
}

interface IOwnProps {
  store?: unknown
}

const AddTodo = connect<{}, IProps, IOwnProps>(
  null,
  mapDispatchToProps
)(AddTodoForm)

export default AddTodo
