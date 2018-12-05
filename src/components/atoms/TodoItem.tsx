import * as React from 'react'
import styled from 'styled-components'
import { ITodo } from '../../stores/todos'
import { mq } from '../../styles'

interface IProps {
  todo: ITodo
  onClick: (i: number) => void
  i: number
}

const StyledTodoItem = styled.li`
  color: palevioletred;
  font-size: 1.6rem;
  line-height: 1.75;
  background-color: ${(props: { i: number }) => props.i % 2 && 'blue'}
  ${mq.max()`
    padding: 10px;
  `}
  ${mq.between()`
    padding: 30px;
  `}
  ${mq.min()`
    padding: 50px;
  `}

  &:hover {
    font-size: 2rem;
  }
`

export const TodoItem = ({ todo, onClick, i }: IProps) => {
  const handleClick = () => onClick(i)
  return (
    <StyledTodoItem i={i}>
      {todo.text}
      <input
        type="checkbox"
        defaultChecked={todo.complete}
        onClick={handleClick}
      />
    </StyledTodoItem>
  )
}
