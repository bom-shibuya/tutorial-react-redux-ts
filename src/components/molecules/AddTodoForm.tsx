import * as React from 'react'
import styled from 'styled-components'
import { mq } from '../../styles'
import { Button } from '../atoms'

interface IProps {
  onSubmit: (value: string) => void
  onAsyncSubmit: (value: string) => void
}

type valueof<T> = T[keyof T]

const Form = styled.form`
  ${mq.min()`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

const TodoInput = styled.input`
  border: 1px solid #ccc;
  font-size: ${({ theme }) => theme.font.size.normal};
  border-radius: 0.3rem;
  padding: 0.6rem 1rem;
  ${mq.max()`
    display: block;
    width: 100%;
  `} ${mq.min()`
    width: 32rem;
  `};
`

const ButtonList = styled.ul`
  display: flex;
  ${mq.max()`
    margin-top: .6rem
    justify-content: flex-end
  `}
  ${mq.min()`
    margin-left: 1rem
  `}
  li {
    &:not(:last-child) {
      margin-right: 0.4rem;
    }
  }
`

export const AddTodoForm: React.SFC<IProps> = ({ onSubmit, onAsyncSubmit }) => {
  let input: HTMLInputElement | null

  const submitValue = (
    e: React.MouseEvent,
    submitFunction: valueof<IProps>
  ) => {
    e.preventDefault()
    if (!input || !input.value) {
      return
    }
    submitFunction(input.value)
    input.value = ''
  }

  const handleSubmit = (e: React.MouseEvent) => {
    submitValue(e, onSubmit)
  }

  const handleAsyncSubmit = (e: React.MouseEvent) => {
    submitValue(e, onAsyncSubmit)
  }

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <div>
      <Form onSubmit={handleForm}>
        <TodoInput type="text" ref={node => (input = node)} />
        <ButtonList>
          <li>
            <Button type={'button'} onClick={handleSubmit}>
              Add
            </Button>
          </li>
          <li>
            <Button async={true} type={'button'} onClick={handleAsyncSubmit}>
              Async Add.
            </Button>
          </li>
        </ButtonList>
      </Form>
    </div>
  )
}
