import * as React from 'react'
import styled from 'styled-components'
import { AddTodo, Todos } from '../../containers'
import { mq } from '../../styles'
import { TodoFooter } from '../organisms'
import { Main } from '../templetes'

const Wrapper = styled.div`
  ${mq.max()`
    padding: 3.2rem 0
  `}
  ${mq.min()`
    padding: 3.2rem 0
  `}
`

const TodoWrapper = styled.div`
  ${mq.max()`
    padding: 3.2rem 0
  `}
  ${mq.min()`
    padding: 3.2rem 0
  `}
`

const ContentWrapper = styled.main`
  width: 90%;
  max-width: 70rem;
  margin: 0 auto;
  padding-bottom: 6rem;
`

export const Todo: React.SFC = () => (
  <Main>
    <Wrapper>
      <ContentWrapper>
        <AddTodo />
        <TodoWrapper>
          <Todos />
        </TodoWrapper>
      </ContentWrapper>
      <TodoFooter />
    </Wrapper>
  </Main>
)
