import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AddTodoForm } from '../components/molecules'
import { IStore } from '../stores'
import { Action, addTodo, asyncAddTodo } from '../stores/todos'

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, undefined, Action>
) => ({
  onSubmit(value: string) {
    dispatch(addTodo(value))
  },
  async onAsyncSubmit(value: string) {
    await dispatch(asyncAddTodo(value))
  }
})

export interface IProps {
  onSubmit: (value: string) => void
  onAsyncSubmit: (value: string) => void
}

interface IOwnProps {
  store?: unknown
}

export const AddTodo = connect<{}, IProps, IOwnProps>(
  null,
  mapDispatchToProps
)(AddTodoForm)
