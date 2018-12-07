import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import * as actions from '.'

describe('Counter actions test', () => {
  test('shuld create an action to plus number', () => {
    const num = 2
    const expectedAction = {
      num,
      type: actions.PLUS_NUMBER
    }

    expect(actions.plusNumber(num)).toMatchObject(expectedAction)
  })
  test('shuld create an action to minus number', () => {
    const num = 2
    const expectedAction = {
      num,
      type: actions.MINUS_NUMBER
    }

    expect(actions.minusNumber(num)).toMatchObject(expectedAction)
  })
})

describe('Counter async actions test', () => {
  let store: MockStoreEnhanced<{}>
  beforeEach(() => {
    const mockStore = configureStore([thunk])
    store = mockStore()
  })
  test('Shold dispatch plusNumber', async () => {
    const num = 2
    const dispatch = store.dispatch as ThunkDispatch<
      {},
      undefined,
      actions.Action
    >

    await dispatch(actions.asyncPlusNumber(num))
    expect(store.getActions()).toMatchObject([
      {
        num,
        type: actions.PLUS_NUMBER
      }
    ])
  })
})
