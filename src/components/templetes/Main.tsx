import * as React from 'react'
import styled from 'styled-components'
import { Footer, Header } from '../organisms/'

const App = styled.div``

export const Main: React.SFC = ({ children }) => (
  <App>
    <Header />
    {children}
    <Footer />
  </App>
)
