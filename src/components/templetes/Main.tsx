import * as React from 'react'
import { Header } from '../organisms/'
export const Main: React.SFC = ({ children }) => (
  <div className="App">
    <Header />
    <p className="App-intro">
      To get started, edit <code>src/App.tsx</code> and save to reload.
    </p>
    {children}
  </div>
)
