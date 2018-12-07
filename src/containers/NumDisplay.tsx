import { connect } from 'react-redux'
import { Num } from '../components/atoms'
import { IStore } from '../stores'

const mapStateToProps = (state: IStore, {  }: { store?: unknown }) => ({
  counter: state.counter
})

export const NumDisplay = connect(mapStateToProps)(Num)
