import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ADD_TODO } from '../stores/todos'
import { AddTodo, IProps } from './AddTodo'

describe('AddTodo container test', () => {
  let wrapper: ShallowWrapper<IProps>
  let store: MockStoreEnhanced
  const initialState = {
    todos: []
  }

  beforeEach(() => {
    const mockStore = configureStore([thunk])
    store = mockStore(initialState)
    store.dispatch = jest.fn()
    wrapper = shallow(<AddTodo store={store} />)
  })

  test('Should dispatch addTodo action.', () => {
    const text = 'test'
    wrapper.props().onSubmit(text)
    expect(store.dispatch).toHaveBeenCalledWith({
      text,
      type: ADD_TODO
    })
  })
})

describe('AddTodo container async test', () => {
  let wrapper: ShallowWrapper<IProps>
  let store: MockStoreEnhanced
  const initialState = {
    todos: []
  }
  beforeEach(() => {
    const mockStore = configureStore([thunk])
    store = mockStore(initialState)
    wrapper = shallow(<AddTodo store={store} />)
  })

  test('Should asyncAddTodo action dispatch addTodoAction.', async () => {
    const text = 'test'
    await wrapper.props().onAsyncSubmit(text)
    expect(store.getActions()).toMatchObject([
      {
        text,
        type: ADD_TODO
      }
    ])
  })
})
