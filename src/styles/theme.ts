import { color } from './variables'

const font = {
  color: {
    base: color.black
  },
  family: {
    base: "'Noto Sans JP', sans-serif",
    en: "'Roboto', sans-serif"
  },
  size: {
    head: '4rem',
    normal: '1.4rem',
    subhead: '2.4rem'
  },
  weight: {
    black: '900',
    bold: '700',
    normal: '400'
  }
}

const bg = {
  base: color.white
}

export const theme = {
  bg,
  font
}

export type Theme = typeof theme
