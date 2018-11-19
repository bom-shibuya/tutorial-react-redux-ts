import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { IState } from 'src/stores'
import Link from '../components/Link'
import {
  IVisibilityFilters,
  setVisibilityFilter
} from '../stores/visibilityFilter'

interface IOwnProps {
  filter: keyof IVisibilityFilters
}

const mapStateToProps = (state: IState, ownProps: IOwnProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
