import * as React from 'react'
import styled from 'styled-components'
import { ITodo } from '../../stores/todos'
// import { mq } from '../../styles'

interface IProps {
  todo: ITodo
  onClick: (i: number) => void
  i: number
}

const StyledTodoItem = styled.li`
  line-height: 1.75;
  padding: 1rem 1.6rem;
  border-bottom: 1px dashed #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Text = styled.span<{ complete: boolean }>`
  width: 92%;
  text-decoration: ${({ complete }) => (complete ? 'line-through' : '')};
`

const Input = styled.input`
  margin-left: auto;
`

export const TodoItem = ({ todo, onClick, i }: IProps) => {
  const handleClick = () => onClick(i)
  return (
    <StyledTodoItem>
      <Text complete={todo.complete}>{todo.text}</Text>
      <Input
        type="checkbox"
        defaultChecked={todo.complete}
        onClick={handleClick}
      />
    </StyledTodoItem>
  )
}
