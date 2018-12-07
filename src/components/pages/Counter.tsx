import * as React from 'react'
import styled from 'styled-components'
import { CounterController, NumDisplay } from '../../containers'
import { mq } from '../../styles'
import { Main } from '../templetes'

const Wrapper = styled.div`
  ${mq.max()`
    padding: 3.2rem 0
  `}
  ${mq.min()`
    padding: 3.2rem 0
  `}
`
const FormWrapper = styled.div`
  width: 90%;
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 4rem;
`

export const Counter = () => (
  <Main>
    <Wrapper>
      <NumDisplay />
      <FormWrapper>
        <CounterController />
      </FormWrapper>
    </Wrapper>
  </Main>
)
