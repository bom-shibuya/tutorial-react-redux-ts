import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import { ITodo, TOGGLE_TODO } from '../stores/todos'
import Todos, { IProps } from './Todos'

describe('Todos test', () => {
  const mockStore = configureStore()
  const textTodo: ITodo = {
    complete: false,
    id: '123456',
    text: 'test value.'
  }
  const initialState = {
    todos: [textTodo]
  }

  let wrapper: ShallowWrapper<IProps>
  let store: MockStoreEnhanced

  beforeEach(() => {
    store = mockStore(initialState)
    store.dispatch = jest.fn()
    wrapper = shallow(<Todos store={store} />)
  })

  test('Should map state to props.', () => {
    expect(wrapper.props().todos[0]).toMatchObject(textTodo)
  })

  test('Should map dispatch to props', () => {
    wrapper.props().onClick(0)
    expect(store.dispatch).toHaveBeenCalledWith({
      index: 0,
      type: TOGGLE_TODO
    })
  })
})
