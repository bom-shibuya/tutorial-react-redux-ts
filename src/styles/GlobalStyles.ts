import {
  createGlobalStyle,
  GlobalStyleComponent,
  ThemeProps
} from 'styled-components'
import reset from 'styled-reset'
import { Theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a {
    color: inherit
  }
  html {
    font-size: 62.5%;
  }
  body {
    color: ${props => props.theme.font.color.base};
    font-family: ${({ theme }) => theme.font.family.base};
    font-size: ${({ theme }) => theme.font.size.normal};
    background-color: ${({ theme }) => theme.bg.base}
  }
` as GlobalStyleComponent<ThemeProps<Theme>, Theme>
