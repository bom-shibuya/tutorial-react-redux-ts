import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import AddTodoForm from '../components/AddTodoForm'
import { addTodo } from '../stores/todos'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSubmit(value: string) {
    dispatch(addTodo(value))
  }
})

const AddTodo = connect(
  null,
  mapDispatchToProps
)(AddTodoForm)

export default AddTodo
