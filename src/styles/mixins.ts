import { css } from 'styled-components'
import { device } from './variables'

export const mq = {
  base(range: string, args: TemplateStringsArray) {
    return css`
      @media ${range} {
        ${css(args)};
      }
    `
  },
  min(size = device.tablet) {
    return (args: TemplateStringsArray) =>
      this.base(`(min-width: ${size})`, args)
  },
  max(size = device.sp) {
    return (args: TemplateStringsArray) =>
      this.base(`(max-width: ${size})`, args)
  },
  between(minSize = device.tablet, maxSize = device.tabletMax) {
    return (args: TemplateStringsArray) =>
      this.base(`(min-width: ${minSize}) and (max-width: ${maxSize})`, args)
  }
}
