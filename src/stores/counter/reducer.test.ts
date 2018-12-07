import * as snapshotDiff from 'snapshot-diff'
import { counter, initialState, minusNumber, plusNumber } from '.'

describe('Counter reducer test', () => {
  test('shold return initial state', () => {
    expect(counter(initialState, {})).toBe(initialState)
  })

  test('shold return plus state', () => {
    expect(counter(10, plusNumber(5))).toBe(15)
  })

  test('shold return minus state', () => {
    expect(counter(10, minusNumber(5))).toBe(5)
  })
})

describe('Counter reducer snapshot', () => {
  test('shold return initial state', () => {
    expect(
      snapshotDiff(initialState, counter(initialState, {}))
    ).toMatchSnapshot()
  })
  test('shold return plus state', () => {
    expect(snapshotDiff(15, counter(10, plusNumber(5)))).toMatchSnapshot()
  })
  test('shold return minus state', () => {
    expect(
      snapshotDiff(5, counter(initialState, minusNumber(5)))
    ).toMatchSnapshot()
  })
})
