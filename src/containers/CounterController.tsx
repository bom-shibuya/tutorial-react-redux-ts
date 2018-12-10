import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { CounterForm, ICounterFormProps } from '../components/molecules'
import { IStore } from '../stores'
import {
  Action,
  asyncPlusNumber,
  minusNumber,
  plusNumber
} from '../stores/counter'

const mapDispatchProps = (
  dispatch: ThunkDispatch<IStore, undefined, Action>
) => ({
  plusNumber(num: number) {
    dispatch(plusNumber(num))
  },
  minusNumber(num: number) {
    dispatch(minusNumber(num))
  },
  async asyncPlusNumber(num: number) {
    await dispatch(asyncPlusNumber(num))
  }
})

interface IOwnProps {
  store?: unknown
}

export const CounterController = connect<{}, ICounterFormProps, IOwnProps>(
  null,
  mapDispatchProps
)(CounterForm)
