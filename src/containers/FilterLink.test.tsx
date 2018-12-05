import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import configureStore, { MockStoreEnhanced } from 'redux-mock-store'
import {
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../stores/visibilityFilter'
import { FilterLink, IProps } from './FilterLink'

describe('FilterLink container test', () => {
  let wrapper: ShallowWrapper<IProps>
  let store: MockStoreEnhanced
  const inititialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL
  }

  beforeEach(() => {
    const mockStore = configureStore()
    store = mockStore(inititialState)
    store.dispatch = jest.fn()
    wrapper = shallow(
      <FilterLink store={store} filter={VisibilityFilters.SHOW_ALL}>
        ALL
      </FilterLink>
    )
  })

  test('Should map state to props', () => {
    expect(wrapper.props().active).toEqual(true)
  })

  test('Should map dispatch to props', () => {
    wrapper.props().onClick()
    expect(store.dispatch).toHaveBeenCalledWith({
      filter: VisibilityFilters.SHOW_ALL,
      type: SET_VISIBILITY_FILTER
    })
  })
})
