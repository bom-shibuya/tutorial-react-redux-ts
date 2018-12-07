import * as React from 'react'
import { valueof } from '../../types'
import { Button } from '../atoms'

// import styled from 'styled-components'

export interface ICounterFormProps {
  plusNumber: (num: number) => void
  minusNumber: (num: number) => void
  asyncPlusNumber: (num: number) => void
}

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
    <form onSubmit={handleSubmit}>
      <input
        ref={el => {
          input = el
        }}
        type="number"
      />
      <Button type={'button'} onClick={handlePlusBtn}>
        +
      </Button>
      <Button type={'button'} onClick={handleMinusBtn}>
        -
      </Button>
      <Button type={'button'} onClick={handleAsyncPlusBtn} async={true}>
        Async +
      </Button>
    </form>
  )
}
