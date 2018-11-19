import * as React from 'react'
import { ITodo } from '../stores/todos'
import TodoItem from './TodoItem'

export interface IProps {
  onClick: (i: number) => void
  todos: ITodo[]
}

const TodoList = ({ todos, onClick }: IProps) => (
  <ul>
    {todos.map((todo, i) => (
      <TodoItem key={todo.id} i={i} todo={todo} onClick={onClick} />
    ))}
  </ul>
)

export default TodoList
