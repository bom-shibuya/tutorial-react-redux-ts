import * as React from 'react'
import styled from 'styled-components'
import { mq } from '../../styles'
import { valueof } from '../../types'
import { Button } from '../atoms'

export interface ICounterFormProps {
  plusNumber: (num: number) => void
  minusNumber: (num: number) => void
  asyncPlusNumber: (num: number) => void
}

const Form = styled.form`
  ${mq.min()`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

const NumInput = styled.input`
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

export const CounterForm: React.SFC<ICounterFormProps> = ({
  plusNumber,
  minusNumber,
  asyncPlusNumber
}) => {
  let input: HTMLInputElement | null

  const handleMethod = (fn: valueof<ICounterFormProps>) => {
    if (input && input.value !== '') {
      fn(+input.value)
      input.value = ''
    }
  }

  const handlePlusBtn = (e: React.MouseEvent) => {
    e.preventDefault()
    handleMethod(plusNumber)
  }

  const handleMinusBtn = (e: React.MouseEvent) => {
    e.preventDefault()
    handleMethod(minusNumber)
  }

  const handleAsyncPlusBtn = (e: React.MouseEvent) => {
    e.preventDefault()
    handleMethod(asyncPlusNumber)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleMethod(plusNumber)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <NumInput
        ref={el => {
          input = el
        }}
        type="number"
      />
      <ButtonList>
        <li>
          <Button type={'button'} onClick={handlePlusBtn}>
            +
          </Button>
        </li>
        <li>
          <Button type={'button'} onClick={handleMinusBtn}>
            -
          </Button>
        </li>
        <li>
          <Button type={'button'} onClick={handleAsyncPlusBtn} async={true}>
            Async +
          </Button>
        </li>
      </ButtonList>
    </Form>
  )
}
