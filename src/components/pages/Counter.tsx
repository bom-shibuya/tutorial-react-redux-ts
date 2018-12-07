import * as React from 'react'
import { CounterController, NumDisplay } from '../../containers'
import { Main } from '../templetes'

export const Counter = () => (
  <Main>
    <NumDisplay />
    <CounterController />
  </Main>
)
