import * as React from 'react'
import { ITodo } from '../../stores/todos'
import { TodoItem } from '../atoms/'

import styled from 'styled-components'

interface IProps {
  onClick: (i: number) => void
  todos: ITodo[]
}

const List = styled.ul``

const Text = styled.p`
  text-align: center;
`

export const TodoList = ({ todos, onClick }: IProps) => {
  if (!todos.length) {
    return <Text>Nothing todos....</Text>
  }

  return (
    <List>
      {todos.map((todo, i) => (
        <TodoItem key={todo.id} i={i} todo={todo} onClick={onClick} />
      ))}
    </List>
  )
}
