import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from '../../logo.svg'
import { mq } from '../../styles'

const LogoAnimation = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

const Logo = styled.img`
  animation: ${LogoAnimation} 10s linear infinite;
  ${mq.max()`
    width: 16rem;
  `} ${mq.min()`
    width: 24rem;
  `};
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.head};
  font-family: ${({ theme }) => theme.font.family.en};
  font-weight: ${({ theme }) => theme.font.weight.black};
`

const Intro = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.en};
  margin-top: 1rem;
`

const HeaderEl = styled.header`
  text-align: center;
  ${mq.max()`
    padding: 1.6rem;
  `}
  ${mq.min()`
    padding: 4rem 2.4rem 2.4rem;
  `}
`

export const Header = () => (
  <HeaderEl>
    <Logo src={logo} alt="logo" />
    <Title>Welcome to React</Title>
    <Intro>
      To get started, edit <code>src/App.tsx</code> and save to reload.
    </Intro>
  </HeaderEl>
)
