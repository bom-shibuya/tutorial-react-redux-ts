import * as React from 'react'
import styled, { css } from 'styled-components'
import { ITodo } from '../stores/todos'

export interface IProps {
  todo: ITodo
  onClick: (i: number) => void
  i: number
}

const mq = {
  base(range: string, args: TemplateStringsArray) {
    return css`
      @media ${range} {
        ${css(args)};
      }
    `
  },
  min(size: string) {
    return (args: TemplateStringsArray) =>
      this.base(`(min-width: ${size})`, args)
  },
  max(size: string) {
    return (args: TemplateStringsArray) =>
      this.base(`(max-width: ${size})`, args)
  },
  between(minSize: string, maxSize: string) {
    return (args: TemplateStringsArray) =>
      this.base(`(min-width: ${minSize}) and (max-width: ${maxSize})`, args)
  }
}

const StyledTodoItem = styled.li`
  color: palevioletred;
  font-size: 1.6rem;
  line-height: 1.75;
  background-color: ${(props: { i: number }) => props.i % 2 && 'blue'}
  ${mq.max('767px')`
    padding: 10px;
  `}
  ${mq.between('768px', '1024px')`
    padding: 30px;
  `}
  ${mq.min('1025px')`
    padding: 50px;
  `}

  &:hover {
    font-size: 2rem;
  }
`

const TodoItem = ({ todo, onClick, i }: IProps) => {
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

export default TodoItem
