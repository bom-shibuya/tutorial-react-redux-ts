import * as actions from '.'

describe('VisibilityFilter actions test', () => {
  test('should create an action to switch visibility filter.', () => {
    const filter = actions.VisibilityFilters.SHOW_ACTIVE
    const expectAction = {
      filter,
      type: actions.SET_VISIBILITY_FILTER
    }
    expect(actions.setVisibilityFilter(filter)).toEqual(expectAction)
  })
})
