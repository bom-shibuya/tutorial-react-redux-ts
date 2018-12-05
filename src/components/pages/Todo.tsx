import * as React from 'react'
import { AddTodo, Todos } from '../../containers'
import { Footer } from '../organisms'
import { Main } from '../templetes'

export const Todo: React.SFC = () => (
  <Main>
    <AddTodo />
    <Todos />
    <Footer />
  </Main>
)
