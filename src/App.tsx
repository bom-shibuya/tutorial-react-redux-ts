import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import * as WebFont from 'webfontloader'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import Todos from './containers/Todos'
import { GlobalStyles, theme } from './styles/'

import logo from './logo.svg'

const webFontConfig = {
  google: {
    families: ['Noto Sans JP', 'Roboto']
  }
}

WebFont.load(webFontConfig)

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
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
      <GlobalStyles />
    </React.Fragment>
  </ThemeProvider>
)

export default App
