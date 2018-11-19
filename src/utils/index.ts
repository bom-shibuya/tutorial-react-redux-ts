// https://qiita.com/coa00/items/679b0b5c7c468698d53f コメント欄
export const getUID = (length = 32) => {
  return Array(length)
    .fill('')
    .map((_: string, i) => {
      const random = (Math.random() * 16) | 0
      return (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16)
    })
    .join('')
}
