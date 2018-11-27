import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import { ADD_TODO } from '../stores/todos'
import AddTodo, { IProps } from './AddTodo'

describe('AddTodo container test', () => {
  let wrapper: ShallowWrapper<IProps>
  let store: MockStoreEnhanced
  const initialState = {
    todos: []
  }

  beforeEach(() => {
    const mockStore = configureStore()
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
