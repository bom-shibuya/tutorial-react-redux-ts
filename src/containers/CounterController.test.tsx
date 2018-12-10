import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ICounterFormProps } from '../components/molecules'
import { MINUS_NUMBER, PLUS_NUMBER } from '../stores/counter'
import { CounterController } from './CounterController'

describe('Counter container test', () => {
  let wrapper: ShallowWrapper<ICounterFormProps>
  let store: MockStoreEnhanced

  const initialStore = {
    counter: 0
  }

  beforeEach(() => {
    const mockStore = configureStore([thunk])
    store = mockStore(initialStore)
    store.dispatch = jest.fn()
    wrapper = shallow(<CounterController store={store} />)
  })

  test('plusNumberを呼ぶとplusNumberがdispatchされる', () => {
    const num = 10
    wrapper.props().plusNumber(num)
    expect(store.dispatch).toHaveBeenCalledWith({
      num,
      type: PLUS_NUMBER
    })
  })

  test('minusNumberを呼ぶとminusNumberがdispatchされる', () => {
    const num = 10
    wrapper.props().minusNumber(num)
    expect(store.dispatch).toHaveBeenCalledWith({
      num,
      type: MINUS_NUMBER
    })
  })
})

describe('Counter container async test', () => {
  let wrapper: ShallowWrapper<ICounterFormProps>
  let store: MockStoreEnhanced

  const initialStore = {
    counter: 0
  }

  beforeEach(() => {
    const mockStore = configureStore([thunk])
    store = mockStore(initialStore)
    wrapper = shallow(<CounterController store={store} />)
  })

  test('asyncPlusNumberを呼ぶとplusNumberがdispatchされる', async () => {
    const num = 10
    await wrapper.props().asyncPlusNumber(num)
    expect(store.getActions()).toMatchObject([
      {
        num,
        type: PLUS_NUMBER
      }
    ])
  })
})
