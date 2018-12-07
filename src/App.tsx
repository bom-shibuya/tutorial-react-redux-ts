import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import * as WebFont from 'webfontloader'
import { Router } from './components/routers'
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
      <Router />
      <GlobalStyles />
    </React.Fragment>
  </ThemeProvider>
)

export default App
