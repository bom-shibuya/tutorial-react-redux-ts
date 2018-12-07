import * as React from 'react'
import styled from 'styled-components'

const StyledNum = styled.div`
  text-align: center;
  font-size: 4.6rem;
  font-weight: ${({ theme }) => theme.font.weight.black};
`

export const Num: React.SFC<{ counter: number }> = ({ counter }) => (
  <StyledNum>{counter}</StyledNum>
)
