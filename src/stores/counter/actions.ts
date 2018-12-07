import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IStore } from '../'

export const PLUS_NUMBER = 'PLUS_NUMBER'
export const MINUS_NUMBER = 'MINUS_NUMBER'
export const ASYNC_PLUS_NUMBER = 'ASYNC_PLUS_NUMBER'

export const plusNumber = (num: number) => ({
  num,
  type: PLUS_NUMBER as typeof PLUS_NUMBER
})

export const minusNumber = (num: number) => ({
  num,
  type: MINUS_NUMBER as typeof MINUS_NUMBER
})

export type Action =
  | ReturnType<typeof plusNumber>
  | ReturnType<typeof minusNumber>

export const asyncPlusNumber: ActionCreator<
  ThunkAction<void, IStore, undefined, Action>
> = (num: number) => dispatch =>
  new Promise(resolve => {
    setTimeout(() => {
      dispatch(plusNumber(num))
      resolve()
    }, 1000)
  })
