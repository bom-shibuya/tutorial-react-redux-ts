import * as React from 'react'
import styled from 'styled-components'
import { Main } from '../templetes'

const StyledHome = styled.div`
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.black};
  font-size: ${({ theme }) => theme.font.size.subhead};
`

export const Home = () => (
  <Main>
    <StyledHome>HALLO REACT</StyledHome>
  </Main>
)
