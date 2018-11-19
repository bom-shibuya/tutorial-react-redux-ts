import * as React from 'react';
import { ITodo } from '../stores/todos/reducer'
import TodoItem from './TodoItem'

export interface IProps {
  onClick: () => void;
  todos: ITodo[];
}

const TodoList = ({ todos, onClick }: IProps) => (
  <ul>
    {
      todos.map((todo, i) => 
        <TodoItem key={i} todo={todo} onClick={onClick} />
      )
    }
  </ul>
)

export default TodoList
