import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import * as WebFont from 'webfontloader'
import { Todo } from './components/pages'
import { GlobalStyles, theme } from './styles/'

const webFontConfig = {
  google: {
    families: ['Noto Sans JP', 'Roboto']
  }
}

WebFont.load(webFontConfig)

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Todo />
      <GlobalStyles />
    </React.Fragment>
  </ThemeProvider>
)

export default App
