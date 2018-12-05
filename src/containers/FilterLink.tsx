import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { IStore } from 'src/stores'
import { Link } from '../components/atoms'
import {
  IVisibilityFilters,
  setVisibilityFilter
} from '../stores/visibilityFilter'

export interface IProps {
  active: keyof IVisibilityFilters
  onClick: () => void
}
interface IOwnProps {
  filter: keyof IVisibilityFilters
  store?: unknown
}

const mapStateToProps = (state: IStore, ownProps: IOwnProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
