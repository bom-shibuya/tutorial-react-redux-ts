const font = {
  color: {
    base: '#666'
  },
  family: {
    base: "'Noto Sans JP', sans-serif",
    en: "'Roboto', sans-serif"
  },
  size: {
    head: '4rem',
    normal: '1.6rem',
    subhead: '2.4rem'
  },
  weight: {
    black: '900',
    bold: '700',
    normal: '400'
  }
}

const bg = {
  base: '#fff'
}

export const theme = {
  bg,
  font
}

export type Theme = typeof theme
