import * as React from 'react'
import styled from 'styled-components'
import './App.css'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import Todos from './containers/Todos'

import logo from './logo.svg'

const AppWrapper = styled.div`
  text-align: center;
  background-color: red;
`

class App extends React.Component {
  public render() {
    return (
      <AppWrapper>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <AddTodo />
          <Todos />
          <Footer />
        </div>
      </AppWrapper>
    )
  }
}

export default App
