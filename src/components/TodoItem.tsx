import * as React from 'react'
import { ITodo } from '../stores/todos'

export interface IProps {
  todo: ITodo
  onClick: (i: number) => void
  i: number
}

const TodoItem = ({ todo, onClick, i }: IProps) => {
  const handleClick = () => onClick(i)
  return (
    <li>
      {todo.text}
      <input
        type="checkbox"
        defaultChecked={todo.complete}
        onClick={handleClick}
      />
    </li>
  )
}

export default TodoItem
