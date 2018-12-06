import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../styles/variables'

interface IProps {
  children: React.ReactNode
  type: string
  onClick?: (e: React.MouseEvent) => void
  async?: boolean
}

const StyledButton = styled.button<IProps>`
  font-size: ${({ theme }) => theme.font.size.normal};
  font-family: ${({ theme }) => theme.font.family.en};
  background-color: ${props => (props.async ? color.subAccent : color.accent)};
  color: white;
  -webkit-appearance: none;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
`

export const Button: React.SFC<IProps> = props => (
  <StyledButton onClick={props.onClick} {...props} type={props.type}>
    {props.children}
  </StyledButton>
)
