import * as React from 'react'
import { ITodo } from '../stores/todos/reducer'

export interface IProps {
  todo: ITodo;
  onClick: () => void
}

const TodoItem = ({ todo, onClick }: IProps) => (
  <li>
    { todo.text }
    <input
      type="checkbox"
      checked={ todo.complete }
      onClick={ onClick }/>
  </li>
)

export default TodoItem