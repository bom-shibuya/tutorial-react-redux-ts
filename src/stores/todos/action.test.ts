import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import * as actions from '.'

describe('Todos actions test', () => {
  test('should create an action to add a todo', () => {
    const text = "Rock'n ROLL"
    const expectAction = {
      text,
      type: actions.ADD_TODO
    }
    expect(actions.addTodo(text)).toEqual(expectAction)
  })

  test('should create an action to toggle a todo', () => {
    const index = 2
    const expectAction = {
      index,
      type: actions.TOGGLE_TODO
    }
    expect(actions.toggleTodo(index)).toEqual(expectAction)
  })
})

describe('Todo async action test', () => {
  let store: MockStoreEnhanced<{}>
  beforeEach(() => {
    const mockStore = configureStore([thunk])
    store = mockStore({})
  })

  test('Should dispatch addTodo', async () => {
    const text = 'test'
    const dispatch = store.dispatch as ThunkDispatch<
      {},
      undefined,
      actions.Action
    >
    await dispatch(actions.asyncAddTodo(text))
    expect(store.getActions()).toMatchObject([
      {
        text,
        type: actions.ADD_TODO
      }
    ])
  })
})
